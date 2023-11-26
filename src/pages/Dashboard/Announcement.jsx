import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdAnnouncement } from "react-icons/md";
import { Helmet } from "react-helmet";

const Announcement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: announcement = [] } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/announcement");
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Diamond House | Announcement</title>
      </Helmet>
      <div className="space-y-5">
        {announcement?.map((announcement) => (
          <div key={announcement._id} className="text-gray-700">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold text-green-500">
                {announcement?.title}
              </h2>
              <MdAnnouncement className="text-3xl text-green-500" />
            </div>
            <p className="text-base">{announcement?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Announcement;
