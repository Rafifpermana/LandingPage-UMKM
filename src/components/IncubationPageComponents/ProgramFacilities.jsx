import React from "react";
import { UserCheck, BookOpen, BarChart, Zap, Users, Award } from "lucide-react";

const facilities = [
  {
    icon: UserCheck,
    title: "Mentorship 1-on-1",
    description:
      "Dapatkan bimbingan personal dari mentor ahli yang disesuaikan dengan kebutuhan unik bisnismu.",
  },
  {
    icon: BookOpen,
    title: "Kurikulum Intensif",
    description:
      "Materi mendalam mulai dari validasi produk, strategi marketing, manajemen keuangan, hingga legalitas.",
  },
  {
    icon: Zap,
    title: "Jaringan Investor",
    description:
      "Kesempatan pitching langsung di depan angel investor dan venture capital di akhir program (Demo Day).",
  },
];

export default function ProgramFacilities() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Fasilitas Program
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk naik kelas, semuanya kami siapkan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
