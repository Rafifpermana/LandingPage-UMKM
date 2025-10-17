import React from "react";

const steps = [
  {
    num: "01",
    title: "Administrasi",
    description:
      "Tim kami akan meninjau CV, portofolio, dan esai motivasi Anda.",
  },
  {
    num: "02",
    title: "Asesmen",
    description:
      "Anda mungkin akan diberikan studi kasus atau tes kecil sesuai posisi yang dilamar.",
  },
  {
    num: "03",
    title: "Wawancara",
    description: "Wawancara virtual dengan HR dan User (calon mentor Anda).",
  },
  {
    num: "04",
    title: "Offering",
    description:
      "Selamat! Jika lolos, kami akan mengirimkan surat penawaran magang.",
  },
];

export default function SelectionProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Alur Seleksi Kami
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Proses yang adil dan transparan untuk menemukan talenta terbaik.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-gray-50 rounded-lg border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-cyan-600 mb-3">
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
