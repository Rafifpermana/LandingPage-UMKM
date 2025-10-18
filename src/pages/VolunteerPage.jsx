import React from "react";
import VolunteerHero from "../components/VolunteerPageComponents/VolunteerHero";
import OpenOpportunities from "../components/VolunteerPageComponents/OpenOpportunities";

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      <VolunteerHero />\
      <OpenOpportunities />
    </div>
  );
}
