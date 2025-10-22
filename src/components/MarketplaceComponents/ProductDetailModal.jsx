import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

export default function ProductDetailModal({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!product || !product.images || product.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [product]);

  if (!product) return null;

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9998] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 bg-white/60 hover:bg-white/90 p-2 rounded-full transition text-gray-800 shadow-md"
          aria-label="Kembali ke daftar produk"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="w-full md:w-1/2 relative flex-shrink-0">
          <div className="relative aspect-square overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {product.images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${product.name} - gambar ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full transition text-gray-800 shadow-md z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full transition text-gray-800 shadow-md z-10"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-5"
                          : "bg-white/50 w-2"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col pt-16 md:pt-8">
          <span className="text-sm font-semibold text-blue-600 mb-1">
            {product.category}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm mb-4">oleh {product.seller}</p>
          <p className="text-3xl font-bold text-gray-900 mb-5">
            {formatPrice(product.price)}
          </p>
          <h4 className="text-md font-semibold text-gray-800 mb-2">
            Deskripsi Produk
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow overflow-y-auto">
            {product.description}
          </p>
          <div className="mt-auto pt-6 border-t space-y-3">
            <p className="text-sm text-gray-500 text-center mb-2">
              Beli di Marketplace:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <ShoppingCart size={18} /> Tokopedia
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                <ShoppingCart size={18} /> Shopee
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
