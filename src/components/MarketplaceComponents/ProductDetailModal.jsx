import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  X,
  Store,
} from "lucide-react";

export default function ProductDetailModal({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!product?.images || product.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [product]);

  if (!product) return null;

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] flex items-center justify-center p-4 animate-marketplace-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-marketplace-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg md:hidden"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 relative flex-shrink-0 bg-gray-100">
          <div className="relative aspect-square">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {product.images?.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + product.images.length) %
                        product.images.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % product.images.length
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 w-2"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          <button
            onClick={onClose}
            className="hidden md:flex self-end w-10 h-10 items-center justify-center hover:bg-gray-100 rounded-full transition-all mb-4"
          >
            <X size={20} />
          </button>

          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide rounded-full mb-3 self-start">
            {product.category}
          </span>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
            {product.name}
          </h2>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Store size={16} className="mr-2" />
            <span>{product.seller}</span>
          </div>

          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-3xl md:text-4xl font-black text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>

          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Deskripsi Produk
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
            {product.description}
          </p>

          <div className="mt-auto space-y-4">
            <p className="text-sm text-gray-500 text-center font-semibold">
              Beli di Marketplace Pilihan:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart size={18} /> Tokopedia
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
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
