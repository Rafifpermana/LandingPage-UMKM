import React, { useState, useMemo } from "react";
import EventCard from "./EventCard";
import Pagination from "../BlogPageComponents/Pagination";

const generateEvents = (count) => {
  const types = ["tenant", "visitor"];
  const titles = [
    "Daftar Tenant",
    "Tiket Pengunjung",
    "Workshop Digital Marketing",
    "Kompetisi Fotografi Produk",
    "Jadi Relawan Acara",
  ];
  const categories = [
    "UMKM Days 2025",
    "Roadshow Surabaya",
    "Webinar Series Q4",
    "UMKM Days 2024",
  ];
  const colors = [
    { text: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700" },
    { text: "text-green-600", button: "bg-green-600 hover:bg-green-700" },
    { text: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700" },
    { text: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700" },
    { text: "text-teal-600", button: "bg-teal-600 hover:bg-teal-700" },
  ];

  const events = [];
  const baseDate = new Date(2025, 10, 1);

  for (let i = 0; i < count; i++) {
    const typeIndex = Math.floor(Math.random() * types.length);
    const colorIndex = Math.floor(Math.random() * colors.length);
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i * 7);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const color = colors[colorIndex];

    events.push({
      id: `EVT-${i + 1}`,
      typeId: types[typeIndex],
      category,
      title: `${titles[typeIndex]} - ${category}`,
      description: `Deskripsi singkat untuk ${titles[typeIndex]} #${
        i + 1
      }. Kesempatan bagus untuk terlibat dan berkembang. Pelajari lebih lanjut!`,
      dateInfo: `Pendaftaran dibuka: ${date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
      })}`,
      buttonText: "Info & Daftar",
      theme: color,
      image: `https://placehold.co/600x400/${color.button
        .split("-")[1]
        .replace("hover:bg", "")}/ffffff?text=${encodeURIComponent(
        category.substring(0, 10)
      )}`,
    });
  }
  return events;
};

const allEvents = generateEvents(20);
const EVENTS_PER_PAGE = 5;

export default function EventListing({ onOpenModal }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(allEvents.length / EVENTS_PER_PAGE),
    []
  );

  const currentEvents = useMemo(() => {
    const indexOfLast = currentPage * EVENTS_PER_PAGE;
    const indexOfFirst = indexOfLast - EVENTS_PER_PAGE;
    return allEvents.slice(indexOfFirst, indexOfLast);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const sectionElement = document.getElementById("event-listing-section");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="event-listing-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Pendaftaran & Kesempatan
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Temukan cara Anda bisa terlibat dalam berbagai acara dan program
            UMKM Days 2025.
          </p>
        </div>

        {currentEvents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentEvents.map((eventItem) => (
                <EventCard
                  key={eventItem.id}
                  item={eventItem}
                  onOpenModal={onOpenModal}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500">
            Belum ada event yang tersedia saat ini.
          </p>
        )}
      </div>
    </section>
  );
}
