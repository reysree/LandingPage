"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

/** Profile image with flip animation on hover between real and AI photo. */
export function HeroImage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
      style={{ perspective: "1000px", border: "1px solid var(--border-default)" }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src="/IMG_5943.jpg"
          alt="Sreeram Bangaru"
          fill
          priority
          className="object-cover rounded-2xl"
          style={{ backfaceVisibility: "hidden" }}
          sizes="(max-width: 1024px) 288px, 400px"
        />
        <Image
          src="/Sreeram_Profile_AI.png"
          alt="Sreeram Bangaru - AI"
          fill
          className="object-cover rounded-2xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          sizes="(max-width: 1024px) 288px, 400px"
        />
      </motion.div>
    </div>
  );
}
