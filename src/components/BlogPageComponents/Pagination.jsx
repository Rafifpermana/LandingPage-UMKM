import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-between mt-16 mb-8 gap-4">
      <div className="text-sm text-gray-600 font-medium flex-shrink-0">
        Halaman <span className="font-bold text-gray-800">{currentPage}</span>{" "}
        dari <span className="font-bold text-gray-800">{totalPages}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-gray-300
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent
                   hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600
                   transition-all duration-300 group font-medium text-sm"
          aria-label="Halaman Sebelumnya"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-blue-600
                   bg-blue-600 text-white font-medium text-sm
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-blue-600
                   hover:bg-blue-700 hover:border-blue-700
                   transition-all duration-300 group"
          aria-label="Halaman Berikutnya"
        >
          <span className="hidden sm:inline">Berikutnya</span>
          <ChevronRight
            size={18}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
