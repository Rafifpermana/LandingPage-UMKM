import React from "react";
import { MapPin, Briefcase, Clock } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col">
      <div className="flex-grow">
        <span className="text-sm font-semibold text-blue-600">
          {job.department}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{job.title}</h3>
        <div className="flex flex-col gap-3 text-gray-500 mt-4 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" /> {job.location}
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-2" /> {job.type}
          </div>
        </div>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Lamar Sekarang
      </button>
    </div>
  );
}
