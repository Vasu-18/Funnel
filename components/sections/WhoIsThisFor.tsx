"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { PERSONAS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  Building2,
  Search,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  Building2,
  Search,
};

export default function WhoIsThisFor() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white text-dark-900 overflow-hidden section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Is this for you?
          </motion.p>
          <AnimatedHeading as="h2">
            This Workshop is{" "}
            <span className="text-gradient-gold">Perfect For You</span> If
            You&apos;re A...
          </AnimatedHeading>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {PERSONAS.map((persona) => {
            const Icon = iconMap[persona.icon] || Users;
            return (
              <motion.div
                key={persona.title}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative rounded-2xl bg-gradient-to-br from-white to-dark-50/50 border border-dark-100 p-6 hover:border-gold-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-card-title font-heading font-bold text-dark-900 mb-2">
                  {persona.title}
                </h3>
                <p className="text-dark-500 text-sm leading-relaxed">
                  {persona.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
