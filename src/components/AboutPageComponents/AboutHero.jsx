import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-[400px] lg:min-h-[550px] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Apa itu {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            UMKM Hebat?
          </span>
        </h1>
        <p
          className="text-gray-300 text-lg animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Home &gt; Tentang UMKM Hebat
        </p>
      </div>

      <div className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-1/3 opacity-20 lg:opacity-100">
        <img
          src="https://umkmhebat.id/wp-content/uploads/2022/10/banner-section.png"
          alt="Team Member"
          className="h-full w-full object-cover object-left"
        />
      </div>
    </section>
  );
}
