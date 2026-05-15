"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TESTIMONIALS } from "@/constants/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
      id="testimonials"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-dark-50/30 to-white overflow-hidden section-padding"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Success Stories
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
            className="text-dark-500 mt-4 max-w-2xl mx-auto"
          >
            Join 1,30,000+ professionals who have transformed their careers
            through the power of communication.
          </motion.p>
        </div>

        {/* Desktop — Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-3 gap-6"
        >
          {/* Column 1 */}
          <div className="space-y-6">
            {TESTIMONIALS.filter((_, i) => i % 3 === 0).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="space-y-6 mt-8">
            {TESTIMONIALS.filter((_, i) => i % 3 === 1).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          {/* Column 3 */}
          <div className="space-y-6">
            {TESTIMONIALS.filter((_, i) => i % 3 === 2).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </motion.div>

        {/* Mobile — Horizontal Swipe */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="min-w-[300px] max-w-[340px] snap-center flex-shrink-0"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center hover:bg-dark-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-dark-600" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    i === activeIndex ? "bg-gold-500" : "bg-dark-200"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center hover:bg-dark-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-dark-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2 }}
      className="group relative rounded-2xl bg-white border border-dark-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Video indicator */}
      {testimonial.isVideo && (
        <div className="relative aspect-video rounded-xl bg-dark-100 mb-4 overflow-hidden group-hover:shadow-md transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-gold-600 ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-gold-200 mb-3" />

      {/* Content */}
      <p className="text-dark-600 text-sm leading-relaxed mb-4">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Rating */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-gold-400"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-dark-50 pt-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 flex items-center justify-center text-sm font-bold text-dark-900">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-dark-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-dark-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
