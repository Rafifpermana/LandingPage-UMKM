import React from "react";

export default function AboutIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Lebih dalam mengenal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                UMKM Hebat
              </span>
            </h2>
          </div>

          <div className="text-gray-600 leading-relaxed space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p>
                UMKM Hebat merupakan platform edukasi dan inkubasi di bawah
                naungan{" "}
                <strong className="text-blue-600">
                  Yayasan Kagama Bhakti Nusantara (YKBN)
                </strong>{" "}
                yang didirikan pada 19 Desember 2020.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p>
                Pendirian platform UMKM Hebat didasari oleh keyakinan bahwa UMKM
                dapat menjadi tumpuan utama perekonomian Indonesia di masa
                depan.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p>
                UMKM Hebat menjangkau ribuan wirausaha dari seluruh Indonesia
                melalui LMS yang terdiri dari pelatihan dan inkubasi untuk
                scale-up knowledge dan skill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
