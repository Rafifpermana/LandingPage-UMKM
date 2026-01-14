import {
  ArrowLeft,
  Award,
  CheckCircle,
  Clock,
  Link as LinkIcon,
  Loader2, // Icon Loading
  Mail,
  MapPin,
  School,
  Upload,
  User,
} from "lucide-react";
import { useState } from "react";
import { careerService } from "../../services/careerService";

export default function InternshipDetailModal({ internship, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motivationFile, setMotivationFile] = useState(null);
  const [portfolioLink, setPortfolioLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !internship) return null;

  const getSafeString = (val) => {
    if (!val) return "";
    // Jika bentuknya object {String: "...", Valid: true}
    if (typeof val === "object" && "String" in val) {
      return val.Valid ? val.String : "";
    }
    return val;
  };

  const safeList = (list) => (Array.isArray(list) ? list : []);

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("job_id", internship.id);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("portfolio_link", portfolioLink);

      if (motivationFile) {
        formData.append("cv", motivationFile);
      }

      await careerService.applyJob(formData);

      alert(
        `Terima kasih, ${name}! Lamaran magang Anda untuk ${getSafeString(
          internship.title
        )} telah terkirim.`
      );

      // Reset Form
      setName("");
      setEmail("");
      setMotivationFile(null);
      setPortfolioLink("");
      onClose();
    } catch (error) {
      console.error("Gagal melamar:", error);
      alert("Gagal mengirim lamaran. Pastikan file PDF tidak lebih dari 5MB.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran file maksimal 5MB");
        return;
      }
      setMotivationFile(file);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9998] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-0 left-0 z-20 bg-white m-4 p-2 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Kembali ke daftar lowongan"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6 border-b pb-4">
            <span className="text-sm font-semibold text-cyan-600 mb-1 inline-block">
              {getSafeString(internship.department)}
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {getSafeString(internship.title)}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm">
              <div className="flex items-center">
                <MapPin size={14} className="mr-1.5" />
                {getSafeString(internship.location)}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1.5" />
                {getSafeString(internship.duration)}
              </div>
              <div className="flex items-center">
                <School size={14} className="mr-1.5" />
                {getSafeString(internship.internship_type) ||
                  getSafeString(internship.type)}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Apa yang Akan Kamu Lakukan?
            </h4>
            <ul className="space-y-2">
              {safeList(internship.responsibilities).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
              {safeList(internship.responsibilities).length === 0 && (
                <li className="text-sm text-gray-500 italic">
                  Data belum tersedia
                </li>
              )}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Kualifikasi yang Dicari
            </h4>
            <ul className="space-y-2">
              {safeList(internship.requirements).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
              {safeList(internship.requirements).length === 0 && (
                <li className="text-sm text-gray-500 italic">
                  Data belum tersedia
                </li>
              )}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Benefit Magang
            </h4>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
              <ul className="space-y-2">
                {safeList(internship.benefits).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-cyan-700"
                  >
                    <Award
                      size={16}
                      className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
                {safeList(internship.benefits).length === 0 && (
                  <li className="text-sm text-cyan-700 italic">
                    Data belum tersedia
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-5">
              Lamar Posisi Magang Ini
            </h3>
            <form
              onSubmit={handleApplySubmit}
              className="space-y-4 max-w-md mx-auto"
            >
              <div>
                <label
                  htmlFor={`internName-${internship.id}`}
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    id={`internName-${internship.id}`}
                    placeholder="Nama Lengkap Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`internEmail-${internship.id}`}
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    id={`internEmail-${internship.id}`}
                    placeholder="Alamat Email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`internPortfolio-${internship.id}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Link Portfolio / LinkedIn (Opsional)
                </label>
                <div className="relative">
                  <LinkIcon
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="url"
                    id={`internPortfolio-${internship.id}`}
                    placeholder="https://..."
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`internCvUpload-${internship.id}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload CV / Motivation Letter (PDF)
                </label>
                <div className="relative mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload size={32} className="mx-auto text-gray-400" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor={`internCvUploadInput-${internship.id}`}
                        className="relative cursor-pointer bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                      >
                        <span>Upload file</span>
                        <input
                          id={`internCvUploadInput-${internship.id}`}
                          name="motivation"
                          type="file"
                          className="sr-only"
                          accept=".pdf"
                          onChange={handleFileChange}
                          required
                        />
                      </label>
                      <p className="pl-1">atau drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {motivationFile ? motivationFile.name : "PDF hingga 5MB"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Mengirim...
                    </>
                  ) : (
                    "Kirim Lamaran Magang"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
