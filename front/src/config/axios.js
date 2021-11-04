import axios from "axios";

// Default config options
const defaultOptions = {
  baseURL:
    process.env.REACT_APP_URL_BASE_API_MODE === "PRODUCTION"
      ? process.env.REACT_APP_URL_BASE_API_PRODUCTION
      : process.env.REACT_APP_URL_BASE_API_DEVELOPMENT, //'https://remate54.com/Api/public',
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
let clienteAxios = axios.create(defaultOptions);

// Set the AUTH token for any request
clienteAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default clienteAxios;
