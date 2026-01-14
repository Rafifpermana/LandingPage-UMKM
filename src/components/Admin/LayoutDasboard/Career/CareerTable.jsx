import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Edit,
  MapPin,
  Tag,
  Trash2,
  XCircle,
} from "lucide-react";

export default function CareerTable({ jobs, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Posisi & Kategori
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Departemen & Lokasi
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Detail
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Dibuat
              </th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  Belum ada lowongan.
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    {job.is_active ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                        <CheckCircle2 size={12} /> Aktif
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-50 text-gray-500 border border-gray-200">
                        <XCircle size={12} /> Nonaktif
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{job.title}</div>
                    <div className="mt-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                          job.job_category === "prohire"
                            ? "bg-blue-50 text-blue-700 border-blue-100"
                            : "bg-purple-50 text-purple-700 border-purple-100"
                        }`}
                      >
                        <Tag size={10} />
                        {job.job_category === "prohire"
                          ? "ProHire"
                          : "Internship"}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-700 mb-1">
                      <Building2 size={14} className="text-gray-400" />
                      <span className="font-medium">{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="space-y-1 text-xs text-gray-600">
                      {job.job_type?.String && (
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={12} className="text-gray-400" />
                          <span>{job.job_type.String}</span>
                        </div>
                      )}
                      {job.duration?.String && (
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-gray-400" />
                          <span>{job.duration.String}</span>
                        </div>
                      )}
                      {job.internship_type?.String && (
                        <div className="text-gray-500">
                          {job.internship_type.String}
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {formatDate(job.created_at)}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onEdit(job)}
                        className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(job.id)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition"
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
