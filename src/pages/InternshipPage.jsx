import React from "react";
import InternshipHero from "../components/InternshipPageComponents/InternshipHero";
import BenefitsSection from "../components/InternshipPageComponents/BenefitsSection";
import OpenPositions from "../components/InternshipPageComponents/OpenPositions";
import HowToApply from "../components/InternshipPageComponents/HowToApply";

export default function InternshipPage() {
  return (
    <div className="bg-white">
      <InternshipHero />
      <BenefitsSection />
      <OpenPositions />
      <HowToApply />
    </div>
  );
}
