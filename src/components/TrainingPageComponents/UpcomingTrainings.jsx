import React, { useState, useMemo } from "react";
import TrainingCard from "./TrainingCard";
import Pagination from "../BlogPageComponents/Pagination";

const generateTrainings = (count) => {
  const titles = [
    "Digital Marketing",
    "Manajemen Keuangan",
    "Branding & Legalitas",
    "Fotografi Produk",
    "Customer Service",
    "Export Strategy",
    "Manajemen Stok",
  ];
  const instructors = [
    "Budi Setiawan",
    "Dr. Rina Wijaya",
    "Andi Prasetyo, SH",
    "Citra Kirana",
    "Doni Firmansyah",
    "Prof. Ahmad Yani",
  ];
  const types = ["Online", "Offline"];
  const locations = [
    "Hotel Ambarrukmo, Yogya",
    "Kantor Pusat UMKM Hebat, Jakarta",
    "Aula Universitas Gadjah Mada",
    "Online via Zoom",
  ];

  const trainings = [];
  const baseDate = new Date(2025, 10, 25);

  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i * 3);

    trainings.push({
      id: `TRN-${i + 1}`,
      title: `${titles[Math.floor(Math.random() * titles.length)]} #${i + 1}`,
      instructor: instructors[Math.floor(Math.random() * instructors.length)],
      date: date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: "09:00 - 15:00 WIB",
      type: type,
      location:
        type === "Offline"
          ? locations[Math.floor(Math.random() * (locations.length - 1))]
          : locations[3],
      price:
        Math.random() < 0.2
          ? 0
          : Math.floor(Math.random() * 10 + 1) * 50000 + 100000,
      image: `https://placehold.co/600x400/${Math.floor(
        Math.random() * 16777215
      ).toString(16)}/ffffff?text=Training+${i + 1}`,
      shortDescription: `Deskripsi singkat untuk pelatihan ${
        titles[Math.floor(Math.random() * titles.length)]
      } #${i + 1}. Tingkatkan skill Anda.`,
      longDescription: `Deskripsi lengkap pelatihan...\nCocok untuk pemula hingga menengah.\nDapatkan insight langsung dari pakar.`,
      syllabus: [
        "Materi Pokok 1",
        "Studi Kasus",
        "Diskusi Kelompok",
        "Praktik Langsung",
        "Q&A Session",
      ],
      registrationLink: "#",
    });
  }
  return trainings;
};

const allTrainings = generateTrainings(20);
const TRAININGS_PER_PAGE = 5;

export default function UpcomingTrainings({ onViewDetail }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(allTrainings.length / TRAININGS_PER_PAGE);
  }, []);

  const currentTrainings = useMemo(() => {
    const indexOfLast = currentPage * TRAININGS_PER_PAGE;
    const indexOfFirst = indexOfLast - TRAININGS_PER_PAGE;
    return allTrainings.slice(indexOfFirst, indexOfLast);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const sectionElement = document.getElementById(
        "upcoming-trainings-section"
      );
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="upcoming-trainings-section"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Pelatihan yang Akan Datang
        </h2>

        {currentTrainings.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTrainings.map((training) => (
                <TrainingCard
                  key={training.id}
                  training={training}
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
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700">
              Belum Ada Pelatihan
            </h3>
            <p className="text-gray-500 mt-2">Silakan cek kembali nanti.</p>
          </div>
        )}
      </div>
    </section>
  );
}
