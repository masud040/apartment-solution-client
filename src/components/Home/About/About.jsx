import building from "../../../assets/images//banner/5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Our Building" />
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          className="md:w-1/2 h-72 w-full md:h-[500px] rounded-xl"
          src={building}
          alt=""
        />
        <div className="md:w-1/2 text-gray-700 space-y-2">
          <h1 className="text-3xl font-bold">Diamond Manor Building</h1>
          <span className="flex items-center gap-3">
            <FaLocationDot className="text-2xl" />
            <p className="text-lg font-bold text-blue-600">Gulshan, Dhaka</p>
          </span>
          <h1 className="text-xl font-bold text-blue-500 border-l-4 border-red-400 ps-2">
            Description
          </h1>
          <p className="md:text-lg font-semibold">
            Discover the pinnacle of architectural sophistication at 101, an
            extraordinary presence in the heart of Gulshan, Dhaka. With stories
            of innovation and design, this landmark seamlessly blends form and
            function. The exterior, a mesmerizing display of contemporary
            aesthetics, invites you into a world where versatility meets
            elegance. Nestled strategically in Gulshan, Diamond Manor Building
            is more than an address it iss a strategic hub of connectivity.
            Proximity to major roads and cultural centers ensures unparalleled
            accessibility. Step inside to experience a curated fusion of
            cutting-edge facilities and refined interiors.
          </p>
          <h2 className="text-xl font-bold text-blue-500 border-l-4 border-red-400 ps-2">
            Features
          </h2>
          <p className="space-x-6 font-medium">
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Air-Condition
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Balcony
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              BBQ area
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              CCTV
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Child Playground
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Driver Room
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Emergency Exit
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Fire Exit
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Fire Hose
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Gard Room
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Lift
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Security Gurad
            </span>
            <span className="border-b-4 border-gray-500 hover:text-indigo-900  ">
              Single Unit
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
