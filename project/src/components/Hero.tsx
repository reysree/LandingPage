import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImage from "../assets/sreeram_github.jpg";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-radial from-valorant-black via-valorant-black/95 to-valorant-black pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <div className="w-32 h-32 absolute -inset-1 bg-valorant-red/20 rounded-full blur-md" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-32 h-32 rounded-full object-cover border-2 border-valorant-red"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-4xl font-bold text-valorant-white sm:text-6xl"
          >
            Sreeram Bangaru
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xl text-valorant-white/80 max-w-2xl mx-auto"
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-valorant-red text-valorant-white font-medium hover:bg-valorant-red/90 transition-colors transform skew-x-12"
            >
              <span className="transform -skew-x-12">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-transparent text-valorant-white font-medium border border-valorant-red/50 hover:border-valorant-red transition-colors transform skew-x-12"
            >
              <span className="transform -skew-x-12">View Projects</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
