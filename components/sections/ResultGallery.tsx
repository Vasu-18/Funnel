"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import AnimatedHeading from "@/components/AnimatedHeading";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Generate image paths from 1 to 19
const IMAGES = Array.from({ length: 19 }, (_, i) =>
  `/client result gallery/Client${i + 1}.jpeg`
);
const VIDEO_SRC = "/client result gallery/Video Testamonial.mp4";

export default function ResultGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Divide images into 3 columns for masonry
  const col1 = IMAGES.filter((src, i) => i % 3 === 0 && !src.includes('Client17.jpeg'));
  const col2 = IMAGES.filter((src, i) => i % 3 === 1 && !src.includes('Client17.jpeg'));
  const col3 = IMAGES.filter((src, i) => i % 3 === 2 && !src.includes('Client17.jpeg'));

  return (
    <section
      id="results"
      className="relative py-16 md:py-24 lg:py-32 bg-dark-gradient text-white overflow-hidden section-padding"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-600 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            Proof of Work
          </motion.p>
          <AnimatedHeading as="h2">
            Real Client <span className="text-gradient-gold">Results</span>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-300 mt-4 max-w-2xl mx-auto"
          >
            See how our strategies have transformed businesses across industries.
          </motion.p>
        </div>

        {/* Video Testimonial Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl">
            <video
              src={VIDEO_SRC}
              controls
              className="w-full h-full object-cover"
              poster=" " // Using first image as placeholder
            />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
        >
          <div className="space-y-4 lg:space-y-6">
            {col1.map((src, i) => (
              <GalleryImage key={src} src={src} onClick={() => setSelectedImage(src)} priority={i < 2} />
            ))}
          </div>
          <div className="space-y-4 lg:space-y-6 md:mt-8">
            {col2.map((src, i) => (
              <GalleryImage key={src} src={src} onClick={() => setSelectedImage(src)} priority={i < 2} />
            ))}
          </div>
          <div className="space-y-4 lg:space-y-6 hidden md:block">
            {col3.map((src, i) => (
              <GalleryImage key={src} src={src} onClick={() => setSelectedImage(src)} priority={i < 2} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Client Result"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryImage({ src, onClick, priority = false }: { src: string; onClick: () => void; priority?: boolean }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-dark-800 border border-white/5"
      onClick={onClick}
    >
      <div className="relative aspect-auto">
        <Image
          src={src}
          alt="Client Result"
          width={400}
          height={600}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
