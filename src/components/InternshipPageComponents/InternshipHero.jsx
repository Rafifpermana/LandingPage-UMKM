import React from "react";

export default function InternshipHero() {
  return (
    <section className="relative bg-gradient-to-r from-teal-500 to-cyan-600 text-white h-96 lg:h-[550px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          Magang & Relawan
        </h1>
        <p className="text-lg text-cyan-100 max-w-xl">
          Jadi bagian dari perubahan. Berikan dampak nyata bagi UMKM Indonesia
          sambil kembangkan potensimu.
        </p>
      </div>
      <div className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-1/3 opacity-20">
        <img
          src="https://umkmhebat.id/wp-content/uploads/2022/10/banner-section.png"
          alt="Magang & Relawan"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  );
}
