import React from "react";

const steps = [
  {
    num: "01",
    title: "Pilih Pelatihan",
    description:
      "Lihat daftar pelatihan yang tersedia dan pilih yang paling sesuai kebutuhan bisnismu.",
  },
  {
    num: "02",
    title: "Klik Daftar",
    description:
      "Klik tombol 'Daftar' pada kartu pelatihan dan isi formulir pendaftaran dengan lengkap.",
  },
  {
    num: "03",
    title: "Lakukan Pembayaran",
    description:
      "Selesaikan pembayaran melalui metode yang tersedia untuk mengamankan kursimu.",
  },
  {
    num: "04",
    title: "Siap Belajar!",
    description:
      "Anda akan menerima email konfirmasi berisi detail dan link (jika online). Selamat belajar!",
  },
];

export default function HowToRegister() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Cara Mendaftar
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Hanya butuh beberapa langkah mudah untuk bergabung.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-gray-50 rounded-lg border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-green-600 mb-3">
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
