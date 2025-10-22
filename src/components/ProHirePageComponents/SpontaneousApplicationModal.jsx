import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  User,
  Upload,
  Briefcase,
  Link as LinkIcon,
} from "lucide-react";

export default function SpontaneousApplicationModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [motivation, setMotivation] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [cvFile, setCvFile] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Spontaneous Application Submitted:", {
      name,
      email,
      areaOfInterest,
      motivation,
      portfolioLink,
      cv: cvFile?.name,
    });
    alert(`Terima kasih, ${name}! Lamaran umum Anda telah terkirim.`);
    setName("");
    setEmail("");
    setAreaOfInterest("");
    setMotivation("");
    setPortfolioLink("");
    setCvFile(null);
    onClose();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9998] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative" // Ukuran disesuaikan
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-0 left-0 z-20 bg-white m-4 p-2 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Kembali"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>

        <div className="p-6 md:p-8 pt-10 md:pt-8">
          <div className="mb-8 text-center border-b pb-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Form Lamaran Umum
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Beritahu kami mengapa Anda cocok bergabung dengan UMKM Hebat.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="spontaneousName"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                  id="spontaneousName"
                  placeholder="Nama Lengkap Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="spontaneousEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                  id="spontaneousEmail"
                  placeholder="Alamat Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="areaOfInterest"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Area Peminatan
              </label>
              <div className="relative">
                <Briefcase
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  id="areaOfInterest"
                  placeholder="cth: Marketing, Teknologi, Program, Desain"
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Motivasi Bergabung (Singkat)
              </label>
              <textarea
                id="motivation"
                rows="4"
                placeholder="Ceritakan mengapa Anda tertarik bergabung..."
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="portfolioLink"
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
                  id="portfolioLink"
                  placeholder="https://..."
                  value={portfolioLink}
                  onChange={(e) => setPortfolioLink(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="spontaneousCvUpload"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload CV/Resume (PDF)
              </label>
              <div className="relative mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload size={32} className="mx-auto text-gray-400" />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label
                      htmlFor="spontaneousCvUploadInput"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload file</span>
                      <input
                        id="spontaneousCvUploadInput"
                        name="cv"
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
                    {cvFile ? cvFile.name : "PDF hingga 5MB"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full text-white font-semibold py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Kirim Lamaran Umum
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
