import { ArrowRight } from "lucide-react";

const news = [
  {
    title: "Melihat Peluang Bisnis Kopi dari Hulu hingga Hilir",
    date: "6 April 2025",
    excerpt:
      "Hai Sobat Hebat! Siapa yang gak bisa hidup tanpa kopi? Yuk, kita bedah peluang bisnisnya...",
    img: "bg-green-500",
  },
  {
    title: "Cara Membangun Branding Produk dan Strategi Memperkuat Nilai Usaha",
    date: "4 April 2025",
    excerpt:
      "Halo Sobat Hebat! Tau kan kalau dunia bisnis saat ini semakin kompetitif? Ini caranya...",
    img: "bg-red-400",
  },
  {
    title: "Cara Membuat Catatan Keuangan Sederhana untuk Bisnis Pemula",
    date: "2 April 2025",
    excerpt:
      "Hai Sobat Hebat, Siapa yang bingung gimana cara mencatat keuangan usaha? Simak tips ini...",
    img: "bg-sky-400",
  },
];

export default function News() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">TERBARU</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Berita & Artikel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`h-48 ${article.img}`}></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="font-semibold text-lg mb-3 h-14 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition group-hover:text-blue-500 flex items-center"
                >
                  Baca Selengkapnya{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
