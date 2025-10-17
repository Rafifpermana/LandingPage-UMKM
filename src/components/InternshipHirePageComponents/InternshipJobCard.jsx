import React from "react";
import { MapPin, Clock, School } from "lucide-react";

export default function InternshipJobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 flex flex-col">
      <div className="flex-grow">
        <span className="text-sm font-semibold text-cyan-600">
          {job.department}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{job.title}</h3>
        <div className="flex flex-col gap-3 text-gray-500 mt-4 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" /> {job.location}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" /> Durasi: {job.duration}
          </div>
          <div className="flex items-center">
            <School size={16} className="mr-2" /> Tipe: {job.type}
          </div>
        </div>
      </div>
      <button className="mt-6 w-full bg-cyan-600 text-white font-semibold py-2.5 rounded-lg hover:bg-cyan-700 transition-colors duration-300">
        Lihat Detail & Lamar
      </button>
    </div>
  );
}
