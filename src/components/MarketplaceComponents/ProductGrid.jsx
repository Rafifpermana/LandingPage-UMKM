import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kopi Gayo Arabika Premium",
    price: 125000,
    seller: "Kopi Kita",
    category: "Minuman",
    image: "https://placehold.co/600x400/a855f7/ffffff?text=Kopi+Gayo",
  },
  {
    id: 2,
    name: "Tas Kulit Asli Garut",
    price: 750000,
    seller: "Kulit Indah",
    category: "Fashion",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Tas+Kulit",
  },
  {
    id: 3,
    name: "Batik Tulis Madura",
    price: 450000,
    seller: "Batik Warisan",
    category: "Fashion",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Batik",
  },
  {
    id: 4,
    name: "Keripik Singkong Balado",
    price: 25000,
    seller: "Cemilan Juara",
    category: "Makanan",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=Keripik",
  },
  {
    id: 5,
    name: "Patung Kayu Jati Jepara",
    price: 1200000,
    seller: "Seni Ukir Jaya",
    category: "Kerajinan",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=Patung",
  },
  {
    id: 6,
    name: "Madu Hutan Asli Sumbawa",
    price: 150000,
    seller: "Madu Lestari",
    category: "Makanan",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Madu",
  },
  {
    id: 7,
    name: "Baju Tenun Sumba",
    price: 950000,
    seller: "Tenun Ikat Sumba",
    category: "Fashion",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Tenun",
  },
  {
    id: 8,
    name: "Sambal Roa Khas Manado",
    price: 45000,
    seller: "Dapur Mama Roa",
    category: "Makanan",
    image: "https://placehold.co/600x400/d946ef/ffffff?text=Sambal",
  },
];

const categories = ["Semua", "Makanan", "Minuman", "Fashion", "Kerajinan"];

export default function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        return (
          selectedCategory === "Semua" || product.category === selectedCategory
        );
      })
      .filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari nama produk..."
              className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full md:w-48 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700">
              Produk tidak ditemukan
            </h3>
            <p className="text-gray-500 mt-2">
              Coba ubah kata kunci pencarian atau filter kategori Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
