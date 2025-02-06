"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = ({ props }) => {
  return (
    <section className="py-20 bg-gray-50" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Finance Manager",
              description:
                "An AI finance application to track your finances in different accounts built using Next.js and Gemini AI",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
              tags: ["Next.js", "React", "ShadCn", "GeminiAI"],
              link: "https://github.com/reysree/finance",
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
                  className="inline-flex items-center hover:text-primary/80 transition-colors text-blue-500"
                >
                  View Project <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
