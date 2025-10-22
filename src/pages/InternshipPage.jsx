import React from "react";
import InternshipHero from "../components/InternshipPageComponents/InternshipHero";
import ProgramInfoTabs from "../components/InternshipPageComponents/ProgramInfoTabs";

export default function InternshipPage() {
  return (
    <div className="bg-gray-50">
      <InternshipHero />
      <ProgramInfoTabs />
    </div>
  );
}
