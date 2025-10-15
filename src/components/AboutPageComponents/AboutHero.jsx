import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-[#0F1E29] text-white h-96 lg:h-[550px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          Apa itu UMKM Hebat?
        </h1>
        <p className="text-gray-300">Home &gt; Tentang UMKM Hebat</p>
      </div>
      <div className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-1/3">
        <img
          src="https://umkmhebat.id/wp-content/uploads/2022/10/banner-section.png"
          alt="Team Member"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  );
}
