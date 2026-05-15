"use client";

import { cn } from "@/lib/utils";
import { Shield, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

interface TrustBadgeProps {
  variant?: "shield" | "star" | "users" | "award";
  text: string;
  className?: string;
}

const iconMap = {
  shield: Shield,
  star: Star,
  users: Users,
  award: Award,
};

export default function TrustBadge({
  variant = "shield",
  text,
  className,
}: TrustBadgeProps) {
  const Icon = iconMap[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/10",
        className
      )}
    >
      <Icon className="w-3.5 h-3.5 text-gold-400" />
      <span className="text-white/80">{text}</span>
    </motion.div>
  );
}
