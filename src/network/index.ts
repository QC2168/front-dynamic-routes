import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
instance.interceptors.response.use((res)=>res.data)
export default instance;
