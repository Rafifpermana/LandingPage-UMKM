import React from "react";

const steps = [
  {
    num: "01",
    title: "Pilih Pelatihan",
    description:
      "Lihat daftar pelatihan yang tersedia dan pilih yang paling sesuai.",
  },
  {
    num: "02",
    title: "Klik Daftar",
    description:
      "Klik tombol 'Daftar' pada detail ini atau di kartu utama, lalu isi formulir.",
  },
  {
    num: "03",
    title: "Lakukan Pembayaran",
    description:
      "Selesaikan pembayaran sesuai instruksi untuk mengamankan kursi.",
  },
  {
    num: "04",
    title: "Siap Belajar!",
    description:
      "Anda akan menerima email konfirmasi berisi detail dan link (jika online).",
  },
];

export default function RegistrationSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {steps.map((step) => (
        <div
          key={step.num}
          className="p-4 bg-gray-50/70 rounded-lg border border-gray-100 text-left"
        >
          <div className="text-2xl font-bold text-green-600 mb-2">
            {step.num}
          </div>
          <h4 className="text-md font-bold text-gray-800 mb-1">{step.title}</h4>
          <p className="text-gray-600 text-xs leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
