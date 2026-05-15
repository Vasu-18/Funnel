"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  const handleBookClick = () => {
    setIsMobileOpen(false);
    router.push("/book");
  };

  const navLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Capital Case Logo" 
              width={160} 
              height={40} 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <CTAButton onClick={handleBookClick} size="default" icon={false}>
              Book Free Call
            </CTAButton>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="block text-sm text-dark-300 hover:text-white py-2 transition-colors">
                  {link.label}
                </a>
              ))}
              <CTAButton onClick={handleBookClick} size="lg" className="w-full mt-2" icon={false}>
                Book Free Call
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
