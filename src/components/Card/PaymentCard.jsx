import PropTypes from "prop-types";
import InputField from "../InputField/InputField";
import { FaSpinner } from "react-icons/fa6";
import { useRef, useState } from "react";

import { Link } from "react-router-dom";

const PaymentCard = ({ agreement }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   const month = useRef("")

  const { _id, email, floor_no, block_name, apartment_no, rent } =
    agreement || {};
  const [month, setMonth] = useState("");

  return (
    <form className="my-6">
      <div className="md:flex gap-6 ">
        <InputField text="Email" placeHolder={email} />
        <InputField text="Floor" placeHolder={floor_no} />
      </div>
      <div className="md:flex gap-4">
        <InputField text="Block name" placeHolder={block_name} />
        <InputField text="Apartment no" placeHolder={apartment_no} />
      </div>
      <div className="md:flex gap-4">
        <InputField text="Rent" placeHolder={rent} />
        <div className=" w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700  ">
            Select month
          </label>
          <select
            onChange={(e) => setMonth(e.target.value)}
            defaultValue="Select month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          >
            <option disabled value="Select month">
              Select month
            </option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
      </div>
      <Link
        to={`/dashboard/payment?id=${_id}&month=${month}`}
        className="text-center mt-8 hover:bg-rose-400 p-2 hover:text-white text-lg
    text-rose-500 border border-rose-400
    font-semibold rounded-md   transition-all shadow-md"
      >
        <button className="w-full mt-6 ">
          {isLoading ? <FaSpinner className=" animate-spin" /> : "Pay"}
        </button>
      </Link>
    </form>
  );
};
PaymentCard.propTypes = {
  agreement: PropTypes.object,
};

export default PaymentCard;
