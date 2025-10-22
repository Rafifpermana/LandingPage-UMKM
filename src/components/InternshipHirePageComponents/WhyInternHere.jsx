import React from "react";
import { BookOpen, UserCheck, Rocket } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Belajar Langsung dari Praktisi",
    description:
      "Dapatkan bimbingan intensif dari para profesional di bidangnya dan terlibat langsung dalam proyek-proyek nyata yang memberikan dampak.",
  },
  {
    icon: UserCheck,
    title: "Bangun Portofolio Profesional",
    description:
      "Selesaikan program magang dengan hasil karya dan pengalaman yang bisa Anda banggakan dan tunjukkan kepada perekrut di masa depan.",
  },
  {
    icon: Rocket,
    title: "Akselerasi Peluang Karir",
    description:
      "Peserta magang dengan kinerja terbaik akan menjadi prioritas utama kami untuk dipertimbangkan dalam lowongan pekerjaan full-time di UMKM Hebat.",
  },
];

export default function WhyInternHere() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Magang di UMKM Hebat?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Kami berinvestasi pada talenta muda. Ini adalah landasan karir yang
            solid.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-14 h-14 bg-cyan-100 text-cyan-600 rounded-full ring-4 ring-cyan-50">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
