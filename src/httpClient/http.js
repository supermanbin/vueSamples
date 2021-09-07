import axios from "axios";

const BASE_URL = "https://api.spacexdata.com";

const baseAxios = axios.create({
  baseURL: BASE_URL,
});

export default baseAxios;
