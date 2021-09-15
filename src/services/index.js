import baseAxios from "@/httpClient/http.js";

export const getLanches = async () => {
  const response = await baseAxios.get("/v4/launches");
  return response;
};
