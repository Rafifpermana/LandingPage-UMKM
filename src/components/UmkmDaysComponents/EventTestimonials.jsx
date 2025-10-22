import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Wijaya",
    text: "UMKM Days luar biasa! Produk saya laku keras dan dapat banyak koneksi baru.",
    image:
      "https://ui-avatars.com/api/?name=Andi+Wijaya&background=random&color=fff",
  },
  {
    name: "Siti Aminah",
    text: "Acaranya seru banget, banyak produk unik. Talkshow-nya juga sangat menginspirasi.",
    image:
      "https://ui-avatars.com/api/?name=Siti+Aminah&background=random&color=fff",
  },
  {
    name: "Budi Santoso",
    text: "Terima kasih UMKM Hebat atas penghargaannya. Ini jadi motivasi besar untuk terus berkembang.",
    image:
      "https://ui-avatars.com/api/?name=Budi+Santoso&background=random&color=fff",
  },
];

export default function EventTestimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Dengarkan kesan dari para peserta dan pengunjung UMKM Days tahun
            lalu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-lg relative border-t-4 border-yellow-400"
            >
              <Quote
                className="absolute top-4 right-4 text-gray-100"
                size={40}
              />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-200"
                />
                <div>
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-yellow-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
