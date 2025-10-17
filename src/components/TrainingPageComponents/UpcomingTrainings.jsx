import React from "react";
import TrainingCard from "./TrainingCard";

const trainings = [
  {
    title: "Digital Marketing 101 untuk UMKM",
    instructor: "Budi Setiawan, S.E., M.M.",
    date: "25 November 2025",
    type: "Online",
    price: 150000,
    image: "https://placehold.co/600x400/10b981/ffffff?text=Digital+Marketing",
  },
  {
    title: "Manajemen Keuangan & Perbankan",
    instructor: "Dr. Rina Wijaya",
    date: "28 November 2025",
    type: "Offline",
    location: "Hotel Ambarrukmo, Yogyakarta",
    price: 750000,
    image: "https://placehold.co/600x400/f97316/ffffff?text=Keuangan",
  },
  {
    title: "Strategi Branding & Legalitas Produk",
    instructor: "Andi Prasetyo, S.H., M.Kn.",
    date: "5 Desember 2025",
    type: "Online",
    price: 150000,
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Branding",
  },
];

export default function UpcomingTrainings() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Pelatihan yang Akan Datang
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <TrainingCard key={training.title} training={training} />
          ))}
        </div>
      </div>
    </section>
  );
}
