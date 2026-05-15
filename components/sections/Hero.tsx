"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { WORKSHOP, SPEAKER } from "@/constants/data";
import CountdownTimer from "@/components/CountdownTimer";
import CTAButton from "@/components/CTAButton";
import TrustBadge from "@/components/TrustBadge";
import {
  Calendar,
  Clock,
  Globe,
  Users,
  Flame,
  Play,
  Star,
  Zap,
} from "lucide-react";

interface HeroProps {
  onRegister: () => void;
}

export default function Hero({ onRegister }: HeroProps) {
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
        {/* Trust badges row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <TrustBadge variant="star" text="4.9/5 Rating" />
          <TrustBadge variant="users" text={`${WORKSHOP.totalTransformed} Trained`} />
          <TrustBadge variant="shield" text="100% Refund Guarantee" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Live badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                <Flame className="w-4 h-4" />
                LIVE {WORKSHOP.duration} Workshop
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-heading font-extrabold text-hero mb-6 leading-[1.1]"
            >
              Master the Art of{" "}
              <span className="text-gradient-gold">
                Powerful Communication
              </span>{" "}
              & Transform Your Career
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Join{" "}
              <span className="text-white font-semibold">
                {SPEAKER.name}
              </span>{" "}
              in an exclusive live masterclass where you&apos;ll learn proven
              frameworks to speak confidently, negotiate better salaries, and
              become a respected leader.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8"
            >
              {[
                { icon: Users, value: WORKSHOP.totalTransformed, label: "Professionals" },
                { icon: Star, value: "4.9★", label: "Avg Rating" },
                { icon: Zap, value: "500+", label: "Workshops" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-lg font-bold font-heading">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-dark-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center gap-4 mb-6"
            >
              <CTAButton onClick={onRegister} size="xl" pulse>
                Register Now — Just {WORKSHOP.currentPrice}
              </CTAButton>
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <span className="line-through">{WORKSHOP.originalPrice}</span>
                <span className="text-green-400 font-semibold">97% OFF</span>
              </div>
            </motion.div>

            {/* Scarcity */}
            <motion.p
              variants={staggerItem}
              className="text-sm text-dark-400"
            >
              ⚡ Only{" "}
              <span className="text-orange-400 font-bold">
                {WORKSHOP.seatsLeft} seats
              </span>{" "}
              left at this price. Offer expires soon.
            </motion.p>
          </motion.div>

          {/* Right Column — Workshop Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gold-500/10 rounded-3xl blur-3xl" />

            <div className="relative glass rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
              {/* Speaker Video Placeholder */}
              <div className="relative aspect-video rounded-xl bg-dark-800/50 border border-white/5 overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                    <Play className="w-7 h-7 text-gold-400 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-xs font-bold text-dark-950">
                    AM
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">
                      {SPEAKER.name}
                    </p>
                    <p className="text-dark-400 text-[10px]">Watch Intro</p>
                  </div>
                </div>
              </div>

              {/* Workshop Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-heading font-bold text-white">
                  Communication Mastery Workshop
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Calendar, label: WORKSHOP.date },
                    { icon: Clock, label: WORKSHOP.time },
                    { icon: Globe, label: WORKSHOP.language },
                    { icon: Users, label: `${WORKSHOP.seatsLeft} seats left` },
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-center gap-2 text-sm text-dark-300"
                    >
                      <detail.icon className="w-4 h-4 text-gold-400 shrink-0" />
                      <span className="truncate">{detail.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-heading font-bold text-white">
                      {WORKSHOP.currentPrice}
                    </span>
                    <span className="text-dark-400 line-through text-sm">
                      {WORKSHOP.originalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-dark-400">
                    + 5 Exclusive Bonuses FREE
                  </p>
                </div>
                <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                  SAVE 97%
                </div>
              </div>

              {/* Card CTA */}
              <CTAButton
                onClick={onRegister}
                size="lg"
                pulse
                className="w-full"
              >
                Secure Your Seat
              </CTAButton>
            </div>

            {/* Countdown below card */}
            <div className="mt-6">
              <CountdownTimer variant="dark" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
