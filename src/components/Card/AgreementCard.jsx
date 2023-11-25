import PropTypes from "prop-types";
import useAgreements from "../../hooks/useAgreements";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AgreementCard = ({ agreement }) => {
  const [agreements, refetch] = useAgreements();
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    name,
    email,
    floor_no,
    block_name,
    apartment_no,
    rent,
    rejected,
    checked,
    date,
  } = agreement || {};
  const handleAccept = async (email) => {
    const update = {
      date: new Date(),
      status: "checked",
      checked: true,
      role: "member",
    };
    const { data } = await axiosSecure.patch(`/agreements/${email}`, update);
    if (data.cursor?.acknowledged && data.result.acknowledged) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Agreement Accept",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  const handleReject = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const update = {
          rejected: true,
          status: "checked",
        };
        const { data } = await axiosSecure.patch(`/agreement/${id}`, update);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Rejected!",
            text: "This agreement is Rejected.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div className="font-semibold text-lg shadow-2xl p-6 rounded-xl bg-blue-100">
      <span className="flex items-center gap-2  ">
        User name: <h4 className="font-normal">{name}</h4>
      </span>
      <span className="flex items-center gap-2 ">
        User email: <h4 className="font-normal">{email}</h4>
      </span>
      <span className="flex items-center gap-2 ">
        Floor no: <h4 className="font-normal">{floor_no}</h4>
      </span>
      <span className="flex items-center gap-2 ">
        Block no: <h4 className="font-normal">{block_name}</h4>
      </span>
      <span className="flex items-center gap-2 ">
        Room no: <h4 className="font-normal">{apartment_no}</h4>
      </span>
      <span className="flex items-center gap-2 ">
        Rent: <h4 className="font-normal">{rent}</h4>
      </span>
      <span className="flex items-center gap-2 ">
        Request: <h4 className="font-normal">{date?.split(":")[0]}</h4>
      </span>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleAccept(email)}
          className={
            checked
              ? "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg"
              : "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
          }
          disabled={checked}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            {checked ? "Accepted" : "Accept"}
          </span>
        </button>
        <button
          onClick={() => handleReject(_id)}
          className={
            rejected
              ? " relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-white px-5 py-2.5  "
              : "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          }
          disabled={rejected}
        >
          {rejected ? "Rejected" : "Reject"}
        </button>
      </div>
    </div>
  );
};
AgreementCard.propTypes = {
  agreement: PropTypes.object,
};

export default AgreementCard;
