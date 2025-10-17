import React from "react";
import { Calendar, User, Tag, MapPin } from "lucide-react";

export default function TrainingCard({ training }) {
  const formatPrice = (price) => {
    if (price === 0) return "Gratis";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const isOnline = training.type === "Online";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl flex flex-col">
      <img
        src={training.image}
        alt={training.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start ${
            isOnline
              ? "bg-blue-100 text-blue-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {training.type}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {training.title}
        </h3>

        <div className="space-y-2 text-gray-600 text-sm mb-5">
          <div className="flex items-center">
            <User size={14} className="mr-2 flex-shrink-0" />{" "}
            {training.instructor}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-2 flex-shrink-0" />{" "}
            {training.date}
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-2 flex-shrink-0" />{" "}
            {isOnline ? "Via Zoom Meeting" : training.location}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            {formatPrice(training.price)}
          </span>
          <button className="bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}
