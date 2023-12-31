import PropTypes from "prop-types";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center my-14">
      <h2 className="text-3xl border-l-4 ps-2 border-blue-400 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent uppercase bg-clip-text">
        {title}
      </h2>

      <p className=" mt-2 w-[300px] md:w-[500px] mx-auto text-gray-700  ">
        {subtitle}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
