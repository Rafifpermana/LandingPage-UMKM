import React from "react";
import { X } from "lucide-react";

export default function VideoModal({
  isVideoModalOpen,
  setVideoModalOpen,
  videoId = "dQw4w9WgXcQ",
}) {
  if (!isVideoModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={() => setVideoModalOpen(false)}
    >
      <button
        onClick={() => setVideoModalOpen(false)}
        className="fixed top-4 right-4 text-white bg-white/10 backdrop-blur-md rounded-full p-3 z-10 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:rotate-90"
        aria-label="Close video"
      >
        <X size={28} />
      </button>

      <div
        className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
