import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { FaUserShield, FaUsers } from "react-icons/fa6";
import { RiBuilding4Fill } from "react-icons/ri";
import Chart from "../../../components/Chart/Chart";
import { Helmet } from "react-helmet";

const AdminProfile = () => {
  const { total } = useLoaderData();

  const { user, loading } = useAuth();
  const { email, displayName, photoURL } = user || {};
  const axiosSecure = useAxiosSecure();
  const { data = {} } = useQuery({
    queryKey: ["user", "member"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/count-users-member");
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Diamond House | Admin Profile</title>
      </Helmet>
      <div
        className="text-gray-700
       lg:flex  justify-between gap-6"
      >
        <div className="shadow-2xl  mb-10  flex w-full md:w-80  flex-col items-center p-6  bg-blue-100 rounded-xl">
          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 rounded-full">
            <img
              className="w-32  h-32  relative transition-all ease-in duration-75group-hover:bg-opacity-0 rounded-full"
              src={photoURL}
              alt=""
            />
          </div>

          <span className="flex items-center text-xl font-semibold gap-2">
            Name:
            <h4 className="text-lg">{displayName}</h4>
          </span>
          <span className="flex items-center text-xl font-semibold gap-2">
            Email:
            <h4 className="text-lg font-normal"> {email}</h4>
          </span>
        </div>
        <div className="flex-1">
          <div className=" h-max flex gap-4 justify-around ">
            <div className="text-center p-4 h-max rounded-xl text-black bg-gradient-to-r from-sky-500 to-indigo-500">
              <span className="flex items-center gap-4">
                <FaUsers className="text-3xl md:text-5xl" />
                <h1 className="text-4xl font-bold">{data?.users}</h1>
              </span>
              <h1 className="text-3xl font-semibold">Users</h1>
            </div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-max text-center p-4 rounded-xl text-white">
              <span className="flex items-center gap-4">
                <FaUserShield className="text-3xl md:text-5xl" />
                <h1 className="text-4xl font-bold">{data?.members}</h1>
              </span>
              <h1 className="text-3xl font-semibold">Members</h1>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-max text-center p-4 rounded-xl text-white">
              <span className="flex items-center gap-4">
                <RiBuilding4Fill className="text-3xl md:text-5xl" />
                <h1 className="text-2xl md:text-4xl font-bold">{total}</h1>
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold">Rooms</h1>
            </div>
          </div>
          <Chart bookRooms={data?.bookedRooms} />
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
