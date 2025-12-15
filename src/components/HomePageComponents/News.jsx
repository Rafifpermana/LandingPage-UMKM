import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { newsData } from "../../data/HomePage/newsData";

export default function News() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute top-10 left-10">
        <div className="w-20 h-20 border-8 border-red-500 rounded-full"></div>
      </div>

      <div className="absolute top-20 right-20 opacity-10">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-20 opacity-10">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <div className="w-16 h-16 border-4 border-red-500 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-block">
            <p className="text-xs font-bold text-blue-600 bg-blue-500/20 px-4 py-2 rounded-full uppercase tracking-wider inline-block mb-3">
              TERBARU
            </p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Berita & Artikel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((article, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative h-56 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${article.img} transition-transform duration-700 group-hover:scale-110`}
                  ></div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-40"
                    }`}
                  ></div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="text-blue-600" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
                    {article.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group/link"
                  >
                    Baca Selengkapnya
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/link:translate-x-2"
                    />
                  </a>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="/blog"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
