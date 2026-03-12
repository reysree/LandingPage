import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "ai-finance-manager",
    title: "AI Finance Manager",
    summary: "AI-powered finance app to track accounts across banks using Gemini AI.",
    description:
      "An AI finance application to track your finances in different accounts, built using Next.js and Gemini AI with real-time insights and natural language queries.",
    stack: ["Next.js", "React", "shadcn/ui", "Gemini AI", "PostgreSQL"],
    tags: ["AI", "FinTech", "Full Stack"],
    link: "https://github.com/reysree/finance",
    image: "/AI_Finance_Manager.jpg",
    featured: true,
    publishedAt: "2024-06-01",
  },
  {
    slug: "connect",
    title: "Connect",
    summary: "All-in-one campus navigation and optimization web application.",
    description:
      "A campus-focused platform with interactive navigation, event discovery, and resource optimization for a 40,000+ student university.",
    stack: ["React.js", "Spring Boot", "AWS", "MySQL"],
    tags: ["Web App", "Campus", "Full Stack"],
    link: "https://github.com/reysree/Connect",
    image: "/Connect_Campus_Navigation.jpg",
    featured: true,
    publishedAt: "2024-03-01",
  },
  {
    slug: "sql-chatbot",
    title: "SQL Chatbot",
    summary: "Text-to-SQL chatbot that queries live databases and displays structured results.",
    description:
      "A chatbot that takes natural language queries, generates SQL via OpenAI, retrieves data from the database, and displays it in a user-friendly table format.",
    stack: ["Next.js", "OpenAI", "MySQL"],
    tags: ["AI", "Developer Tool", "LLM"],
    link: "https://github.com/reysree/sql-chatbot",
    image: "/SQL_Chatbot_Final.jpg",
    featured: false,
    publishedAt: "2023-12-01",
  },
  {
    slug: "secure-quest",
    title: "Secure-Quest",
    summary: "Gamified cybersecurity education platform using AI-powered scenarios.",
    description:
      "SecureQuest is an interactive web application designed to teach data privacy and security concepts through gamified, AI-driven scenarios and real-time feedback.",
    stack: ["Next.js", "OpenAI", "Three.js", "Firebase"],
    tags: ["AI", "EdTech", "Gamification"],
    link: "https://github.com/reysree/secure-quest",
    image: "/SecureQuest.jpg",
    featured: false,
    publishedAt: "2024-01-01",
  },
];
