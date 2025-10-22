import React from "react";
import { Link } from "react-router-dom";

export default function JoinCTA() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Daftarkan Produk UMKM Anda
          </h2>
          <p className="text-lg text-blue-100 mt-4 max-w-3xl mx-auto mb-8">
            Jangkau lebih banyak pelanggan. Tampilkan produk Anda di Pasar UMKM
            Hebat dengan mengisi formulir pendaftaran.
          </p>
          <Link to="/daftar-produk">
            <button className="bg-yellow-400 text-blue-800 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Daftarkan UMKM Anda
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
