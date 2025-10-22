import React from "react";
import { MapPin, Clock, School, Briefcase } from "lucide-react";

export default function InternshipJobCard({ job, onViewDetail }) {
  if (!job) return null;

  const handleDetailClick = () => {
    if (typeof onViewDetail === "function") {
      onViewDetail(job);
    } else {
      console.error("onViewDetail is not a function");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 flex flex-col h-full">
      <div className="flex-grow">
        <span className="text-sm font-semibold text-cyan-600">
          {job.department}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">
          {job.title}
        </h3>
        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{job.summary}</p>
        <div className="flex flex-col gap-2 text-gray-500 mt-3 text-xs border-t pt-3">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1.5" /> {job.location}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" /> Durasi: {job.duration}
          </div>
          <div className="flex items-center">
            <School size={14} className="mr-1.5" /> Tipe: {job.type}
          </div>
        </div>
      </div>

      <button
        onClick={handleDetailClick}
        className="mt-5 w-full bg-cyan-600 text-white font-semibold py-2.5 rounded-lg hover:bg-cyan-700 transition-colors duration-300 text-sm" // Warna disesuaikan
      >
        Lihat Detail
      </button>
    </div>
  );
}
