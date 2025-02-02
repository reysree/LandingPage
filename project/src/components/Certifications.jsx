import React from "react";
import { motion } from "framer-motion";
import { Building2, Briefcase, GraduationCap } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Associate Developer",
      icon: Building2,
    },
    {
      title: "Oracle Certified JAVA SE8 Associate",
      icon: Briefcase,
    },
    {
      title: "Software Engineering Degree",
      company: "Tech University",
      period: "2015 - 2019",
      description:
        "Bachelor's in Computer Science with focus on Software Engineering. Dean's List all semesters.",
      icon: GraduationCap,
      skills: ["Algorithms", "System Design", "AI/ML"],
    },
  ];

  return (
    <section className="py-20 bg-valorant-black" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5" />

          {/* Experience items */}
          <div className="space-y-12">
            {certifications.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border">
                    <exp.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? "pr-1/2 text-right" : "pl-1/2"
                  } pb-12`}
                >
                  <div
                    className={`inline-block p-6 rounded-none transform ${
                      index % 2 === 0 ? "skew-x-12 mr-10" : "-skew-x-12 ml-10"
                    }`}
                  >
                    <div
                      className={`transform ${
                        index % 2 === 0 ? "-skew-x-12" : "skew-x-12"
                      }`}
                    >
                      <span className="text-sm font-medium">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                      <p className="font-medium">{exp.company}</p>
                      <p className="mt-2">{exp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-sm border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
