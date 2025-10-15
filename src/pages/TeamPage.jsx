import React from "react";
import TeamHero from "../components/TeamPageComponents/TeamHero";
import TeamSection from "../components/TeamPageComponents/TeamSection";

const colors = [
  "bg-orange-500",
  "bg-teal-500",
  "bg-red-600",
  "bg-sky-500",
  "bg-lime-600",
  "bg-indigo-500",
  "bg-rose-500",
  "bg-amber-600",
  "bg-fuchsia-500",
  "bg-cyan-500",
  "bg-emerald-500",
];

const foundationBoard = [
  {
    title: "PEMBINA",
    members: [
      {
        name: "Prof. Dr. Paripurna, SH, M.Hum., LL.M",
        role: "Pembina",
        description:
          "Memberikan arahan dan nasihat strategis untuk kemajuan yayasan.",
        color: colors[0],
      },
      {
        name: "Suwignyo Budiman",
        role: "Pembina",
        description:
          "Mengawasi dan memastikan program-program yayasan berjalan sesuai visi.",
        color: colors[1],
      },
      {
        name: "Ahmad Yuniarto",
        role: "Pembina",
        description:
          "Membangun jaringan dan kemitraan untuk mendukung keberlanjutan yayasan.",
        color: colors[2],
      },
    ],
  },
  {
    title: "PENGAWAS",
    members: [
      {
        name: "Anton Mart",
        role: "Pengawas",
        description: "Mengawasi jalannya operasional dan keuangan yayasan.",
        color: colors[3],
      },
      {
        name: "J Widodo Hario Mumpuni",
        role: "Pengawas",
        description: "Memastikan kepatuhan dan tata kelola yayasan yang baik.",
        color: colors[4],
      },
      {
        name: "Djoko Srie Murdana",
        role: "Pengawas",
        description: "Memberikan tinjauan independen terhadap kinerja yayasan.",
        color: colors[5],
      },
    ],
  },
  {
    title: "PENGURUS INTI",
    members: [
      {
        name: "Swasti Atika",
        role: "Ketua",
        description:
          "Memimpin pelaksanaan program dan operasional harian yayasan.",
        color: colors[6],
      },
      {
        name: "Sri Utami Patriatami Situmorang",
        role: "Sekretaris",
        description:
          "Mengelola administrasi dan dokumentasi legalitas yayasan.",
        color: colors[7],
      },
      {
        name: "Aditya Wira",
        role: "Bendahara",
        description:
          "Bertanggung jawab atas pengelolaan keuangan dan anggaran yayasan.",
        color: colors[8],
      },
    ],
  },
];

const executiveTeam = [
  {
    title: "MANAJEMEN & PROGRAM",
    members: [
      {
        name: "Achmed Faiz Yudha Siregar",
        role: "Program Manager",
        description:
          "Mengelola dan mengembangkan semua program edukasi dan inkubasi.",
        color: colors[0],
      },
      {
        name: "Silvestra Gratiana Tyas Vita Wimasari",
        role: "Social Media",
        description:
          "Merancang dan mengeksekusi strategi komunikasi di media sosial.",
        color: colors[1],
      },
      {
        name: "Achmed Faiz Yudha Siregar",
        role: "Training, Inkubasi & Webinar",
        description:
          "Bertanggung jawab atas pelaksanaan pelatihan, inkubasi, dan webinar.",
        color: colors[2],
      },
    ],
  },
  {
    title: "KELAS UMKM HEBAT",
    members: [
      {
        name: "Priyagung Bawono Putro",
        role: "Kelas UMKM Hebat",
        description:
          "Bertanggung jawab atas kurikulum dan pelaksanaan Kelas UMKM Hebat.",
        color: colors[3],
      },
      {
        name: "Farahdila Yasmin",
        role: "Kelas UMKM Hebat",
        description:
          "Mendukung pengembangan materi dan interaksi dengan peserta kelas.",
        color: colors[4],
      },
      {
        name: "Cindy Mutiara Hapsari",
        role: "Kelas UMKM Hebat",
        description:
          "Memfasilitasi kebutuhan narasumber dan peserta selama kelas berlangsung.",
        color: colors[5],
      },
      {
        name: "Rahadyan Naratama Ryananta",
        role: "Kelas UMKM Hebat",
        description:
          "Mengelola platform digital dan teknis pelaksanaan kelas online.",
        color: colors[6],
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="bg-gray-100">
      <TeamHero />

      <TeamSection
        title="Pengurus Yayasan"
        subtitle="Yayasan Kagama Bhakti Nusantara (YKBN)"
        sections={foundationBoard}
      />

      <TeamSection
        title="Executive Team"
        subtitle="Tim yang menjalankan operasional UMKM Hebat sehari-hari"
        sections={executiveTeam}
      />
    </div>
  );
}
