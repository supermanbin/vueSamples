import axios from "axios";

// const BASE_URL = "https://api.spacexdata.com";
// const COFFEE_URL = "http://localhost:3000/";

const baseAxios = axios.create({
  // baseURL: COFFEE_URL,
});

export default baseAxios;
