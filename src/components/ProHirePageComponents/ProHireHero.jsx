import React from "react";

export default function ProHireHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white h-96 lg:h-[550px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          Kembangkan Karirmu Bersama Kami
        </h1>
        <p className="text-lg text-indigo-100 max-w-xl">
          Jadilah bagian dari tim profesional yang berdedikasi untuk memajukan
          jutaan UMKM Indonesia.
        </p>
      </div>
      <div className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-1/3 opacity-20">
        <img
          src="https://umkmhebat.id/wp-content/uploads/2022/10/banner-section.png"
          alt="Karir Prohire"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  );
}
