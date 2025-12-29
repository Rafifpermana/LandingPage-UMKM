import {
  Edit,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Trash2,
  Twitter,
} from "lucide-react";
import { API_IMAGE_URL } from "../../../../services/api";

export default function TeamTable({ data, onEdit, onDelete }) {
  const getImageUrl = (member) => {
    let imgName = "";
    if (member.images && member.images.length > 0) {
      imgName = member.images[0];
    }
    if (!imgName) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        member.name || "User"
      )}&background=random&color=fff&size=150`;
    }
    if (imgName.startsWith("http")) return imgName;
    return `${API_IMAGE_URL}/${imgName}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
              Profil
            </th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
              Nama & Divisi
            </th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-64">
              Deskripsi
            </th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
              Kelompok & Posisi
            </th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
              Sosmed
            </th>
            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-8 text-gray-500">
                Belum ada data anggota tim.
              </td>
            </tr>
          ) : (
            data.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="relative w-12 h-12">
                    <img
                      src={getImageUrl(member)}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}`;
                      }}
                    />
                    {member.images && member.images.length > 1 && (
                      <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-[9px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-bold">
                        +{member.images.length - 1}
                      </span>
                    )}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="font-bold text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {member.division ? member.division : "-"}
                  </div>
                </td>

                <td className="px-6 py-4">
                  {member.description ? (
                    <div
                      className="text-sm text-gray-600 line-clamp-2 leading-relaxed"
                      title={member.description}
                    >
                      {member.description}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-300 italic flex items-center gap-1">
                      <FileText size={12} /> Tidak ada
                    </span>
                  )}
                </td>

                <td className="px-6 py-4">
                  <div className="mb-1">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                        member.category === "executive"
                          ? "bg-purple-50 text-purple-700 border-purple-100"
                          : "bg-emerald-50 text-emerald-700 border-emerald-100"
                      }`}
                    >
                      {member.category === "foundation"
                        ? "Yayasan"
                        : "Executive"}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-gray-700">
                    {member.role}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {member.linkedin_link && (
                      <a
                        href={member.linkedin_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-blue-700 transition"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.instagram_link && (
                      <a
                        href={member.instagram_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-pink-600 transition"
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                    {member.facebook_link && (
                      <a
                        href={member.facebook_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition"
                      >
                        <Facebook size={16} />
                      </a>
                    )}
                    {member.twitter_link && (
                      <a
                        href={member.twitter_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-sky-500 transition"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {!member.linkedin_link &&
                      !member.instagram_link &&
                      !member.facebook_link &&
                      !member.twitter_link && (
                        <span className="text-gray-300 text-xs">-</span>
                      )}
                  </div>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(member)}
                      className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(member.id)}
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
  );
}
