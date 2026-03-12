import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "zahan-ai",
    title: "Zahan AI",
    summary: "AI-powered platform that transforms expert knowledge into interactive, live training sessions in minutes—from onboarding to sales enablement.",
    description:
      "Zahan is a SaaS tool that automates the creation and delivery of training workshops, onboarding sessions, and skills development. Built by a team with backgrounds at Kahoot, Microsoft, McKinsey, and Ericsson, it solves the 'expert-to-presenter gap' with AI-generated gamified learning experiences and real-time presenter support.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI Agents", "WebSockets"],
    tags: ["AI", "SaaS", "EdTech", "Training"],
    liveUrl: "https://zahan.ai",
    image: "/zahan.png",
    featured: true,
    publishedAt: "2025-01-01",
  },
  {
    slug: "code-sus",
    title: "Code-Sus",
    summary: "Real-time social deduction game where 5 players collaborate in a shared IDE—one hidden Impostor sabotages the codebase before the 10-minute timer.",
    description:
      "A high-performance social deduction game where players collaborate in a shared Monaco Editor to solve coding challenges. One Impostor subtly sabotages the codebase; Crewmates must identify who before tests pass or time runs out.",
    stack: ["Next.js", "PostgreSQL", "Playwright", "WebSockets", "Cursor IDE"],
    tags: ["Real-time", "Multiplayer", "Full Stack", "Gamification"],
    link: "https://github.com/reysree/code-sus",
    liveUrl: "https://code-sus.vercel.app/",
    image: "/code-sus.png",
    featured: true,
    publishedAt: "2025-03-01",
  },
  {
    slug: "ai-finance-manager",
    title: "AI Finance Manager",
    summary: "AI-powered finance app to track accounts across banks using Gemini AI.",
    description:
      "An AI finance application to track your finances in different accounts, built using Next.js and Gemini AI with real-time insights and natural language queries.",
    stack: ["TypeScript", "OCR", "RAG", "Docker", "PostgreSQL", "LLM", "React"],
    tags: ["AI", "FinTech", "Full Stack"],
    link: "https://github.com/reysree/finance",
    image: "/AI_Finance_Manager.jpg",
    featured: false,
    publishedAt: "2024-06-01",
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
