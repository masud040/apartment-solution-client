import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://building-managment-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
