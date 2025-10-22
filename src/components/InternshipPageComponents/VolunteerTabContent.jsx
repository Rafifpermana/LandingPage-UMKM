import React from "react";
import { Link } from "react-router-dom";
import BenefitPoint from "./BenefitPoint";
import StepItem from "./StepItem";
import { HeartHandshake, Sparkles, Clock } from "lucide-react";

const volunteerBenefits = [
  {
    icon: HeartHandshake,
    title: "Memberi Kembali",
    description: "Gunakan skill Anda untuk tujuan mulia membantu UMKM lokal.",
  },
  {
    icon: Sparkles,
    title: "Pengalaman Berharga",
    description: "Terlibat dalam proyek bermakna dan perluas perspektif Anda.",
  },
  {
    icon: Clock,
    title: "Fleksibilitas",
    description:
      "Berkontribusi sesuai ketersediaan waktu Anda, remote atau berbasis event.",
  },
];

const volunteerSteps = [
  {
    num: "01",
    title: "Pilih Kesempatan",
    description:
      "Lihat daftar kesempatan relawan dan pilih yang paling menarik minatmu.",
  },
  {
    num: "02",
    title: "Isi Formulir",
    description:
      "Klik 'Saya Tertarik' pada kesempatan yang dipilih dan isi formulir singkat.",
  },
  {
    num: "03",
    title: "Wawancara Singkat",
    description: "Diskusi santai dengan tim kami untuk memastikan kesesuaian.",
  },
  {
    num: "04",
    title: "Mulai Berkontribusi",
    description: "Selamat bergabung! Kamu siap memberikan dampak positif.",
  },
];

export default function VolunteerTabContent() {
  return (
    <div className="animate-fade-in space-y-10">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Tentang Program Relawan
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Bergabunglah sebagai Relawan UMKM Hebat dan gunakan keahlianmu untuk
          memberikan dampak sosial. Program ini fleksibel, memungkinkan Anda
          berkontribusi sesuai ketersediaan waktu, baik untuk proyek spesifik
          maupun jangka panjang (remote, event-based). Mari bersama majukan UMKM
          Indonesia!
        </p>
      </div>
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Mengapa Menjadi Relawan?
        </h3>
        {volunteerBenefits.map((benefit) => (
          <BenefitPoint key={benefit.title} {...benefit} />
        ))}
      </div>
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Alur Pendaftaran Relawan
        </h3>
        <div className="relative">
          {volunteerSteps.map((step) => (
            <StepItem key={step.num} {...step} />
          ))}
        </div>
      </div>
      <div className="text-center pt-6">
        <Link to="/karir-relawan">
          <button className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
            Lihat Kesempatan Relawan
          </button>
        </Link>
      </div>
    </div>
  );
}
