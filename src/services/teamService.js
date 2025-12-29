import { API_BASE_URL, getHeaders } from "./api";

export const teamService = {
  getAllTeams: async () => {
    const response = await fetch(`${API_BASE_URL}/team`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal memuat data tim");
    return data;
  },

  createTeam: async (formData) => {
    const headers = getHeaders();
    delete headers["Content-Type"];

    const response = await fetch(`${API_BASE_URL}/team/admin`, {
      method: "POST",
      headers: headers,
      body: formData,
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal menambah anggota tim");
    return data;
  },

  updateTeam: async (id, formData) => {
    if (!id) throw new Error("ID tidak valid");

    const headers = getHeaders();
    delete headers["Content-Type"];

    const response = await fetch(`${API_BASE_URL}/team/admin/${id}`, {
      method: "PUT",
      headers: headers,
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal update data tim");
    return data;
  },

  deleteTeam: async (id) => {
    const response = await fetch(`${API_BASE_URL}/team/admin/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal menghapus anggota tim");
    return data;
  },
};
