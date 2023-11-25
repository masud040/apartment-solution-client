import { FaUser, FaUsers } from "react-icons/fa6";
import { IoAlertCircle } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { MdRememberMe } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";

const AdminRoutes = () => {
  return (
    <>
      <MenuItem
        icon={FaUser}
        label="Admin Profile"
        address="/dashboard/admin-profile"
      />
      <MenuItem
        icon={FaUsers}
        label="Mange Members"
        address="/dashboard/manage-members"
      />
      <MenuItem
        icon={IoAlertCircle}
        label="Make Announcement"
        address="/dashboard/make-announcement"
      />

      <MenuItem
        icon={MdRememberMe}
        label="Agreement Request"
        address="/dashboard/agreements"
      />
      <MenuItem
        icon={RiCoupon2Fill}
        label="Manage Coupons"
        address="/dashboard/manage-coupons"
      />
    </>
  );
};

export default AdminRoutes;
