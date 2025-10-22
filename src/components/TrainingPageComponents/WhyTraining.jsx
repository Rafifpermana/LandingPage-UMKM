import React from "react";
import { Award, ClipboardCheck, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "Instruktur Ahli & Praktisi",
    description:
      "Belajar langsung dari para profesional dan akademisi terbaik di bidangnya. Mereka tidak hanya menguasai teori, tetapi juga memiliki pengalaman praktis bertahun-tahun dalam membantu UMKM bertumbuh.",
  },
  {
    icon: ClipboardCheck,
    title: "Kurikulum Praktis & Aplikatif",
    description:
      "Materi kami disusun secara cermat agar relevan dengan tantangan nyata yang dihadapi UMKM saat ini. Fokus utama adalah pada keterampilan yang bisa langsung Anda terapkan untuk meningkatkan performa bisnis.",
  },
  {
    icon: Award,
    title: "Sertifikat Resmi & Kredibilitas",
    description:
      "Setelah menyelesaikan pelatihan, Anda akan mendapatkan sertifikat partisipasi resmi dari UMKM Hebat. Ini dapat meningkatkan kredibilitas Anda dan bisnis Anda di mata pelanggan maupun mitra.",
  },
];

export default function WhyTraining() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Ikut Training Kami?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Kami merancang program pelatihan intensif untuk akselerasi bisnis
            Anda.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full ring-4 ring-green-50">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
