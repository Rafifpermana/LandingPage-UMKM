import React from "react";

export default function TeamMemberCard({
  name,
  role,
  description,
  image,
  color,
  reverse = false,
}) {
  const imageUrl =
    image || "https://placehold.co/400x500/e2e8f0/64748b?text=Foto";

  return (
    <div
      className={`flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden bg-white h-full ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={`Foto profil ${name}`}
          className="w-full h-full object-cover min-h-[300px]"
        />
      </div>

      <div
        className={`w-full md:w-1/2 p-6 flex flex-col justify-center min-h-[300px] ${color}`}
      >
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-base text-white opacity-90 mt-1">{role}</p>
        <div className="w-12 h-1 bg-white/50 my-4 rounded"></div>
        <p className="text-sm text-white opacity-80">{description}</p>
      </div>
    </div>
  );
}
