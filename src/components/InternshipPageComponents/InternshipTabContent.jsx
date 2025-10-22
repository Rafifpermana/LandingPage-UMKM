import React from "react";
import { Link } from "react-router-dom";
import BenefitPoint from "./BenefitPoint";
import StepItem from "./StepItem";
import { BookOpen, UserCheck, Rocket } from "lucide-react";

const internshipBenefits = [
  {
    icon: BookOpen,
    title: "Belajar dari Praktisi",
    description:
      "Bimbingan langsung dari mentor berpengalaman dan terlibat dalam proyek nyata.",
  },
  {
    icon: UserCheck,
    title: "Bangun Portofolio",
    description: "Hasil kerja yang bisa dibanggakan untuk karir masa depanmu.",
  },
  {
    icon: Rocket,
    title: "Peluang Karir",
    description:
      "Kinerja terbaik berpeluang direkrut menjadi tim inti UMKM Hebat.",
  },
];

const internshipSteps = [
  {
    num: "01",
    title: "Pilih Lowongan",
    description:
      "Jelajahi daftar lowongan magang yang tersedia dan pilih yang sesuai.",
  },
  {
    num: "02",
    title: "Kirim Berkas",
    description:
      "Lengkapi CV, portofolio (jika relevan), dan surat motivasi terbaikmu.",
  },
  {
    num: "03",
    title: "Seleksi",
    description:
      "Proses seleksi meliputi review administrasi, asesmen (jika ada), dan wawancara.",
  },
  {
    num: "04",
    title: "Offering",
    description:
      "Selamat! Jika lolos, kamu akan menerima surat penawaran magang.",
  },
];

export default function InternshipTabContent() {
  return (
    <div className="animate-fade-in space-y-10">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Tentang Program Magang
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Program Magang UMKM Hebat adalah kesempatan emas bagi mahasiswa dan
          lulusan baru untuk terjun langsung ke dunia kerja profesional.
          Dapatkan pengalaman berharga, kembangkan skill relevan industri, dan
          bangun portofolio Anda sambil berkontribusi nyata bagi UMKM. Durasi
          program bervariasi antara 3-6 bulan, tersedia opsi remote, hybrid,
          maupun WFO tergantung posisi.
        </p>
      </div>

      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Mengapa Magang di Sini?
        </h3>
        {internshipBenefits.map((benefit) => (
          <BenefitPoint key={benefit.title} {...benefit} />
        ))}
      </div>

      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Alur Pendaftaran Magang
        </h3>
        <div className="relative">
          {internshipSteps.map((step) => (
            <StepItem key={step.num} {...step} />
          ))}
        </div>
      </div>

      <div className="text-center pt-6">
        <Link to="/karir-magang">
          <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Lihat Lowongan Magang Tersedia
          </button>
        </Link>
      </div>
    </div>
  );
}
