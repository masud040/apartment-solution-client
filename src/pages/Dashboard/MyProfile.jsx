import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AgreementCart1 from "../../components/Card/AgreementCart1";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  const { user, loading } = useAuth();
  const { email, displayName, photoURL } = user || {};
  const axiosSecure = useAxiosSecure();
  const { data: agreements = {} } = useQuery({
    enabled: !loading,
    queryKey: ["agreements"],
    queryFn: async () => {
      const { data } = await axiosSecure(`agreements/${user?.email}`);
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Diamond House | Profile</title>
      </Helmet>
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
        <div className="grid lg:grid-cols-3 gap-6">
          {agreements?.length > 0 &&
            agreements?.map((agreement) => (
              <AgreementCart1 key={agreement._id} agreement={agreement} />
            ))}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
