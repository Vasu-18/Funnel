"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { BONUSES } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import {
  BookOpen,
  FileText,
  UsersRound,
  Video,
  Calculator,
  Gift,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  FileText,
  UsersRound,
  Video,
  Calculator,
};

export default function Bonuses() {
  const totalValue = BONUSES.reduce(
    (sum, b) => sum + parseInt(b.value.replace(/[₹,]/g, "")),
    0
  );

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-4"
          >
            <Gift className="w-4 h-4" />
            FREE with your registration
          </motion.div>
          <AnimatedHeading as="h2">
            5 Exclusive Bonuses Worth{" "}
            <span className="text-gradient-gold">
              ₹{totalValue.toLocaleString("en-IN")}
            </span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            Register today and get instant access to these premium bonuses —
            absolutely FREE.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto"
        >
          {BONUSES.map((bonus, index) => {
            const Icon = iconMap[bonus.icon] || Gift;
            return (
              <motion.div
                key={bonus.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl overflow-hidden ${
                  index >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {/* Glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/30 via-transparent to-gold-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative glass rounded-2xl p-6 h-full border border-white/5 group-hover:border-gold-500/20 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="text-gold-400 font-heading font-bold text-sm">
                      Worth {bonus.value}
                    </span>
                  </div>

                  <h3 className="text-card-title font-heading font-bold text-white mb-2">
                    {bonus.title}
                  </h3>

                  <p className="text-dark-400 text-sm leading-relaxed">
                    {bonus.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-xs text-green-400 font-semibold">
                      ✓ FREE with registration
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
