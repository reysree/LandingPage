"use client";
import { Code2, Briefcase, GraduationCap } from "lucide-react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const AboutMe = ({ id }) => {
  return (
    <section className="py-20 bg-white" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Development",
              description:
                "3 years of experience in full-stack development, specializing in modern web technologies using AI.",
            },
            {
              icon: Briefcase,
              title: "Experience",
              description:
                "Delivered scalable AI solutions and robust web applications for startups, universities, and financial institutions, enhancing performance and user impact globally.",
            },
            {
              icon: GraduationCap,
              title: "Education",
              description:
                "Computer Science graduate with a focus on software engineering and AI.",
            },
          ].map((item, index) => (
            <Parallax key={index} translateY={[-10, 10]}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-500">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
