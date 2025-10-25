import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import TabNavigation from "./TabNavigation";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("foundation");

  const colors = [
    "bg-gradient-to-br from-orange-500 to-orange-600",
    "bg-gradient-to-br from-teal-500 to-teal-600",
    "bg-gradient-to-br from-red-500 to-red-600",
    "bg-gradient-to-br from-sky-500 to-sky-600",
    "bg-gradient-to-br from-lime-500 to-lime-600",
    "bg-gradient-to-br from-indigo-500 to-indigo-600",
    "bg-gradient-to-br from-rose-500 to-rose-600",
    "bg-gradient-to-br from-amber-500 to-amber-600",
    "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
    "bg-gradient-to-br from-cyan-500 to-cyan-600",
    "bg-gradient-to-br from-emerald-500 to-emerald-600",
  ];

  const randomImages = [
    [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=500&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop",
    ],
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
          image: randomImages[0],
        },
        {
          name: "Suwignyo Budiman",
          role: "Pembina",
          description:
            "Mengawasi dan memastikan program-program yayasan berjalan sesuai visi.",
          color: colors[1],
          image: randomImages[1],
        },
        {
          name: "Ahmad Yuniarto",
          role: "Pembina",
          description:
            "Membangun jaringan dan kemitraan untuk mendukung keberlanjutan yayasan.",
          color: colors[2],
          image: randomImages[2],
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
          image: randomImages[3],
        },
        {
          name: "J Widodo Hario Mumpuni",
          role: "Pengawas",
          description:
            "Memastikan kepatuhan dan tata kelola yayasan yang baik.",
          color: colors[4],
          image: randomImages[4],
        },
        {
          name: "Djoko Srie Murdana",
          role: "Pengawas",
          description:
            "Memberikan tinjauan independen terhadap kinerja yayasan.",
          color: colors[5],
          image: randomImages[5],
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
          image: randomImages[6],
        },
        {
          name: "Sri Utami Patriatami Situmorang",
          role: "Sekretaris",
          description:
            "Mengelola administrasi dan dokumentasi legalitas yayasan.",
          color: colors[7],
          image: randomImages[7],
        },
        {
          name: "Aditya Wira",
          role: "Bendahara",
          description:
            "Bertanggung jawab atas pengelolaan keuangan dan anggaran yayasan.",
          color: colors[8],
          image: randomImages[8],
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
          image: randomImages[9],
        },
        {
          name: "Silvestra Gratiana Tyas Vita Wimasari",
          role: "Social Media",
          description:
            "Merancang dan mengeksekusi strategi komunikasi di media sosial.",
          color: colors[1],
          image: randomImages[10],
        },
        {
          name: "Achmed Faiz Yudha Siregar",
          role: "Training, Inkubasi & Webinar",
          description:
            "Bertanggung jawab atas pelaksanaan pelatihan, inkubasi, dan webinar.",
          color: colors[2],
          image: randomImages[11],
        },
      ],
    },
    {
      title: "KELAS UMKM HEBAT",
      members: [
        {
          name: "Priyanggung Bawono Putro",
          role: "Kelas UMKM Hebat",
          description:
            "Bertanggung jawab atas kurikulum dan pelaksanaan Kelas UMKM Hebat.",
          color: colors[3],
          image: randomImages[12],
        },
        {
          name: "Farahdila Yasmin",
          role: "Kelas UMKM Hebat",
          description:
            "Mendukung pengembangan materi dan interaksi dengan peserta kelas.",
          color: colors[4],
          image: randomImages[0],
        },
        {
          name: "Cindy Mutiara Hapsari",
          role: "Kelas UMKM Hebat",
          description:
            "Memfasilitasi kebutuhan narasumber dan peserta selama kelas berlangsung.",
          color: colors[5],
          image: randomImages[1],
        },
        {
          name: "Rahadyan Naratama Ryananta",
          role: "Kelas UMKM Hebat",
          description:
            "Mengelola platform digital dan teknis pelaksanaan kelas online.",
          color: colors[6],
          image: randomImages[2],
        },
      ],
    },
  ];

  const sectionDataConfig = {
    foundation: {
      title: "Pengurus Yayasan",
      subtitle: "Yayasan Kagama Bhakti Nusantara (YKBN)",
      sections: foundationBoard,
    },
    executive: {
      title: "Executive Team",
      subtitle: "Tim yang menjalankan operasional UMKM Hebat sehari-hari",
      sections: executiveTeam,
    },
  };

  const tabs = [
    { id: "foundation", label: "Pengurus Yayasan" },
    { id: "executive", label: "Executive Team" },
  ];

  const { title, subtitle, sections } = sectionDataConfig[activeTab];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider">
            {activeTab === "foundation" ? "Struktur Organisasi" : "Tim Kami"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />

        <div className="mt-12">
          {sections.map((section) => (
            <div key={section.title} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.members.map((member, index) => (
                  <div
                    key={`${member.name}-${index}`}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TeamMemberCard
                      name={member.name}
                      role={member.role}
                      description={member.description}
                      color={member.color}
                      image={member.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
