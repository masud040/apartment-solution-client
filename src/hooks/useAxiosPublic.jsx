import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apartment-solution-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
