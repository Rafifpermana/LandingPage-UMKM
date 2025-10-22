import React from "react";
import { Store, Mic, Users, Award } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Bazaar & Pameran Produk",
    description:
      "Pamerkan dan temukan produk UMKM unggulan dari berbagai daerah dalam satu tempat.",
  },
  {
    icon: Mic,
    title: "Talkshow Inspiratif",
    description:
      "Dengarkan cerita sukses dan strategi bisnis langsung dari para ahli dan pengusaha ternama.",
  },
  {
    icon: Users,
    title: "Networking Session",
    description:
      "Perluas jaringan bisnismu, bertemu calon mitra, investor, dan sesama pelaku UMKM.",
  },
  {
    icon: Award,
    title: "UMKM Hebat Awards",
    description:
      "Malam penganugerahan bagi UMKM berprestasi yang telah menunjukkan pertumbuhan luar biasa.",
  },
];

export default function EventIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Lebih dari Sekadar Acara
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            UMKM Days adalah acara puncak tahunan kami yang mempertemukan
            ratusan UMKM, investor, ahli industri, dan masyarakat umum. Ini
            adalah panggung bagi mereka untuk bersinar, berkolaborasi, dan
            merayakan pencapaian.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full ring-4 ring-yellow-50">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
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
