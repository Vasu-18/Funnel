"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import AnimatedHeading from "@/components/AnimatedHeading";
import CTAButton from "@/components/CTAButton";
import { Shield, Lock, Phone } from "lucide-react";

import { useRouter } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();
  return (
    <section
      id="book"
      className="relative py-16 md:py-24 lg:py-32 bg-hero-gradient text-white overflow-hidden section-padding"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <Phone className="w-4 h-4" />
              Free Strategy Session
            </span>
          </motion.div>

          <motion.div variants={staggerItem}>
            <AnimatedHeading as="h2">
              Ready to Transform{" "}
              <span className="text-gradient-gold">Your Business?</span>
            </AnimatedHeading>
          </motion.div>

          <motion.p variants={staggerItem} className="text-dark-300 text-lg max-w-2xl mx-auto">
            Every day without the right strategy is a missed growth opportunity. Book your free 15-minute consultation and get the clarity your business needs to scale.
          </motion.p>

          <motion.div variants={staggerItem} className="max-w-md mx-auto glass rounded-2xl border border-white/10 p-8">
            <p className="text-dark-400 text-sm mb-2 uppercase tracking-wider">15-Minute Strategy Call</p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-5xl font-heading font-extrabold text-white">FREE</span>
            </div>
            <div className="inline-block bg-green-500/10 text-green-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              No charges • No obligation
            </div>

            <CTAButton onClick={() => router.push("/book")} size="xl" pulse className="w-full mb-4">
              Book Your Free Consultation
            </CTAButton>

            <p className="text-dark-400 text-sm">
              🔒 100% confidential. Your information is secure.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {[
              { icon: Shield, text: "100% Confidential" },
              { icon: Lock, text: "No Obligation" },
              { icon: Phone, text: "Personalized Advice" },
            ].map((trust) => (
              <div key={trust.text} className="flex items-center gap-2 text-dark-400 text-sm">
                <trust.icon className="w-4 h-4 text-gold-400" />
                <span>{trust.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
