import axios from "axios";

const instance = axios.create({
  // baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  baseURL: `/api/v1`, // netlify setup
  withCredentials: true,
});

export default instance;
