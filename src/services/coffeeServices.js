import baseAxios from "@/httpClient/http.js";

export const getAllCoffees = async () => {
  const response = await baseAxios.get("/coffee/all");
  console.log(response);
  return response;
};
