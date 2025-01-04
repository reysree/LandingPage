import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  FileText,
} from "lucide-react";
import profileImage from "./assets/sreeram_github.jpg";

function App() {
  return (
    <div className="bg-white">
      {/* Header - keeping the same */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-primary"
            ></motion.div>

            <nav className="hidden md:flex space-x-8">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-gray-600 hover:text-primary transition-colors"
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
                  href: "/Sreeram_Bangaru_resume_developer.pdf",
                },
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
            </div>
          </div>
        </div>
      </header>

      {/* Updated Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-75 h-75 object-cover border-2 border-valorant-red"
              />
            </motion.div>

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
                  Full-stack developer with enthusiasm for AI, combining
                  expertise in Java, Python, JavaScript and cloud computing to
                  architect innovative solutions. Passionate about leveraging
                  GenAI to revolutionize processes and create transformative
                  AI-driven software products.
                </p>

                {/* <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                  >
                    Get in touch
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="px-8 py-4 text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    View Projects
                  </motion.a>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Rest of the sections remain the same */}
      {/* About */}
      <section className="py-20 bg-white" id="about">
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
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beacon",
                description:
                  "A student companion AI application built with React and SpringBoot",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
                tags: ["SpringBoot", "React.js", "MySQL", "OpenAI"],
                link: "#",
              },
              {
                title: "Connect",
                description:
                  "All-in-one campus navigation and optimization web application",
                image:
                  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=500",
                tags: ["React.js", "SpringBoot", "AWS"],
                link: "https://github.com/reysree/Connect",
              },
              {
                title: "SQL Chatbot",
                description:
                  "A chatbot that takes text queries, generates SQL, retrieves data from the database, and displays it in a user-friendly table format.",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
                tags: ["Next.js", "OpenAI", "MySQL"],
                link: "https://github.com/reysree/sql-chatbot",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-white" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Student Assistant(Software Developer)",
                company: "George Mason University",
                period: "2023 - Present",
                description: [
                  "Architected a prototype for an AI-powered student companion app using Spring Boot, React.js, and MySQL for efficient data management, assisting 200+ students with essential daily activities on campus.",
                  "Integrated OpenAI and LangChain to process web-scraped data, delivering personalized suggestions with 90% relevance accuracy and improving app adoption rate by 20%.",
                  "Significantly optimized SQL query performances by 70% using techniques like strategic indexing, restructuring joins, and caching.",
                ],
                skills: [
                  "React.js",
                  "SpringBoot",
                  "LangChain",
                  "OpenAI",
                  "MySQL",
                ],
              },
              {
                title: "Software Engineer Fellow",
                company: "Headstarter AI",
                period: "2024 - 2024",
                description: [
                  "Built 5+ AI apps and APIs using NextJS, OpenAI, PineCone, StripeAI with 98% accuracy as seen by 1000 users.",
                  "Developed projects from design to deployment, leading 4+ engineering fellows using MVC design patterns.",
                  "Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns.",
                ],
                skills: [
                  "Next.js",
                  "PineCone",
                  "Git",
                  "Agile",
                  "Micro Services",
                ],
              },
              {
                title: "Full Stack Developer",
                company: "Digital Bank of Singapore(Tech India)",
                period: "2020 - 2022",
                description: [
                  "Adhered to Agile principles by actively collaborating within a software development team, engaging with clients and cross-functional teams to deliver successful outcomes and meet project objectives.",
                  "Engineered and led the deployment of the Cross-Border Payments Regulation application using Angular, Spring Boot, and Spring Security, ensuring robust transaction security and seamless processing of 10 million international transactions annually.",
                  "Enhanced database efficiency by 30% through optimized Object-Relational Mapping (ORM) by integrating Spring Data JPA. Designed scalable microservices to elevate system performance.",
                  "Used Spring Boot Batch for triggering jobs written in Shell Scripting, deployed and orchestrated in a Production environment using AWS EKS.",
                ],
                skills: [
                  "SpringBoot",
                  "JPA",
                  "AWS",
                  "Angular",
                  "Spring Security",
                ],
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <span className="text-sm font-medium text-primary">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mt-1 text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                {/* Render description as bullet points */}
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sreeram.bangaroo@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors"
          >
            Send me a message
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default App;
