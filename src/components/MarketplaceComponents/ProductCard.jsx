import { useState } from "react";
import { Store } from "lucide-react";

export default function ProductCard({ product, onViewDetail }) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full animate-marketplace-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Store size={14} className="mr-1.5 flex-shrink-0" />
          <span className="truncate">{product.seller}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-2xl font-black text-gray-900 mb-3">
            {formatPrice(product.price)}
          </p>
          <button
            onClick={() => onViewDetail(product)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Lihat Produk
          </button>
        </div>
      </div>
    </div>
  );
}
