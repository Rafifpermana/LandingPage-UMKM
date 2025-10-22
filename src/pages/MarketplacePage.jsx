import React, { useState } from "react";
import MarketplaceHero from "../components/MarketplaceComponents/MarketplaceHero";
import ProductGrid from "../components/MarketplaceComponents/ProductGrid";
import JoinCTA from "../components/MarketplaceComponents/JoinCTA";
import ProductDetailModal from "../components/MarketplaceComponents/ProductDetailModal";

const generateProducts = (count) => {
  const categories = [
    "Makanan",
    "Minuman",
    "Fashion",
    "Kerajinan",
    "Aksesoris",
    "Herbal",
  ];
  const names = [
    "Kopi",
    "Tas",
    "Batik",
    "Keripik",
    "Patung",
    "Madu",
    "Tenun",
    "Sambal",
    "Gelang",
    "Masker",
    "Sabun",
    "Dompet",
  ];
  const adjectives = [
    "Premium",
    "Asli",
    "Organik",
    "Unik",
    "Modern",
    "Tradisional",
    "Sehat",
    "Berkualitas",
  ];
  const sellers = [
    "UMKM Jaya",
    "Karya Nusantara",
    "Produk Lokal Hebat",
    "Warisan Ibu",
    "Kreasi Anak Bangsa",
  ];
  const products = [];
  for (let i = 1; i <= count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const namePart = names[Math.floor(Math.random() * names.length)];
    const adjPart = adjectives[Math.floor(Math.random() * adjectives.length)];
    const seller = sellers[Math.floor(Math.random() * sellers.length)];
    const price = Math.floor(Math.random() * 50 + 1) * 10000;
    const baseImageUrl = `https://placehold.co/600x400/${Math.floor(
      Math.random() * 16777215
    ).toString(16)}/ffffff`;
    const images = [
      `${baseImageUrl}?text=${encodeURIComponent(namePart)}+1`,
      `${baseImageUrl}?text=${encodeURIComponent(namePart)}+2`,
      `${baseImageUrl}?text=${encodeURIComponent(namePart)}+3`,
    ];
    products.push({
      id: i,
      name: `${adjPart} ${namePart} Khas Daerah ${i}`,
      price: price,
      seller: seller,
      category: category,
      image: images[0],
      images: images,
      description: `Deskripsi lengkap untuk ${adjPart} ${namePart} Khas Daerah ${i}. Produk ini dibuat dengan bahan berkualitas tinggi...`,
    });
  }
  return products;
};

const initialProducts = generateProducts(150);

export default function MarketplacePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products] = useState(initialProducts);

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-gray-50">
      <MarketplaceHero />
      <ProductGrid products={products} onViewDetail={handleViewDetail} />
      <JoinCTA />

      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}
