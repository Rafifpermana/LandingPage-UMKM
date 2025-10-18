import React from "react";
import VolunteerHero from "../components/VolunteerPageComponents/VolunteerHero";
import WhyVolunteer from "../components/VolunteerPageComponents/WhyVolunteer";
import OpenOpportunities from "../components/VolunteerPageComponents/OpenOpportunities";
import HowToJoinVolunteer from "../components/VolunteerPageComponents/HowToJoinVolunteer";

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      <VolunteerHero />
      <WhyVolunteer />
      <OpenOpportunities />
      <HowToJoinVolunteer />
    </div>
  );
}
