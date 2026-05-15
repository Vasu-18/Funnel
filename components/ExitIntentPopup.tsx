"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useExitIntent } from "@/hooks/useExitIntent";
import { X, Phone, AlertTriangle } from "lucide-react";
import CTAButton from "./CTAButton";
import { useRouter } from "next/navigation";

export default function ExitIntentPopup() {
  const router = useRouter();
  const { showPopup, closePopup } = useExitIntent(5000);

  const handleRegister = () => {
    closePopup();
    router.push("/book");
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-dark-900 rounded-2xl border border-gold-500/20 shadow-2xl overflow-hidden"
          >
            <button onClick={closePopup} className="absolute top-4 right-4 text-dark-400 hover:text-white z-10" aria-label="Close">
              <X className="w-5 h-5" />
            </button>

            <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border-b border-gold-500/20 px-6 py-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">
                Wait! Don&apos;t miss this opportunity
              </span>
            </div>

            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-gold-400" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Get Your Free Strategy Session
              </h3>
              <p className="text-dark-300 mb-6">
                A 15-minute call that could change the trajectory of your business.
                Get personalized insights — <span className="text-gold-400 font-bold">completely free</span>.
              </p>

              <CTAButton onClick={handleRegister} size="xl" pulse className="w-full mb-4">
                Yes, Book My Free Call!
              </CTAButton>

              <button onClick={closePopup} className="text-dark-500 text-sm hover:text-dark-300 transition-colors">
                No thanks, I&apos;ll figure it out myself
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
