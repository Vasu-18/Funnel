"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { CONSULTATION_BENEFITS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { CheckSquare } from "lucide-react";

export default function ConsultationBenefits() {
  return (
    <section
      id="benefits"
      className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            What You&apos;ll Discover
          </motion.p>
          <AnimatedHeading as="h2">
            In this 15-minute consultation call,{" "}
            <span className="text-gradient-gold">you&apos;ll discover:</span>
          </AnimatedHeading>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 lg:space-y-5 max-w-3xl mx-auto"
        >
          {CONSULTATION_BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-start gap-4 group"
            >
              <div className="shrink-0 mt-0.5">
                <div className="w-7 h-7 rounded-md bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <CheckSquare className="w-4 h-4 text-green-400" />
                </div>
              </div>
              <p className="text-base sm:text-lg text-dark-200 leading-relaxed font-medium">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
