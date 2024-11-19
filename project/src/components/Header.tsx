import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-valorant-black/90 backdrop-blur-sm border-b border-valorant-red/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-valorant-red"
          >
            My PortFolio
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-valorant-white/80 hover:text-valorant-red transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: "https://github.com/reysree" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/sreerambangaru/",
              },
              { Icon: Mail, href: "mailto:sreeram.bangaroo@gmail.com" },
              {
                Icon: FileText,
                href: "/path/to/your-resume.pdf", // Replace with the actual path to your resume
                label: "Resume",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-valorant-white/80 hover:text-valorant-red transition-colors"
              >
                <Icon size={20} />
                {label && <span className="ml-1">{label}</span>}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
