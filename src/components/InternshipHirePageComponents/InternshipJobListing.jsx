import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Pagination from "../BlogPageComponents/Pagination";
import InternshipDetailModal from "./InternshipDetailModal";
import InternshipJobCard from "./InternshipJobCard";

const INTERNSHIPS_PER_PAGE = 6;

export default function InternshipJobListing({ jobs = [] }) {
  const [selectedDept, setSelectedDept] = useState("Semua Departemen");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // State untuk Modal
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Ambil list departemen dari data Jobs yang masuk
  const departmentsFilter = useMemo(() => {
    const depts = jobs.map((j) => j.department);
    return ["Semua Departemen", ...new Set(depts)];
  }, [jobs]);

  // 2. Filter Logic
  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs
      .filter(
        (job) =>
          selectedDept === "Semua Departemen" || job.department === selectedDept
      )
      .filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [jobs, selectedDept, searchTerm]);

  // 3. Pagination Logic
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

  // Handler Buka Modal
  const handleViewDetail = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <section
      id="internship-listing-section"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Lowongan Magang Terbuka
        </h2>

        {/* Filter & Search Bar */}
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

        {/* Job Grid */}
        {currentJobs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentJobs.map((job) => (
                <InternshipJobCard
                  key={job.id}
                  job={job}
                  onViewDetail={handleViewDetail}
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
              Belum ada lowongan untuk kriteria ini. Silakan cek kembali nanti.
            </p>
          </div>
        )}
      </div>

      {/* Render Modal */}
      <InternshipDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        internship={selectedJob}
      />
    </section>
  );
}
