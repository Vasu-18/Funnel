"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { SPEAKER } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import Image from "next/image";

export default function Speaker() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
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
              <Image
                src="/main.jpeg"
                alt={SPEAKER.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tag */}
            <motion.div variants={staggerItem}>
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {SPEAKER.tag}
              </span>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
                {SPEAKER.name}
              </h3>
              <p className="text-dark-300 leading-relaxed text-sm sm:text-base">
                {SPEAKER.bio}
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={staggerItem}
              className="glass rounded-xl p-5 border border-white/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-gold-400" />
                <h4 className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                  Education
                </h4>
              </div>
              <ul className="space-y-2">
                {SPEAKER.education.map((item) => (
                  <li
                    key={item}
                    className="text-dark-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-dark-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Current Leadership */}
            <motion.div
              variants={staggerItem}
              className="glass rounded-xl p-5 border border-white/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-gold-400" />
                <h4 className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                  Current Leadership
                </h4>
              </div>
              <ul className="space-y-2">
                {SPEAKER.leadership.map((item) => (
                  <li
                    key={item}
                    className="text-dark-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-dark-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-2"
            >
              {SPEAKER.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-xs font-medium text-dark-300 border border-white/5"
                >
                  <Award className="w-3 h-3 text-gold-400 shrink-0" />
                  {cert}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
