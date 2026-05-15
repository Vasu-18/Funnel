"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  profession: z.string().min(1, "Please select your profession"),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationForm({
  isOpen,
  onClose,
}: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
          ...data,
          subject: `New Workshop Registration: ${data.name}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch {
      console.error("Form submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const professions = [
    "Student",
    "Working Professional",
    "Entrepreneur",
    "Manager / Team Lead",
    "Freelancer",
    "Job Seeker",
    "Other",
  ];

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-white/10 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all text-sm";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-dark-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-dark-400 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gold gradient top */}
            <div className="h-1 w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

            <div className="p-6 sm:p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    You&apos;re Registered! 🎉
                  </h3>
                  <p className="text-dark-300 text-sm">
                    Check your email & WhatsApp for the workshop link.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      Reserve Your Seat Now
                    </h3>
                    <p className="text-dark-400 text-sm">
                      Join 1,30,000+ professionals who transformed their
                      communication
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div>
                      <input
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                        placeholder="Your Full Name"
                        className={cn(
                          inputClasses,
                          errors.name && "border-red-500/50 ring-red-500/20"
                        )}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email",
                          },
                        })}
                        type="email"
                        placeholder="Your Email Address"
                        className={cn(
                          inputClasses,
                          errors.email && "border-red-500/50 ring-red-500/20"
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                          minLength: {
                            value: 10,
                            message: "Please enter a valid phone number",
                          },
                        })}
                        type="tel"
                        placeholder="Your Phone Number"
                        className={cn(
                          inputClasses,
                          errors.phone && "border-red-500/50 ring-red-500/20"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <select
                        {...register("profession", {
                          required: "Please select your profession",
                        })}
                        className={cn(
                          inputClasses,
                          "appearance-none",
                          errors.profession &&
                            "border-red-500/50 ring-red-500/20"
                        )}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Your Profession
                        </option>
                        {professions.map((p) => (
                          <option key={p} value={p} className="bg-dark-800">
                            {p}
                          </option>
                        ))}
                      </select>
                      {errors.profession && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.profession.message}
                        </p>
                      )}
                    </div>

                    <CTAButton
                      type="submit"
                      size="lg"
                      className="w-full"
                      pulse
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Registering...
                        </>
                      ) : (
                        "Register for ₹99 →"
                      )}
                    </CTAButton>

                    <p className="text-center text-dark-500 text-xs">
                      🔒 Your information is 100% secure. We never spam.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
