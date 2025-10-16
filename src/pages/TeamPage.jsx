import React from "react";
import TeamHero from "../components/TeamPageComponents/TeamHero";
import TeamSection from "../components/TeamPageComponents/TeamSection";

export default function TeamPage() {
  return (
    <div className="bg-gray-100">
      <TeamHero />

      <TeamSection type="foundation" />
      <TeamSection type="executive" />
    </div>
  );
}
