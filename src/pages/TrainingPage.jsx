import React from "react";
import TrainingHero from "../components/TrainingPageComponents/TrainingHero";
import WhyTraining from "../components/TrainingPageComponents/WhyTraining";
import UpcomingTrainings from "../components/TrainingPageComponents/UpcomingTrainings";
import HowToRegister from "../components/TrainingPageComponents/HowToRegister";

export default function TrainingPage() {
  return (
    <div className="bg-white">
      <TrainingHero />
      <WhyTraining />
      <UpcomingTrainings />
      <HowToRegister />
    </div>
  );
}
