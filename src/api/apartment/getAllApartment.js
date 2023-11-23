import axios from "axios";

export const getAllApartment = async () => {
  const { data } = axios.get(`http://localhost:5000/apartments`);
  return data;
};
