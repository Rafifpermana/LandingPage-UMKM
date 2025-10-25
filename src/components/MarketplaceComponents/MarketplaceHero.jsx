import React from "react";

export default function MarketplaceHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-marketplace-float-1"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-marketplace-float-2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300 rounded-full blur-3xl animate-marketplace-float-3"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-marketplace-slide-up leading-tight">
          Jelajahi Pasar {""}
          <span className="text-yellow-300">UMKM Hebat</span>
        </h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto text-blue-50 animate-marketplace-fade-in leading-relaxed">
          Temukan produk-produk unggulan hasil karya UMKM dari seluruh penjuru
          Indonesia. Berkualitas, original, dan penuh cerita.
        </p>
      </div>
    </section>
  );
}
