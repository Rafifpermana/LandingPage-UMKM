import React from "react";
import { PlayCircle } from "lucide-react";

export default function AftermovieSection({ setVideoModalOpen }) {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Kilas Balik UMKM Days 2024
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Lihat kembali kemeriahan dan momen tak terlupakan dari acara tahun
          lalu.
        </p>
        <div
          className="relative max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
          onClick={() => setVideoModalOpen(true)}
        >
          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
            alt="Aftermovie UMKM Days 2024"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <PlayCircle
              size={100}
              className="text-white transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
