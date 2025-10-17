import React from "react";
import { BookOpen, UserCheck, Rocket } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Belajar dari Praktisi",
    description:
      "Dapatkan bimbingan langsung dari para profesional di bidangnya dan kerjakan proyek yang nyata.",
  },
  {
    icon: UserCheck,
    title: "Bangun Portofolio",
    description:
      "Selesaikan program dengan hasil karya yang bisa kamu banggakan dan tunjukkan kepada perekrut di masa depan.",
  },
  {
    icon: Rocket,
    title: "Peluang Karir",
    description:
      "Peserta magang dengan kinerja terbaik akan menjadi prioritas kami untuk lowongan full-time.",
  },
];

export default function WhyInternHere() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Mengapa Magang di UMKM Hebat?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Kami berinvestasi pada talenta muda. Ini yang akan kamu dapatkan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
