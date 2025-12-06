import { Filter, Plus, Search } from "lucide-react";
import { useState } from "react";
import TeamFormModal from "../../components/Admin/LayoutDasboard/Team/TeamFormModal";
import TeamTable from "../../components/Admin/LayoutDasboard/Team/TeamTable";

// --- DATA DUMMY AWAL ---
const initialMembers = [
  {
    id: 1,
    name: "Prof. Dr. Paripurna, S.H.",
    role: "Pembina",
    description: "Memberikan arahan strategis untuk kemajuan yayasan.",
    images: ["https://placehold.co/400x500/purple/white?text=Prof+Paripurna"],
    category: "foundation",
    division: "PEMBINA",
    email: "prof@email.com",
    linkedin_link: "https://linkedin.com",
    instagram_link: null,
    facebook_link: null,
    twitter_link: null,
  },
  {
    id: 2,
    name: "Achmed Faiz",
    role: "Program Manager",
    description: "Mengelola dan mengembangkan program edukasi.",
    images: [
      "https://placehold.co/400x500/blue/white?text=Faiz+1",
      "https://placehold.co/400x500/blue/white?text=Faiz+2",
    ],
    category: "executive",
    division: "MANAJEMEN & PROGRAM",
    email: "faiz@email.com",
    linkedin_link: null,
    instagram_link: "https://instagram.com",
    facebook_link: "https://facebook.com",
    twitter_link: null,
  },
];

export default function TeamManagementPage() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  // Logic: Filter
  const filteredMembers = members.filter((member) => {
    const matchSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.division?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      filterCategory === "all" || member.category === filterCategory;
    return matchSearch && matchCategory;
  });

  // Logic: Create
  const handleCreate = (newData) => {
    const newMember = {
      ...newData,
      id: Date.now(),
    };
    setMembers([newMember, ...members]);
    setIsModalOpen(false);
    alert("Anggota tim berhasil ditambahkan!");
  };

  // Logic: Update
  const handleUpdate = (updatedData) => {
    setMembers(
      members.map((m) =>
        m.id === editingMember.id ? { ...m, ...updatedData } : m
      )
    );
    setIsModalOpen(false);
    setEditingMember(null);
    alert("Data anggota tim diperbarui!");
  };

  // Logic: Delete
  const handleDelete = (id) => {
    if (window.confirm("Hapus anggota tim ini?")) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  const openEditModal = (member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Tim</h1>
          <p className="text-gray-500 text-sm">
            Kelola profil pengurus yayasan dan tim eksekutif.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
        >
          <Plus size={20} /> Tambah Anggota
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari nama, jabatan, atau divisi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 cursor-pointer"
          >
            <option value="all">Semua Kategori</option>
            <option value="foundation">Yayasan</option>
            <option value="executive">Eksekutif</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <TeamTable
        members={filteredMembers}
        onEdit={openEditModal}
        onDelete={handleDelete}
      />

      {/* Modal */}
      <TeamFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={editingMember ? handleUpdate : handleCreate}
        initialData={editingMember}
      />
    </div>
  );
}
