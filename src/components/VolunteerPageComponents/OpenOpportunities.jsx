import React, { useState, useMemo } from "react";
import VolunteerOpportunityCard from "./VolunteerOpportunityCard";
import { Search } from "lucide-react";

const opportunities = [
  {
    id: 1,
    title: "Mentor Bisnis UMKM",
    area: "Mentorship",
    location: "Remote",
    commitment: "Min. 2 jam/minggu",
    description: "Bimbing 1-2 UMKM dalam mengembangkan strategi bisnis mereka.",
  },
  {
    id: 2,
    title: "Kontributor Artikel Blog",
    area: "Konten",
    location: "Remote",
    commitment: "Fleksibel (min. 1 artikel/bulan)",
    description:
      "Bagikan pengetahuanmu tentang bisnis, marketing, atau keuangan melalui tulisan.",
  },
  {
    id: 3,
    title: "Desainer Grafis Event",
    area: "Kreatif",
    location: "Remote",
    commitment: "Per Proyek",
    description:
      "Bantu kami membuat materi promosi visual yang menarik untuk acara UMKM Days.",
  },
  {
    id: 4,
    title: "Relawan Dokumentasi (Foto/Video)",
    area: "Media",
    location: "Event Based (Jakarta/Yogya)",
    commitment: "Selama Acara Berlangsung",
    description: "Abadikan momen-momen penting selama acara offline kami.",
  },
];

const areas = [
  "Semua Area",
  "Mentorship",
  "Konten",
  "Kreatif",
  "Media",
  "Event Support",
];

export default function OpenOpportunities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("Semua Area");

  const filteredOpportunities = useMemo(() => {
    return opportunities
      .filter((opp) => {
        return selectedArea === "Semua Area" || opp.area === selectedArea;
      })
      .filter((opp) => {
        return opp.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [searchTerm, selectedArea]);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari kesempatan..."
              className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full md:w-48 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Kesempatan Berkontribusi
        </h2>

        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((opp) => (
              <VolunteerOpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-700">
              Kesempatan Tidak Ditemukan
            </h3>
            <p className="text-gray-500 mt-2">
              Belum ada kesempatan untuk filter ini. Cek kembali nanti!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
