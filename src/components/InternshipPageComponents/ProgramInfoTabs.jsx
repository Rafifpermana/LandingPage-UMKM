import React, { useState } from "react";
import { Briefcase, HeartHandshake } from "lucide-react";
import InternshipTabContent from "./InternshipTabContent";
import VolunteerTabContent from "./VolunteerTabContent";

export default function ProgramInfoTabs() {
  const [activeTab, setActiveTab] = useState("magang");

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <button
            onClick={() => setActiveTab("magang")}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
              activeTab === "magang"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            <Briefcase size={20} /> Magang
          </button>
          <button
            onClick={() => setActiveTab("relawan")}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
              activeTab === "relawan"
                ? "border-b-2 border-emerald-600 text-emerald-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            <HeartHandshake size={20} /> Relawan
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
          {activeTab === "magang" && <InternshipTabContent />}
          {activeTab === "relawan" && <VolunteerTabContent />}
        </div>
      </div>
    </section>
  );
}
