import axios from "axios";
import { getUserToken } from "../Utils/getUserTokens";

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = getUserToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    if (typeof window === "object") {
      if (error?.response?.status == 401) {
        localStorage.clear();
        window.location.href = "/";
      }
      alert("api error!");
    }
  }
);

export default axiosClient;
