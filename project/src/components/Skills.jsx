"use client";
import { color, motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import SkillCard from "./SkillCard";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";

const Skills = ({ props }) => {
  const categories = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "Java",
          color: "bg-red-400",
          concepts: [
            "OOPS",
            "Data Structures",
            "Exception Handling",
            "Functional Programming",
          ],
        },
        {
          name: "Python",
          color: "bg-red-400",
          concepts: [
            "Object Oriented Programming",
            "Data Structures",
            "Pandas",
            "Numpy",
            "Scikit",
          ],
        },
        {
          name: "JavaScript/TypeScript",
          color: "bg-red-400",
          concepts: [
            "Core Features",
            "DOM & Events",
            "Funtions and Scope",
            "Asynchronous Javascript",
            "ES6+",
          ],
        },
        {
          name: "SQL",
          color: "bg-red-400",
          concepts: [
            "CRUD Operations",
            "Joins",
            "Aggregations and Functions",
            "Stored Procedures",
            "Triggers",
          ],
        },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React.js",
          color: "bg-blue-400",
          concepts: ["Hooks", "Routing", "Fetching third-party API"],
        },
        {
          name: "Next.js",
          color: "bg-blue-400",
          concepts: [
            "Server Side Rendering",
            "Image Optimization",
            "App Router",
            "Static Site Generation",
          ],
        },
        {
          name: "Angular",
          color: "bg-blue-400",
          concepts: [
            "LifeCycle Methods",
            "Internationalization",
            "Two-way Data Binding",
          ],
        },
        {
          name: "Tailwind CSS",
          color: "bg-blue-400",
          concepts: ["Layout", "Flex Box & Grid", "Sizing", "Background"],
        },
        {
          name: "Material UI / Shadcn",
          color: "bg-blue-400",
          concepts: ["Components"],
        },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        {
          name: "Spring Boot",
          color: "bg-green-400",
          concepts: [
            "IOC",
            "Spring Security",
            "Spring JPA",
            "Spring AI",
            "Spring Eureka Server",
          ],
        },
        { name: "Node.js", color: "bg-green-400", concepts: ["fetch"] },
        {
          name: "REST APIs",
          color: "bg-green-400",
          concepts: ["RESTful Services integration"],
        },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        {
          name: "OpenAI",
          color: "bg-yellow-400",
          concepts: [
            "Chat Completion",
            "RAG integration",
            "multi-model",
            "Tool calls",
          ],
        },
        {
          name: "LangChain",
          color: "bg-yellow-400",
          concepts: [
            "LLM Orchestration",
            "Memory & Context Retention",
            "Retrieval-Augmented Generation (RAG)",
          ],
        },
        // { name: "TensorFlow", color: "bg-yellow-200", concepts: ["Keras",""] },
        // { name: "Scikit-learn", color: "bg-yellow-300", concepts: [] },
        {
          name: "LLMs",
          color: "bg-yellow-400",
          concepts: [
            "LLM APIs & Models",
            "Frameworks & Libraries",
            "Fine-Tuning & Optimization",
          ],
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          color: "bg-teal-400",
          concepts: ["IAM Roles", "EC2", "S3", "EKS", "ECR", "RDS"],
        },
        {
          name: "Docker",
          color: "bg-teal-400",
          concepts: ["Docker File", "Docker Compose"],
        },
        {
          name: "Kubernetes",
          color: "bg-teal-400",
          concepts: [
            "Container Orchestration",
            "Pods",
            "Deployments",
            "Services",
          ],
        },
        {
          name: "CI/CD",
          color: "bg-teal-400",
          concepts: ["Github Actions", "AWS CodePipeline"],
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "MySQL",
          color: "bg-purple-400",
          concepts: [
            "Normalization",
            "Indexes & Optimization",
            "Stored Procedures & Functions",
          ],
        },
        {
          name: "PostgreSQL",
          color: "bg-purple-400",
          concepts: [
            "Normalization",
            "JSONB / Full-Text Search",
            "Transactions & Concurrency Control",
          ],
        },
        {
          name: "MongoDB",
          color: "bg-purple-400",
          concepts: [
            "Collections & Documents",
            "Query Optimization",
            "Indexing Strategies",
          ],
        },
        {
          name: "Redis",
          color: "bg-purple-400",
          concepts: ["Redis Fundamentals", "Key-Value Caching"],
        },
        {
          name: "FireBase",
          color: "bg-purple-400",
          concepts: ["FireStore", "Authentication"],
        },
      ],
    },
  ];
  const [flippedIndex, setFlippedIndex] = useState(null); // Track which card is flipped
  const [currentSkill, setCurrentSkill] = useState({}); // Track the skill data of the flipped card

  const handleFlip = (index, skill) => {
    if (flippedIndex === index) {
      // If the clicked card is already flipped, close it
      setFlippedIndex(null);
      setCurrentSkill({});
    } else {
      // Flip the new card and set its skill data
      setFlippedIndex(index);
      setCurrentSkill(skill);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={
                flippedIndex === index ? { rotateY: 180 } : { rotateY: 0 }
              }
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-80 bg-slate-100 rounded-lg shadow-lg"
            >
              {/* Front Card */}
              <Card
                className="absolute w-full h-full"
                style={{ backfaceVisibility: "hidden" }}
              >
                <CardHeader>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 flex justify-center">
                    {category.category}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} whileHover={{ y: -4 }}>
                      <Button
                        className={`w-full ${skill.color} hover:${skill.color} text-black`}
                        onClick={() => handleFlip(index, skill)}
                      >
                        {skill.name}
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Back Card */}
              <Card
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute w-full h-full flex flex-col justify-center bg-amber-400"
                onClick={() => setFlippedIndex(null)} // Flip back to front
              >
                <CardContent>
                  <h3 className="text-lg font-bold mb-4 text-center">
                    {flippedIndex === index && currentSkill.name}
                  </h3>
                  <ul className="space-y-4">
                    {flippedIndex === index &&
                      currentSkill.concepts &&
                      currentSkill.concepts.map((concept, conceptIndex) => (
                        <li
                          key={conceptIndex}
                          className="text-gray-700 text-sm text-center"
                        >
                          {concept}
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
