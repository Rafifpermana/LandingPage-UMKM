import React from "react";
import { Target, TrendingUp, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Miliki Dampak Nyata",
    description:
      "Pekerjaan Anda akan secara langsung berkontribusi pada pertumbuhan dan kesuksesan jutaan UMKM di Indonesia. Rasakan kepuasan bekerja untuk misi sosial yang lebih besar.", // Deskripsi sedikit diperpanjang
  },
  {
    icon: TrendingUp,
    title: "Ruang Inovasi & Pertumbuhan",
    description:
      "Kami adalah organisasi yang dinamis dan terus berkembang. Anda akan memiliki otonomi, kesempatan untuk mencoba ide-ide baru, dan jalur karir yang jelas untuk bertumbuh bersama kami.",
  },
  {
    icon: Users2,
    title: "Kultur Kolaboratif & Suportif",
    description:
      "Bergabunglah dengan tim yang terdiri dari individu cerdas, bersemangat, dan suportif. Kami percaya pada kerja sama tim dan saling mendukung untuk mencapai tujuan bersama.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Berkarir di UMKM Hebat?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Kami menawarkan lebih dari sekadar pekerjaan. Kami menawarkan misi
            dan kesempatan bertumbuh.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full ring-4 ring-blue-50">
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
