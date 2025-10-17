import React from "react";
import IncubationHero from "../components/IncubationPageComponents/IncubationHero";
import ProgramIntro from "../components/IncubationPageComponents/ProgramIntro";
import ProgramFacilities from "../components/IncubationPageComponents/ProgramFacilities";
import ProgramTimeline from "../components/IncubationPageComponents/ProgramTimeline";
import HowToJoin from "../components/IncubationPageComponents/HowToJoin";

export default function IncubationPage() {
  return (
    <div className="bg-white">
      <IncubationHero />
      <ProgramIntro />
      <ProgramFacilities />
      <ProgramTimeline />
      <HowToJoin />
    </div>
  );
}
