import React, { useState } from "react";
import UmkmDaysHero from "../components/UmkmDaysComponents/UmkmDaysHero";
import EventIntro from "../components/UmkmDaysComponents/EventIntro";
import AftermovieSection from "../components/UmkmDaysComponents/AftermovieSection";
import GallerySection from "../components/UmkmDaysComponents/GallerySection";
import EventTestimonials from "../components/UmkmDaysComponents/EventTestimonials";
import EventListing from "../components/UmkmDaysComponents/EventListing";
import VideoModal from "../components/AboutPageComponents/VideoModal";
import RegistrationDetailModal from "../components/UmkmDaysComponents/RegistrationDetailModal";

export default function UmkmDaysPage() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [selectedRegistrationType, setSelectedRegistrationType] =
    useState(null);

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleOpenRegistrationModal = (type) => {
    setSelectedRegistrationType(type);
    setIsRegistrationModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
    setSelectedRegistrationType(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="bg-white">
      <UmkmDaysHero />
      <EventIntro />
      <EventListing onOpenModal={handleOpenRegistrationModal} />
      <AftermovieSection setVideoModalOpen={setVideoModalOpen} />
      <VideoModal
        isVideoModalOpen={isVideoModalOpen}
        setVideoModalOpen={handleCloseVideoModal}
        videoId="dQw4w9WgXcQ"
      />
      <GallerySection />
      <EventTestimonials />
      <RegistrationDetailModal
        isOpen={isRegistrationModalOpen}
        onClose={handleCloseRegistrationModal}
        registrationType={selectedRegistrationType}
      />
    </div>
  );
}
