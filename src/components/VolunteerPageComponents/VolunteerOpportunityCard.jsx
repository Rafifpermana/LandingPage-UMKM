import React from "react";
import { MapPin, Clock, Users } from "lucide-react";

export default function VolunteerOpportunityCard({
  opportunity,
  onViewDetail,
}) {
  if (!opportunity) return null;

  const handleDetailClick = () => {
    if (typeof onViewDetail === "function") {
      onViewDetail(opportunity);
    } else {
      console.error("onViewDetail is not a function");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col h-full">
      <div className="flex-grow">
        <span className="text-sm font-semibold text-emerald-600">
          {opportunity.area}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">
          {opportunity.title}
        </h3>
        <p className="text-xs text-gray-500 mt-2 line-clamp-2">
          {opportunity.summary}
        </p>
        <div className="flex flex-col gap-2 text-gray-500 mt-3 text-xs border-t pt-3">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1.5" /> {opportunity.location}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" /> Komitmen:{" "}
            {opportunity.commitment}
          </div>
        </div>
      </div>
      <button
        onClick={handleDetailClick}
        className="mt-5 w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors duration-300 text-sm" // Warna Emerald
      >
        Lihat Detail
      </button>
    </div>
  );
}
