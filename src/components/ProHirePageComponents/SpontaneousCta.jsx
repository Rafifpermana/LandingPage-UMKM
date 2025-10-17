import React from "react";

export default function SpontaneousCta() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-2xl p-10 lg:p-16 text-center border border-gray-200">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Posisi yang Anda Cari Tidak Ada?
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami selalu mencari talenta-talenta terbaik. Jika Anda percaya
            dengan misi kami, kirimkan CV dan surat motivasi Anda.
          </p>
          <button className="mt-8 bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Kirim Lamaran Umum
          </button>
        </div>
      </div>
    </section>
  );
}
