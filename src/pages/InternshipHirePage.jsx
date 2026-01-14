import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import InternshipHireHero from "../components/InternshipHirePageComponents/InternshipHireHero";
import InternshipJobListing from "../components/InternshipHirePageComponents/InternshipJobListing";
import WhyInternHere from "../components/InternshipHirePageComponents/WhyInternHere";
import { careerService } from "../services/careerService";

export default function InternshipHirePage() {
  // State Data
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Data Internship
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Panggil API dengan filter 'internship'
        const response = await careerService.getJobs("internship");
        setJobs(response.data || []);
      } catch (error) {
        console.error("Gagal memuat data magang:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-white">
      <InternshipHireHero />
      <WhyInternHere />

      {isLoading ? (
        <div className="flex justify-center items-center py-24 bg-gray-50">
          <Loader2 className="animate-spin text-teal-600" size={40} />
        </div>
      ) : (
        <InternshipJobListing jobs={jobs} />
      )}
    </div>
  );
}
