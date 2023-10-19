import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

axios.interceptors.request.use(
  function (config) {
    if (
      localStorage.getItem("Atoken") !== undefined ||
      localStorage.getItem("Atoken") !== null
    ) {
      config.headers["authorization"] = localStorage.getItem("Atoken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.defaults.headers.common["Authorization"] =
  localStorage.getItem("Atoken");
instance.defaults.headers.common["accept-language"] = "en";
export default instance;
