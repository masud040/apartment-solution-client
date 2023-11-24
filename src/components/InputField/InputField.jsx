import PropTypes from "prop-types";
const InputField = ({ text, placeHolder }) => {
  return (
    <div className="mt-2 w-full">
      <label className="block mb-2 text-sm font-medium text-gray-700  ">
        {text}
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
        placeholder={placeHolder}
        readOnly
      />
    </div>
  );
};
InputField.propTypes = {
  text: PropTypes.string,
  placeHolder: PropTypes.node,
};

export default InputField;
