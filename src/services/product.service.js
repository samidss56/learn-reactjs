import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASEURL;

export const getAllProducts = (callback) => {
  axios
    .get(`${baseUrl}/products`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
