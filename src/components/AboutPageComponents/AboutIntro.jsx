import React from "react";

export default function AboutIntro() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Lebih dalam mengenal
              <span className="block text-blue-600">UMKM Hebat</span>
            </h2>
            <svg
              className="mx-auto lg:mx-0 mt-2"
              width="100"
              height="6"
              viewBox="0 0 100 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 3.5C18.5 0.5 37.5 1 50 3.5C62.5 6 81.5 5.5 97.5 3.5"
                stroke="#2563EB"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-gray-600 leading-relaxed">
            <ul className="space-y-4 list-disc list-outside pl-5">
              <li>
                UMKM Hebat merupakan platform edukasi dan inkubasi di bawah
                naungan <strong>Yayasan Kagama Bhakti Nusantara (YKBN)</strong>{" "}
                yang didirikan pada 19 Desember 2020.
              </li>
              <li>
                Pendirian platform UMKM Hebat didasari oleh keyakinan yang kuat
                bahwa UMKM dapat menjadi tumpuan utama perekonomian Indonesia di
                masa depan, sehingga penyediaan infrastruktur sebagai pendukung
                untuk mencapai misi tersebut dapat dilakukan melalui pelatihan
                dan inkubasi bagi pelaku UMKM.
              </li>
              <li>
                UMKM Hebat menjangkau ribuan wirausaha yang tersebar dari
                seluruh penjuru Indonesia, melalui LMS (Learning Management
                System) yang terdiri dari pelatihan dan inkubasi para UMKM
                mengupayakan terjadinya scale-up dari sisi knowledge dan skill
                sehingga para UMKM dapat lebih bersaing dalam bisnis.
              </li>
              <li>
                UMKM Hebat mengupayakan terjadinya relasi antara Universitas
                Gadjah Mada (UGM), Keluarga Gadah Mada (KAGAMA), para pelaku
                UMKM, dan stakeholders.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
