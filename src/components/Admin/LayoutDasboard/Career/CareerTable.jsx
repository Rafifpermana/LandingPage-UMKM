import {
  Briefcase,
  CheckCircle,
  Edit,
  MapPin,
  Trash2,
  XCircle,
} from "lucide-react";

export default function CareerTable({ jobs, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">Posisi</th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Departemen
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Tipe/Kategori
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">Lokasi</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 font-semibold text-gray-700 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          job.job_category === "prohire"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-teal-100 text-teal-600"
                        }`}
                      >
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 max-w-[200px]">
                          {job.summary}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{job.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`inline-flex w-fit items-center px-2 py-0.5 rounded text-xs font-medium ${
                          job.job_category === "prohire"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-teal-50 text-teal-700"
                        }`}
                      >
                        {job.job_category === "prohire"
                          ? "ProHire"
                          : "Internship"}
                      </span>
                      <span className="text-xs text-gray-500">
                        {job.job_category === "prohire"
                          ? job.job_type
                          : job.internship_type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {job.is_active ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        <CheckCircle size={12} /> Aktif
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        <XCircle size={12} /> Tutup
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onEdit(job)}
                        className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(job.id)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Belum ada lowongan pekerjaan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
