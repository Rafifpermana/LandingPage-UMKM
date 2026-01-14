import {
  Briefcase,
  Download,
  Eye,
  Filter,
  Loader2,
  Search,
  UserCheck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import ApplicationDetailModal from "../../components/Admin/LayoutDasboard/Career/ApplyDetailModal";
import { careerService } from "../../services/careerService";

export default function CareerApplicantsPage() {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ========== FETCH DATA ==========
  const fetchApplications = async () => {
    setIsLoading(true);
    setError("");
    try {
      const category = filterCategory === "all" ? "" : filterCategory;
      const response = await careerService.getJobApplications(category);
      if (response.status === "success") {
        setApplications(response.data || []);
      }
    } catch (err) {
      setError(err.message || "Gagal memuat data pelamar");
      setApplications([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [filterCategory]);

  // ========== FILTER LOGIC ==========
  const filteredApplications = applications.filter((app) => {
    const matchSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.job_title &&
        app.job_title.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchStatus = filterStatus === "all" || app.status === filterStatus;

    return matchSearch && matchStatus;
  });

  // ========== UPDATE STATUS ==========
  const handleStatusChange = async (id, newStatus) => {
    try {
      await careerService.updateApplicationStatus(id, newStatus);
      await fetchApplications();
      alert(`Status berhasil diubah menjadi ${newStatus}`);
    } catch (err) {
      alert(err.message || "Gagal mengubah status");
    }
  };

  // ========== VIEW DETAIL ==========
  const handleViewDetail = (app) => {
    setSelectedApplication(app);
    setIsModalOpen(true);
  };

  // ========== STATS ==========
  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "Pending").length,
    reviewed: applications.filter((a) => a.status === "Reviewed").length,
    accepted: applications.filter((a) => a.status === "Accepted").length,
    rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status) => {
    const styles = {
      Pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
      Reviewed: "bg-blue-50 text-blue-700 border-blue-200",
      Accepted: "bg-green-50 text-green-700 border-green-200",
      Rejected: "bg-red-50 text-red-700 border-red-200",
    };
    return styles[status] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Pelamar Karir</h1>
        <p className="text-gray-500 text-sm">
          Kelola dan review lamaran dari kandidat.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users size={20} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Pelamar</p>
              <p className="text-xl font-bold text-gray-800">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-yellow-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Briefcase size={20} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-yellow-600 font-medium">Pending</p>
              <p className="text-xl font-bold text-yellow-700">
                {stats.pending}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-blue-600 font-medium">Reviewed</p>
              <p className="text-xl font-bold text-blue-700">
                {stats.reviewed}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCheck size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-green-600 font-medium">Accepted</p>
              <p className="text-xl font-bold text-green-700">
                {stats.accepted}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Download size={20} className="text-red-600" />
            </div>
            <div>
              <p className="text-xs text-red-600 font-medium">Rejected</p>
              <p className="text-xl font-bold text-red-700">{stats.rejected}</p>
            </div>
          </div>
        </div>
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
            placeholder="Cari nama, email, atau posisi..."
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
            <option value="all">Semua Kategori</option>
            <option value="prohire">ProHire</option>
            <option value="internship">Internship</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
          >
            <option value="all">Semua Status</option>
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
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
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Pelamar
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Posisi & Kategori
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Tanggal Lamar
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-8 text-gray-500">
                      Belum ada pelamar.
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900">
                          {app.name}
                        </div>
                        <div className="text-sm text-gray-500">{app.email}</div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 mb-1">
                          {app.job_title || "Lowongan Dihapus"}
                        </div>
                        {app.job_category && (
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                              app.job_category === "prohire"
                                ? "bg-blue-50 text-blue-700 border-blue-100"
                                : "bg-purple-50 text-purple-700 border-purple-100"
                            }`}
                          >
                            {app.job_category === "prohire"
                              ? "ProHire"
                              : "Internship"}
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          {formatDate(app.submitted_at)}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <select
                          value={app.status}
                          onChange={(e) =>
                            handleStatusChange(app.id, e.target.value)
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${getStatusBadge(
                            app.status
                          )}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleViewDetail(app)}
                          className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition font-medium text-sm inline-flex items-center gap-1"
                        >
                          <Eye size={16} />
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      <ApplicationDetailModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedApplication(null);
        }}
        application={selectedApplication}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}
