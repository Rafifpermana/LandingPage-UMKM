import {
  Briefcase,
  Facebook,
  FileText,
  Instagram,
  Layers,
  Linkedin,
  Loader2,
  Tag,
  Trash2,
  Twitter,
  Upload,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { API_IMAGE_URL } from "../../../../services/api";
import { teamService } from "../../../../services/teamService";

export default function TeamFormModal({
  isOpen,
  onClose,
  memberData,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    category: "foundation",
    division: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
    description: "",
  });

  const [existingImages, setExistingImages] = useState([]);
  const [newImageFiles, setNewImageFiles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const roleOptions = {
    foundation: ["Pembina", "Pengawas", "Pengurus Inti"],
    executive: ["Management & Program", "Kelas UMKM Hebat"],
  };

  useEffect(() => {
    if (isOpen) {
      if (memberData) {
        setFormData({
          name: memberData.name || "",
          role: memberData.role || "",
          category: memberData.category || "foundation",
          division: memberData.division || "",
          linkedin: memberData.linkedin_link || "",
          instagram: memberData.instagram_link || "",
          facebook: memberData.facebook_link || "",
          twitter: memberData.twitter_link || "",
          description: memberData.description || "",
        });

        if (memberData.images && Array.isArray(memberData.images)) {
          setExistingImages(memberData.images);
        } else {
          setExistingImages([]);
        }
      } else {
        setFormData({
          name: "",
          role: "Pembina",
          category: "foundation",
          division: "",
          linkedin: "",
          instagram: "",
          facebook: "",
          twitter: "",
          description: "",
        });
        setExistingImages([]);
      }
      setNewImageFiles([]);
      setError("");
    }
  }, [isOpen, memberData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      const firstRoleOption = roleOptions[value][0];
      setFormData((prev) => ({
        ...prev,
        category: value,
        role: firstRoleOption,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const validFiles = files.filter((f) => f.size <= 2 * 1024 * 1024);
      if (validFiles.length < files.length)
        alert("Beberapa file > 2MB dilewati");
      setNewImageFiles((prev) => [...prev, ...validFiles]);
    }
    e.target.value = "";
  };

  const removeExistingImage = (i) =>
    setExistingImages((prev) => prev.filter((_, idx) => idx !== i));

  const removeNewImage = (i) =>
    setNewImageFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append("name", formData.name);
      dataToSend.append("role", formData.role);
      dataToSend.append("category", formData.category);
      dataToSend.append("division", formData.division);
      dataToSend.append("description", formData.description);
      dataToSend.append("linkedin_link", formData.linkedin);
      dataToSend.append("instagram_link", formData.instagram);
      dataToSend.append("facebook_link", formData.facebook);
      dataToSend.append("twitter_link", formData.twitter);

      existingImages.forEach((img) =>
        dataToSend.append("existing_images", img)
      );

      newImageFiles.forEach((file) => dataToSend.append("images", file));

      if (existingImages.length === 0 && newImageFiles.length === 0) {
        throw new Error("Wajib ada minimal 1 foto profil!");
      }

      if (memberData) {
        await teamService.updateTeam(memberData.id, dataToSend);
      } else {
        await teamService.createTeam(dataToSend);
      }
      onSuccess();
      onClose();
    } catch (err) {
      setError(err.message || "Gagal simpan");
    } finally {
      setIsLoading(false);
    }
  };

  const getPreviewUrl = (img) =>
    img.startsWith("http") ? img : `${API_IMAGE_URL}/${img}`;

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        <div className="px-6 py-4 border-b flex justify-between items-center bg-white z-10">
          <h2 className="text-xl font-bold text-gray-800">
            {memberData ? "Edit Anggota" : "Tambah Anggota"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <form id="teamForm" onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-red-600 bg-red-50 p-3 rounded-xl text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 space-y-4">
                <label className="block text-sm font-bold text-gray-700">
                  Foto Profil
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {existingImages.map((imgName, idx) => (
                    <div
                      key={`old-${idx}`}
                      className="relative aspect-[3/4] rounded-lg overflow-hidden border bg-white group shadow-sm"
                    >
                      <img
                        src={getPreviewUrl(imgName)}
                        alt="old"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                      <button
                        type="button"
                        onClick={() => removeExistingImage(idx)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                        title="Hapus"
                      >
                        <Trash2 size={12} />
                      </button>
                      <span className="absolute bottom-1 left-1 bg-gray-100 text-gray-600 text-[9px] px-1 rounded opacity-80 border">
                        Lama
                      </span>
                    </div>
                  ))}
                  {newImageFiles.map((file, idx) => (
                    <div
                      key={`new-${idx}`}
                      className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-green-400 bg-white group shadow-sm"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="new"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeNewImage(idx)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full shadow-md"
                      >
                        <X size={12} />
                      </button>
                      <span className="absolute bottom-1 left-1 bg-green-100 text-green-700 text-[9px] px-1 rounded font-bold">
                        Baru
                      </span>
                    </div>
                  ))}
                  <div
                    onClick={() => document.getElementById("teamImg").click()}
                    className="aspect-[3/4] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-400 text-gray-400 hover:text-blue-500 transition"
                  >
                    <Upload size={20} />
                    <span className="text-[10px] mt-1 font-medium">Tambah</span>
                  </div>
                </div>
                <input
                  id="teamImg"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <p className="text-[10px] text-gray-400">
                  Klik sampah untuk menghapus. Gambar lama hilang permanen
                  setelah disimpan.
                </p>
              </div>

              <div className="md:col-span-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-xs font-bold uppercase text-gray-500 mb-1 block">
                      Nama Lengkap
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                      placeholder="Nama Lengkap"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 mb-1 flex items-center gap-1">
                      <Tag size={12} /> Kelompok (Role Utama)
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer font-medium"
                    >
                      <option value="foundation">Pengurus Yayasan</option>
                      <option value="executive">Executive Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-gray-500 mb-1 flex items-center gap-1">
                      <Briefcase size={12} /> Posisi (Cabang)
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
                    >
                      {roleOptions[formData.category].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="text-xs font-bold uppercase text-gray-500 mb-1 flex items-center gap-1">
                      <Layers size={12} /> Divisi / Jabatan Spesifik
                    </label>
                    <input
                      name="division"
                      value={formData.division}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                      placeholder="Contoh: Staff IT, Kepala Gudang (Opsional)"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-gray-500 mb-1 flex items-center gap-1">
                    <FileText size={12} /> Deskripsi / Bio Singkat
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none resize-none text-sm"
                    placeholder="Tuliskan deskripsi singkat..."
                  ></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">
                    Sosial Media
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Linkedin
                        size={16}
                        className="absolute left-3 top-3 text-blue-700"
                      />
                      <input
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full pl-10 py-2.5 border border-gray-300 rounded-xl text-sm focus:border-blue-500 outline-none"
                        placeholder="LinkedIn URL"
                      />
                    </div>
                    <div className="relative">
                      <Instagram
                        size={16}
                        className="absolute left-3 top-3 text-pink-600"
                      />
                      <input
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="w-full pl-10 py-2.5 border border-gray-300 rounded-xl text-sm focus:border-pink-500 outline-none"
                        placeholder="Instagram URL"
                      />
                    </div>
                    <div className="relative">
                      <Facebook
                        size={16}
                        className="absolute left-3 top-3 text-blue-600"
                      />
                      <input
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        className="w-full pl-10 py-2.5 border border-gray-300 rounded-xl text-sm focus:border-blue-600 outline-none"
                        placeholder="Facebook URL"
                      />
                    </div>
                    <div className="relative">
                      <Twitter
                        size={16}
                        className="absolute left-3 top-3 text-sky-500"
                      />
                      <input
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        className="w-full pl-10 py-2.5 border border-gray-300 rounded-xl text-sm focus:border-sky-500 outline-none"
                        placeholder="Twitter URL"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-end gap-3 z-10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-medium"
          >
            Batal
          </button>
          <button
            type="submit"
            form="teamForm"
            disabled={isLoading}
            className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200"
          >
            {isLoading && <Loader2 className="animate-spin" size={18} />} Simpan
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
