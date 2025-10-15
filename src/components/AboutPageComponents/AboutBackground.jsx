import React from "react";
import {
  Briefcase,
  Users,
  Laptop,
  TrendingDown,
  ShieldAlert,
  Handshake,
  Rocket,
} from "lucide-react";

const backgroundSteps = [
  {
    icon: Briefcase,
    color: "bg-green-100 text-green-600",
    text: "Terdapat 64,2 juta UMKM di Indonesia yang berkontribusi terhadap 60,3% PDB nasional dan menyerap 97% tenaga kerja.",
  },
  {
    icon: Users,
    color: "bg-red-100 text-red-600",
    text: "UMKM termasuk jenis usaha padat karya dengan menyerap 97% dari total tenaga kerja.",
  },
  {
    icon: Laptop,
    color: "bg-blue-100 text-blue-600",
    text: "Munculnya inisiatif untuk membuat wadah kegiatan UMKM yang menghubungkan UGM, KAGAMA, dan stakeholders terkait dalam bentuk platform digital.",
  },
  {
    icon: TrendingDown,
    color: "bg-cyan-100 text-cyan-600",
    text: "Dampak pandemi membuat masyarakat mengalami penurunan pendapatan secara signifikan.",
  },
  {
    icon: ShieldAlert,
    color: "bg-gray-100 text-gray-600",
    text: "Sebanyak 90% UMKM terdampak pandemi, termasuk circle terdekat kita.",
  },
  {
    icon: Handshake,
    color: "bg-indigo-100 text-indigo-600",
    text: "Memperkuat solidaritas antara UGM dan Warga KAGAMA khususnya pada bidang pemberdayaan UMKM.",
  },
  {
    icon: Rocket,
    color: "bg-yellow-100 text-yellow-600",
    text: "Perlunya kesadaran bersama untuk membangun platform digital yang bisa mendatangkan manfaat lebih besar di masa depan.",
  },
];

const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <div
      className="relative bg-white pt-10 pb-8 px-6 rounded-3xl shadow-xl border border-gray-100 text-center 
                 flex flex-col items-center justify-start min-h-[250px] transition-all duration-300 
                 hover:shadow-2xl hover:-translate-y-2 group"
    >
      <div
        className={`absolute -top-7 ${step.color} w-16 h-16 rounded-full 
                   flex items-center justify-center shadow-lg transform transition-transform duration-300 
                   group-hover:scale-110`}
      >
        <Icon size={28} />
      </div>
      <div className="mt-6 text-5xl font-extrabold text-gray-800 mb-4 leading-none">
        {index + 1}
      </div>
      <p className="text-gray-600 text-base leading-relaxed max-w-[80%] mx-auto">
        {step.text}
      </p>
    </div>
  );
};

export default function AboutBackground() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Latar Belakang Pendirian
          </h2>
          <span className="block text-blue-600 text-3xl lg:text-4xl font-bold">
            UMKM Hebat
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {backgroundSteps.slice(0, 6).map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}

          <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
            <StepCard step={backgroundSteps[6]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
}
