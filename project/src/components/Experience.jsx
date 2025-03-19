"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = ({ props }) => {
  return (
    <section className="py-20 bg-white" id={props.id}>
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
                "Implementing a JIRA system using React.js, SpringBoot, and Tailwind CSS to streamline task management, issue tracking, and team collaboration.",
                "Designed and implemented microservices using Java, Spring Boot, and RESTful APIs.",
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
              skills: ["Next.js", "PineCone", "Git", "Agile", "Micro Services"],
            },
            {
              title: "Full Stack Developer",
              company: "Development Bank of Singapore(Tech India)",
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
  );
};

export default Experience;
