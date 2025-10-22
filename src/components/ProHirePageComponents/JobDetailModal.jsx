import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  CheckCircle,
  Award,
  Mail,
  User,
  Upload,
} from "lucide-react";

export default function JobDetailModal({ job, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cvFile, setCvFile] = useState(null);

  if (!isOpen || !job) return null;

  const handleApplySubmit = (e) => {
    e.preventDefault();
    alert(
      `Terima kasih, ${name}! Lamaran Anda untuk posisi ${job.title} telah terkirim.`
    );
    setName("");
    setEmail("");
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
            <span className="text-sm font-semibold text-blue-600 mb-1 inline-block">
              {job.department}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm">
              <div className="flex items-center">
                <MapPin size={14} className="mr-1.5" /> {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase size={14} className="mr-1.5" /> {job.type}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Tanggung Jawab Utama
            </h4>
            <ul className="space-y-2">
              {job.responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className="mr-2 mt-0.5 text-blue-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Kualifikasi
            </h4>
            <ul className="space-y-2">
              {job.qualifications.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className="mr-2 mt-0.5 text-blue-500 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Benefit
            </h4>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <ul className="space-y-2">
                {job.benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-blue-700"
                  >
                    <Award
                      size={16}
                      className="mr-2 mt-0.5 text-blue-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-5">
              Lamar Posisi Ini
            </h3>
            <form
              onSubmit={handleApplySubmit}
              className="space-y-4 max-w-md mx-auto"
            >
              <div>
                <label
                  htmlFor={`cvName-${job.id}`}
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
                    id={`cvName-${job.id}`}
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
                  htmlFor={`cvEmail-${job.id}`}
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
                    id={`cvEmail-${job.id}`}
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
                  htmlFor={`cvUploadInput-${job.id}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload CV/Resume (PDF)
                </label>
                <div className="relative mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload size={32} className="mx-auto text-gray-400" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor={`cvUploadInput-${job.id}`}
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload file</span>
                        <input
                          id={`cvUploadInput-${job.id}`}
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

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Kirim Lamaran
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
