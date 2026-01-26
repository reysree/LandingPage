"use client";

import { easeOut, motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState("/IMG_5943.jpg");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
      setCurrentImage((prev) =>
        prev === "/IMG_5943.jpg"
          ? "/Sreeram_Profile_AI.png"
          : "/IMG_5943.jpg"
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image wrapped with a Parallax effect */}
          <Parallax translateY={[-20, 20]}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-square max-w-2xl mx-auto"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6"></div>
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", minHeight: "400px" }}
              >
                {/* Front Image */}
                <img
                  src="/IMG_5943.jpg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ backfaceVisibility: "hidden" }}
                />
                {/* Back Image */}
                <img
                  src="/Sreeram_Profile_AI.png"
                  alt="Profile AI"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                />
              </motion.div>
            </motion.div>
          </Parallax>

          {/* Right side - Content */}
          <div className="text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl whitespace-nowrap"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut }}
              >
                Sreeram Bangaru
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut }}
              >
                Full-stack developer with enthusiasm for AI, combining expertise
                in Java, Python, JavaScript and cloud computing to architect
                innovative solutions. Passionate about leveraging GenAI to
                revolutionize processes and create transformative AI-driven
                software products.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
