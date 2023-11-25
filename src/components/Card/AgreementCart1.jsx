import PropTypes from "prop-types";
const AgreementCart1 = ({ agreement }) => {
  const { floor_no, checked, block_name, date, apartment_no, rent } =
    agreement || {};
  return (
    <div>
      {checked && (
        <div className="shadow-2xl w-96  flex flex-col items-start p-6  bg-blue-100 rounded-xl space-y-2">
          <h2 className="text-pink-600 font-bold text-xl">
            Agreement Accepted on {date.split(":")[0]}
          </h2>
          <h2 className="text-xl font-semibold">Rented Apartment Info</h2>
          <span className="flex items-center text-lg font-semibold gap-2">
            Apartment No: <p className="font-normal">{apartment_no}</p>
          </span>
          <span className="flex items-center text-lg font-semibold gap-2">
            Floor no: <p className="font-normal">{floor_no}</p>
          </span>
          <span className="flex items-center text-lg font-semibold gap-2">
            Block: <p className="font-normal">{block_name}</p>
          </span>
          <span className="flex items-center text-lg font-semibold gap-2">
            Rent:
            <p className="font-normal">
              {rent} <small></small>
            </p>
          </span>
        </div>
      )}
    </div>
  );
};
AgreementCart1.propTypes = {
  agreement: PropTypes.object,
};

export default AgreementCart1;
