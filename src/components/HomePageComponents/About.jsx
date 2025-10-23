import React, { useRef, useEffect, useState } from "react";
import {
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: Users, text: "Expert Trainers", color: "text-blue-600" },
  { icon: TrendingUp, text: "Online Remote Learning", color: "text-green-600" },
  { icon: Target, text: "Lifetime Access", color: "text-purple-600" },
  { icon: Sparkles, text: "Free", color: "text-amber-600" },
];

export default function About() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContentVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleFeatures.includes(index)) {
              setVisibleFeatures((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    const currentImage = imageRef.current;
    const currentContent = contentRef.current;

    if (currentImage) imageObserver.observe(currentImage);
    if (currentContent) contentObserver.observe(currentContent);
    featureRefs.current.forEach((ref) => {
      if (ref) featureObserver.observe(ref);
    });

    return () => {
      if (currentImage) imageObserver.unobserve(currentImage);
      if (currentContent) contentObserver.unobserve(currentContent);
      featureRefs.current.forEach((ref) => {
        if (ref) featureObserver.unobserve(ref);
      });
    };
  }, [visibleFeatures]);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 transform ${
              isImageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative z-10 aspect-[4/3] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden group">
              <img
                src="https://placehold.co/800x600/8b5cf6/ffffff?text=Tim+UMKM+Hebat"
                alt="Tim UMKM Hebat"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 text-white z-20 hidden lg:block">
                <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">
                  Tim UMKM Hebat
                </h3>
                <p className="text-xs lg:text-sm text-white/90">
                  Bersama memajukan UMKM Indonesia
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-5 hidden lg:block animate-float-slow border border-gray-100">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg lg:rounded-xl flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">
                    10K+
                  </div>
                  <div className="text-xs text-gray-500">Active Members</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-40 hidden lg:block">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="dot-pattern"
                    width="12"
                    height="12"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="3" cy="3" r="2" fill="#8b5cf6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
              </svg>
            </div>

            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-auto z-20 flex items-center gap-2 lg:gap-3 bg-white/95 backdrop-blur-md px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl shadow-lg border border-gray-100">
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="text-white" size={18} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-gray-900 text-base lg:text-lg">
                  29+
                </span>
                <span className="text-gray-600 text-xs lg:text-sm">
                  Wonderful Awards
                </span>
              </div>
            </div>
          </div>

          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-300 transform ${
              isContentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-4 py-2 rounded-full uppercase tracking-wider">
                Tentang Kami
              </span>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UMKM Hebat,
              </span>
              <br />
              Platform Edukasi & Inkubasi UMKM
            </h2>

            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-3">
              UMKM HEBAT adalah platform persembahan YKBN (Yayasan Kagama Bhakti
              Nusantara) yang bertujuan untuk mendukung dan memajukan UMKM
              Indonesia agar dapat bersaing di Industri 4.0.
            </p>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              UMKM HEBAT hadir untuk menjadi wadah pemberdaya UMKM terbesar di
              Indonesia dengan mendayagunakan jaringan alumni UGM.
            </p>

            <div
              ref={(el) => (featureRefs.current[0] = el)}
              className={`transition-all duration-700 transform ${
                visibleFeatures.includes(0)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                ref={(el) => (featureRefs.current[0] = el)}
                className={`transition-all duration-700 transform ${
                  visibleFeatures.includes(0)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className="text-green-500 flex-shrink-0"
                        size={16}
                      />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
