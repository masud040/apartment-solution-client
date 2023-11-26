import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="max-w-[1280px] w-[90%] md:w-full mx-auto">{children}</div>
  );
};
Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
