"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import BookingForm from "@/components/RegistrationForm";
import ResultGallery from "@/components/sections/ResultGallery";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 lg:pt-32 min-h-screen bg-hero-gradient text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                  Secure Your <span className="text-gradient-gold">Free Session</span>
                </h1>
                <p className="text-lg text-dark-300">
                  You&apos;re one step away from identifying the exact roadblocks in your business and building a roadmap for scale.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Personalized business assessment",
                  "Growth gap identification",
                  "Practical strategic insights",
                  "Clear next steps & roadmap",
                  "Strictly confidential",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-dark-200">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>

        {/* Results Gallery immediately below */}
        <div className="border-t border-white/5 bg-dark-950">
          <ResultGallery />
        </div>
      </main>
      <Footer />
    </>
  );
}
