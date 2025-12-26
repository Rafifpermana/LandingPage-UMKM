import { API_BASE_URL, getHeaders } from "./api";

export const blogService = {
  getAllPosts: async () => {
    const response = await fetch(`${API_BASE_URL}/blog/admin`, {
      method: "GET",
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal mengambil data blog");
    return data;
  },

  createPost: async (formData) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_BASE_URL}/blog/admin`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal membuat postingan");
    return data;
  },

  updatePost: async (id, formData) => {
    const token = localStorage.getItem("adminToken");
    const response = await fetch(`${API_BASE_URL}/blog/admin/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal update postingan");
    return data;
  },

  deletePost: async (id) => {
    const response = await fetch(`${API_BASE_URL}/blog/admin/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });

    if (response.status === 204) {
      return { status: "success", message: "Data berhasil dihapus" };
    }

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal menghapus postingan");
    return data;
  },

  getPublicPosts: async () => {
    const response = await fetch(`${API_BASE_URL}/blog`, {
      method: "GET",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal memuat berita");
    return data;
  },

  getPostBySlug: async (slug) => {
    const response = await fetch(`${API_BASE_URL}/blog/${slug}`, {
      method: "GET",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Berita tidak ditemukan");
    return data;
  },
};
