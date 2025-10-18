import React from "react";
import ContactHero from "../components/ContactPageComponents/ContactHero";
import ContactInfoSection from "../components/ContactPageComponents/ContactInfoSection";
import ContactForm from "../components/ContactPageComponents/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactInfoSection />
      <ContactForm />
    </div>
  );
}
