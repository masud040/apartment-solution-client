import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
