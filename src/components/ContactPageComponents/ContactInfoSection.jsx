import React from "react";
import {
  MapPin,
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";

const imageUrl = "https://placehold.co/600x400/3b82f6/ffffff?text=Tim+Kami";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function ContactInfoSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute inset-0 bg-blue-500 rounded-[50%_50%_30%_70%/60%_40%_60%_40%] opacity-10 transform scale-110 blur-xl"></div>
            <img
              src={imageUrl}
              alt="Hubungi Tim UMKM Hebat"
              className="relative rounded-2xl shadow-xl w-full max-w-md lg:max-w-none"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
              Informasi Kontak
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Office
                  </h3>
                  <p className="text-gray-600">
                    Jalan Palmerah Utara No.90 Palmerah,
                    <br />
                    Jakarta 11480
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:kagamabhaktinusantara@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    kagamabhaktinusantara@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/6281227730229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    0812 2773 0229
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Ikuti Kami:
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
