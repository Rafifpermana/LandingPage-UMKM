import React, { useRef, useEffect, useState } from "react";
import {
  ShoppingCart,
  Users,
  Presentation,
  CalendarDays,
  MonitorPlay,
  Handshake,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    title: "Kelas UMKM",
    description: "Pembelajaran terstruktur untuk mengembangkan bisnis Anda",
    icon: ShoppingCart,
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
    hoverColor: "hover:from-cyan-100 hover:to-cyan-200",
    link: "/program/kelas",
  },
  {
    title: "Inkubasi UMKM",
    description: "Pendampingan intensif untuk startup dan bisnis baru",
    icon: Users,
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    iconBg: "bg-red-500",
    iconColor: "text-white",
    hoverColor: "hover:from-red-100 hover:to-red-200",
    link: "/inkubasi",
  },
  {
    title: "Training UMKM",
    description: "Pelatihan praktis untuk meningkatkan skill bisnis",
    icon: Presentation,
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-500",
    iconColor: "text-white",
    hoverColor: "hover:from-green-100 hover:to-green-200",
    link: "/training-umkm",
  },
  {
    title: "UMKM Days",
    description: "Event tahunan untuk networking dan kolaborasi",
    icon: CalendarDays,
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    hoverColor: "hover:from-amber-100 hover:to-amber-200",
    link: "/umkm-days",
  },
  {
    title: "Webinar",
    description: "Diskusi online dengan praktisi dan ahli bisnis",
    icon: MonitorPlay,
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    hoverColor: "hover:from-purple-100 hover:to-purple-200",
    link: "#webinar",
  },
  {
    title: "Magang & Relawan",
    description: "Kesempatan berkontribusi dan belajar bersama",
    icon: Handshake,
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconBg: "bg-pink-500",
    iconColor: "text-white",
    hoverColor: "hover:from-pink-100 hover:to-pink-200",
    link: "/magang-relawan",
  },
];

export default function Programs() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (currentSection) {
      sectionObserver.observe(currentSection);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      if (currentSection) sectionObserver.unobserve(currentSection);
      cardRefs.current.forEach((card) => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          ref={sectionRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative">
            Program
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UMKM Hebat,
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
            Berbagai program yang menjadi fokus utama UMKM Hebat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <a
              href={program.link || "#"}
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative block transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: visibleCards.includes(index)
                  ? `${(index % 3) * 100}ms`
                  : "0ms",
              }}
            >
              <div
                className={`relative h-full ${program.bgColor} ${program.hoverColor} rounded-xl p-5 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 border border-gray-100`}
              >
                <div
                  className={`${program.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                >
                  <program.icon
                    className={program.iconColor}
                    size={22}
                    strokeWidth={2}
                  />
                </div>

                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gray-800 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="flex items-center text-gray-700 font-medium text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-1">Pelajari lebih lanjut</span>
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
