import { Store } from "lucide-react";
import React from "react";

export default function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
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
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-800 truncate">
          {product.name}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Store size={14} className="mr-2" />
          <span>{product.seller}</span>
        </div>
        <p className="text-xl font-bold text-gray-900 mt-3">
          {formatPrice(product.price)}
        </p>
        <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
