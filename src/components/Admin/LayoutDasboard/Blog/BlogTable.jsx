import { Calendar, Edit, Trash2, User } from "lucide-react";
import { API_IMAGE_URL } from "../../../../services/api.js";

export default function BlogTable({ posts, onEdit, onDelete }) {
  const getSafeString = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object" && data.String) return data.String;
    return "";
  };

  const getImageUrl = (rawImage) => {
    const imageName = getSafeString(rawImage);

    if (!imageName) return "https://via.placeholder.com/150?text=No+Img";

    if (imageName.startsWith("http")) {
      return imageName;
    }

    return `${API_IMAGE_URL}/${imageName}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="p-4 font-semibold text-gray-600 text-sm">Artikel</th>
            <th className="p-4 font-semibold text-gray-600 text-sm hidden md:table-cell">
              Kategori
            </th>
            <th className="p-4 font-semibold text-gray-600 text-sm hidden sm:table-cell">
              Penulis
            </th>
            <th className="p-4 font-semibold text-gray-600 text-sm">Status</th>
            <th className="p-4 font-semibold text-gray-600 text-sm text-right">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {posts.map((post) => (
            <tr
              key={post.id}
              className="hover:bg-gray-50/50 transition-colors group"
            >
              {/* Kolom 1: Gambar & Judul */}
              <td className="p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
                    <img
                      src={getImageUrl(post.image)}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/100x100?text=Error";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm line-clamp-2 leading-tight">
                      {getSafeString(post.title) || post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <Calendar size={12} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>
              </td>

              {/* Kolom 2: Kategori */}
              <td className="p-4 hidden md:table-cell">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">
                  {getSafeString(post.category) || "Umum"}
                </span>
              </td>

              {/* Kolom 3: Penulis */}
              <td className="p-4 hidden sm:table-cell">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User size={14} className="text-gray-400" />
                  <span>{getSafeString(post.author) || "Admin"}</span>
                </div>
              </td>

              {/* Kolom 4: Status */}
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      post.is_published ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      post.is_published ? "text-green-700" : "text-gray-500"
                    }`}
                  >
                    {post.is_published ? "Published" : "Draft"}
                  </span>
                </div>
              </td>

              {/* Kolom 5: Aksi */}
              <td className="p-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onEdit(post)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(post.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Hapus"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
