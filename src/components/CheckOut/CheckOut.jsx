import { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const CheckOut = ({ paymentInfo }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const price = paymentInfo?.rent;
  useEffect(() => {
    price > 0 &&
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data?.clientSecret);
      });
  }, [axiosSecure, price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setError("");
    }
    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        const payment = {
          email: user?.email,
          price: price,
          date: new Date(),
          transactionId: paymentIntent.id,
          agreementId: paymentInfo.agreementId,
          month_of_rent: paymentInfo.month,
        };
        console.log(payment);
      }
    }
  };

  return (
    <div>
      <h1 className="text-lg font-medium text-center leading-6 text-gray-900">
        Payment
      </h1>
      <div>
        <div className="my-4">
          <label className="text-gray-500  font-semibold">Coupon</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="coupon"
            className="w-full p-2 my-3 border border-gray-300  rounded-lg focus:outline-none"
          />
          <button className="bg-rose-400 rounded-lg p-1">Apply</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="w-full disabled:text-red-500 bg-purple-400 mt-4 rounded-lg p-1"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600 ">{error}</p>
        {transactionId && (
          <p className="text-green-600">Your transaction id {transactionId}</p>
        )}
      </form>
    </div>
  );
};
CheckOut.propTypes = {
  paymentInfo: PropTypes.object,
};

export default CheckOut;
