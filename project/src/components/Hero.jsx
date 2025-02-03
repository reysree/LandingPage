"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image wrapped with a Parallax effect */}
          <Parallax translateY={[-20, 20]}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6"></div>
              <img
                src="/sreeram_github.jpg"
                alt="Profile"
                className="relative w-75 h-75 object-cover border-2"
              />
            </motion.div>
          </Parallax>

          {/* Right side - Content */}
          <div className="text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl whitespace-nowrap">
                Sreeram Bangaru
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Full-stack developer with enthusiasm for AI, combining expertise
                in Java, Python, JavaScript and cloud computing to architect
                innovative solutions. Passionate about leveraging GenAI to
                revolutionize processes and create transformative AI-driven
                software products.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
