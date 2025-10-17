import React from "react";
import { Store, Mic, Users, Award } from "lucide-react";

const features = [
  { icon: Store, text: "Bazaar & Pameran Produk" },
  { icon: Mic, text: "Talkshow Inspiratif" },
  { icon: Users, text: "Networking Session" },
  { icon: Award, text: "UMKM Hebat Awards" },
];

export default function EventIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Lebih dari Sekadar Acara
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            UMKM Days adalah acara puncak tahunan kami yang mempertemukan
            ratusan UMKM, investor, ahli industri, dan masyarakat umum dalam
            satu wadah. Ini adalah panggung bagi mereka untuk bersinar,
            berkolaborasi, dan merayakan pencapaian.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.text} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="font-semibold text-gray-700">{feature.text}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
