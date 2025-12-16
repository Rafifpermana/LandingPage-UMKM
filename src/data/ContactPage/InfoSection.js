import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Youtube,
} from "lucide-react";

export const InfoData = {
  title: "Informasi Kontak",
  image:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  imageAlt: "Hubungi Tim UMKM Hebat",
  details: [
    {
      icon: MapPin,
      label: "Office",
      value: "Jalan Palmerah Utara No.90 Palmerah,\nJakarta 11480",
      href: "https://maps.app.goo.gl/NENpbWbyoRXdH1997",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kagamabhaktinusantara@gmail.com",
      href: "mailto:kagamabhaktinusantara@gmail.com",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "0812 2773 0229",
      href: "https://wa.me/6281227730229",
    },
  ],
  socialTitle: "Ikuti Kami:",
  socialLinks: [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Send, href: "#", label: "Telegram" },
  ],
};
