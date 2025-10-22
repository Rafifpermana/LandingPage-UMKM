import React from "react";

export default function StepItem({ num, title, description }) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-200 pb-8 last:border-l-transparent last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
      <p className="text-sm font-semibold text-gray-500 mb-1">Langkah {num}</p>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
