import React from "react";
import { Globe, Lightbulb, Leaf, Users, Recycle } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Digitalisasi",
    description:
      "Digitalisasi menjadi perkembangan yang begitu pesat, karena Revolusi Industri 4.0 dengan berbagai perubahan beserta disrupsi yang terjadi. Berbagai keterampilan baru yang dibutuhkan untuk beradaptasi di transaksi digital bagi UMKM.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description:
      "Optimalisasi dari pilar inovasi dalam kegiatan UMKM juga berkorelasi dengan nilai sustainability dari usaha yang dijalankan oleh pelaku UMKM. Perubahan situasi membuat pelaku UMKM harus dapat adaptif untuk tetap mempertahankan usahanya.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Selain dukungan untuk menjadi ‘go digital’, pengembangan UMKM yang lebih optimal juga didukung oleh inovasi secara berkelanjutan bagi para pelaku UMKM dengan mendukung pertumbuhan yang inklusif dan ramah lingkungan.",
  },
  {
    icon: Users,
    title: "Inklusivitas",
    description:
      "Pilar inklusivitas merujuk pada perlunya urgensi untuk menghadirkan sarana dan prasarana bagi para pelaku UMKM di seluruh kalangan tanpa memandang segala keterbatasan yang ada di masyarakat, seperti Sobat Difabel Hebat.",
  },
  {
    icon: Recycle,
    title: "3R (Reduce, Reuse, Recycle)",
    description:
      "Pelaku UMKM juga dapat peduli dan memperhatikan pilar 3R yakni reduce, reuse, dan recycle dalam setiap proses dari mulai produksi hingga selesai. Dengan memperhatikan pilar ini, maka proses produksi UMKM berpedoman pada proses yang ramah lingkungan.",
  },
];

export default function AboutPillars() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-16">
          5 Pilar UMKM Hebat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {pillars.slice(0, 3).map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center p-6">
                <div className="inline-block p-5 bg-blue-600 text-white rounded-lg mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {pillars.slice(3, 5).map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center p-6">
                <div className="inline-block p-5 bg-blue-600 text-white rounded-lg mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
