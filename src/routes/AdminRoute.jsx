import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isPending] = useRole();
  if (loading || isPending) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (user?.email && role?.role === "admin") {
    return children;
  }
  return <Navigate to="/login" />;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
