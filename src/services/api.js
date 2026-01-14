export const API_BASE_URL = "http://localhost:3000/api";
export const API_IMAGE_URL = "http://localhost:3000/uploads";
export const API_FILE_URL = "http://localhost:3000";

export const getHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const getFileUrl = (filePath) => {
  if (!filePath) return null;

  // Remove "./" if exists
  let cleanPath = filePath.startsWith("./") ? filePath.substring(2) : filePath;

  // Return full URL
  return `${API_FILE_URL}/${cleanPath}`;
};
