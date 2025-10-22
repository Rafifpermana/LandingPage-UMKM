import React from "react";
import { Calendar } from "lucide-react";

export default function EventCard({ item, onOpenModal }) {
  const colorName = item.theme.button.split("-")[1] || "gray";
  const topBgColor = `bg-${colorName}-600`;

  const overlayText =
    item.id?.split("-")[1] || item.category?.split(" ")[0] || "Info";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col h-full border border-gray-100">
      <div
        className={`w-full h-40 ${topBgColor} flex items-center justify-center relative overflow-hidden`}
      >
        <h2 className="text-4xl font-bold text-white opacity-90 z-10">
          Event {overlayText}
        </h2>
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {item.type && (
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start ${
              item.type === "Online"
                ? "bg-blue-100 text-blue-800"
                : "bg-orange-100 text-orange-800"
            }`}
          >
            {item.type}
          </span>
        )}

        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center text-xs text-gray-500 mb-3">
          <Calendar size={14} className="mr-1.5" />
          <span>{item.dateInfo || "Segera Hadir"}</span>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-grow">
          {item.description}
        </p>

        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          {item.price !== undefined ? (
            <span className="text-lg font-bold text-green-600">
              {item.price === 0
                ? "Gratis"
                : new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(item.price)}
            </span>
          ) : (
            <span></span>
          )}

          <button
            onClick={() => onOpenModal(item.typeId)}
            className={`text-white font-semibold py-2 px-4 rounded-lg ${item.theme.button} transition-colors duration-300 text-sm`}
          >
            {item.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
