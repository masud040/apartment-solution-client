import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../../../components/CheckOut/CheckOut";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const [params] = useSearchParams();
  const id = params.get("id");
  const month = params.get("month");

  const { data = {} } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payment-agreement/${id}`);
      return data;
    },
  });
  const paymentInfo = {
    email: data?.email,
    apartmentNo: data?.apartment_no,
    rent: data?.rent,
    agreementId: data?._id,
    month: month,
  };
  return (
    <Elements stripe={stripePromise}>
      <CheckOut paymentInfo={paymentInfo} />
    </Elements>
  );
};

export default Payment;
