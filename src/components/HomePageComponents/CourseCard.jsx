import React from "react";
import { BookOpen, Users, Clock, ArrowRight, Star } from "lucide-react";

export default function CourseCard({ course }) {
  const formatPrice = (price) => {
    if (price === "Gratis" || price === 0) return "Gratis";
    if (typeof price === "number") {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price);
    }
    return price;
  };

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "beginner":
        return "from-emerald-500 to-teal-500";
      case "expert":
        return "from-rose-500 to-pink-500";
      default:
        return "from-violet-500 to-purple-500";
    }
  };

  const courseLink = "https://kelas.umkmhebat.id/";

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div
          className={`absolute top-3 left-3 bg-gradient-to-r ${getLevelColor(
            course.level
          )} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
        >
          {course.level}
        </div>

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
          <Clock size={12} />
          {course.duration}
        </div>

        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-gray-900">
            {course.rating}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors min-h-[2.5rem]">
          {course.title}
        </h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {course.shortDescription}
        </p>

        <div className="mb-4">
          <span
            className={`text-xl font-bold ${
              formatPrice(course.price) === "Gratis"
                ? "text-green-600"
                : "text-gray-900"
            }`}
          >
            {formatPrice(course.price)}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-blue-500" />
            <span className="font-medium">{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} className="text-purple-500" />
            <span className="font-medium">{course.students} Students</span>
          </div>
        </div>

        <a
          href={courseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 text-sm text-center inline-flex items-center justify-center gap-2 group/btn shadow-lg shadow-blue-500/30"
        >
          Lihat Kelas
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
