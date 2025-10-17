import React from "react";

export default function ProgramIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Apa itu Program Inkubasi?
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl">
              Sebuah program eksklusif selama 3 bulan yang dirancang untuk 20
              UMKM terpilih.
            </p>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Berbeda dari training biasa, program inkubasi adalah pendampingan
              mendalam di mana bisnismu akan dibedah, dibimbing, dan
              diakselerasi secara intensif oleh mentor ahli.
            </p>
            <p>
              Tujuan kami adalah menyiapkan bisnismu agar siap bersaing di pasar
              yang lebih luas dan layak mendapatkan pendanaan dari investor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
