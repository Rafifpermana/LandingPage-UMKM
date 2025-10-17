import React from "react";

const steps = [
  {
    num: "01",
    title: "Pilih Posisi",
    description:
      "Lihat daftar lowongan dan pilih posisi yang paling sesuai dengan minat dan keahlianmu.",
  },
  {
    num: "02",
    title: "Kirim Berkas",
    description:
      "Klik 'Daftar Sekarang' dan kirimkan CV, portofolio, dan surat motivasi terbaikmu.",
  },
  {
    num: "03",
    title: "Proses Seleksi",
    description:
      "Tim kami akan meninjau berkasmu. Kandidat yang lolos akan dihubungi untuk wawancara.",
  },
  {
    num: "04",
    title: "Bergabung!",
    description:
      "Selamat! Jika lolos, kamu akan resmi menjadi bagian dari keluarga besar UMKM Hebat.",
  },
];

export default function HowToApply() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Cara Mendaftar
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Prosesnya mudah dan transparan. Ikuti 4 langkah berikut.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-gray-50 rounded-lg border border-gray-100"
            >
              <div className="text-3xl font-bold text-blue-600 mb-3">
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
