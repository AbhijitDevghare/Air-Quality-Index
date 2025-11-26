import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/aqi/v1",
});

export default axiosInstance;
