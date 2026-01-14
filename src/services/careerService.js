import { API_BASE_URL, getHeaders } from "./api";

export const careerService = {
  // ==========================================
  // 1. PUBLIC ENDPOINTS (Untuk User/Pelamar)
  // ==========================================
  async getJobs(category = "") {
    const url = category
      ? `${API_BASE_URL}/career/jobs?category=${category}`
      : `${API_BASE_URL}/career/jobs`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal memuat lowongan");
    return data;
  },

  // Ambil detail satu lowongan
  async getJobById(id) {
    const response = await fetch(`${API_BASE_URL}/career/jobs/${id}`);
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal mengambil detail lowongan");
    return data;
  },

  // Kirim Lamaran (Apply)
  async applyJob(formData) {
    const response = await fetch(`${API_BASE_URL}/career/apply`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal mengirim lamaran");
    return data;
  },

  // ==========================================
  // 2. ADMIN ENDPOINTS (Perlu Token)
  // ==========================================

  // Buat Lowongan Baru
  async createJob(jobData) {
    const response = await fetch(`${API_BASE_URL}/career/admin/jobs`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(jobData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal membuat lowongan");
    return data;
  },

  // Update Lowongan
  async updateJob(id, jobData) {
    const response = await fetch(`${API_BASE_URL}/career/admin/jobs/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(jobData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal update lowongan");
    return data;
  },

  // Hapus Lowongan
  async deleteJob(id) {
    const response = await fetch(`${API_BASE_URL}/career/admin/jobs/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal menghapus lowongan");
    return data;
  },

  // Ambil Data Pelamar (Applicants)
  async getJobApplications(category = "") {
    const url = category
      ? `${API_BASE_URL}/career/admin/applications?category=${category}`
      : `${API_BASE_URL}/career/admin/applications`;

    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Gagal mengambil data pelamar");
    return data;
  },

  // Update Status Lamaran (Accepted/Rejected/etc)
  async updateApplicationStatus(appId, status) {
    const response = await fetch(
      `${API_BASE_URL}/career/admin/applications/${appId}/status`,
      {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify({ status }),
      }
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal update status");
    return data;
  },
};
