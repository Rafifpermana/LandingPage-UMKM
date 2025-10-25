import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl overflow-hidden animate-marketplace-scale-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                Bergabung Sekarang
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Daftarkan Produk
              <br />
              UMKM Anda
            </h2>
            <p className="text-base md:text-lg text-blue-50 max-w-2xl mx-auto mb-8 leading-relaxed">
              Jangkau lebih banyak pelanggan. Tampilkan produk Anda di Pasar
              UMKM Hebat dengan mengisi formulir pendaftaran.
            </p>

            <button className="inline-flex items-center gap-3 bg-white text-blue-600 font-black text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl hover:bg-yellow-300 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              <ShoppingCart size={24} />
              Daftarkan UMKM Anda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
