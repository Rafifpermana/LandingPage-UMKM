import { Plus, Users } from "lucide-react";
import { useEffect, useState } from "react";
import TeamFormModal from "../../components/Admin/LayoutDasboard/Team/TeamFormModal";
import TeamTable from "../../components/Admin/LayoutDasboard/Team/TeamTable";
import { teamService } from "../../services/teamService";

export default function TeamManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeams = async () => {
    try {
      setIsLoading(true);
      const response = await teamService.getAllTeams();
      setTeamMembers(response.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data tim.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleAddMember = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus anggota tim ini?")) {
      try {
        await teamService.deleteTeam(id);
        fetchTeams();
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleSuccess = () => {
    fetchTeams();
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="text-blue-600" />
            Anggota Tim
          </h1>
          <p className="text-gray-500 mt-1">
            Kelola profil, peran, dan foto tim Anda.
          </p>
        </div>
        <button
          onClick={handleAddMember}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
        >
          <Plus size={20} />
          <span>Tambah Anggota</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-10 text-center text-gray-500">
            Memuat data tim...
          </div>
        ) : error ? (
          <div className="p-10 text-center text-red-500">{error}</div>
        ) : (
          <TeamTable
            data={teamMembers}
            onEdit={handleEditMember}
            onDelete={handleDeleteMember}
          />
        )}
      </div>

      <TeamFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        memberData={editingMember}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
