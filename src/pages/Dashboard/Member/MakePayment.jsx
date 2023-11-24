import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import InputField from "../../../components/InputField/InputField";
import { FaSpinner } from "react-icons/fa6";
import { useState } from "react";

const MakePayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { data: agreement } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agreement/${user?.email}`);
      return data;
    },
  });
  const {
    _id,
    name,
    email,
    floor_no,
    block_name,
    apartment_no,
    rent,
    date,
    status,
  } = agreement || {};
  const handlePay = async () => {};
  return (
    <div>
      <div className="md:flex gap-6">
        <InputField text="Email" placeHolder={email} />
        <InputField text="Floor" placeHolder={floor_no} />
      </div>
      <div className="md:flex gap-4">
        <InputField text="Block name" placeHolder={block_name} />
        <InputField text="Apartment no" placeHolder={apartment_no} />
      </div>
      <div className="md:flex gap-4">
        <InputField text="Rent" placeHolder={rent} />
        <div className="mt-2 w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700  ">
            Select month
          </label>
          <select
            defaultValue="Select month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option disabled value="Select month">
              Select month
            </option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </div>
      <div
        onClick={handlePay}
        className="text-center mt-8 hover:bg-rose-400 p-2 hover:text-white text-lg 
        text-rose-500 border border-rose-400
        font-semibold rounded-md   transition-all shadow-md"
      >
        <button>
          {isLoading ? <FaSpinner className=" animate-spin" /> : "Pay"}
        </button>
      </div>
    </div>
  );
};

export default MakePayment;
