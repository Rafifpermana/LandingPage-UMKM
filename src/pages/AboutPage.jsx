import { useState } from "react";
import {
  Globe,
  Lightbulb,
  Leaf,
  Users,
  Recycle,
  PlayCircle,
  X,
  Briefcase,
  TrendingDown,
  ShieldAlert,
  Handshake,
  Rocket,
  Laptop,
} from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Digitalisasi",
    description:
      "Digitalisasi menjadi perkembangan yang begitu pesat, karena Revolusi Industri 4.0 dengan berbagai perubahan beserta disrupsi yang terjadi. Berbagai keterampilan baru yang dibutuhkan untuk beradaptasi di transaksi digital bagi UMKM.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description:
      "Optimalisasi dari pilar inovasi dalam kegiatan UMKM juga berkorelasi dengan nilai sustainability dari usaha yang dijalankan oleh pelaku UMKM. Perubahan situasi membuat pelaku UMKM harus dapat adaptif untuk tetap mempertahankan usahanya.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Selain dukungan untuk menjadi ‘go digital’, pengembangan UMKM yang lebih optimal juga didukung oleh inovasi secara berkelanjutan bagi para pelaku UMKM dengan mendukung pertumbuhan yang inklusif dan ramah lingkungan.",
  },
  {
    icon: Users,
    title: "Inklusivitas",
    description:
      "Pilar inklusivitas merujuk pada perlunya urgensi untuk menghadirkan sarana dan prasarana bagi para pelaku UMKM di seluruh kalangan tanpa memandang segala keterbatasan yang ada di masyarakat, seperti Sobat Difabel Hebat.",
  },
  {
    icon: Recycle,
    title: "3R (Reduce, Reuse, Recycle)",
    description:
      "Pelaku UMKM juga dapat peduli dan memperhatikan pilar 3R yakni reduce, reuse, dan recycle dalam setiap proses dari mulai produksi hingga selesai. Dengan memperhatikan pilar ini, maka proses produksi UMKM berpedoman pada proses yang ramah lingkungan.",
  },
];

const backgroundSteps = [
  {
    icon: Briefcase,
    color: "text-green-500 bg-green-100",
    text: "Terdapat 64,2 juta UMKM di Indonesia yang berkontribusi terhadap 60,3% produk domestik bruto (GDP) nasional, yang menyerap 97% tenaga kerja.",
  },
  {
    icon: Users,
    color: "text-red-500 bg-red-100",
    text: "UMKM termasuk jenis usaha padat karya dengan menyerap 97% tenaga kerja.",
  },
  {
    icon: Laptop,
    color: "text-blue-500 bg-blue-100",
    text: "Munculnya inisiatif untuk membuat wadah kegiatan UMKM yang menghubungkan UGM, KAGAMA, dan stakeholders terkait, dalam bentuk platform digital.",
  },
  {
    icon: TrendingDown,
    color: "text-cyan-500 bg-cyan-100",
    text: "Dampak pandemi membuat masyarakat mengalami penurunan pendapatan secara ekonomi.",
  },
  {
    icon: ShieldAlert,
    color: "text-gray-500 bg-gray-100",
    text: "90% UMKM terdampak pandemi, termasuk circle terdekat kita.",
  },
  {
    icon: Handshake,
    color: "text-indigo-500 bg-indigo-100",
    text: "Memperkuat solidaritas sekaligus saling menguatkan antara UGM dan Warga KAGAMA khususnya pada bidang pemberdayaan UMKM.",
  },
  {
    icon: Rocket,
    color: "text-yellow-500 bg-yellow-100",
    text: "Perlunya kesadaran bersama untuk membangun dan merawat sebuah platform digital yang bisa mendatangkan manfaat lebih besar di masa depan.",
  },
];

export default function AboutPage() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  const seventhStep = backgroundSteps[6];
  const SeventhIcon = seventhStep.icon;

  return (
    <div className="bg-white">
      <section className="relative bg-[#0F1E29] text-white py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 z-10 relative">
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
                  naungan{" "}
                  <strong>Yayasan Kagama Bhakti Nusantara (YKBN)</strong> yang
                  didirikan pada 19 Desember 2020 untuk mendukung pengembangan
                  Usaha Mikro, Kecil, dan Menengah (UMKM) yang ada di Indonesia.
                </li>
                <li>
                  Pendirian platform UMKM Hebat didasari oleh keyakinan yang
                  kuat bahwa UMKM dapat menjadi tumpuan utama perekonomian
                  Indonesia di masa depan, sehingga penyediaan infrastruktur
                  sebagai pendukung untuk mencapai misi tersebut dapat dilakukan
                  melalui pelatihan dan inkubasi bagi pelaku UMKM.
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
                  Gadjah Mada (UGM), Keluarga Gadjah Mada (KAGAMA), para pelaku
                  UMKM, dan stakeholders guna memperkuat networking dan transfer
                  pengetahuan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Latar Belakang Pendirian
            </h2>
            <span className="block text-blue-600 text-3xl lg:text-4xl font-bold">
              UMKM Hebat
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {backgroundSteps.slice(0, 6).map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform hover:-translate-y-2 duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${step.color}`}
                  >
                    <Icon size={32} />
                  </div>
                  <div className="text-5xl font-extrabold text-gray-200 mb-2">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 text-sm">{step.text}</p>
                </div>
              );
            })}
            <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center transition-transform hover:-translate-y-2 duration-300">
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${seventhStep.color}`}
                >
                  <SeventhIcon size={32} />
                </div>
                <div className="text-5xl font-extrabold text-gray-200 mb-2">
                  7
                </div>
                <p className="text-gray-600 text-sm">{seventhStep.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div
            className="relative max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
            onClick={() => setVideoModalOpen(true)}
          >
            <img
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle
                size={80}
                className="text-white transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800  text-center mb-12">
            5 Pilar UMKM Hebat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {pillars.slice(0, 3).map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center p-6">
                  <div className="inline-block p-5 bg-blue-600 text-white rounded-lg mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-600">{p.description}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {pillars.slice(3, 5).map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center p-6">
                  <div className="inline-block p-5 bg-blue-600 text-white rounded-lg mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-600">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 md:p-8"
          onClick={() => setVideoModalOpen(false)}
        >
          <button
            onClick={() => setVideoModalOpen(false)}
            className="fixed top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10 transition-transform hover:scale-110"
            aria-label="Close video"
          >
            <X size={30} />
          </button>

          <div
            className="w-full max-w-screen-lg aspect-w-16 aspect-h-9"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
