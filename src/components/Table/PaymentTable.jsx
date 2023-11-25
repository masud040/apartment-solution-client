import PropTypes from "prop-types";
const PaymentTable = ({ payment }) => {
  return (
    <tr>
      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">{payment?.email}</p>
      </td>
      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">{payment?.price}</p>
      </td>
      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">
          {payment?.month_of_rent}
        </p>
      </td>

      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">
          {payment?.transactionId}
        </p>
      </td>
    </tr>
  );
};
PaymentTable.propTypes = {
  payment: PropTypes.object,
};
export default PaymentTable;
