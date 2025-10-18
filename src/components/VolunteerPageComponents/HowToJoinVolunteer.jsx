import React from "react";

const steps = [
  {
    num: "01",
    title: "Pilih Kesempatan",
    description:
      "Lihat daftar kesempatan yang tersedia dan pilih yang paling menarik minatmu.",
  },
  {
    num: "02",
    title: "Klik Tertarik",
    description:
      "Klik tombol 'Saya Tertarik' dan isi formulir singkat tentang dirimu dan keahlianmu.",
  },
  {
    num: "03",
    title: "Wawancara Singkat",
    description:
      "Tim kami mungkin akan menghubungimu untuk ngobrol santai dan memastikan kecocokan.",
  },
  {
    num: "04",
    title: "Mulai Berkontribusi!",
    description:
      "Selamat bergabung! Kamu akan segera dihubungkan dengan tim atau proyek terkait.",
  },
];

export default function HowToJoinVolunteer() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Cara Bergabung
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Prosesnya cepat dan mudah. Kami menghargai niat baikmu!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-gray-50 rounded-lg border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-emerald-600 mb-3">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
