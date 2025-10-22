import React, { useState, useMemo, useEffect } from "react";
import VolunteerOpportunityCard from "./VolunteerOpportunityCard";
import Pagination from "../BlogPageComponents/Pagination";
import { Search } from "lucide-react";

const generateOpportunities = (count) => {
  const titles = [
    "Mentor Bisnis UMKM",
    "Kontributor Artikel",
    "Desainer Grafis Event",
    "Relawan Dokumentasi",
    "Admin Media Sosial",
    "Penerjemah Konten",
    "Fasilitator Workshop",
  ];
  const areas = [
    "Mentorship",
    "Konten",
    "Kreatif",
    "Media",
    "Komunikasi",
    "Edukasi",
  ];
  const locations = [
    "Remote",
    "Event Based (Jakarta/Yogya)",
    "Remote (Fleksibel)",
    "Hybrid (Bandung)",
  ];
  const commitments = [
    "Min. 2 jam/minggu",
    "Fleksibel (per project)",
    "3 Bulan (Part-time)",
    "Selama Event",
  ];

  const opportunities = [];
  for (let i = 1; i <= count; i++) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const area = areas[Math.floor(Math.random() * areas.length)];
    opportunities.push({
      id: `VOL-${i}`,
      title: `${title} #${i}`,
      area: area,
      location: locations[Math.floor(Math.random() * locations.length)],
      commitment: commitments[Math.floor(Math.random() * commitments.length)],
      summary: `Kesempatan berkontribusi sebagai ${title} #${i} di area ${area}. Berikan dampak positif!`,
      tasks: [
        `Tugas utama #${i}-1 terkait ${title}.`,
        `Membantu tim ${area} dalam kegiatan operasional.`,
        "Berkolaborasi dengan relawan lain.",
        "Menyumbangkan ide dan gagasan.",
      ],
      requirements: [
        `Memiliki minat kuat di bidang ${area}.`,
        `Kemampuan ${title.split(" ")[0]} dasar.`,
        "Komitmen terhadap jadwal yang disepakati.",
        "Proaktif dan memiliki semangat sosial.",
      ],
      benefits: [
        "Pengalaman Berharga",
        "Sertifikat Relawan",
        "Kesempatan Networking",
        "Memberi Dampak Langsung ke UMKM",
        "Fleksibilitas Waktu",
      ],
    });
  }
  return opportunities;
};

const allOpportunities = generateOpportunities(52);
const areasFilter = [
  "Semua Departemen",
  ...new Set(allOpportunities.map((j) => j.area)),
];
const OPPORTUNITIES_PER_PAGE = 9;

export default function OpenOpportunities({ onViewDetail }) {
  const [selectedArea, setSelectedArea] = useState("Semua Area");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOpportunities = useMemo(() => {
    return allOpportunities
      .filter(
        (opp) => selectedArea === "Semua Area" || opp.area === selectedArea
      )
      .filter((opp) =>
        opp.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [selectedArea, searchTerm]);

  const totalPages = useMemo(
    () => Math.ceil(filteredOpportunities.length / OPPORTUNITIES_PER_PAGE),
    [filteredOpportunities]
  );
  const currentOpportunities = useMemo(() => {
    const indexOfLast = currentPage * OPPORTUNITIES_PER_PAGE;
    const indexOfFirst = indexOfLast - OPPORTUNITIES_PER_PAGE;
    return filteredOpportunities.slice(indexOfFirst, indexOfLast);
  }, [currentPage, filteredOpportunities]);
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const sectionElement = document.getElementById(
        "volunteer-listing-section"
      );
      if (sectionElement)
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedArea, searchTerm]);

  return (
    <section
      id="volunteer-listing-section"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Kesempatan Berkontribusi
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full md:w-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari kesempatan relawan..."
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative w-full md:w-60">
              <select
                id="area-filter"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-400 transition bg-white cursor-pointer"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                {areasFilter.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 8l4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {currentOpportunities.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentOpportunities.map((opp) => (
                <VolunteerOpportunityCard
                  key={opp.id}
                  opportunity={opp}
                  onViewDetail={onViewDetail}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
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
