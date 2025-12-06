import { Filter, Plus, Search } from "lucide-react";
import { useState } from "react";
import CareerFormModal from "../../components/Admin/LayoutDasboard/Career/CareerFormModal";
import CareerTable from "../../components/Admin/LayoutDasboard/Career/CareerTable";

// --- DATA DUMMY AWAL ---
const initialJobs = [
  {
    id: 1,
    job_category: "prohire",
    title: "Senior Go Developer",
    department: "Teknologi",
    location: "Remote",
    summary: "Membangun API berkinerja tinggi untuk UMKM.",
    job_type: "Full-time",
    responsibilities: ["Coding Golang", "Code Review"],
    requirements: ["5+ tahun pengalaman", "Paham Microservices"],
    benefits: ["Gaji Kompetitif", "WFH"],
    is_active: true,
  },
  {
    id: 2,
    job_category: "internship",
    title: "Social Media Intern",
    department: "Marketing",
    location: "Hybrid (Jakarta)",
    summary: "Belajar mengelola konten media sosial.",
    internship_type: "Magang Mandiri",
    duration: "3 Bulan",
    responsibilities: ["Membuat konten Reels", "Analisis engagement"],
    requirements: ["Mahasiswa aktif", "Kreatif"],
    benefits: ["Uang saku", "Sertifikat"],
    is_active: true,
  },
];

export default function CareerManagementPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Logic: Filter
  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      filterCategory === "all" || job.job_category === filterCategory;
    return matchSearch && matchCategory;
  });

  // Logic: Create
  const handleCreate = (newJobData) => {
    const newJob = {
      ...newJobData,
      id: Date.now(),
    };
    setJobs([newJob, ...jobs]);
    setIsModalOpen(false);
    alert("Lowongan berhasil dibuat!");
  };

  // Logic: Update
  const handleUpdate = (updatedData) => {
    setJobs(
      jobs.map((job) =>
        job.id === editingJob.id ? { ...job, ...updatedData } : job
      )
    );
    setIsModalOpen(false);
    setEditingJob(null);
    alert("Lowongan berhasil diperbarui!");
  };

  // Logic: Delete
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus lowongan ini?")) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Karir</h1>
          <p className="text-gray-500 text-sm">
            Kelola lowongan ProHire dan Magang.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingJob(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Buat Lowongan
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari posisi atau departemen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
          >
            <option value="all">Semua Kategori</option>
            <option value="prohire">ProHire</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <CareerTable
        jobs={filteredJobs}
        onEdit={(job) => {
          setEditingJob(job);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      {/* Modal */}
      <CareerFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={editingJob ? handleUpdate : handleCreate}
        initialData={editingJob}
      />
    </div>
  );
}
