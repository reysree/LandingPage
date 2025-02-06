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
          color: "bg-red-100",
          concepts: [
            "OOPS",
            "Data Structures",
            "Exception Handling",
            "Functional Programming",
          ],
        },
        {
          name: "Python",
          color: "bg-red-200",
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
          color: "bg-red-300",
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
          color: "bg-blue-50",
          concepts: ["Hooks", "Routing", "Fetching third-party API"],
        },
        {
          name: "Next.js",
          color: "bg-blue-100",
          concepts: [
            "Server Side Rendering",
            "Image Optimization",
            "App Router",
            "Static Site Generation",
          ],
        },
        {
          name: "Angular",
          color: "bg-blue-200",
          concepts: [
            "LifeCycle Methods",
            "Internationalization",
            "Two-way Data Binding",
          ],
        },
        {
          name: "Tailwind CSS",
          color: "bg-blue-300",
          concepts: ["Layout", "Flex Box & Grid", "Sizing", "Background"],
        },
        {
          name: "Material UI",
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
          color: "bg-green-100",
          concepts: ["IOC"],
        },
        { name: "Node.js", color: "bg-green-200", concepts: ["fetch"] },
        {
          name: "REST APIs",
          color: "bg-green-300",
          concepts: ["RESTful Services integration"],
        },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        {
          name: "OpenAI",
          color: "bg-yellow-50",
          concepts: [
            "Chat Completion",
            "RAG integration",
            "multi-model",
            "Tool calls",
          ],
        },
        { name: "LangChain", color: "bg-yellow-100", concepts: [] },
        { name: "TensorFlow", color: "bg-yellow-200", concepts: [] },
        { name: "Scikit-learn", color: "bg-yellow-300", concepts: [] },
        { name: "LLMs", color: "bg-yellow-400", concepts: [] },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", color: "bg-teal-100", concepts: [] },
        { name: "Docker", color: "bg-teal-200", concepts: [] },
        { name: "Kubernetes", color: "bg-teal-300", concepts: [] },
        { name: "CI/CD", color: "bg-teal-400", concepts: [] },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", color: "bg-purple-50", concepts: [] },
        { name: "PostgreSQL", color: "bg-purple-100", concepts: [] },
        { name: "MongoDB", color: "bg-purple-200", concepts: [] },
        { name: "Redis", color: "bg-purple-300", concepts: [] },
        { name: "FireBase", color: "bg-purple-400", concepts: [] },
      ],
    },
  ];
  const [flippedStates, setFlippedStates] = useState(
    Array(categories.length).fill(false)
  );

  const [currentSkill, setCurrentSkill] = useState({});

  const handleFlip = (index, skill) => {
    const updatedStates = [...flippedStates];
    updatedStates[index] = !updatedStates[index]; // Toggle flip state for the specific card
    setFlippedStates(updatedStates);
    setCurrentSkill(skill); // Set the current skill for the back side
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
              animate={flippedStates[index] ? { rotateY: 180 } : { rotateY: 0 }}
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
                onClick={() => handleFlip(index, {})} // Flip back to front
              >
                <CardContent>
                  <h3 className="text-lg font-bold mb-4 text-center">
                    {currentSkill.name}
                  </h3>
                  <ul className="space-y-4">
                    {currentSkill.concepts &&
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
