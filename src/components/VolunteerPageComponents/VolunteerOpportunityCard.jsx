import React from "react";
import { MapPin, Clock, Users } from "lucide-react";

export default function VolunteerOpportunityCard({ opportunity }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col">
      <div className="flex-grow">
        <span className="text-sm font-semibold text-emerald-600">
          {opportunity.area}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
          {opportunity.title}
        </h3>
        <p className="text-gray-600 mt-3 text-sm">{opportunity.description}</p>
        <div className="flex flex-col gap-3 text-gray-500 mt-4 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" /> {opportunity.location}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" /> Komitmen:{" "}
            {opportunity.commitment}
          </div>
        </div>
      </div>
      <button className="mt-6 w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
        Saya Tertarik
      </button>
    </div>
  );
}
