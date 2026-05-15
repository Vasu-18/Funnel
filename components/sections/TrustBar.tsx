"use client";

import { motion } from "framer-motion";
import { TRUST_COMPANIES, WORKSHOP } from "@/constants/data";
import { Star, Users } from "lucide-react";

export default function TrustBar() {
  // Double the array for seamless loop
  const companies = [...TRUST_COMPANIES, ...TRUST_COMPANIES];

  return (
    <section className="relative py-8 bg-dark-950 border-y border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center"
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gold-400" />
            <span className="text-white font-heading font-bold text-lg">
              {WORKSHOP.totalTransformed}
            </span>
            <span className="text-dark-400 text-sm">Professionals Trained</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gold-400" fill="currentColor" />
            <span className="text-white font-heading font-bold text-lg">
              4.9/5
            </span>
            <span className="text-dark-400 text-sm">Average Rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-white font-heading font-bold text-lg">
              500+
            </span>
            <span className="text-dark-400 text-sm">Corporate Workshops</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-dark-950 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-dark-950 to-transparent" />

        <div className="flex animate-marquee">
          {companies.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex items-center justify-center min-w-[160px] px-8 py-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-white font-heading font-semibold text-sm tracking-wider uppercase whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
