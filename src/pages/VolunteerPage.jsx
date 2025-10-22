import React, { useState, useEffect } from "react";
import VolunteerHero from "../components/VolunteerPageComponents/VolunteerHero";
import OpenOpportunities from "../components/VolunteerPageComponents/OpenOpportunities";
import VolunteerDetailModal from "../components/VolunteerPageComponents/VolunteerDetailModal";

export default function VolunteerPage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (opportunity) => {
    if (opportunity) {
      setSelectedOpportunity(opportunity);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      console.error("Opportunity data is null.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOpportunity(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="bg-white">
      <VolunteerHero />
      <OpenOpportunities onViewDetail={handleViewDetail} />
      <VolunteerDetailModal
        opportunity={selectedOpportunity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
