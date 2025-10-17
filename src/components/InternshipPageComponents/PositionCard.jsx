import React from "react";
import { Clock, MapPin } from "lucide-react";

export default function PositionCard({ title, type, location, duration }) {
  const typeColor =
    type === "Magang"
      ? "bg-blue-100 text-blue-800"
      : "bg-green-100 text-green-800";

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColor}`}
        >
          {type}
        </span>
      </div>
      <p className="text-gray-600 mb-5">
        Jadilah bagian dari tim kami dan bantu wujudkan visi UMKM Hebat.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 border-t pt-4">
        <div className="flex items-center">
          <MapPin size={16} className="mr-2" /> {location}
        </div>
        <div className="flex items-center">
          <Clock size={16} className="mr-2" /> {duration}
        </div>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Daftar Sekarang
      </button>
    </div>
  );
}
