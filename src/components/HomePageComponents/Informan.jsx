import { Share2, Facebook, X, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const speakers = [
  {
    name: "Yunita Sari",
    title: "Kepala Departemen Pengembangan dan Pembinaan Koperasi Kementerian",
    image: "YS",
    bgColor: "bg-pink-100",
  },
  {
    name: "Prof. dr. Ova Emilia",
    title: "Rektor Universitas Gadjah Mada",
    image: "OE",
    bgColor: "bg-gray-200",
  },
  {
    name: "Prilly Latuconsina",
    title: "Artis & Pengusaha",
    image: "PL",
    bgColor: "bg-blue-100",
  },
  {
    name: "Suwignyo Budiman",
    title: "Presiden Komisaris BCA Finance",
    image: "SB",
    bgColor: "bg-red-100",
  },
  {
    name: "Perry Warjiyo",
    title: "Gubernur Bank Indonesia",
    image: "PW",
    bgColor: "bg-orange-100",
  },
  {
    name: "Inul Daratista",
    title: "Penyanyi & Pengusaha",
    image: "ID",
    bgColor: "bg-teal-100",
  },
];

export default function SpeakersSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = document.getElementById("speakers-container");
    if (container) {
      const maxScroll = container.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        container.scrollLeft = 0;
        setScrollPosition(0);
      } else {
        container.scrollLeft = scrollPosition;
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + 2.0);
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-black font-bold text-lg tracking-wide mb-2 uppercase">
            Narasumber Hebat Yang Pernah Mengisi Di
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UMKM Hebat
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            id="speakers-container"
            className="flex gap-6 overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...speakers, ...speakers].map((speaker, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group cursor-pointer mb-8">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div
                      className={`relative h-64 ${speaker.bgColor} flex items-center justify-center overflow-hidden`}
                    >
                      <div className="text-gray-400 text-7xl font-bold opacity-20">
                        {speaker.image}
                      </div>

                      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 z-20">
                        <Share2 size={18} />
                      </button>

                      <div
                        className={`absolute top-16 right-4 flex flex-col gap-3 transition-all duration-700 ease-out ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-6 pointer-events-none"
                        }`}
                      >
                        <button
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                          style={{
                            transitionDelay:
                              hoveredIndex === index ? "100ms" : "0ms",
                          }}
                        >
                          <Facebook size={18} />
                        </button>
                        <button
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                          style={{
                            transitionDelay:
                              hoveredIndex === index ? "100ms" : "0ms",
                          }}
                        >
                          <Instagram size={18} />
                        </button>
                        <button
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                          style={{
                            transitionDelay:
                              hoveredIndex === index ? "100ms" : "0ms",
                          }}
                        >
                          <Linkedin size={18} />
                        </button>
                      </div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ease-in-out ${
                          hoveredIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      ></div>
                    </div>

                    <div className="p-6 text-center bg-white ">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
