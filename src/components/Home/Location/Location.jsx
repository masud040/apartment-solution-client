import {
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaMobile,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import map from "../../../assets/images/location.webp";
import SectionTitle from "../../SectionTitle/SectionTitle";
const Location = () => {
  return (
    <div className="my-14">
      <SectionTitle title="Location" />
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="relative md:w-2/3">
          <img className="w-full h-[300px]" src={map} alt="" />
          <div className="absolute p-3 bg-white rounded-lg top-2 left-2">
            <p className="text-lg font-medium">Diamond Manor Building</p>
            <p>Gulshan Dhaka, road-3, NY 11238</p>
            <div className="flex items-center gap-2">
              <p className="text-lg">4.5</p>
              <div className="flex items-center gap-3 text-red-400">
                <span className="flex ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p className="text-blue-500">37 reviews</p>
              </div>
            </div>
            <p className="text-blue-500">View larger map</p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-3xl font-bold text-blue-600 border-l-4 border-red-500 ps-2">
            Contact
          </h1>
          <div className="flex items-center gap-3 my-8">
            <img
              className="w-20 h-20 rounded-full"
              src="https://res.cloudinary.com/dtoojmthf/image/upload/v1716054022/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508_mtxtkc.avif"
              alt=""
            />
            <div>
              <h1 className="text-lg font-semibold">Rifa Ahmed</h1>
              <span className="flex gap-2 text-2xl">
                <FaFacebook className="text-blue-600 " />
                <FaLinkedin className="text-blue-600 " />
                <FaTwitter className="text-blue-600" />
              </span>
            </div>
          </div>
          <div className="text-gray-700">
            <span className="flex items-center gap-3">
              <FaMobile className="text-xl" />
              <p>012345667788</p>
            </span>
            <span className="flex items-center gap-3">
              <IoIosCall className="text-xl" />
              <p>333345667788</p>
            </span>
            <span className="flex items-center gap-3">
              <MdEmail className="text-xl" />
              <p>example@.com</p>
            </span>
            <span className="flex items-center gap-3">
              <FaLocationDot className="text-xl" />
              <p>
                Apartment C-3, Road 4, Block - A, Gulshan Dhaka 1213, Bangladesh
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
