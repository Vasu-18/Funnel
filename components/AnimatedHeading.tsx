"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  gradient?: boolean;
  align?: "left" | "center" | "right";
}

export default function AnimatedHeading({
  children,
  className,
  as: Tag = "h2",
  gradient = false,
  align = "center",
}: AnimatedHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag
        className={cn(
          "font-heading font-bold tracking-tight",
          Tag === "h1" && "text-hero",
          Tag === "h2" && "text-section",
          Tag === "h3" && "text-card-title",
          gradient && "text-gradient-gold",
          alignClasses[align],
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
