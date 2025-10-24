import React from "react";
import { PlayCircle } from "lucide-react";

export default function AboutVideoSection({ setVideoModalOpen }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
            Lihat{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Video Profil
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Kenali lebih dekat UMKM Hebat</p>
        </div>

        <div
          className="group relative max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
          onClick={() => setVideoModalOpen(true)}
        >
          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
            alt="Video Thumbnail"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center transition-all duration-500 group-hover:bg-black/50">
            <div className="transform transition-all duration-500 group-hover:scale-125">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <PlayCircle
                  size={100}
                  className="relative text-white drop-shadow-2xl"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
