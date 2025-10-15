import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, color: "bg-blue-600", hover: "hover:bg-blue-700" },
    { icon: Twitter, color: "bg-sky-500", hover: "hover:bg-sky-600" },
    { icon: Instagram, color: "bg-pink-600", hover: "hover:bg-pink-700" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">UMKM HEBAT</h3>
            <p className="text-gray-400">
              Platform Edukasi & Inkubasi UMKM terbesar di Indonesia
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kelas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+62 812 2773 0229</li>
              <li>info@umkmhebat.id</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 ${link.color} ${link.hover} rounded-full flex items-center justify-center transition-colors duration-300`}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} UMKM Hebat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
