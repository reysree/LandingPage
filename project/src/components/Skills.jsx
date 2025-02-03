"use client";
import { motion } from "framer-motion";

const Skills = ({ props }) => {
  return (
    <section className="py-20 bg-gray-50" id={props.id}>
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
  );
};

export default Skills;
