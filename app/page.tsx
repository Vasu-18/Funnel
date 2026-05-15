"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Eagerly load above-the-fold components
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ScrollProgress from "@/components/ScrollProgress";

// Lazy load below-the-fold sections
const PainPoints = dynamic(() => import("@/components/sections/PainPoints"));
const Transformation = dynamic(
  () => import("@/components/sections/Transformation")
);
const WhatYouLearn = dynamic(
  () => import("@/components/sections/WhatYouLearn")
);
const Speaker = dynamic(() => import("@/components/sections/Speaker"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);
const WhoIsThisFor = dynamic(
  () => import("@/components/sections/WhoIsThisFor")
);
const Bonuses = dynamic(() => import("@/components/sections/Bonuses"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

// Lazy load interactive components
const StickyMobileCTA = dynamic(
  () => import("@/components/StickyMobileCTA")
);
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const RegistrationForm = dynamic(
  () => import("@/components/RegistrationForm")
);
const ExitIntentPopup = dynamic(
  () => import("@/components/ExitIntentPopup")
);

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero onRegister={openForm} />
        <TrustBar />
        <PainPoints />
        <Transformation />
        <WhatYouLearn onRegister={openForm} />
        <Speaker />
        <Testimonials />
        <WhoIsThisFor />
        <Bonuses />
        <FAQ />
        <FinalCTA onRegister={openForm} />
      </main>

      <Footer />

      {/* Interactive overlays */}
      <StickyMobileCTA />
      <WhatsAppButton />
      <RegistrationForm isOpen={isFormOpen} onClose={closeForm} />
      <ExitIntentPopup onRegister={openForm} />
    </>
  );
}
