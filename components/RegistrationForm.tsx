"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";
import { REVENUE_OPTIONS } from "@/constants/data";
import { trackEvent } from "@/lib/meta-pixel";

interface FormData {
  name: string;
  phone: string;
  alternateNumber: string;
  currentRevenue: string;
  businessType: string;
  startedBusinessYear: string;
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
          ...data,
          subject: `New Consultation Booking: ${data.name}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();

        // Fire Meta Pixel Lead conversion event
        trackEvent("Lead", {
          content_name: "Consultation Booking",
          content_category: "Form Submission",
        });
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Failed to submit form. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-white/10 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all text-sm";

  return (
    <div className="relative w-full bg-dark-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
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
              Booking Confirmed! 🎉
            </h3>
            <p className="text-dark-300 text-sm">
              Our team will contact you shortly to schedule your consultation.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Book Your Free Consultation
              </h3>
              <p className="text-dark-400 text-sm">
                Fill in your details and our team will reach out to you
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                  placeholder="Your Full Name *"
                  className={cn(inputClasses, errors.name && "border-red-500/50 ring-red-500/20")}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: { value: 10, message: "Please enter a valid phone number" },
                  })}
                  type="tel"
                  placeholder="Phone Number *"
                  className={cn(inputClasses, errors.phone && "border-red-500/50 ring-red-500/20")}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Alternate Number */}
              <div>
                <input
                  {...register("alternateNumber")}
                  type="tel"
                  placeholder="Alternate Number (Optional)"
                  className={inputClasses}
                />
              </div>

              {/* Current Revenue */}
              <div>
                <select
                  {...register("currentRevenue", { required: "Please select your revenue range" })}
                  className={cn(inputClasses, "appearance-none", errors.currentRevenue && "border-red-500/50 ring-red-500/20")}
                  defaultValue=""
                >
                  <option value="" disabled>Current Revenue *</option>
                  {REVENUE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-dark-800">{opt}</option>
                  ))}
                </select>
                {errors.currentRevenue && <p className="text-red-400 text-xs mt-1">{errors.currentRevenue.message}</p>}
              </div>

              {/* Business Type */}
              <div>
                <input
                  {...register("businessType", { required: "Business type is required" })}
                  placeholder="Business Type *"
                  className={cn(inputClasses, errors.businessType && "border-red-500/50 ring-red-500/20")}
                />
                {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType.message}</p>}
              </div>

              {/* Started Business Year */}
              <div>
                <input
                  {...register("startedBusinessYear", { required: "Please enter the year" })}
                  placeholder="Started Business Year *"
                  type="number"
                  min="1900"
                  max="2026"
                  className={cn(inputClasses, errors.startedBusinessYear && "border-red-500/50 ring-red-500/20")}
                />
                {errors.startedBusinessYear && <p className="text-red-400 text-xs mt-1">{errors.startedBusinessYear.message}</p>}
              </div>

              {submitError && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
                  {submitError}
                </div>
              )}

              <CTAButton type="submit" size="lg" className="w-full" pulse disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book My Free Consultation →"
                )}
              </CTAButton>

              <p className="text-center text-dark-500 text-xs">
                🔒 Your information is 100% confidential. No spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
