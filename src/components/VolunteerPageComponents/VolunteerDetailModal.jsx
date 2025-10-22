import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  CheckCircle,
  Award,
  Mail,
  User,
} from "lucide-react";

export default function VolunteerDetailModal({ opportunity, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motivation, setMotivation] = useState("");

  if (!isOpen || !opportunity) return null;

  const handleApplySubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Application:", {
      opportunityId: opportunity.id,
      name,
      email,
      motivation,
    });
    alert(
      `Terima kasih, ${name}! Minat Anda untuk menjadi relawan ${opportunity.title} telah terkirim.`
    );
    setName("");
    setEmail("");
    setMotivation("");
    onClose();
  };

  const tasks = opportunity.tasks || [];
  const requirements = opportunity.requirements || [];
  const benefits = opportunity.benefits || [];

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9998] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative"
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
            <span className="text-sm font-semibold text-emerald-600 mb-1 inline-block">
              {opportunity.area || "N/A"}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {opportunity.title || "Judul Kesempatan"}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm">
              <div className="flex items-center">
                <MapPin size={14} className="mr-1.5" />
                {opportunity.location || "N/A"}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1.5" />
                {opportunity.commitment || "N/A"}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Tugas Utama
            </h4>
            {tasks.length > 0 ? (
              <ul className="space-y-2">
                {tasks.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-0.5 text-emerald-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Informasi belum tersedia.</p>
            )}
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Kualifikasi yang Dicari
            </h4>
            {requirements.length > 0 ? (
              <ul className="space-y-2">
                {requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-0.5 text-emerald-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Informasi belum tersedia.</p>
            )}
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Benefit Relawan
            </h4>
            {benefits.length > 0 ? (
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <ul className="space-y-2">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-emerald-700"
                    >
                      <Award
                        size={16}
                        className="mr-2 mt-0.5 text-emerald-500 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Informasi belum tersedia.</p>
            )}
          </div>

          <div className="mt-auto pt-6 border-t">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-5">
              Nyatakan Minat Anda
            </h3>
            <form
              onSubmit={handleApplySubmit}
              className="space-y-4 max-w-md mx-auto"
            >
              <div>
                <label
                  htmlFor={`volName-${opportunity.id}`}
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
                    id={`volName-${opportunity.id}`}
                    placeholder="Nama Lengkap Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`volEmail-${opportunity.id}`}
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
                    id={`volEmail-${opportunity.id}`}
                    placeholder="Alamat Email Anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`volMotivation-${opportunity.id}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mengapa Anda tertarik?
                </label>
                <textarea
                  id={`volMotivation-${opportunity.id}`}
                  rows="4"
                  placeholder="Ceritakan singkat motivasi Anda..."
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
                >
                  Kirim Pernyataan Minat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
