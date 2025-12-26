import { AlertCircle, Plus, RefreshCw, Search } from "lucide-react";
import { useEffect, useState } from "react";
import BlogFormModal from "../../components/Admin/LayoutDasboard/Blog/BlogFormModal";
import BlogTable from "../../components/Admin/LayoutDasboard/Blog/BlogTable";
import { blogService } from "../../services/blogService";

export default function BlogManagementPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const getSafeString = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object" && data.String) return data.String;
    return "";
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await blogService.getAllPosts();
      setPosts(response.data || []);
      setError(null);
    } catch (err) {
      setError(err.message || "Gagal memuat data blog");
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      try {
        await blogService.deletePost(postId);
        fetchPosts();
        alert("Artikel berhasil dihapus");
      } catch (err) {
        alert("Gagal menghapus: " + err.message);
      }
    }
  };

  const handleEdit = (post) => {
    const cleanPost = {
      ...post,
      title: getSafeString(post.title),
      author: getSafeString(post.author),
      category: getSafeString(post.category),
      excerpt: getSafeString(post.excerpt),
      content: getSafeString(post.content),
      image: getSafeString(post.image),
      images: post.images || [],
      content_videos: post.content_videos || [],
    };
    setSelectedPost(cleanPost);
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    setSelectedPost(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleSuccessSubmit = () => {
    handleCloseModal();
    fetchPosts();
  };

  const filteredPosts = posts.filter((post) => {
    const title = getSafeString(post.title).toLowerCase();
    const author = getSafeString(post.author).toLowerCase();
    const query = searchQuery.toLowerCase();

    return title.includes(query) || author.includes(query);
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manajemen Artikel
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Buat, edit, dan kelola konten blog UMKM Hebat
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} />
          <span>Buat Artikel Baru</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari judul atau penulis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <button
          onClick={fetchPosts}
          className="p-2.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          title="Refresh Data"
        >
          <RefreshCw size={20} className={isLoading ? "animate-spin" : ""} />
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-gray-500 flex flex-col items-center gap-3">
            <RefreshCw size={30} className="animate-spin text-blue-500" />
            <p>Memuat data artikel...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <BlogTable
            posts={filteredPosts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <div className="p-12 text-center text-gray-500">
            {searchQuery
              ? "Artikel tidak ditemukan."
              : "Belum ada artikel. Silakan buat baru."}
          </div>
        )}
      </div>

      {isModalOpen && (
        <BlogFormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          postData={selectedPost}
          onSuccess={handleSuccessSubmit}
        />
      )}
    </div>
  );
}
