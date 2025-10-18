import React from "react";
import { Briefcase, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramInfo() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div className="flex items-center mb-4">
            <Briefcase className="text-blue-600 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Program Magang</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Kesempatan bagi mahasiswa/lulusan baru untuk mendapatkan pengalaman
            kerja profesional, terlibat dalam proyek nyata, dan belajar langsung
            dari praktisi di UMKM Hebat. Fokus pada pengembangan skill dan
            portofolio.
          </p>
          <Link to="/karir-magang">
            <button className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Lihat Lowongan Magang
            </button>
          </Link>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div className="flex items-center mb-4">
            <HeartHandshake className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">
              Program Relawan
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Peluang bagi siapa saja yang ingin menyumbangkan waktu dan keahlian
            untuk memberikan dampak positif bagi UMKM. Fleksibel, berbasis
            proyek atau komitmen waktu tertentu, fokus pada kontribusi sosial.
          </p>
          <Link to="/karir-relawan">
            <button className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
              Lihat Kesempatan Relawan
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
