import React, { useState, useEffect } from "react";
import InternshipHireHero from "../components/InternshipHirePageComponents/InternshipHireHero";
import WhyInternHere from "../components/InternshipHirePageComponents/WhyInternHere";
import InternshipJobListing from "../components/InternshipHirePageComponents/InternshipJobListing";

import InternshipDetailModal from "../components/InternshipHirePageComponents/InternshipDetailModal"; // Impor Modal

export default function InternshipHirePage() {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (internship) => {
    if (internship) {
      setSelectedInternship(internship);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      console.error("Internship data is null.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInternship(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="bg-white">
      <InternshipHireHero />
      <WhyInternHere />
      <InternshipJobListing onViewDetail={handleViewDetail} />
      <InternshipDetailModal
        internship={selectedInternship}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
