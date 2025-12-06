import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  GraduationCap,
  ListChecks,
  MapPin,
  Save,
  School,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CareerFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [formData, setFormData] = useState({
    job_category: "prohire",
    title: "",
    department: "",
    location: "",
    summary: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
    job_type: "",
    duration: "",
    internship_type: "",
    is_active: true,
  });

  const themeColor = formData.job_category === "prohire" ? "blue" : "teal";

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        responsibilities: initialData.responsibilities
          ? initialData.responsibilities.join("\n")
          : "",
        requirements: initialData.requirements
          ? initialData.requirements.join("\n")
          : "",
        benefits: initialData.benefits ? initialData.benefits.join("\n") : "",
      });
    } else {
      setFormData({
        job_category: "prohire",
        title: "",
        department: "",
        location: "",
        summary: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
        job_type: "",
        duration: "",
        internship_type: "",
        is_active: true,
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prev) => ({ ...prev, job_category: category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      responsibilities: formData.responsibilities
        .split("\n")
        .filter((i) => i.trim() !== ""),
      requirements: formData.requirements
        .split("\n")
        .filter((i) => i.trim() !== ""),
      benefits: formData.benefits.split("\n").filter((i) => i.trim() !== ""),
    };
    onSubmit(payload);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col relative z-10 overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white z-20">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {initialData ? "Edit Lowongan" : "Buat Lowongan Baru"}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Lengkapi detail posisi pekerjaan di bawah ini.
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
              Kategori Lowongan
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card ProHire */}
              <div
                onClick={() => handleCategoryChange("prohire")}
                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                  formData.job_category === "prohire"
                    ? "border-blue-500 bg-blue-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    formData.job_category === "prohire"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4
                    className={`font-bold ${
                      formData.job_category === "prohire"
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    ProHire
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Untuk posisi profesional full-time, kontrak, atau part-time.
                  </p>
                </div>
                {formData.job_category === "prohire" && (
                  <CheckCircle2
                    className="absolute top-4 right-4 text-blue-500"
                    size={20}
                  />
                )}
              </div>

              {/* Card Internship */}
              <div
                onClick={() => handleCategoryChange("internship")}
                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                  formData.job_category === "internship"
                    ? "border-teal-500 bg-teal-50/50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    formData.job_category === "internship"
                      ? "bg-teal-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4
                    className={`font-bold ${
                      formData.job_category === "internship"
                        ? "text-teal-700"
                        : "text-gray-700"
                    }`}
                  >
                    Internship
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Untuk program magang mahasiswa atau fresh graduate.
                  </p>
                </div>
                {formData.job_category === "internship" && (
                  <CheckCircle2
                    className="absolute top-4 right-4 text-teal-500"
                    size={20}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Section: Informasi Dasar */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Informasi Dasar
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Judul Posisi */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Posisi
                </label>
                <div className="relative">
                  <Briefcase
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all ${
                      themeColor === "blue"
                        ? "focus:ring-blue-500"
                        : "focus:ring-teal-500"
                    }`}
                    placeholder="Contoh: Senior Backend Engineer"
                  />
                </div>
              </div>

              {/* Departemen */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departemen
                </label>
                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all appearance-none bg-white ${
                      themeColor === "blue"
                        ? "focus:ring-blue-500"
                        : "focus:ring-teal-500"
                    }`}
                  >
                    <option value="">Pilih Departemen...</option>
                    <option value="Teknologi">Teknologi</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Kreatif">Kreatif</option>
                    <option value="Operasional">Operasional</option>
                    <option value="Program">Program</option>
                  </select>
                </div>
              </div>

              {/* Lokasi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi Kerja
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all appearance-none bg-white ${
                      themeColor === "blue"
                        ? "focus:ring-blue-500"
                        : "focus:ring-teal-500"
                    }`}
                  >
                    <option value="">Pilih Lokasi...</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid (Jakarta)">Hybrid (Jakarta)</option>
                    <option value="WFO (Jakarta)">WFO (Jakarta)</option>
                    <option value="WFO (Yogyakarta)">WFO (Yogyakarta)</option>
                  </select>
                </div>
              </div>

              {/* Conditional Fields */}
              {formData.job_category === "prohire" ? (
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipe Pekerjaan
                  </label>
                  <div className="relative">
                    <Clock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <select
                      name="job_type"
                      value={formData.job_type}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Pilih Tipe...</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipe Magang
                    </label>
                    <div className="relative">
                      <School
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <select
                        name="internship_type"
                        value={formData.internship_type}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Pilih Tipe...</option>
                        <option value="Magang Kampus Merdeka">
                          Kampus Merdeka
                        </option>
                        <option value="Magang Mandiri">Mandiri</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Durasi
                    </label>
                    <div className="relative">
                      <Clock
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Pilih Durasi...</option>
                        <option value="3 Bulan">3 Bulan</option>
                        <option value="4 Bulan">4 Bulan</option>
                        <option value="6 Bulan">6 Bulan</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Ringkasan */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ringkasan Singkat
                </label>
                <textarea
                  name="summary"
                  rows="2"
                  value={formData.summary}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all ${
                    themeColor === "blue"
                      ? "focus:ring-blue-500"
                      : "focus:ring-teal-500"
                  }`}
                  placeholder="Deskripsi singkat yang akan muncul di kartu lowongan..."
                />
              </div>
            </div>
          </div>

          {/* Section: Detail & Kualifikasi */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Detail & Kualifikasi
            </label>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ListChecks size={18} className={`text-${themeColor}-600`} />
                  <label className="text-sm font-medium text-gray-700">
                    Tanggung Jawab
                  </label>
                </div>
                <textarea
                  name="responsibilities"
                  rows="4"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all font-mono text-sm bg-gray-50 ${
                    themeColor === "blue"
                      ? "focus:ring-blue-500"
                      : "focus:ring-teal-500"
                  }`}
                  placeholder="- Mengembangkan fitur baru...&#10;- Melakukan code review..."
                />
                <p className="text-xs text-gray-400 mt-1 text-right">
                  Gunakan baris baru (Enter) untuk memisahkan poin.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap
                    size={18}
                    className={`text-${themeColor}-600`}
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Kualifikasi / Persyaratan
                  </label>
                </div>
                <textarea
                  name="requirements"
                  rows="4"
                  value={formData.requirements}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all font-mono text-sm bg-gray-50 ${
                    themeColor === "blue"
                      ? "focus:ring-blue-500"
                      : "focus:ring-teal-500"
                  }`}
                  placeholder="- Minimal S1 Teknik Informatika...&#10;- Pengalaman menggunakan React..."
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award size={18} className={`text-${themeColor}-600`} />
                  <label className="text-sm font-medium text-gray-700">
                    Benefit
                  </label>
                </div>
                <textarea
                  name="benefits"
                  rows="3"
                  value={formData.benefits}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all font-mono text-sm bg-gray-50 ${
                    themeColor === "blue"
                      ? "focus:ring-blue-500"
                      : "focus:ring-teal-500"
                  }`}
                  placeholder="- Gaji Kompetitif...&#10;- Asuransi Kesehatan..."
                />
              </div>
            </div>
          </div>

          {/* Section: Status */}
          <div className="pt-2">
            <div
              className={`flex items-center justify-between p-4 rounded-xl border ${
                formData.is_active
                  ? "bg-green-50 border-green-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div>
                <span
                  className={`font-bold ${
                    formData.is_active ? "text-green-800" : "text-gray-700"
                  }`}
                >
                  Status Lowongan
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  {formData.is_active
                    ? "Lowongan ini sedang ditampilkan ke publik."
                    : "Lowongan ini disembunyikan (Tutup)."}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50 sticky bottom-0 z-20">
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
              themeColor === "blue"
                ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                : "bg-teal-600 hover:bg-teal-700 shadow-teal-200"
            }`}
          >
            <Save size={18} />
            {initialData ? "Simpan Perubahan" : "Publikasikan Lowongan"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
