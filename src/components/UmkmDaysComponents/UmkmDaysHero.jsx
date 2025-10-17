import React from "react";

export default function UmkmDaysHero() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white h-96 lg:h-[550px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
          UMKM Days
        </h1>
        <p className="text-lg text-gray-800 max-w-xl">
          Perayaan akbar untuk talenta, produk, dan kolaborasi UMKM Indonesia.
        </p>
      </div>
      <div className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-1/3 opacity-20">
        <img
          src="https://umkmhebat.id/wp-content/uploads/2022/10/banner-section.png"
          alt="UMKM Days"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  );
}
