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
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={() => setVideoModalOpen(false)}
    >
      <button
        onClick={() => setVideoModalOpen(false)}
        className="fixed top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10 transition-transform hover:scale-110"
        aria-label="Close video"
      >
        <X size={30} />
      </button>

      <div
        className="w-full max-w-screen-lg aspect-w-16 aspect-h-9"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
