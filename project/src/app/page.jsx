"use client";
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
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-white">
        {/* Header */}

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
                    whileHover={{ y: -2 }}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}{" "}
                <motion.a
                  href="/Sreeram_Bangaru_resume_developer.pdf"
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
                  <img
                    src="/leetcode.png"
                    alt="LeetCode"
                    width={20}
                    height={20}
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section with Parallax on the Image */}
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
                    Full-stack developer with enthusiasm for AI, combining
                    expertise in Java, Python, JavaScript and cloud computing to
                    architect innovative solutions. Passionate about leveraging
                    GenAI to revolutionize processes and create transformative
                    AI-driven software products.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section with a subtle Parallax on each card */}
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
                <Parallax key={index} translateY={[-10, 10]}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                  >
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </Parallax>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Experience Section */}
        <section className="py-20 bg-white" id="experience">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Software Developer",
                  company: "American Initiative Technology Inc.",
                  period: "Jan 2025 - Present",
                  description: [
                    "Implementing a JIRA system using React.js, Django, and Tailwind CSS to streamline task management, issue tracking, and team collaboration.",
                  ],
                  skills: [
                    "React.js",
                    "Django",
                    "Git",
                    "Postgre SQL",
                    "Tailwind CSS",
                  ],
                },
                {
                  title: "Software Developer(Assistantship)",
                  company: "George Mason University",
                  period: "Aug 2023 - Dec 2024",
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
                  period: "Feb 2023 - Jul 2024",
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
                  period: "Oct 2020 - Dec 2022",
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
                {
                  title: "Software Developer Intern",
                  company: "ADTRAN Networks India Private Limited",
                  period: "Jan 2020 - Sept 2020",
                  description: [
                    "Developed and tested network automation scripts using Python and Scala, improving system efficiency and reliability.",
                    "Monitored network performance by analyzing server logs and utilizing Salesforce dashboards to track key metrics.",
                  ],
                  skills: ["Python", "Scala", "Linux", "Salesforce"],
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
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

        {/* Skills Section */}
        <section className="py-20 bg-gray-50" id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Programming Languages",
                  skills: [
                    { name: "Java", level: 90 },
                    { name: "Python", level: 70 },
                    { name: "JavaScript/TypeScript", level: 70 },
                    { name: "SQL", level: 85 },
                  ],
                },
                {
                  category: "Frontend Development",
                  skills: [
                    { name: "React.js", level: 80 },
                    { name: "Next.js", level: 80 },
                    { name: "Angular", level: 60 },
                    { name: "Tailwind CSS", level: 60 },
                    { name: "Material UI", level: 60 },
                  ],
                },
                {
                  category: "Backend Development",
                  skills: [
                    { name: "Spring Boot", level: 90 },
                    { name: "Node.js", level: 60 },
                    { name: "REST APIs", level: 90 },
                  ],
                },
                {
                  category: "AI & Machine Learning",
                  skills: [
                    { name: "OpenAI", level: 85 },
                    { name: "LangChain", level: 60 },
                    { name: "TensorFlow", level: 70 },
                    { name: "Scikit-learn", level: 80 },
                    { name: "LLMs", level: 80 },
                  ],
                },
                {
                  category: "Cloud & DevOps",
                  skills: [
                    { name: "AWS", level: 85 },
                    { name: "Docker", level: 80 },
                    { name: "Kubernetes", level: 75 },
                    { name: "CI/CD", level: 80 },
                  ],
                },
                {
                  category: "Databases",
                  skills: [
                    { name: "MySQL", level: 90 },
                    { name: "PostgreSQL", level: 80 },
                    { name: "MongoDB", level: 70 },
                    { name: "Redis", level: 70 },
                    { name: "FireBase", level: 80 },
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-white" id="certifications">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AWS Certified Associate Developer",
                  link: "https://www.credly.com/badges/b718ea7d-5b1b-4370-af8c-d837780e0dcb/public_url",
                  img: "/AWS-badge.png",
                },
                {
                  title: "Oracle Certified JAVA SE 8 Associate",
                  link: "https://www.credly.com/badges/91411d1d-c3a6-4238-9c2d-e68e3565b5f0/public_url",
                  img: "/Oracle_Associates_Badge.png",
                },
                {
                  title: "CodePath Advanced Technical Interview Prep",
                  link: "https://www.credly.com/badges/91411d1d-c3a6-4238-9c2d-e68e3565b5f0/public_url",
                  img: "/CodePath.png",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex-col p-6 bg-white rounded-lg shadow-lg border border-gray-100"
                >
                  <Image
                    width={200}
                    height={200}
                    src={cert.img}
                    alt={cert.title}
                    className="w-50 h-50 flex justify-center object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    View Certification
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
    </ParallaxProvider>
  );
}

export default App;
