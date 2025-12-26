import { Calendar, RefreshCw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_IMAGE_URL } from "../../services/api";

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export default function BlogSidebar({ posts, hideSearchOnMobile = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState([]);

  const getSafeString = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object" && data.String) return data.String;
    return "";
  };

  const getImageUrl = (rawImage) => {
    const imageName = getSafeString(rawImage);
    if (!imageName) return "https://via.placeholder.com/150?text=No+Image";
    if (imageName.startsWith("http")) return imageName;
    return `${API_IMAGE_URL}/${imageName}`;
  };

  const getRandomPosts = () => {
    if (!posts || posts.length === 0) return [];
    const shuffled = shuffleArray([...posts]);
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    if (posts && posts.length > 0) {
      setDisplayedPosts(getRandomPosts());
    }
  }, [pathname, posts]);

  const handleRefreshPosts = () => {
    setDisplayedPosts(getRandomPosts());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <aside className="lg:sticky lg:top-24 space-y-8">
      <div
        className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${
          hideSearchOnMobile ? "hidden lg:block" : ""
        }`}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
          Cari Artikel
        </h3>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Ketik kata kunci..."
            className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h3 className="text-lg font-bold text-gray-800">Rekomendasi</h3>
          <button
            onClick={handleRefreshPosts}
            className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-blue-50"
            title="Acak Ulang"
          >
            <RefreshCw size={16} />
          </button>
        </div>

        {displayedPosts.length > 0 ? (
          <ul className="space-y-5">
            {displayedPosts.map((post) => (
              <li key={post.id} className="flex items-start gap-3 group">
                <Link to={`/blog/${post.slug}`} className="block flex-shrink-0">
                  <img
                    src={getImageUrl(post.image)}
                    alt={getSafeString(post.title)}
                    className="w-20 h-20 rounded-lg object-cover shadow-sm group-hover:opacity-90 transition-opacity"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150?text=Error";
                    }}
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-800 leading-snug mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {getSafeString(post.title)}
                    </Link>
                  </h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar size={12} className="mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8 text-gray-400 text-sm">
            Memuat postingan...
          </div>
        )}
      </div>
    </aside>
  );
}
