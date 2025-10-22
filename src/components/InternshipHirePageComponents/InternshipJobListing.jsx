import React, { useState, useMemo, useEffect } from "react";
import InternshipJobCard from "./InternshipJobCard";
import Pagination from "../BlogPageComponents/Pagination";
import { Search } from "lucide-react";

const generateInternships = (count) => {
  const titles = [
    "Social Media Intern",
    "Graphic Design Intern",
    "Program Assistant",
    "Data Analyst",
    "Content Writer",
    "Partnership Intern",
    "Web Dev Intern",
  ];
  const departments = [
    "Marketing",
    "Kreatif",
    "Program",
    "Teknologi",
    "Operasional",
  ];
  const locations = [
    "Remote",
    "Hybrid (Jakarta)",
    "WFO (Jakarta)",
    "WFO (Yogyakarta)",
  ];
  const types = ["Magang Kampus Merdeka", "Magang Mandiri", "Magang WFH"];
  const durations = ["3 Bulan", "4 Bulan", "5 Bulan", "6 Bulan"];

  const internships = [];
  for (let i = 1; i <= count; i++) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const department =
      departments[Math.floor(Math.random() * departments.length)];
    internships.push({
      id: `INT-${i}`,
      title: `${title} #${i}`,
      department: department,
      location: locations[Math.floor(Math.random() * locations.length)],
      duration: durations[Math.floor(Math.random() * durations.length)],
      type: types[Math.floor(Math.random() * types.length)],
      summary: `Kesempatan magang sebagai ${title} #${i} di departemen ${department}. Belajar dan berkontribusi langsung!`,
      responsibilities: [
        `Membantu tugas harian tim ${department}.`,
        `Melakukan riset terkait proyek #${i}.`,
        "Berkontribusi dalam brainstorming ide.",
        "Menyiapkan laporan sederhana.",
      ],
      requirements: [
        `Mahasiswa aktif D3/S1 atau fresh graduate (maks 1 tahun).`,
        `Memiliki minat kuat di bidang ${department}.`,
        "Mampu berkomunikasi dengan baik.",
        `Familiar dengan tools dasar (MS Office, Google Suite, dll).`,
        "Proaktif dan mau belajar hal baru.",
      ],
      benefits: [
        "Sertifikat Magang Resmi",
        "Uang Saku/Transport (tergantung kebijakan)",
        "Bimbingan Mentor Profesional",
        "Pengalaman Kerja Nyata",
        "Lingkungan Kerja Kolaboratif",
      ],
    });
  }
  return internships;
};

const allInternships = generateInternships(150);
const departmentsFilter = [
  "Semua Departemen",
  ...new Set(allInternships.map((j) => j.department)),
];
const INTERNSHIPS_PER_PAGE = 5;

export default function InternshipJobListing({ onViewDetail }) {
  const [selectedDept, setSelectedDept] = useState("Semua Departemen");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = useMemo(() => {
    return allInternships
      .filter(
        (job) =>
          selectedDept === "Semua Departemen" || job.department === selectedDept
      )
      .filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [selectedDept, searchTerm]);

  const totalPages = useMemo(
    () => Math.ceil(filteredJobs.length / INTERNSHIPS_PER_PAGE),
    [filteredJobs]
  );
  const currentJobs = useMemo(() => {
    const indexOfLast = currentPage * INTERNSHIPS_PER_PAGE;
    const indexOfFirst = indexOfLast - INTERNSHIPS_PER_PAGE;
    return filteredJobs.slice(indexOfFirst, indexOfLast);
  }, [currentPage, filteredJobs]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const sectionElement = document.getElementById(
        "internship-listing-section"
      );
      if (sectionElement)
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDept, searchTerm]);

  return (
    <section
      id="internship-listing-section"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Lowongan Magang Terbuka
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full md:w-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari posisi magang..."
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative w-full md:w-60">
              <select
                id="department-internship"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white cursor-pointer"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                {departmentsFilter.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 8l4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {currentJobs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentJobs.map((job) => (
                <InternshipJobCard
                  key={job.id}
                  job={job}
                  onViewDetail={onViewDetail}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-700">
              Lowongan Tidak Ditemukan
            </h3>
            <p className="text-gray-500 mt-2">
              Belum ada lowongan untuk departemen ini. Silakan cek kembali
              nanti.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
