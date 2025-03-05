"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          ></motion.div>

          <nav className="hidden md:flex space-x-8">
            {[
              "About",
              "Projects",
              "Experience",
              "Skills",
              "Certifications",
              "Contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="/Sreeram_Bangaru_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Resume
            </motion.a>
          </nav>

          <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: "https://github.com/reysree" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/sreerambangaru/",
              },
              { Icon: Mail, href: "mailto:sreeram.bangaroo@gmail.com" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <motion.a
              href="https://leetcode.com/u/reysree/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <img src="/leetcode.png" alt="LeetCode" width={20} height={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
