import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Calendar,
  Users,
  Building,
  Mail,
  User,
  MapPin,
  Award,
} from "lucide-react";

const modalContent = {
  tenant: {
    title: "Detail Pendaftaran Tenant/Sponsor",
    color: "blue",
    details: [
      { icon: Calendar, text: "Periode Pendaftaran: 1 Nov - 30 Des 2025" },
      { icon: Building, text: "Lokasi Acara: JEC, Yogyakarta (Tentatif)" },
      { icon: Users, text: "Target Pengunjung: 10.000+" },
    ],
    description:
      "Ambil bagian sebagai tenant atau sponsor di UMKM Days 2025! Ini adalah kesempatan emas untuk memamerkan produk unggulan Anda di hadapan ribuan pengunjung potensial, menjalin kemitraan strategis dengan sesama UMKM atau korporasi besar, dan mendapatkan eksposur media. Pilih paket booth atau sponsorship yang sesuai dengan kebutuhan Anda.",
    benefits: [
      "Booth pameran di area strategis.",
      "Kesempatan presentasi produk di panggung mini.",
      "Akses eksklusif ke sesi B2B matchmaking.",
      "Logo perusahaan tercantum di materi promosi (untuk sponsor).",
      "Liputan media.",
    ],
    formTitle: "Formulir Pendaftaran",
    submitButtonText: "Kirim",
  },
  visitor: {
    title: "Detail Pendaftaran Pengunjung",
    color: "green",
    details: [
      { icon: Calendar, text: "Tanggal Acara: 15 - 17 Februari 2026" },
      { icon: Building, text: "Lokasi: JEC, Yogyakarta (Tentatif)" },
      { icon: Users, text: "Terbuka untuk Umum & Gratis!" },
    ],
    description:
      "Rasakan kemeriahan UMKM Days 2025 sebagai pengunjung! Jelajahi ratusan booth UMKM dengan produk unik dan inovatif dari seluruh Indonesia. Ikuti berbagai talkshow inspiratif dari pembicara ternama, nikmati hiburan menarik, dan temukan peluang kolaborasi. Acara ini gratis dan terbuka untuk umum!",
    benefits: [
      "Akses penuh ke area bazaar UMKM.",
      "Mengikuti semua sesi talkshow dan workshop umum.",
      "Kesempatan networking dengan pelaku UMKM dan komunitas.",
      "Menikmati area kuliner dan hiburan.",
      "Merayakan pencapaian UMKM Indonesia.",
    ],
    formTitle: "Formulir Pendaftaran",
    submitButtonText: "Kirim",
  },
  workshop_online: {
    title: "Detail Workshop Online: Digital Marketing",
    color: "purple",
    details: [
      { icon: Calendar, text: "Jadwal: 15 Nov 2025, 13:00 WIB" },
      { icon: Users, text: "Terbatas untuk 50 Peserta" },
      { icon: MapPin, text: "Online via Zoom" },
    ],
    description:
      "Tingkatkan penjualan online Anda! Workshop intensif ini akan membahas strategi praktis digital marketing khusus untuk UMKM, mulai dari optimasi media sosial, iklan berbayar yang efektif, hingga SEO dasar. Dibawakan oleh praktisi berpengalaman.",
    benefits: [
      "Materi workshop eksklusif (PDF).",
      "Rekaman sesi workshop.",
      "Sertifikat digital.",
      "Grup diskusi pasca-workshop.",
      "Sesi Q&A Langsung dengan pemateri.",
    ],
    formTitle: "Formulir Pendaftaran",
    submitButtonText: "Kirim",
  },
  kompetisi_foto: {
    title: "Detail Kompetisi Fotografi Produk",
    color: "orange",
    details: [
      { icon: Calendar, text: "Deadline Submission: 31 Des 2025" },
      { icon: Users, text: "Terbuka untuk Umum & Pelaku UMKM" },
      { icon: Award, text: "Total Hadiah Jutaan Rupiah!" },
    ],
    description:
      "Punya skill fotografi dan ingin membantu UMKM tampil lebih menarik? Ikuti kompetisi fotografi produk UMKM Days! Tunjukkan kemampuan terbaikmu dalam menangkap keunikan produk lokal. Karya terbaik akan dipamerkan dan mendapatkan hadiah menarik.",
    benefits: [
      "Hadiah uang tunai & merchandise.",
      "Publikasi karya di channel UMKM Hebat.",
      "Penilaian oleh juri fotografer profesional.",
      "Meningkatkan portofolio Anda.",
    ],
    formTitle: "Formulir Pendaftaran",
    submitButtonText: "Kirim",
  },
  volunteer_event: {
    title: "Detail Relawan Acara UMKM Days",
    color: "teal",
    details: [
      { icon: Calendar, text: "Hari-H: 15-17 Feb 2026" },
      { icon: Users, text: "Posisi Terbatas (LO, Dokumentasi, dll)" },
      { icon: MapPin, text: "Lokasi: JEC, Yogyakarta" },
    ],
    description:
      "Jadilah bagian penting dari kesuksesan UMKM Days 2025! Kami mencari individu yang energik dan berdedikasi untuk membantu kelancaran acara sebagai Liaison Officer (LO), tim dokumentasi, registrasi, atau area lainnya. Dapatkan pengalaman seru mengelola event besar!",
    benefits: [
      "Pengalaman berharga dalam event management.",
      "Sertifikat resmi sebagai relawan.",
      "Konsumsi selama bertugas.",
      "Kesempatan networking dengan panitia & tamu.",
      "Kaos eksklusif relawan.",
    ],
    formTitle: "Formulir Pendaftaran",
    submitButtonText: "Kirim",
  },
  default: {
    title: "Detail Informasi",
    color: "gray",
    details: [{ icon: Calendar, text: "Informasi belum tersedia" }],
    description: "Detail acara belum tersedia untuk saat ini.",
    benefits: ["Manfaat akan diinformasikan segera."],
    formTitle: "Formulir Pendaftaran",
    submitButtonText: "Kirim",
  },
};

export default function RegistrationDetailModal({
  isOpen,
  onClose,
  registrationType,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen || !registrationType) return null;

  const content = modalContent[registrationType] || modalContent.default;
  const themeColor = content.color || "gray";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", { type: registrationType, name, email });
    alert(
      `Terima kasih, ${name}! Pendaftaran Anda untuk (${content.title}) telah kami terima.`
    );
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9998] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative border-t-4 border-${themeColor}-500`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-0 left-0 z-20 bg-white m-4 p-2 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Kembali"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>

        <div className="p-6 md:p-8 pt-0">
          <div className="mb-6 text-center">
            <h2 className={`text-3xl font-bold text-${themeColor}-600 mb-2`}>
              {content.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-600 text-sm">
              {content.details.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-center">
                    <Icon size={14} className="mr-1.5" /> {detail.text}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-6 text-center">
            {content.description}
          </p>

          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h4 className={`text-lg font-semibold text-${themeColor}-700 mb-3`}>
              Apa yang Anda Dapatkan?
            </h4>
            <ul className="space-y-2">
              {content.benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className={`mr-2 mt-0.5 text-${themeColor}-500 flex-shrink-0`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-5">
              {content.formTitle}
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-md mx-auto"
            >
              <div>
                <label
                  htmlFor="regName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    id="regName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="regEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    id="regEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full text-white font-semibold py-3 px-6 rounded-lg bg-${themeColor}-600 hover:bg-${themeColor}-700 transition-colors duration-300`}
                >
                  {content.submitButtonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
