"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { PAIN_POINTS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import {
  Mic,
  EyeOff,
  ShieldOff,
  MessageCircleOff,
  TrendingDown,
  IndianRupee,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic,
  EyeOff,
  ShieldOff,
  MessageCircleOff,
  TrendingDown,
  IndianRupee,
};

export default function PainPoints() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Does this sound like you?
          </motion.p>
          <AnimatedHeading as="h2">
            The Silent Career Killers Nobody{" "}
            <span className="text-gradient-gold">Talks About</span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            These invisible barriers hold back millions of talented
            professionals. How many of these are silently destroying your
            potential?
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {PAIN_POINTS.map((point) => {
            const Icon = iconMap[point.icon] || Mic;
            return (
              <motion.div
                key={point.title}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative glass rounded-2xl p-6 h-full border border-white/5 group-hover:border-red-500/20 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-card-title font-heading font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
