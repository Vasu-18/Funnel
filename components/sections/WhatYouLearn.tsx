"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { LEARNING_MODULES } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import CTAButton from "@/components/CTAButton";
import {
  Mic2,
  MessageSquare,
  Languages,
  Crown,
  Users,
  Banknote,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic2,
  MessageSquare,
  Languages,
  Crown,
  Users,
  Banknote,
};

interface WhatYouLearnProps {
  onRegister: () => void;
}

export default function WhatYouLearn({ onRegister }: WhatYouLearnProps) {
  return (
    <section
      id="learn"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-dark-50/50 to-white text-dark-900 overflow-hidden section-padding"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Workshop Curriculum
          </motion.p>
          <AnimatedHeading as="h2">
            What You&apos;ll Master in{" "}
            <span className="text-gradient-gold">2 Hours</span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-500 mt-4 max-w-2xl mx-auto"
          >
            Six transformational modules packed into one intensive live session.
            Every minute is designed to give you actionable skills.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {LEARNING_MODULES.map((module, index) => {
            const Icon = iconMap[module.icon] || Mic2;
            return (
              <motion.div
                key={module.title}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div className="relative rounded-2xl bg-white border border-dark-100 p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gold-200">
                  {/* Module number */}
                  <span className="absolute top-4 right-4 text-xs font-mono text-dark-300 font-medium">
                    0{index + 1}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 flex items-center justify-center mb-4 group-hover:from-gold-100 group-hover:to-gold-200 transition-colors">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>

                  <h3 className="text-card-title font-heading font-bold text-dark-900 mb-2">
                    {module.title}
                  </h3>

                  <p className="text-dark-500 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <CTAButton onClick={onRegister} size="lg" variant="primary">
            Yes, I Want to Learn All This — ₹99
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
