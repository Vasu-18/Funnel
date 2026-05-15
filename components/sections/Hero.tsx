"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SPEAKER } from "@/constants/data";
import CTAButton from "@/components/CTAButton";
import { Phone, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen bg-hero-gradient text-white overflow-hidden pt-20 lg:pt-24">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold-500/8 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[150px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                <Phone className="w-4 h-4" />
                Free 15-Minute Strategy Call
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-heading font-extrabold text-hero mb-6 leading-[1.1]"
            >
              Book Your Free{" "}
              <span className="text-gradient-gold">
                Strategic Business
              </span>{" "}
              Consultation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Get personalized insights from{" "}
              <span className="text-white font-semibold">
                {SPEAKER.name}
              </span>{" "}
              — a foresight-driven MSME strategist who has helped 300+ businesses
              unlock growth, clarity, and scale.
            </motion.p>

            {/* Quick benefits */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-3 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {[
                "Identify hidden growth blockers",
                "Get actionable strategic advice",
                "100% free, no obligations",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5 text-dark-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center gap-4 mb-6"
            >
              <CTAButton onClick={() => router.push("/book")} size="xl" pulse>
                Book Your Free Call
              </CTAButton>
            </motion.div>

            {/* Trust note */}
            <motion.p
              variants={staggerItem}
              className="text-sm text-dark-400"
            >
              🔒 Your information is 100% confidential. No spam, ever.
            </motion.p>
          </motion.div>

          {/* Right Column — Consultation Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gold-500/10 rounded-3xl blur-3xl" />

            <div className="relative glass rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-dark-950" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Strategy Session
                  </h3>
                  <p className="text-dark-400 text-sm">15-minute focused call</p>
                </div>
              </div>

              {/* What you get */}
              <div className="space-y-3">
                {[
                  "Personalized business assessment",
                  "Growth gap identification",
                  "Practical strategic insights",
                  "Clear next steps & roadmap",
                  "Confidential discussion",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-dark-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-heading font-bold text-white">
                      FREE
                    </span>
                  </div>
                  <p className="text-xs text-dark-400">
                    No charges, no obligation
                  </p>
                </div>
                <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                  LIMITED SLOTS
                </div>
              </div>

              {/* Card CTA */}
              <CTAButton
                onClick={() => router.push("/book")}
                size="lg"
                pulse
                className="w-full"
              >
                Book Free Consultation
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
