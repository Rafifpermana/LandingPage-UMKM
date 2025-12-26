export const API_BASE_URL = "http://localhost:3000/api";
export const API_IMAGE_URL = "http://localhost:3000/uploads";

export const getHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};
