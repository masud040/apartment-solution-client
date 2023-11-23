import { FaStar } from "react-icons/fa6";
import map from "../../../assets/images/location.webp";
import SectionTitle from "../../SectionTitle/SectionTitle";
const Location = () => {
  return (
    <div>
      <SectionTitle title="Location" />
      <div className="flex items-center gap-6">
        <div className="relative md:w-2/3">
          <img className="w-full h-[300px]" src={map} alt="" />
          <div className="absolute top-2 left-2 bg-white p-3 rounded-lg">
            <p className="text-lg font-medium">Diamond Manor Building</p>
            <p>Gulshan Dhaka, road-3, NY 11238</p>
            <div className="flex items-center gap-2">
              <p className="text-lg">4.5</p>
              <div className="flex text-red-400 items-center gap-3">
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
          <h1 className="text-2xl font-bold text-gray-700">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Location;
