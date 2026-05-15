"use client";

import dynamic from "next/dynamic";

// Eagerly load above-the-fold components
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/ScrollProgress";

// Lazy load below-the-fold sections
const ResultGallery = dynamic(
  () => import("@/components/sections/ResultGallery")
);
const ConsultationBenefits = dynamic(
  () => import("@/components/sections/ConsultationBenefits")
);
const Speaker = dynamic(() => import("@/components/sections/Speaker"));
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials")
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

// Lazy load interactive components
const StickyMobileCTA = dynamic(
  () => import("@/components/StickyMobileCTA")
);
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const ExitIntentPopup = dynamic(
  () => import("@/components/ExitIntentPopup")
);

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <ResultGallery />
        <ConsultationBenefits />
        <Speaker />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Interactive overlays */}
      <StickyMobileCTA />
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
