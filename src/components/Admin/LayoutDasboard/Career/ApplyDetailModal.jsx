import {
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Mail,
  User,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";
import { getFileUrl } from "../../../../services/api";

export default function ApplicationDetailModal({
  isOpen,
  onClose,
  application,
  onStatusChange,
}) {
  if (!isOpen || !application) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
      Reviewed: "bg-blue-100 text-blue-800 border-blue-300",
      Accepted: "bg-green-100 text-green-800 border-green-300",
      Rejected: "bg-red-100 text-red-800 border-red-300",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  const handleDownloadCV = () => {
    if (application.cv_file_path) {
      const downloadUrl = getFileUrl(application.cv_file_path);
      if (downloadUrl) {
        window.open(downloadUrl, "_blank");
      }
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col relative z-10 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Detail Lamaran</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Informasi lengkap pelamar
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors shadow-sm"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Informasi Pelamar */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
              <User size={20} className="text-blue-600" />
              Informasi Pelamar
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Nama Lengkap
                </label>
                <p className="text-gray-800 font-medium">{application.name}</p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Email
                </label>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gray-400" />
                  <a
                    href={`mailto:${application.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {application.email}
                  </a>
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Portfolio Link
                </label>
                {application.portfolio_link?.String ? (
                  <a
                    href={application.portfolio_link.String}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {application.portfolio_link.String}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm italic">
                    Tidak ada portfolio
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Informasi Posisi */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 space-y-4">
            <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-purple-600" />
              Posisi yang Dilamar
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Nama Posisi
                </label>
                <p className="text-gray-800 font-medium text-lg">
                  {application.job_title || "Lowongan Dihapus"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {application.job_category && (
                  <div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${
                        application.job_category === "prohire"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-purple-50 text-purple-700 border-purple-200"
                      }`}
                    >
                      {application.job_category === "prohire"
                        ? "ProHire"
                        : "Internship"}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={14} />
                  <span>Dilamar: {formatDate(application.submitted_at)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status & CV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Status Lamaran
              </label>
              <select
                value={application.status}
                onChange={(e) => onStatusChange(application.id, e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg text-sm font-bold border-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${getStatusColor(
                  application.status
                )}`}
              >
                <option value="Pending">Pending</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* CV Download */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Dokumen CV
              </label>
              {application.cv_file_path ? (
                <button
                  onClick={handleDownloadCV}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download size={18} />
                  Download CV
                </button>
              ) : (
                <p className="text-gray-400 text-sm italic">
                  CV tidak tersedia
                </p>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100 rounded-xl p-5">
            <h3 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
              <Calendar size={16} className="text-gray-600" />
              Timeline
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tanggal Melamar:</span>
                <span className="font-medium text-gray-800">
                  {formatDate(application.submitted_at)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status Saat Ini:</span>
                <span
                  className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
