import { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";

const CheckOut = ({ paymentInfo }) => {
  const axiosSecure = useAxiosSecure();
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(paymentInfo.rent);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    price > 0 &&
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data?.clientSecret);
      });
  }, [axiosSecure, price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      setError(error.message);
    } else {
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
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          price: price,
          date: new Date(),
          transactionId: paymentIntent.id,
          agreementId: paymentInfo.agreementId,
          month_of_rent: paymentInfo.month,
        };
        const { data } = await axiosSecure.post("/payments", payment);
        if (data.insertedId) {
          setIsLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };
  const handleCoupon = async () => {
    const { data } = await axiosSecure.get(`/coupon?coupon=${coupon}`);

    const discountPrice = paymentInfo.rent * (data?.discount / 100);
    data.discount && setDiscount(discountPrice);
    data.discount && setPrice(paymentInfo?.rent - discountPrice);
    data.message && toast.error(data.message);
  };

  return (
    <div>
      <h1 className="text-lg font-medium text-center leading-6 text-gray-900">
        Payment
      </h1>
      <div className="text-end text-gray-700 font-semibold">
        <h4>Total Price: {paymentInfo?.rent}</h4>
        <h4 className="mb-2">Discount: {discount}</h4>
        <hr />
        <h4>SubTotal: {price ? price : paymentInfo.rent}</h4>
      </div>
      <div>
        <div className="my-4">
          <label className="text-gray-500  font-semibold">Coupon</label>
          <input
            type="text"
            onBlur={(e) => setCoupon(e.target.value)}
            placeholder="coupon"
            className="w-full p-2 my-3 border border-gray-300  rounded-lg focus:outline-none"
          />

          <button onClick={handleCoupon} className="bg-rose-400 rounded-lg p-1">
            Apply
          </button>
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
          className="w-full mx-auto disabled:bg-gray-200 bg-purple-400 mt-6 rounded-lg p-1 font-semibold "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          {isLoading ? <FaSpinner className=" mx-auto animate-spin" /> : "Pay"}
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
