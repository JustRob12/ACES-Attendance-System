import axios from "axios";

const base_url = import.meta.env.VITE_BASE_API_URL;

const apiClient = axios.create({
  baseURL: base_url,
});

apiClient.interceptors.request.use(async (config) => {
  config.headers["authorization"] = import.meta.env.VITE_API_KEY;
  return config;
});

export default apiClient;
