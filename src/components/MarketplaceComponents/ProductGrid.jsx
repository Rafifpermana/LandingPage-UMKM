import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "../BlogPageComponents/Pagination";
import { Search, Filter } from "lucide-react";

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
      description: `Deskripsi lengkap untuk ${adjPart} ${namePart} Khas Daerah ${i}. Produk ini dibuat dengan bahan berkualitas tinggi dan proses tradisional yang teliti, cocok untuk ${
        category === "Makanan" || category === "Minuman"
          ? "menemani santai Anda"
          : category === "Fashion"
          ? "menunjang penampilan Anda"
          : "menghiasi rumah Anda"
      }. ${
        category === "Kerajinan" ? "Memiliki nilai seni yang tinggi." : ""
      } Segera dapatkan produk unggulan dari ${seller}!`,
    });
  }
  return products;
};

const allProducts = generateProducts(150);

const categories = ["Semua", ...new Set(allProducts.map((p) => p.category))];

const PRODUCTS_PER_PAGE = 15;

export default function ProductGrid({ products, onViewDetail }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilter, setShowMobileFilter] = useState(false); // ✅ Tambahkan state ini

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          selectedCategory === "Semua" || product.category === selectedCategory
      )
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, selectedCategory, products]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  }, [filteredProducts]);

  const currentProducts = useMemo(() => {
    const indexOfLastPost = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - PRODUCTS_PER_PAGE;
    return filteredProducts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredProducts]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const sectionElement = document.getElementById("product-grid-section");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <section
      id="product-grid-section"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-12">
          <div className="hidden md:flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full md:w-auto">
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
            <div className="relative w-full md:w-56">
              <select
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 8l4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-3">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full border-2 border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl py-3 font-semibold text-gray-700"
            >
              <Filter size={18} />
              Kategori: {selectedCategory}
            </button>

            {showMobileFilter && (
              <div className="grid grid-cols-2 gap-2 animate-marketplace-fade-in">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowMobileFilter(false);
                    }}
                    className={`py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetail={onViewDetail}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
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
