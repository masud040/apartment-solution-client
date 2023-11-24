import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import PropTypes from "prop-types";
const MemberRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isPending] = useRole();
  if (loading || isPending) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (user?.email && role?.role === "member") {
    return children;
  }
  return <Navigate to="/login" />;
};

MemberRoute.propTypes = {
  children: PropTypes.node,
};

export default MemberRoute;
