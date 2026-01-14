// Gunakan import.meta.env untuk Vite
// Jika variabel env tidak ada, fallback ke localhost (untuk development lokal)
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_BASE_URL = `${BASE_URL}/api`;
export const API_IMAGE_URL = `${BASE_URL}/uploads`;
export const API_FILE_URL = BASE_URL;

export const getHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const getFileUrl = (filePath) => {
  if (!filePath) return null;
  // Hapus "./" jika ada
  let cleanPath = filePath.startsWith("./") ? filePath.substring(2) : filePath;
  // Return full URL
  return `${API_FILE_URL}/${cleanPath}`;
};
