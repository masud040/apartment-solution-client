import axios from "axios";
export const saveImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API}`,
    formData
  );
  return data;
};

export const saveUser = async (user) => {
  const { data } = await axios.put(
    `${import.meta.env.VITE_URL}/users/${user.email}`,
    user
  );

  return data;
};
