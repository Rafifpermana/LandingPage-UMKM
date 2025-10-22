import React, { useState, useMemo, useEffect } from "react";
import JobCard from "./JobCard";
import Pagination from "../BlogPageComponents/Pagination";
import { Search } from "lucide-react";

const generateJobs = (count) => {
  const titles = [
    "React Developer",
    "Digital Marketing Mgr",
    "Program Manager",
    "UI/UX Designer",
    "Content Strategist",
    "Partnership Mgr",
    "Data Analyst",
    "Backend Engineer",
  ];
  const departments = [
    "Teknologi",
    "Marketing",
    "Program",
    "Desain",
    "Operasional",
  ];
  const locations = [
    "Remote",
    "Hybrid (Jakarta)",
    "WFO (Jakarta)",
    "WFO (Yogyakarta)",
  ];
  const types = [
    "Full-time",
    "Contract (6 bulan)",
    "Full-time (Senior)",
    "Full-time (Junior)",
  ];

  const jobs = [];
  for (let i = 1; i <= count; i++) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const department =
      departments[Math.floor(Math.random() * departments.length)];
    jobs.push({
      id: `PRO-${i}`,
      title: `${title} #${i}`,
      department: department,
      location: locations[Math.floor(Math.random() * locations.length)],
      type: types[Math.floor(Math.random() * types.length)],
      summary: `Deskripsi singkat untuk posisi ${title} #${i} di departemen ${department}. Bergabunglah dengan tim kami!`,
      responsibilities: [
        `Tanggung jawab utama #${i}-1 terkait ${title}.`,
        `Mengembangkan dan mengelola ${department}.`,
        "Berkolaborasi dengan tim lintas fungsi.",
        "Melaporkan progres secara berkala.",
        "Memberikan solusi inovatif.",
      ],
      qualifications: [
        `Kualifikasi utama #${i}-1 (minimal S1/pengalaman relevan).`,
        `Pengalaman ${
          Math.floor(Math.random() * 5) + 1
        } tahun di bidang ${department}.`,
        "Kemampuan komunikasi yang baik.",
        `Menguasai tools terkait ${title.split(" ")[0]}.`,
        "Proaktif dan mampu bekerja mandiri.",
      ],
      benefits: [
        "Gaji Kompetitif",
        "Asuransi Kesehatan",
        "Tunjangan Hari Raya (THR)",
        "Cuti Tahunan",
        "Lingkungan Kerja Fleksibel (tergantung lokasi)",
      ],
    });
  }
  return jobs;
};

const allJobs = generateJobs(50);
const departmentsFilter = [
  "Semua Departemen",
  ...new Set(allJobs.map((j) => j.department)),
];
const JOBS_PER_PAGE = 8;

export default function JobListing({ onViewDetail }) {
  const [selectedDept, setSelectedDept] = useState("Semua Departemen");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredJobs = useMemo(() => {
    return allJobs
      .filter(
        (job) =>
          selectedDept === "Semua Departemen" || job.department === selectedDept
      )
      .filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [selectedDept, searchTerm]);

  const totalPages = useMemo(
    () => Math.ceil(filteredJobs.length / JOBS_PER_PAGE),
    [filteredJobs]
  );
  const currentJobs = useMemo(() => {
    const indexOfLast = currentPage * JOBS_PER_PAGE;
    const indexOfFirst = indexOfLast - JOBS_PER_PAGE;
    return filteredJobs.slice(indexOfFirst, indexOfLast);
  }, [currentPage, filteredJobs]);
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const sectionElement = document.getElementById("job-listing-section");
      if (sectionElement)
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDept, searchTerm]);

  return (
    <section id="job-listing-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Lowongan Prohire Terbuka
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
                placeholder="Cari posisi pekerjaan..."
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative w-full md:w-60">
              <select
                id="department"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white cursor-pointer"
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
                <JobCard key={job.id} job={job} onViewDetail={onViewDetail} />
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
          <div className="text-center text-gray-500 mt-8">
            Lowongan Tidak Ditemukan
          </div>
        )}
      </div>
    </section>
  );
}
