import React from "react";

export default function InternshipHireHero() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white h-96 lg:h-[550px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          Mulai Karirmu di Sini
        </h1>
        <p className="text-lg text-blue-100 max-w-xl">
          Program magang kami dirancang untuk mengubah pengetahuan teoritis
          menjadi keahlian praktis.
        </p>
      </div>
      <div className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-1/3 opacity-20">
        <img
          src="https://umkmhebat.id/wp-content/uploads/2022/10/banner-section.png"
          alt="Karir Magang"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  );
}
