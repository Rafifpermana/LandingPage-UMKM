import React from "react";
import { HeartHandshake, Sparkles, Clock } from "lucide-react";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Memberi Kembali",
    description:
      "Gunakan keahlianmu untuk tujuan mulia dan bantu UMKM lokal berkembang di era digital.",
  },
  {
    icon: Sparkles,
    title: "Pengalaman Berharga",
    description:
      "Asah skill di dunia nyata, terlibat dalam proyek bermakna, dan perluas perspektifmu.",
  },
  {
    icon: Clock,
    title: "Fleksibilitas Waktu",
    description:
      "Berkontribusi sesuai ketersediaan waktumu, baik per proyek maupun jangka waktu tertentu.",
  },
];

export default function WhyVolunteer() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Mengapa Menjadi Relawan?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Ini adalah kesempatan untuk berbuat baik sambil tetap mengembangkan
            diri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
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
