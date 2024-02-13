import axios from "axios";
import { jwtDecode } from "jwt-decode";

const baseUrl = import.meta.env.VITE_API_BASEURL;

export const login = (data, callback) => {
  axios
    .post(`${baseUrl}/auth/login`, data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
