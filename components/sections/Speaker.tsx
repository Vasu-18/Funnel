"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SPEAKER, SPEAKER_STATS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { Award, BookOpen, Mic, Globe } from "lucide-react";

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "TEDx Speaker (3 Talks)": Mic,
  "Bestselling Author": BookOpen,
  "Forbes 30 Under 30": Award,
  "LinkedIn Top Voice": Globe,
};

export default function Speaker() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Meet Your Mentor
          </motion.p>
          <AnimatedHeading as="h2">
            Learn From{" "}
            <span className="text-gradient-gold">India&apos;s Top</span>{" "}
            Communication Coach
          </AnimatedHeading>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-dark-800/50">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
              {/* Speaker image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-dark-950">
                      AM
                    </span>
                  </div>
                  <p className="text-white font-heading font-bold text-xl">
                    {SPEAKER.name}
                  </p>
                  <p className="text-dark-400 text-sm">{SPEAKER.title}</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {SPEAKER.achievements.map((achievement) => {
                  const Icon = achievementIcons[achievement] || Award;
                  return (
                    <span
                      key={achievement}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-gold-300"
                    >
                      <Icon className="w-3 h-3" />
                      {achievement}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
                {SPEAKER.name}
              </h3>
              <p className="text-gold-400 font-medium mb-4">{SPEAKER.tagline}</p>
              <p className="text-dark-300 leading-relaxed">{SPEAKER.bio}</p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-4"
            >
              {SPEAKER_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center border border-white/5"
                >
                  <p className="text-2xl font-heading font-bold text-gradient-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-dark-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Companies */}
            <motion.div variants={staggerItem}>
              <p className="text-sm text-dark-400 mb-3 uppercase tracking-wider">
                Trained professionals from
              </p>
              <div className="flex flex-wrap gap-2">
                {SPEAKER.companies.map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-dark-300 font-medium"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
