import { useEffect, useState } from "react";
import { partnersData } from "../../data/HomePage/MitraData";

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute top-20 left-10 opacity-10">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-block mb-4">
              <p className="text-xs font-bold text-blue-700 bg-blue-600/20 px-4 py-2 rounded-full uppercase tracking-wider inline-block mb-3">
                PARTNER & MITRA
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Telah Dipercaya
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                Oleh
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              UMKM Hebat didukung dan dipercaya oleh berbagai lembaga terkemuka,
              mulai dari institusi pendidikan, perbankan nasional, hingga
              perusahaan BUMN untuk mengembangkan ekosistem UMKM Indonesia.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {partnersData.map((partner, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="group relative">
                    <div
                      className={`relative bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-24 md:h-28 flex items-center justify-center ${
                        hoveredIndex === index ? "scale-105" : ""
                      }`}
                    >
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]`}
                      ></div>
                    </div>

                    <div
                      className={`absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg transition-all duration-500 transform ${
                        hoveredIndex === index
                          ? "opacity-100 scale-100 rotate-6"
                          : "opacity-0 scale-0 rotate-0"
                      }`}
                    >
                      Partner
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
