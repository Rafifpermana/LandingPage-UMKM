import React from "react";
import InternshipHireHero from "../components/InternshipHirePageComponents/InternshipHireHero";
import WhyInternHere from "../components/InternshipHirePageComponents/WhyInternHere";
import InternshipJobListing from "../components/InternshipHirePageComponents/InternshipJobListing";
import SelectionProcess from "../components/InternshipHirePageComponents/SelectionProcess";

export default function InternshipHirePage() {
  return (
    <div className="bg-white">
      <InternshipHireHero />
      <WhyInternHere />
      <InternshipJobListing />
      <SelectionProcess />
    </div>
  );
}
