import React from "react";
import VolunteerOpportunityCard from "./VolunteerOpportunityCard";

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

export default function OpenOpportunities() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Kesempatan Berkontribusi
        </h2>

        {opportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp) => (
              <VolunteerOpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-700">
              Belum Ada Kesempatan
            </h3>
            <p className="text-gray-500 mt-2">
              Saat ini belum ada kesempatan relawan yang dibuka. Cek kembali
              nanti!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
