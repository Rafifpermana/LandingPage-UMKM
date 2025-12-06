import { Plus, Search } from "lucide-react";
import { useState } from "react";
import BlogFormModal from "../../components/Admin/LayoutDasboard/Blog/BlogFormModal";
import BlogTable from "../../components/Admin/LayoutDasboard/Blog/BlogTable";

// --- DATA DUMMY AWAL ---
const initialPosts = [
  {
    id: 1,
    title: "5 Ide Bisnis Kopi Kekinian",
    slug: "5-ide-bisnis-kopi-kekinian",
    category: "Tips Bisnis",
    author: "Tim UMKM Hebat",
    image: "https://placehold.co/100x100/orange/white?text=Kopi",
    date: "2025-10-20",
    is_published: true,
    excerpt: "Kopi bukan lagi sekadar minuman...",
    content: "Konten lengkap...",
  },
  {
    id: 2,
    title: "Strategi Digital Marketing",
    slug: "strategi-digital",
    category: "Pemasaran",
    author: "Admin",
    image: "https://placehold.co/100x100/blue/white?text=Digital",
    date: "2025-10-22",
    is_published: false,
    excerpt: "Strategi pemasaran...",
    content: "Konten strategi...",
  },
];

export default function BlogManagementPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  // Logic: Filter Pencarian
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic: Create (Tambah)
  const handleCreate = (newPostData) => {
    const newPost = {
      ...newPostData,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    setPosts([newPost, ...posts]);
    setIsModalOpen(false);
    alert("Artikel berhasil dibuat!");
  };

  // Logic: Update (Edit)
  const handleUpdate = (updatedData) => {
    setPosts(
      posts.map((post) =>
        post.id === editingPost.id ? { ...post, ...updatedData } : post
      )
    );
    setIsModalOpen(false);
    setEditingPost(null);
    alert("Artikel berhasil diperbarui!");
  };

  // Logic: Delete (Hapus)
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Blog</h1>
          <p className="text-gray-500 text-sm">
            Kelola semua artikel Anda di sini.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingPost(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Buat Artikel
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 max-w-md">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari judul atau kategori..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabel Konten */}
      <BlogTable
        posts={filteredPosts}
        onEdit={(post) => {
          setEditingPost(post);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      {/* Modal Formulir */}
      <BlogFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={editingPost ? handleUpdate : handleCreate}
        initialData={editingPost}
      />
    </div>
  );
}
