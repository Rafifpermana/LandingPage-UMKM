import React from "react";
import InternshipHireHero from "../components/InternshipHirePageComponents/InternshipHireHero";
import InternshipJobListing from "../components/InternshipHirePageComponents/InternshipJobListing";

export default function InternshipHirePage() {
  return (
    <div className="bg-white">
      <InternshipHireHero />
      <InternshipJobListing />
    </div>
  );
}
