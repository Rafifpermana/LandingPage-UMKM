import React from "react";
import OpportunitiesHero from "../components/InternshipPageComponents/InternshipHero";
import BenefitsSection from "../components/InternshipPageComponents/BenefitsSection";
import HowToApply from "../components/InternshipPageComponents/HowToApply";
import ProgramInfo from "../components/InternshipPageComponents/ProgramInfo";

export default function InternshipPage() {
  return (
    <div className="bg-white">
      <OpportunitiesHero />
      <BenefitsSection />
      <ProgramInfo />
      <HowToApply />
    </div>
  );
}
