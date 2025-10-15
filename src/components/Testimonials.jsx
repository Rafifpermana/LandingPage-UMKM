import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Noviana Manjaratna",
    role: "Student",
    text: "Sangat membantu untuk teman² yang baru / sedang menjalani strategi marketing Konsinyasi ini. Karena sesuai dengan pemaparan, butuh modal double untuk strategi ini.",
  },
  {
    name: "Ratu Haerunisa",
    role: "Mahasiswa",
    text: "Materinya bagus banget dan sangat bermanfaat untuk pengembangan diri dan bisnis, terimakasih UMKM Hebat.",
  },
  {
    name: "Jhonni Sigiro",
    role: "Quality Assurance",
    text: "Membuat saya termotivasi untuk memulai dari yang kecil dan terus belajar hal baru. Narasumbernya sangat inspiratif.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">TESTIMONI</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Apa Kata Mereka?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm relative"
            >
              <Quote
                className="absolute top-4 right-4 text-blue-100"
                size={40}
              />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
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
