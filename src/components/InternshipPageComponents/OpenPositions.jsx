import React from "react";
import PositionCard from "./PositionCard";

const internships = [
  {
    title: "Social Media Intern",
    type: "Magang",
    location: "Remote",
    duration: "3-6 Bulan",
  },
  {
    title: "Graphic Design Intern",
    type: "Magang",
    location: "Remote",
    duration: "3-6 Bulan",
  },
  {
    title: "Program Assistant",
    type: "Magang",
    location: "WFO (Jakarta)",
    duration: "6 Bulan",
  },
];

const volunteers = [
  {
    title: "Event Support",
    type: "Relawan",
    location: "Remote/Event Based",
    duration: "Per Proyek",
  },
  {
    title: "Content Contributor",
    type: "Relawan",
    location: "Remote",
    duration: "Fleksibel",
  },
];

export default function OpenPositions() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Lowongan Magang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((pos) => (
              <PositionCard key={pos.title} {...pos} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Kesempatan Relawan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteers.map((pos) => (
              <PositionCard key={pos.title} {...pos} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
