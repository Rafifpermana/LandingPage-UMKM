import React from "react";
import { Zap, BarChart3, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Buat Dampak Nyata",
    description:
      "Kontribusimu akan langsung membantu ribuan UMKM di seluruh Indonesia untuk tumbuh dan berkembang.",
  },
  {
    icon: BarChart3,
    title: "Kembangkan Skill",
    description:
      "Dapatkan pengalaman kerja profesional, pelajari skill baru, dan bangun portofoliomu di lingkungan yang suportif.",
  },
  {
    icon: Users,
    title: "Perluas Jaringan",
    description:
      "Terhubung dengan para mentor, profesional di industri, dan sesama anak muda hebat dari berbagai latar belakang.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Mengapa Bergabung?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Lebih dari sekadar magang, ini adalah kesempatanmu untuk bertumbuh
            sambil memberi arti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
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
