import React from "react";
import { Award, ClipboardCheck, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "Instruktur Ahli",
    description:
      "Belajar langsung dari praktisi dan akademisi terbaik yang telah terbukti sukses di bidangnya.",
  },
  {
    icon: ClipboardCheck,
    title: "Kurikulum Praktis",
    description:
      "Materi disusun relevan dengan tantangan nyata UMKM dan fokus pada skill yang bisa langsung diterapkan.",
  },
  {
    icon: Award,
    title: "Sertifikat Resmi",
    description:
      "Dapatkan sertifikat partisipasi yang diakui untuk meningkatkan kredibilitas bisnismu.",
  },
];

export default function WhyTraining() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Mengapa Ikut Training Kami?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Kami merancang program pelatihan intensif untuk akselerasi bisnis
            Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
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
