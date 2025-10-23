import { Quote, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jhonni Sigiro",
    role: "Quality Assurance",
    text: "Membuat termotivasi untuk memulai dari yang kecil.",
    rating: 5,
    avatar: "JS",
    color: "bg-blue-500",
  },
  {
    name: "Fazat Fairuzia",
    role: "Mahasiswa",
    text: "Sangat mudah dipahami terutama bagi pemula, sehingga kami bisa mengetahui dasar untuk mengembangkan bisnis.",
    rating: 5,
    avatar: "FF",
    color: "bg-teal-500",
  },
  {
    name: "Noviana Manjaratna",
    role: "Student",
    text: "Sangat membantu untuk teman² yang baru atau sedang menjalani strategi marketing konsinyasi ini. Karena sesuai dengan pemaparan, butuh modal double untuk strategi ini.",
    rating: 5,
    avatar: "NM",
    color: "bg-purple-500",
  },
  {
    name: "Ratu Haerunisa",
    role: "Mahasiswa",
    text: "Materinya bagus banget dan sangat bermanfaat untuk pengembangan diri dan bisnis. Terima kasih UMKM Hebat.",
    rating: 5,
    avatar: "RH",
    color: "bg-pink-500",
  },
];

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => setIsVisible(true), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 bg-wihte overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-20 left-20 grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-purple-600 rounded-full"></div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-block">
              <p className="text-xs font-bold text-blue-600 bg-blue-500/20 px-4 py-2 rounded-full uppercase tracking-wider inline-block mb-3">
                TESTIMONI
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-loose">
              Mereka yang telah bergabung dengan{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UMKM Hebat,
              </span>
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Testimoni mereka yang telah bergabung dengan berbagai program yang
              disajikan oleh tim UMKM Hebat.
            </p>

            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Testimoni Selengkapnya
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[320px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0 z-10"
                      : index ===
                        (currentIndex - 1 + testimonials.length) %
                          testimonials.length
                      ? "opacity-0 -translate-x-8 z-0"
                      : "opacity-0 translate-x-8 z-0"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-opacity duration-500 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    <div className="absolute top-6 right-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center transition-all duration-500 transform ${
                          hoveredIndex === index
                            ? "rotate-12 scale-110"
                            : "rotate-0"
                        }`}
                      >
                        <Quote className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`${
                            testimonial.color
                          } w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-transform duration-500 ${
                            hoveredIndex === index ? "scale-110 rotate-6" : ""
                          }`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 transition-all duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-full opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
