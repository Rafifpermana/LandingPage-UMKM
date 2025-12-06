import {
  Briefcase,
  Building2,
  CheckCircle2,
  Facebook,
  Image as ImageIcon,
  Instagram,
  Linkedin,
  Mail,
  Save,
  Twitter,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function TeamFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [formData, setFormData] = useState({
    category: "foundation", // foundation | executive
    name: "",
    role: "",
    division: "",
    description: "",
    images: "", // String untuk input (dipisah baris baru), nanti jadi array
    email: "",
    linkedin_link: "",
    instagram_link: "",
    facebook_link: "",
    twitter_link: "",
  });

  // Tema warna berdasarkan kategori
  const themeColor = formData.category === "foundation" ? "purple" : "blue";

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        images: initialData.images ? initialData.images.join("\n") : "",
        email: initialData.email || "",
        linkedin_link: initialData.linkedin_link || "",
        instagram_link: initialData.instagram_link || "",
        facebook_link: initialData.facebook_link || "",
        twitter_link: initialData.twitter_link || "",
      });
    } else {
      setFormData({
        category: "foundation",
        name: "",
        role: "",
        division: "",
        description: "",
        images: "",
        email: "",
        linkedin_link: "",
        instagram_link: "",
        facebook_link: "",
        twitter_link: "",
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prev) => ({ ...prev, category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      // Konversi string images menjadi array, hapus baris kosong
      images: formData.images
        .split("\n")
        .map((url) => url.trim())
        .filter((url) => url !== ""),
    };
    onSubmit(payload);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {initialData ? "Edit Anggota Tim" : "Tambah Anggota Tim"}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Masukkan detail profil dan kontak anggota tim.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8"
        >
          {/* Section: Kategori */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Kategori Tim
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card Foundation */}
              <div
                onClick={() => handleCategoryChange("foundation")}
                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                  formData.category === "foundation"
                    ? "border-purple-500 bg-purple-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    formData.category === "foundation"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Building2 size={24} />
                </div>
                <div>
                  <h4
                    className={`font-bold ${
                      formData.category === "foundation"
                        ? "text-purple-700"
                        : "text-gray-700"
                    }`}
                  >
                    Pengurus Yayasan
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Pembina, Pengawas, dan Pengurus Inti Yayasan.
                  </p>
                </div>
                {formData.category === "foundation" && (
                  <CheckCircle2
                    className="absolute top-4 right-4 text-purple-500"
                    size={20}
                  />
                )}
              </div>

              {/* Card Executive */}
              <div
                onClick={() => handleCategoryChange("executive")}
                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                  formData.category === "executive"
                    ? "border-blue-500 bg-blue-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    formData.category === "executive"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4
                    className={`font-bold ${
                      formData.category === "executive"
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    Executive Team
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Tim manajemen dan operasional program sehari-hari.
                  </p>
                </div>
                {formData.category === "executive" && (
                  <CheckCircle2
                    className="absolute top-4 right-4 text-blue-500"
                    size={20}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Section: Profil Utama */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Profil Utama
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all ${
                      themeColor === "purple"
                        ? "focus:ring-purple-500"
                        : "focus:ring-blue-500"
                    }`}
                    placeholder="Contoh: Prof. Dr. Budi Santoso"
                  />
                </div>
              </div>

              {/* Jabatan */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jabatan (Role)
                </label>
                <div className="relative">
                  <Briefcase
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all ${
                      themeColor === "purple"
                        ? "focus:ring-purple-500"
                        : "focus:ring-blue-500"
                    }`}
                    placeholder="Contoh: Pembina Utama / Program Manager"
                  />
                </div>
              </div>

              {/* Divisi (Penting untuk pengelompokan) */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Divisi / Kelompok
                  <span className="text-gray-400 font-normal ml-2 text-xs">
                    (Digunakan untuk judul seksi di frontend)
                  </span>
                </label>
                <input
                  type="text"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all ${
                    themeColor === "purple"
                      ? "focus:ring-purple-500"
                      : "focus:ring-blue-500"
                  }`}
                  placeholder="Contoh: PEMBINA, PENGAWAS, atau MANAJEMEN & PROGRAM"
                />
              </div>

              {/* Deskripsi */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Singkat
                </label>
                <textarea
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all resize-none ${
                    themeColor === "purple"
                      ? "focus:ring-purple-500"
                      : "focus:ring-blue-500"
                  }`}
                  placeholder="Deskripsi singkat tentang peran atau bio..."
                />
              </div>

              {/* Foto Profil (Multi-line) */}
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <ImageIcon size={18} className="text-gray-500" />
                  <label className="text-sm font-medium text-gray-700">
                    URL Foto Profil
                  </label>
                </div>
                <textarea
                  name="images"
                  rows="3"
                  value={formData.images}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all font-mono text-sm ${
                    themeColor === "purple"
                      ? "focus:ring-purple-500"
                      : "focus:ring-blue-500"
                  }`}
                  placeholder="[https://example.com/foto1.jpg&#10;https://example.com/foto2.jpg](https://example.com/foto1.jpg&#10;https://example.com/foto2.jpg)"
                />
                <p className="text-xs text-gray-400 mt-1 text-right">
                  Masukkan satu URL per baris jika ada lebih dari satu foto.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Kontak & Sosial Media */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Kontak & Sosial Media (Opsional)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none text-sm transition-all"
                  placeholder="Email Address"
                />
              </div>

              {/* LinkedIn */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Linkedin size={16} className="text-blue-700" />
                </div>
                <input
                  type="url"
                  name="linkedin_link"
                  value={formData.linkedin_link}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none text-sm transition-all"
                  placeholder="LinkedIn URL"
                />
              </div>

              {/* Instagram */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Instagram size={16} className="text-pink-600" />
                </div>
                <input
                  type="url"
                  name="instagram_link"
                  value={formData.instagram_link}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-100 focus:border-pink-400 outline-none text-sm transition-all"
                  placeholder="Instagram URL"
                />
              </div>

              {/* Facebook */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Facebook size={16} className="text-blue-800" />
                </div>
                <input
                  type="url"
                  name="facebook_link"
                  value={formData.facebook_link}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none text-sm transition-all"
                  placeholder="Facebook URL"
                />
              </div>

              {/* Twitter */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Twitter size={16} className="text-sky-500" />
                </div>
                <input
                  type="url"
                  name="twitter_link"
                  value={formData.twitter_link}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none text-sm transition-all"
                  placeholder="Twitter URL"
                />
              </div>
            </div>
          </div>
        </form>

        {/* Footer Actions (Sticky) */}
        <div className="flex justify-end gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={`px-6 py-2.5 rounded-xl text-white font-medium flex items-center gap-2 shadow-lg transition-all transform active:scale-95 ${
              themeColor === "purple"
                ? "bg-purple-600 hover:bg-purple-700 shadow-purple-200"
                : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
            }`}
          >
            <Save size={18} />
            Simpan Anggota
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
