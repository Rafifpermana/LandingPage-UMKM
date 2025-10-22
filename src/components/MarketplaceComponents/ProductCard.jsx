import React from "react";
import { Store } from "lucide-react";

export default function ProductCard({ product, onViewDetail }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-800 line-clamp-2 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Store size={14} className="mr-1.5" />
          <span>{product.seller}</span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2 mb-3 flex-grow">
          {product.description}
        </p>
        <p className="text-xl font-bold text-gray-900 mb-4">
          {formatPrice(product.price)}
        </p>
        <button
          onClick={() => onViewDetail(product)}
          className="mt-auto w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
