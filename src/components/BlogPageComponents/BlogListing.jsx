import { Search } from "lucide-react"; // TAMBAHAN: Ikon Search
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"; // TAMBAHAN: Untuk navigasi
import BlogPostCard from "./BlogPostCard";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";

const POSTS_PER_PAGE = 8;

export default function BlogListing({ searchQuery, dataPosts = [] }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileSearch, setMobileSearch] = useState("");

  const getSafeString = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object" && data.String) return data.String;
    return "";
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (mobileSearch.trim()) {
      navigate(`/blog?search=${encodeURIComponent(mobileSearch.trim())}`);
      setMobileSearch("");
    }
  };

  const filteredPosts = useMemo(() => {
    let posts = dataPosts;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter((post) => {
        const title = getSafeString(post.title).toLowerCase();
        const content = getSafeString(post.content).toLowerCase();
        return title.includes(query) || content.includes(query);
      });
    }
    return posts;
  }, [searchQuery, dataPosts]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  }, [filteredPosts]);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredPosts]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({
        top: document.getElementById("blog-listing-section")?.offsetTop || 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <section id="blog-listing-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 lg:hidden">
          <form onSubmit={handleMobileSearch} className="relative">
            <input
              type="text"
              placeholder="Cari artikel..."
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </form>
        </div>

        {searchQuery && (
          <div className="mb-8 text-center bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-gray-700">
              Menampilkan hasil pencarian untuk:{" "}
              <strong className="text-blue-700">"{searchQuery}"</strong>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-4 lg:mt-12">
          <div className="lg:col-span-2">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700">
                  Belum Ada Postingan
                </h3>
                <p className="text-gray-500 mt-2">
                  {searchQuery
                    ? "Tidak ditemukan artikel yang cocok dengan kata kunci tersebut."
                    : "Silakan cek kembali nanti."}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <BlogSidebar
              posts={dataPosts.slice(0, 5)}
              hideSearchOnMobile={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
