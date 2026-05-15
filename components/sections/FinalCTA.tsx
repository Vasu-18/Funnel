"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { WORKSHOP } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import CTAButton from "@/components/CTAButton";
import CountdownTimer from "@/components/CountdownTimer";
import { Shield, RefreshCw, Lock, Zap } from "lucide-react";

interface FinalCTAProps {
  onRegister: () => void;
}

export default function FinalCTA({ onRegister }: FinalCTAProps) {
  return (
    <section
      id="register"
      className="relative py-16 md:py-24 lg:py-32 bg-hero-gradient text-white overflow-hidden section-padding"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Urgency badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Limited Time Offer — Closing Soon
            </span>
          </motion.div>

          <motion.div variants={staggerItem}>
            <AnimatedHeading as="h2">
              Don&apos;t Let Another Year Pass With{" "}
              <span className="text-gradient-gold">Weak Communication</span>
            </AnimatedHeading>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-dark-300 text-lg max-w-2xl mx-auto"
          >
            Every day you delay is another missed opportunity. Another
            promotion that goes to someone who communicates better. Make the
            decision that changes everything.
          </motion.p>

          {/* Countdown */}
          <motion.div variants={staggerItem}>
            <CountdownTimer
              variant="dark"
              label="Offer expires in:"
            />
          </motion.div>

          {/* Price Card */}
          <motion.div
            variants={staggerItem}
            className="max-w-md mx-auto glass rounded-2xl border border-white/10 p-8"
          >
            <p className="text-dark-400 text-sm mb-2 uppercase tracking-wider">
              Complete Workshop + All Bonuses
            </p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-dark-500 line-through text-2xl">
                {WORKSHOP.originalPrice}
              </span>
              <span className="text-5xl font-heading font-extrabold text-white">
                {WORKSHOP.currentPrice}
              </span>
            </div>
            <div className="inline-block bg-green-500/10 text-green-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              You save ₹2,900 (97% OFF)
            </div>

            <CTAButton
              onClick={onRegister}
              size="xl"
              pulse
              className="w-full mb-4"
            >
              Register Now — {WORKSHOP.currentPrice} Only
            </CTAButton>

            <p className="text-dark-400 text-sm">
              ⚡ Only{" "}
              <span className="text-orange-400 font-bold">
                {WORKSHOP.seatsLeft} seats
              </span>{" "}
              remaining
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-6 pt-4"
          >
            {[
              { icon: Shield, text: "100% Money-Back Guarantee" },
              { icon: Lock, text: "Secure Payment" },
              { icon: RefreshCw, text: "24-Hour Refund Policy" },
            ].map((trust) => (
              <div
                key={trust.text}
                className="flex items-center gap-2 text-dark-400 text-sm"
              >
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
