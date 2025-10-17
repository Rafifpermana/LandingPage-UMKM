import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    src: "https://placehold.co/1200x600/f59e0b/ffffff?text=Bazaar+Produk",
    alt: "Suasana Bazaar Produk UMKM Days",
  },
  {
    id: 2,
    src: "https://placehold.co/1200x600/10b981/ffffff?text=Talkshow",
    alt: "Talkshow Inspiratif",
  },
  {
    id: 3,
    src: "https://placehold.co/1200x600/3b82f6/ffffff?text=Networking",
    alt: "Sesi Networking",
  },
  {
    id: 4,
    src: "https://placehold.co/1200x600/8b5cf6/ffffff?text=Awarding",
    alt: "Malam Penganugerahan UMKM Hebat Awards",
  },
];

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Galeri Momen
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image) => (
              <div key={image.id} className="w-full h-full flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition text-gray-800"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition text-gray-800"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
