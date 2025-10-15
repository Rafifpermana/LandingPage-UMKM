import { useState } from "react";

import AboutHero from "../components/AboutPageComponents/AboutHero";
import AboutIntro from "../components/AboutPageComponents/AboutIntro";
import AboutVideoSection from "../components/AboutPageComponents/AboutVideoSection";
import AboutPillars from "../components/AboutPageComponents/AboutPillars";
import AboutBackground from "../components/AboutPageComponents/AboutBackground";
import VideoModal from "../components/AboutPageComponents/VideoModal";

export default function AboutPage() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <AboutHero />
      <AboutIntro />
      <AboutBackground />
      <AboutVideoSection setVideoModalOpen={setVideoModalOpen} />{" "}
      <AboutPillars />
      <VideoModal
        isVideoModalOpen={isVideoModalOpen}
        setVideoModalOpen={setVideoModalOpen}
      />
    </div>
  );
}
