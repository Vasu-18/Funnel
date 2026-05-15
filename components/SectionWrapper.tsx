"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "light" | "gradient" | "hero";
}

export default function SectionWrapper({
  children,
  className,
  id,
  variant = "light",
}: SectionWrapperProps) {
  const bgClasses = {
    dark: "bg-dark-gradient text-white",
    light: "bg-white text-dark-900",
    gradient: "bg-gradient-to-b from-dark-50 to-white text-dark-900",
    hero: "bg-hero-gradient text-white",
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={cn(
        "relative py-16 md:py-24 lg:py-32 section-padding overflow-hidden",
        bgClasses[variant],
        className
      )}
    >
      <div className="mx-auto max-w-7xl w-full">{children}</div>
    </motion.section>
  );
}
