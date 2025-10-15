export default function About() {
  const features = [
    "Expert Trainers",
    "Online Remote Learning",
    "Lifetime Access",
    "Free",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tentang UMKM Hebat
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Platform Edukasi & Inkubasi UMKM persembahan YKBN (Yayasan Kagama
            Bhakti Nusantara).
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed mb-8">
            Kami hadir untuk menjadi wadah pemberdaya UMKM terbesar di Indonesia
            dengan mendayagunakan jaringan alumni UGM untuk mendukung dan
            memajukan UMKM agar dapat bersaing di Industri 4.0.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature} className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-semibold">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
