import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.descriptions.value;
    const announcement = {
      title,
      description,
    };
    const { data } = await axiosSecure.post("/announcement", announcement);
    if (data.insertedId) {
      form.reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Announcement Published",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Diamond House | Make Announcement</title>
      </Helmet>
      <div>
        <h1 className="text-center text-xl font-bold text-gray-700 mb-4">
          Make Announcement
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Announcement Title
            </label>
            <input
              type="text"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 focus:outline-none"
              placeholder="Announcement Title"
              required
            />
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Announcement Descriptions
          </label>
          <textarea
            id="message"
            rows="4"
            name="descriptions"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none "
            placeholder="Announcement description"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
              Share
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default MakeAnnouncement;
