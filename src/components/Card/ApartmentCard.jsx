import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApartmentCard = ({ apartment }) => {
  const { image, floor_no, block_name, apartment_no, rent } = apartment || {};
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const apartmentBooking = async () => {
    setIsLoading(true);
    const bookingRoom = {
      name: user.displayName,
      email: user.email,
      floor_no,
      block_name,
      apartment_no,
      rent,
      date: new Date(),
      status: "pending",
    };
    const { data } = await axiosSecure.post("/agreements", bookingRoom);
    if (data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Apartment Agreement Added",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsLoading(false);
    }
  };
  return (
    <div
      className="col-span-1 cursor-pointer group "
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={image}
            alt="Room"
          />
        </div>
        <div className="font-semibold text-lg flex items-center gap-1 text-neutral-700">
          <p>Floor no:</p>
          <p>{floor_no}</p>
        </div>
        <div className="font-semibold flex items-center text-neutral-700 text-lg gap-1 ">
          <p>Block name: </p>
          <p>{block_name}</p>
        </div>
        <div className="flex text-lg font-semibold items-center gap-1 text-neutral-700">
          <p>Apartment no: </p>
          <p>{apartment_no}</p>
        </div>
        <div className="flex text-lg font-semibold   items-center gap-1 text-neutral-700">
          <p>Rent: </p>
          <p>
            {rent} <small>Per month</small>
          </p>
        </div>
        <div
          onClick={apartmentBooking}
          className="text-center hover:bg-rose-400 p-2 hover:text-white text-lg 
        text-rose-500 border border-rose-400
        font-semibold rounded-md   transition-all shadow-md"
        >
          <button>
            {isLoading ? <FaSpinner className=" animate-spin" /> : "Agreement"}
          </button>
        </div>
      </div>
    </div>
  );
};

ApartmentCard.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentCard;
