import { FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { IoAlertCircle } from "react-icons/io5";

const UserRoutes = () => {
  return (
    <>
      <MenuItem
        icon={FaUser}
        label="My Profile"
        address="/dashboard/my-profile"
      />
      <MenuItem
        icon={IoAlertCircle}
        label="Announcements"
        address="/dashboard/announcements"
      />
    </>
  );
};

export default UserRoutes;
