import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Platform Edukasi & Inkubasi UMKM",
    bg: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    title: "Kembangkan Bisnis Anda Bersama Ahli",
    bg: "from-purple-600 to-purple-800",
  },
  {
    id: 3,
    title: "Raih Kesuksesan di Era Digital",
    bg: "from-green-600 to-green-800",
  },
  {
    id: 4,
    title: "Raih Kesuksesan di Era Digital",
    bg: "from-red-600 to-red-800",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-96 lg:h-[550px] overflow-hidden">
      <div
        className="relative h-full w-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <div
              className={`w-full h-full bg-gradient-to-r ${slide.bg} flex items-center justify-center`}
            >
              <div className="text-center text-white px-4">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 animate-fade-in-down">
                  {slide.title}
                </h1>
                <p className="text-lg lg:text-xl mb-8 animate-fade-in-up">
                  Wujudkan UMKM Indonesia yang Berdaya Saing Global.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-transform hover:scale-105 duration-300">
                  Mulai Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition text-white"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
