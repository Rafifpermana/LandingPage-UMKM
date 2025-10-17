import React from "react";
import { Calendar, UserPlus, Building } from "lucide-react";

const registrationData = [
  {
    type: "UMKM Days 2025",
    title: "Daftar Sebagai Tenant/Sponsor",
    description:
      "Pamerkan produk unggulan Anda, perluas jaringan, dan temukan mitra bisnis strategis di acara terbesar kami.",
    Icon: Building,
    meta1: "Pendaftaran: 1 Nov - 30 Des 2025",
    meta2: "Slot Terbatas untuk Tenant",
    buttonText: "Daftar Sebagai Tenant",
    theme: {
      text: "text-blue-600",
      icon: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
  },
  {
    type: "UMKM Days 2025",
    title: "Daftar Sebagai Pengunjung",
    description:
      "Jelajahi ratusan produk UMKM, ikuti talkshow inspiratif, dan nikmati kemeriahan acara.",
    Icon: UserPlus,
    meta1: "Acara: 15 - 17 Feb 2026",
    meta2: "Terbuka untuk Umum",
    buttonText: "Daftar Sebagai Pengunjung",
    theme: {
      text: "text-green-600",
      icon: "text-green-500",
      button: "bg-green-600 hover:bg-green-700",
    },
  },
];

export default function RegistrationCard() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {registrationData.map((item) => {
          const Icon = item.Icon;
          return (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow-xl w-full border border-gray-100 flex flex-col"
            >
              <p
                className={`text-sm font-semibold ${item.theme.text} uppercase`}
              >
                {item.type}
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-4 flex-grow">{item.description}</p>

              <div className="flex flex-col gap-4 text-gray-500 mt-6 border-t pt-6">
                <div className="flex items-center">
                  <Calendar size={18} className={`mr-2 ${item.theme.icon}`} />
                  <span>{item.meta1}</span>
                </div>
                <div className="flex items-center">
                  <Icon size={18} className={`mr-2 ${item.theme.icon}`} />
                  <span>{item.meta2}</span>
                </div>
              </div>

              <button
                className={`mt-6 w-full text-white font-semibold py-3 rounded-lg ${item.theme.button} transition-colors duration-300`}
              >
                {item.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
