"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { BEFORE_STATES, AFTER_STATES } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { X, Check, ArrowRight } from "lucide-react";

export default function Transformation() {
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
            Your transformation awaits
          </motion.p>
          <AnimatedHeading as="h2">
            From Invisible to{" "}
            <span className="text-gradient-gold">Unstoppable</span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-500 mt-4 max-w-2xl mx-auto"
          >
            See the transformation that thousands of professionals have
            experienced after attending this workshop.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* Before */}
          <motion.div
            variants={staggerItem}
            className="relative rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-dark-900">
                  Before the Workshop
                </h3>
                <p className="text-sm text-dark-500">Where you are now</p>
              </div>
            </div>
            <ul className="space-y-4">
              {BEFORE_STATES.map((state) => (
                <motion.li
                  key={state}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-dark-600 text-sm">{state}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            variants={staggerItem}
            className="relative rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-dark-900">
                  After the Workshop
                </h3>
                <p className="text-sm text-dark-500">Where you&apos;ll be</p>
              </div>
            </div>
            <ul className="space-y-4">
              {AFTER_STATES.map((state) => (
                <motion.li
                  key={state}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-dark-700 text-sm font-medium">
                    {state}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-2 text-gold-600 font-heading font-semibold">
            <span>This transformation is just 2 hours away</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
