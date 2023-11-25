import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PaymentTable from "../../../components/Table/PaymentTable";
import useAuth from "../../../hooks/useAuth";
import { useRef, useState } from "react";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [month, setMonth] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email, month],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/payments?email=${user?.email}&month=${month}`
      );
      return data;
    },
  });

  return (
    <div>
      <div className="text-gray-700">
        <h1 className="text-center text-xl font-bold">Payment History</h1>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Search Your Payment
        </label>

        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            onBlur={(e) => setMonth(e.target.value)}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-none rounded-s-xl focus:ring-blue-500 focus:border-blue-500 block w-max p-2.5 focus:outline-none"
            placeholder="january"
            required
          />
          <button type="submit" className="bg-rose-400 p-2 rounded-r-xl px-3">
            Search
          </button>
        </form>
      </div>
      <div className="overflow-x-auto ">
        <table className="w-full ">
          <thead>
            <tr className="text-sm">
              <th>Email</th>
              <th>Rent</th>
              <th>Rent Of Month</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <PaymentTable key={payment._id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
