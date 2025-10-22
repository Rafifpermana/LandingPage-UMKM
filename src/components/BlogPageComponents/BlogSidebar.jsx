import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Calendar, RefreshCw } from "lucide-react";

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

export default function BlogSidebar({ posts }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState([]);

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
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <aside className="lg:sticky lg:top-24 space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
          Search
        </h3>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-400"
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

      <div>
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="text-xl font-bold text-gray-800">Latest Post</h3>
          <button
            onClick={handleRefreshPosts}
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Refresh Latest Posts"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {displayedPosts.length > 0 ? (
          <ul className="space-y-4">
            {displayedPosts.map((post) => (
              <li key={post.id} className="flex items-start gap-3">
                <Link to={`/blog/${post.slug}`} className="block flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-md object-cover hover:opacity-80 transition-opacity"
                  />
                </Link>
                <div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block text-sm font-semibold text-gray-700 hover:text-blue-600 line-clamp-2 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Calendar size={12} className="mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Memuat postingan...</p>
        )}
      </div>
    </aside>
  );
}
