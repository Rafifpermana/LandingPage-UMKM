import React from "react";
import { Target, TrendingUp, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Miliki Dampak Nyata",
    description:
      "Pekerjaan Anda akan secara langsung berkontribusi pada pertumbuhan dan kesuksesan jutaan UMKM di Indonesia.",
  },
  {
    icon: TrendingUp,
    title: "Ruang Inovasi",
    description:
      "Kami adalah organisasi yang dinamis. Anda akan memiliki otonomi dan kesempatan untuk berinovasi.",
  },
  {
    icon: Users2,
    title: "Kultur Kolaboratif",
    description:
      "Bergabunglah dengan tim yang cerdas, suportif, dan didorong oleh misi yang sama untuk pemberdayaan.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Mengapa Berkarir di UMKM Hebat?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Kami menawarkan lebih dari sekadar pekerjaan. Kami menawarkan misi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
