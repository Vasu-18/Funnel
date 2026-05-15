"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
  className?: string;
  icon?: boolean;
  pulse?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "default",
  className,
  icon = true,
  pulse = false,
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 hover:from-gold-400 hover:to-gold-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-dark-900 hover:bg-dark-50 shadow-lg hover:shadow-xl",
    outline:
      "bg-transparent border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10",
  };

  const sizeClasses = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        pulse && "animate-pulse-glow",
        className
      )}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </motion.button>
  );
}
