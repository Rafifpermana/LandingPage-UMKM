import { useState, useEffect } from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function TeamMemberCard({
  name,
  role,
  description,
  image,
  color,
  linkedin,
  instagram,
  facebook,
  twitter,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(image)
    ? image
    : [image || "https://placehold.co/400x500/334155/94a3b8?text=Photo"];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const hasSocialMedia = linkedin || instagram || facebook || twitter;

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Foto profil ${name} ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            } ${isHovered && index === currentImageIndex ? "scale-110" : ""}`}
            onError={(e) => {
              e.target.src =
                "https://placehold.co/400x500/334155/94a3b8?text=Photo";
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg z-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">
            {role}
          </p>
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="relative p-5">
        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
          {name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>

        {hasSocialMedia && (
          <div className="flex items-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-blue-700 hover:text-white text-slate-700 transition-all duration-200"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-pink-600 hover:text-white text-slate-700 transition-all duration-200"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all duration-200"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook size={16} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-700 transition-all duration-200"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter size={16} />
              </a>
            )}
          </div>
        )}

        {!hasSocialMedia && (
          <div className="text-xs text-gray-400 italic">
            Tidak ada kontak sosial media
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${color} transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
