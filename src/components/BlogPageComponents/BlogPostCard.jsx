import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { API_IMAGE_URL } from "../../services/api.js";

export default function BlogPostCard({ post }) {
  const getSafeString = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object" && data.String) return data.String;
    return "";
  };

  const getImageUrl = (rawImage) => {
    const imageName = getSafeString(rawImage);

    if (!imageName) return "https://via.placeholder.com/400x250?text=No+Image";
    if (imageName.startsWith("http")) return imageName;

    return `${API_IMAGE_URL}/${imageName}`;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl flex flex-col h-full border border-gray-100">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48">
        <img
          src={getImageUrl(post.image)}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/400x250?text=Error+Loading";
          }}
        />
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-semibold text-blue-600 uppercase mb-2">
          {getSafeString(post.category) || "Umum"}
        </p>

        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 flex-grow hover:text-blue-700 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1.5" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-5">
          {getSafeString(post.excerpt) || "Baca selengkapnya..."}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-auto text-blue-600 font-semibold text-sm hover:underline self-start"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </div>
  );
}
