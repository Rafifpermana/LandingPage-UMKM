import React from "react";

export default function BenefitPoint({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full">
        {Icon && <Icon size={20} />}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
