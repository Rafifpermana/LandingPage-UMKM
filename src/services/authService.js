import { API_BASE_URL, getHeaders } from "./api";

export const authService = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login gagal");
    }

    if (data.token) {
      localStorage.setItem("adminToken", data.token);
    }

    return data;
  },

  logout: () => {
    localStorage.removeItem("adminToken");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("adminToken");
  },
};
