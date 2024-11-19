import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc",
      period: "2021 - Present",
      description: "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.",
      icon: Building2,
      skills: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience.",
      icon: Briefcase,
      skills: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "Software Engineering Degree",
      company: "Tech University",
      period: "2015 - 2019",
      description: "Bachelor's in Computer Science with focus on Software Engineering. Dean's List all semesters.",
      icon: GraduationCap,
      skills: ["Algorithms", "System Design", "AI/ML"]
    }
  ];

  return (
    <section className="py-20 bg-valorant-black" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-valorant-white">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-valorant-red/20" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                  <div className="w-12 h-12 rounded-full bg-valorant-red/10 flex items-center justify-center border border-valorant-red/30">
                    <exp.icon className="w-6 h-6 text-valorant-red" />
                  </div>
                </div>

                {/* Content */}
                <div className={`relative ${index % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2'} pb-12`}>
                  <div className={`inline-block bg-valorant-dark/50 p-6 rounded-none transform ${index % 2 === 0 ? 'skew-x-12 mr-10' : '-skew-x-12 ml-10'} border border-valorant-red/20`}>
                    <div className={`transform ${index % 2 === 0 ? '-skew-x-12' : 'skew-x-12'}`}>
                      <span className="text-sm font-medium text-valorant-red">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-1 text-valorant-white">{exp.title}</h3>
                      <p className="text-valorant-white/80 font-medium">{exp.company}</p>
                      <p className="mt-2 text-valorant-white/60">{exp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-valorant-red/10 text-sm text-valorant-red border border-valorant-red/30"
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