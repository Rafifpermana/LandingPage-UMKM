import React from "react";
import ProHireHero from "../components/ProHirePageComponents/ProHireHero";
import WhyJoinUs from "../components/ProHirePageComponents/WhyJoinUs";
import JobListing from "../components/ProHirePageComponents/JobListing";
import SpontaneousCta from "../components/ProHirePageComponents/SpontaneousCta";

export default function ProHirePage() {
  return (
    <div className="bg-white">
      <ProHireHero />
      <WhyJoinUs />
      <JobListing />
      <SpontaneousCta />
    </div>
  );
}
