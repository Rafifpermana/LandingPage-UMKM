import React from "react";

export default function JoinCTA() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Punya Produk Unggulan?
          </h2>
          <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
            Jangkau lebih banyak pelanggan dan kembangkan bisnis Anda bersama
            kami. Daftarkan UMKM Anda di Pasar UMKM Hebat sekarang!
          </p>
          <button className="mt-8 bg-yellow-400 text-blue-800 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Daftarkan UMKM Anda
          </button>
        </div>
      </div>
    </section>
  );
}
