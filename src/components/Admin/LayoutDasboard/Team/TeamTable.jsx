import {
  Edit,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Trash2,
  Twitter,
  User,
} from "lucide-react";

export default function TeamTable({ members, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Anggota Tim
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Kategori & Divisi
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Kontak & Sosmed
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.length > 0 ? (
              members.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                        {member.images && member.images.length > 0 ? (
                          <img
                            src={member.images[0]}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <User size={20} />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium text-blue-600">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`inline-flex w-fit items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          member.category === "foundation"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {member.category === "foundation"
                          ? "Yayasan"
                          : "Eksekutif"}
                      </span>
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        {member.division}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-1.5 bg-gray-100 rounded text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          title={member.email}
                        >
                          <Mail size={14} />
                        </a>
                      )}
                      {member.linkedin_link && (
                        <a
                          href={member.linkedin_link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-gray-100 rounded text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                      {member.instagram_link && (
                        <a
                          href={member.instagram_link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-gray-100 rounded text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                        >
                          <Instagram size={14} />
                        </a>
                      )}
                      {member.facebook_link && (
                        <a
                          href={member.facebook_link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-gray-100 rounded text-gray-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                        >
                          <Facebook size={14} />
                        </a>
                      )}
                      {member.twitter_link && (
                        <a
                          href={member.twitter_link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 bg-gray-100 rounded text-gray-600 hover:text-sky-500 hover:bg-sky-50 transition-colors"
                        >
                          <Twitter size={14} />
                        </a>
                      )}
                      {!member.email &&
                        !member.linkedin_link &&
                        !member.instagram_link && (
                          <span className="text-xs text-gray-400 italic">
                            Tidak ada kontak
                          </span>
                        )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onEdit(member)}
                        className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(member.id)}
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
                  colSpan="4"
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Belum ada anggota tim.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
