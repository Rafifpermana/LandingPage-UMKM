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

export default function AboutBackground() {
  const backgroundSteps = [
    {
      icon: Briefcase,
      color: "from-emerald-400 to-green-500",
      text: "Terdapat 64,2 juta UMKM di Indonesia yang berkontribusi terhadap 60,3% PDB nasional dan menyerap 97% tenaga kerja.",
    },
    {
      icon: Users,
      color: "from-rose-400 to-red-500",
      text: "UMKM termasuk jenis usaha padat karya dengan menyerap 97% dari total tenaga kerja.",
    },
    {
      icon: Laptop,
      color: "from-blue-400 to-indigo-500",
      text: "Munculnya inisiatif untuk membuat wadah kegiatan UMKM yang menghubungkan UGM, KAGAMA, dan stakeholders terkait dalam bentuk platform digital.",
    },
    {
      icon: TrendingDown,
      color: "from-cyan-400 to-blue-500",
      text: "Dampak pandemi membuat masyarakat mengalami penurunan pendapatan secara signifikan.",
    },
    {
      icon: ShieldAlert,
      color: "from-slate-400 to-gray-500",
      text: "Sebanyak 90% UMKM terdampak pandemi, termasuk circle terdekat kita.",
    },
    {
      icon: Handshake,
      color: "from-indigo-400 to-purple-500",
      text: "Memperkuat solidaritas antara UGM dan Warga KAGAMA khususnya pada bidang pemberdayaan UMKM.",
    },
    {
      icon: Rocket,
      color: "from-amber-400 to-orange-500",
      text: "Perlunya kesadaran bersama untuk membangun platform digital yang bisa mendatangkan manfaat lebih besar di masa depan.",
    },
  ];

  const StepCard = ({ step, index }) => {
    const Icon = step.icon;
    return (
      <div className="group relative">
        <div className="relative bg-white pt-12 pb-8 px-6 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center min-h-[280px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div
            className={`absolute -top-8 bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
          >
            <Icon size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="mt-6 text-6xl font-black bg-gradient-to-br from-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
            {index + 1}
          </div>
          <p className="text-gray-600 text-base leading-relaxed">{step.text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Latar Belakang Pendirian
          </h2>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-3xl lg:text-5xl font-bold">
            UMKM Hebat
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
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
