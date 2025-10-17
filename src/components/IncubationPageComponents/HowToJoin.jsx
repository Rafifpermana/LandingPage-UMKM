import React from "react";

export default function HowToJoin() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Siap Bawa Bisnismu Naik Kelas?
          </h2>
          <p className="text-lg text-indigo-100 mt-4 max-w-2xl mx-auto">
            Pendaftaran untuk Batch #3 akan segera dibuka. Daftarkan emailmu
            untuk mendapatkan informasi terbaru.
          </p>
          <form className="mt-8 flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="w-full md:flex-grow px-5 py-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-purple-800 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
