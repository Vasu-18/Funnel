"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Got Questions?
          </motion.p>
          <AnimatedHeading as="h2">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </AnimatedHeading>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border transition-all duration-300",
                openIndex === index
                  ? "bg-dark-800 border-gold-500/50 shadow-sm"
                  : "bg-dark-800/50 border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={cn(
                    "font-heading font-semibold text-sm sm:text-base pr-4",
                    openIndex === index
                      ? "text-white"
                      : "text-dark-300"
                  )}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 shrink-0 transition-transform duration-300 text-dark-400",
                    openIndex === index && "rotate-180 text-gold-500"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-dark-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
