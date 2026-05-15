"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-dark-950/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 safe-area-pb">
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">
                  Register Now — <span className="text-gold-400">₹99 Only</span>
                </p>
                <p className="text-dark-400 text-xs">Limited seats available</p>
              </div>
              <CTAButton
                onClick={scrollToRegister}
                size="default"
                pulse
                className="shrink-0 text-sm"
              >
                Book Seat
              </CTAButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
