import PropTypes from "prop-types";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-14">
      <h2 className="text-3xl border-b-4 pb-2 border-blue-400 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent uppercase bg-clip-text">
        {title}
      </h2>

      <p className="text-lg mt-6 text-gray-700 ">{subtitle}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
