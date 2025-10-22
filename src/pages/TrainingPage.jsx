import React, { useState } from "react";
import TrainingHero from "../components/TrainingPageComponents/TrainingHero";
import WhyTraining from "../components/TrainingPageComponents/WhyTraining";
import UpcomingTrainings from "../components/TrainingPageComponents/UpcomingTrainings";
import TrainingDetailModal from "../components/TrainingPageComponents/TrainingDetailModal";

export default function TrainingPage() {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (training) => {
    setSelectedTraining(training);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTraining(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-white">
      <TrainingHero />
      <WhyTraining />
      <UpcomingTrainings onViewDetail={handleViewDetail} />
      <TrainingDetailModal
        training={selectedTraining}
        onClose={handleCloseModal}
      />
    </div>
  );
}
