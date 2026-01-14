import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import JobListing from "../components/ProHirePageComponents/JobListing";
import ProHireHero from "../components/ProHirePageComponents/ProHireHero";
import SpontaneousApplicationModal from "../components/ProHirePageComponents/SpontaneousApplicationModal";
import SpontaneousCta from "../components/ProHirePageComponents/SpontaneousCta";
import WhyJoinUs from "../components/ProHirePageComponents/WhyJoinUs";
import { careerService } from "../services/careerService";

export default function ProHirePage() {
  // 1. State Data
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. State Spontaneous Modal
  const [isSpontaneousModalOpen, setIsSpontaneousModalOpen] = useState(false);

  // 3. Fetch Data Backend (Prohire)
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Panggil API dengan kategori 'prohire'
        const response = await careerService.getJobs("prohire");
        setJobs(response.data || []);
      } catch (error) {
        console.error("Gagal memuat data lowongan:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Handlers Spontaneous Modal
  const handleOpenSpontaneousModal = () => {
    setIsSpontaneousModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSpontaneousModal = () => {
    setIsSpontaneousModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Cleanup overflow
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="bg-white">
      <ProHireHero />
      <WhyJoinUs />

      {/* 4. Tampilkan Loading atau JobListing */}
      {isLoading ? (
        <div className="flex justify-center items-center py-24 bg-gray-50">
          <Loader2 className="animate-spin text-blue-600" size={40} />
        </div>
      ) : (
        <JobListing jobs={jobs} />
      )}

      <SpontaneousCta onOpenModal={handleOpenSpontaneousModal} />

      <SpontaneousApplicationModal
        isOpen={isSpontaneousModalOpen}
        onClose={handleCloseSpontaneousModal}
      />
    </div>
  );
}
