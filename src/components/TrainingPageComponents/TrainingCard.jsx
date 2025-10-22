import React from "react";
import { Calendar, User, MapPin } from "lucide-react";

export default function TrainingCard({ training, onViewDetail }) {
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
      <img
        src={training.image}
        alt={training.title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" // Efek hover
      />
      <div className="p-5 flex flex-col flex-grow">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start ${
            isOnline
              ? "bg-blue-100 text-blue-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {training.type}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {training.title}
        </h3>
        <div className="space-y-1.5 text-gray-600 text-xs mb-3">
          <div className="flex items-center">
            <User size={14} className="mr-1.5 flex-shrink-0" />
            {training.instructor}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5 flex-shrink-0" />
            {training.date}
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1.5 flex-shrink-0" />
            {isOnline ? "Online via Zoom" : training.location}
          </div>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-grow">
          {training.shortDescription ||
            "Pelatihan intensif untuk meningkatkan skill bisnis Anda di bidang ini."}
        </p>
        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            {formatPrice(training.price)}
          </span>
          <button
            onClick={() => onViewDetail(training)}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm" // Ukuran tombol disesuaikan
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
