"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TESTIMONIALS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    const newScroll =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
    scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    setActiveIndex((prev) =>
      direction === "left"
        ? Math.max(0, prev - 1)
        : Math.min(TESTIMONIALS.length - 1, prev + 1)
    );
  };

  return (
    <section
      id="reviews"
      className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            ⭐ Client Reviews
          </motion.p>
          <AnimatedHeading as="h2">
            Real People.{" "}
            <span className="text-gradient-gold">Real Results.</span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-300 mt-4 max-w-2xl mx-auto"
          >
            Hear from business leaders who transformed their strategy with a single consultation call.
          </motion.p>
        </div>

        {/* Desktop Masonry */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden lg:grid grid-cols-3 gap-6">
          <div className="space-y-6">{TESTIMONIALS.filter((_, i) => i % 3 === 0).map((t) => (<ReviewCard key={t.id} t={t} />))}</div>
          <div className="space-y-6 mt-8">{TESTIMONIALS.filter((_, i) => i % 3 === 1).map((t) => (<ReviewCard key={t.id} t={t} />))}</div>
          <div className="space-y-6">{TESTIMONIALS.filter((_, i) => i % 3 === 2).map((t) => (<ReviewCard key={t.id} t={t} />))}</div>
        </motion.div>

        {/* Mobile Swipe */}
        <div className="lg:hidden">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
            {TESTIMONIALS.map((t) => (<div key={t.id} className="min-w-[300px] max-w-[340px] snap-center flex-shrink-0"><ReviewCard t={t} /></div>))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors" aria-label="Previous"><ChevronLeft className="w-5 h-5 text-dark-300" /></button>
            <div className="flex gap-1.5">{TESTIMONIALS.slice(0, 5).map((_, i) => (<div key={i} className={cn("w-2 h-2 rounded-full transition-colors", i === activeIndex % 5 ? "bg-gold-500" : "bg-white/20")} />))}</div>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors" aria-label="Next"><ChevronRight className="w-5 h-5 text-dark-300" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <motion.div variants={staggerItem} whileHover={{ y: -2 }} className="group relative rounded-2xl glass border border-white/10 p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <Quote className="w-8 h-8 text-gold-400/20 mb-3" />
      <p className="text-dark-300 text-sm leading-relaxed mb-4">&ldquo;{t.content}&rdquo;</p>
      <div className="flex gap-0.5 mb-4">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="w-4 h-4 text-gold-400" fill="currentColor" />))}</div>
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-sm font-bold text-dark-950">{t.name.split(" ").map((n) => n[0]).join("")}</div>
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-dark-400">{t.role}, {t.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
