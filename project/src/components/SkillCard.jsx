"use client";

import { useState } from "react";
import { div } from "framer-motion/client";
import { Card, CardContent, CardDescription } from "./ui/card";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-48"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Card */}
      <motion.div
        className="absolute w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <Card
          className={`absolute w-full h-full ${skill.color} flex items-center justify-center rounded-lg shadow-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardContent className="text-center">
            <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          className="absolute w-full h-full bg-white flex items-center justify-center rounded-lg shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CardContent className="text-center">
            <ul className="space-y-2">
              {skill.concepts.map((concept, idx) => (
                <li key={idx} className="text-gray-600 text-sm">
                  {concept}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
