import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const UserDataRow = ({ user, index, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRemove = async (email) => {
    const update = {
      role: "user",
    };
    const { data } = await axiosSecure.patch(`/user/${email}`, update);
    if (data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Removed Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  return (
    <tr className="">
      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
      </td>
      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>

      <td className="px-3  py-5 border-b border-gray-200 bg-white text-sm text-center">
        <span
          onClick={() => handleRemove(user.email)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-600 opacity-50 rounded-full"
          ></span>
          <span className="relative">Remove</span>
        </span>
        {/* Modal */}
      </td>
    </tr>
  );
};
UserDataRow.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default UserDataRow;
