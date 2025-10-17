import React, { useState } from "react";

import UmkmDaysHero from "../components/UmkmDaysComponents/UmkmDaysHero";
import EventIntro from "../components/UmkmDaysComponents/EventIntro";
import AftermovieSection from "../components/UmkmDaysComponents/AftermovieSection";
import GallerySection from "../components/UmkmDaysComponents/GallerySection";
import RegistrationCard from "../components/UmkmDaysComponents/RegistrationCard";

import VideoModal from "../components/AboutPageComponents/VideoModal";

export default function UmkmDaysPage() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <UmkmDaysHero />
      <EventIntro />
      <RegistrationCard />
      <AftermovieSection setVideoModalOpen={setVideoModalOpen} />
      <GallerySection />
      <VideoModal
        isVideoModalOpen={isVideoModalOpen}
        setVideoModalOpen={setVideoModalOpen}
        videoId="dQw4w9WgXcQ"
      />
    </div>
  );
}
