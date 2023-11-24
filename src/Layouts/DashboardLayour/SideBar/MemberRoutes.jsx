import { FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdPayments } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

const MemberRoutes = () => {
  return (
    <>
      <MenuItem
        icon={FaUser}
        label="My Profile"
        address="/dashboard/my-profile"
      />
      <MenuItem
        icon={MdPayments}
        label="Make Payment"
        address="/dashboard/payment"
      />
      <MenuItem
        icon={MdOutlinePayments}
        label="Payment History"
        address="/dashboard/payment-history"
      />
    </>
  );
};

export default MemberRoutes;
