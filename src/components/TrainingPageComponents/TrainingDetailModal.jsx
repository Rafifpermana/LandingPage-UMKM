import React from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import RegistrationSteps from "./RegistrationSteps";

export default function TrainingDetailModal({ training, onClose }) {
  if (!training) return null;

  const formatPrice = (price) => {
    if (price === 0) return "Gratis";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const isOnline = training.type === "Online";

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
          aria-label="Kembali ke daftar pelatihan"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>

        {training.image && (
          <img
            src={training.image}
            alt={training.title}
            className="w-full h-64 object-cover mb-6 rounded-t-xl"
            style={{ marginTop: "-76px" }}
          />
        )}

        <div className="p-6 md:p-8">
          <div className="mb-6 border-b pb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block ${
                isOnline
                  ? "bg-blue-100 text-blue-800"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              {training.type}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {training.title}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm">
              <div className="flex items-center">
                <User size={14} className="mr-1.5" /> {training.instructor}
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1.5" /> {training.date}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1.5" />{" "}
                {training.time || "09:00 - 16:00 WIB"}
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1.5" />{" "}
                {isOnline ? "Online via Zoom" : training.location}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Deskripsi Pelatihan
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {training.longDescription ||
                training.shortDescription ||
                "Informasi detail mengenai pelatihan ini akan segera diperbarui. Pelatihan ini dirancang untuk memberikan pemahaman mendalam dan keterampilan praktis."}
            </p>
          </div>

          {training.syllabus && training.syllabus.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Materi / Alur Pelatihan
              </h4>
              <ul className="space-y-2">
                {training.syllabus.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-0.5 text-green-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Cara Mendaftar
            </h4>
            <RegistrationSteps />
          </div>

          <div className="mt-auto pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-2xl font-bold text-green-600">
              {formatPrice(training.price)}
            </span>
            <a
              href={training.registrationLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 text-center"
            >
              Daftar Pelatihan Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
