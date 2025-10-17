import React, { useState, useMemo } from "react";
import InternshipJobCard from "./InternshipJobCard";

const allInternships = [
  {
    id: 1,
    title: "Social Media Intern",
    department: "Marketing",
    location: "Remote",
    duration: "3-6 Bulan",
    type: "Magang Kampus Merdeka",
  },
  {
    id: 2,
    title: "Graphic Design Intern",
    department: "Kreatif",
    location: "Remote",
    duration: "3 Bulan",
    type: "Magang Mandiri",
  },
  {
    id: 3,
    title: "Program Assistant Intern",
    department: "Program",
    location: "Hybrid (Jakarta)",
    duration: "6 Bulan",
    type: "Magang Kampus Merdeka",
  },
  {
    id: 4,
    title: "Data Analyst Intern",
    department: "Teknologi",
    location: "Remote",
    duration: "4 Bulan",
    type: "Magang Mandiri",
  },
  {
    id: 5,
    title: "Content Writer Intern",
    department: "Marketing",
    location: "Remote",
    duration: "3 Bulan",
    type: "Magang Mandiri",
  },
];

const departments = [
  "Semua Departemen",
  "Marketing",
  "Kreatif",
  "Program",
  "Teknologi",
];

export default function InternshipJobListing() {
  const [selectedDept, setSelectedDept] = useState("Semua Departemen");

  const filteredJobs = useMemo(() => {
    if (selectedDept === "Semua Departemen") {
      return allInternships;
    }
    return allInternships.filter((job) => job.department === selectedDept);
  }, [selectedDept]);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Lowongan Magang Terbuka
          </h2>
          <div className="mt-4 md:mt-0">
            <label htmlFor="department" className="sr-only">
              Filter Departemen
            </label>
            <select
              id="department"
              className="border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <InternshipJobCard key={job.id} job={job} />
            ))}
          </div>
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
