"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { COUNTDOWN_TARGET } from "@/constants/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  className?: string;
  variant?: "dark" | "light";
  label?: string;
}

export default function CountdownTimer({
  className,
  variant = "dark",
  label = "Workshop starts in:",
}: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } =
    useCountdown(COUNTDOWN_TARGET);

  if (isExpired) {
    return (
      <div className={cn("text-center", className)}>
        <p className="text-gold-500 font-heading font-bold text-lg">
          Workshop is Live Now! 🎉
        </p>
      </div>
    );
  }

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  const cardBg =
    variant === "dark"
      ? "bg-white/5 border-white/10"
      : "bg-dark-900/5 border-dark-900/10";
  const textColor = variant === "dark" ? "text-white" : "text-dark-900";
  const labelColor = variant === "dark" ? "text-dark-400" : "text-dark-500";

  return (
    <div className={cn("text-center", className)}>
      {label && (
        <p className={cn("text-sm font-medium mb-3 uppercase tracking-wider", labelColor)}>
          {label}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
            <motion.div
              key={`${unit.label}-${unit.value}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={cn(
                "flex flex-col items-center rounded-xl border px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[72px]",
                cardBg
              )}
            >
              <span
                className={cn(
                  "text-2xl sm:text-3xl font-heading font-bold tabular-nums",
                  textColor
                )}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className={cn("text-[10px] sm:text-xs uppercase tracking-wider", labelColor)}>
                {unit.label}
              </span>
            </motion.div>
            {i < units.length - 1 && (
              <span className={cn("text-xl font-bold", "text-gold-500")}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
