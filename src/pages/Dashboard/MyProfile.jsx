import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProfile = () => {
  const { user } = useAuth();
  const { email, displayName, photoURL } = user || {};
  const axiosSecure = useAxiosSecure();
  const { data: agreement = {} } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const { data } = await axiosSecure(`agreement/${user?.email}`);
      return data;
    },
  });
  const { floor_no, block_name, apartment_no, rent, status } = agreement || {};

  return (
    <div className="text-gray-700 flex justify-evenly flex-col lg:flex-row gap-8 ">
      <div className="shadow-2xl flex w-96 flex-col items-center p-6  bg-blue-100 rounded-xl">
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
      {status === "checked" && (
        <div className="shadow-2xl w-96  flex flex-col items-start p-6  bg-blue-100 rounded-xl space-y-2">
          <h2 className="text-pink-600 font-bold text-xl">
            Agreement Accepted{" "}
          </h2>
          <h2 className="text-xl font-semibold">Rented Apartment Info</h2>
          <span className="flex items-center text-lg font-semibold gap-2">
            Apartment No: <p className="font-normal">{apartment_no}</p>
          </span>
          <span className="flex items-center text-lg font-semibold gap-2">
            Floor no: <p className="font-normal">{floor_no}</p>
          </span>
          <span className="flex items-center text-lg font-semibold gap-2">
            Block: <p className="font-normal">{block_name}</p>
          </span>
          <span className="flex items-center text-lg font-semibold gap-2">
            Rent:
            <p className="font-normal">
              {rent} <small></small>
            </p>
          </span>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
