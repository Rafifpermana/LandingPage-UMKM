import { Filter, Loader2, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import CareerFormModal from "../../components/Admin/LayoutDasboard/Career/CareerFormModal";
import CareerTable from "../../components/Admin/LayoutDasboard/Career/CareerTable";
import { careerService } from "../../services/careerService";

export default function CareerManagementPage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("prohire");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await careerService.getJobs(filterCategory);
      if (response.status === "success") {
        setJobs(response.data || []);
      }
    } catch (err) {
      setError(err.message || "Gagal memuat data lowongan");
      setJobs([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filterCategory]);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus =
      filterStatus === "all" ||
      (filterStatus === "active" && job.is_active) ||
      (filterStatus === "inactive" && !job.is_active);

    return matchSearch && matchStatus;
  });

  const handleCreate = async (newJobData) => {
    try {
      const response = await careerService.createJob(newJobData);
      if (response.status === "success") {
        await fetchJobs();
        setIsModalOpen(false);
        alert("Lowongan berhasil dibuat!");
      }
    } catch (err) {
      alert(err.message || "Gagal membuat lowongan");
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
      const response = await careerService.updateJob(
        editingJob.id,
        updatedData
      );
      if (response.status === "success") {
        await fetchJobs();
        setIsModalOpen(false);
        setEditingJob(null);
        alert("Lowongan berhasil diperbarui!");
      }
    } catch (err) {
      alert(err.message || "Gagal memperbarui lowongan");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus lowongan ini?")) {
      try {
        await careerService.deleteJob(id);
        await fetchJobs();
        alert("Lowongan berhasil dihapus!");
      } catch (err) {
        alert(err.message || "Gagal menghapus lowongan");
      }
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
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 font-medium"
          >
            <option value="prohire">ProHire</option>
            <option value="internship">Internship</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
          >
            <option value="all">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="inactive">Nonaktif</option>
          </select>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="animate-spin text-blue-600" size={40} />
        </div>
      ) : (
        <CareerTable
          jobs={filteredJobs}
          onEdit={(job) => {
            setEditingJob(job);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      )}

      {/* Modal */}
      <CareerFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingJob(null);
        }}
        onSubmit={editingJob ? handleUpdate : handleCreate}
        initialData={editingJob}
      />
    </div>
  );
}
