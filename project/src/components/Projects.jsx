"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

const Projects = ({ props }) => {
  const projects = [
    {
      title: "AI Finance Manager",
      description:
        "An AI finance application to track your finances in different accounts built using Next.js and Gemini AI",
      image: "/AI_Finance_Manager.jpg",
      tags: ["Next.js", "React", "ShadCn", "GeminiAI"],
      link: "https://github.com/reysree/finance",
    },
    {
      title: "Connect",
      description:
        "All-in-one campus navigation and optimization web application",
      image: "/Connect_Campus_Navigation.jpg",
      tags: ["React.js", "SpringBoot", "AWS"],
      link: "https://github.com/reysree/Connect",
    },
    {
      title: "SQL Chatbot",
      description:
        "A chatbot that takes text queries, generates SQL, retrieves data from the database, and displays it in a user-friendly table format.",
      image: "/SQL_Chatbot_Final.jpg",
      tags: ["Next.js", "OpenAI", "MySQL"],
      link: "https://github.com/reysree/sql-chatbot",
    },
    {
      title: "Secure-Quest",
      description:
        "SecureQuest is an interactive web application designed to teach data privacy and security concepts through gamified scenarios.",
      image: "/SecureQuest.jpg",
      tags: ["Next.js", "OpenAI", "Three.js", "Firebase"],
      link: "https://github.com/reysree/secure-quest",
    },
  ];
  return (
    <section className="py-20 bg-gray-50" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>
        <div>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="flex">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="basis-1/3 px-2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    drag="false"
                    className="bg-white rounded-lg shadow-lg overflow-hidden w-full"
                  >
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
