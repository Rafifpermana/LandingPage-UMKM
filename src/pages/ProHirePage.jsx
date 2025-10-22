import React, { useState, useEffect } from "react";
import ProHireHero from "../components/ProHirePageComponents/ProHireHero";
import WhyJoinUs from "../components/ProHirePageComponents/WhyJoinUs";
import JobListing from "../components/ProHirePageComponents/JobListing";
import SpontaneousCta from "../components/ProHirePageComponents/SpontaneousCta";
import JobDetailModal from "../components/ProHirePageComponents/JobDetailModal";
import SpontaneousApplicationModal from "../components/ProHirePageComponents/SpontaneousApplicationModal";

export default function ProHirePage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isSpontaneousModalOpen, setIsSpontaneousModalOpen] = useState(false);

  const handleViewDetail = (job) => {
    if (job) {
      setSelectedJob(job);
      setIsJobModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      console.error("Job data is null.");
    }
  };

  const handleCloseJobModal = () => {
    setIsJobModalOpen(false);
    setSelectedJob(null);
    if (!isSpontaneousModalOpen) {
      document.body.style.overflow = "unset";
    }
  };

  const handleOpenSpontaneousModal = () => {
    setIsSpontaneousModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSpontaneousModal = () => {
    setIsSpontaneousModalOpen(false);
    if (!isJobModalOpen) {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="bg-white">
      <ProHireHero />
      <WhyJoinUs />
      <JobListing onViewDetail={handleViewDetail} />
      <SpontaneousCta onOpenModal={handleOpenSpontaneousModal} />
      <JobDetailModal
        job={selectedJob}
        isOpen={isJobModalOpen}
        onClose={handleCloseJobModal}
      />
      <SpontaneousApplicationModal
        isOpen={isSpontaneousModalOpen}
        onClose={handleCloseSpontaneousModal}
      />
    </div>
  );
}
