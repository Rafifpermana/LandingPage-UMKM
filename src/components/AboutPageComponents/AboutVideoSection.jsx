import React from "react";
import { PlayCircle } from "lucide-react";

export default function AboutVideoSection({ setVideoModalOpen }) {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <div
          className="relative max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
          onClick={() => setVideoModalOpen(true)}
        >
          <img
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
            alt="Video Thumbnail"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <PlayCircle
              size={90}
              className="text-white transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
