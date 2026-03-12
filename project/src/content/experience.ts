import type { Experience, Certification } from "@/types/content";

export const experiences: Experience[] = [
  {
    title: "Founding Software Engineer",
    company: "Groqify, Virginia",
    period: "Jan 2025 – Present",
    description: [
      "Architected a Next.js AI native web app for interactive, game-based training sessions and presenter coaching, improving live-session engagement and delivery quality.",
      "Built GitHub Actions + LLM agent workflow (OpenAI/Codex, Claude, AutoGen) to triage issues, open PRs, run scans; cut cycle 35%.",
      "Consolidated backend to Supabase (Postgres); optimized indexes, query patterns and used Realtime/WebSockets for low-latency interactions, cutting CRUD latency by 40% and reducing infrastructure costs by 30%.",
      "Designed and implemented an LLM agent orchestration layer supporting tool invocation, planning, and multi-step reasoning using the Gemini API.",
      "Developed Model Context Protocol (MCP) server infrastructure enabling OpenAI-based agents to generate, modify, and publish live training content.",
    ],
    skills: ["Next.js", "Supabase", "PostgreSQL", "WebSockets", "Gemini", "MCP", "OpenAI", "Claude", "GitHub Actions"],
    current: true,
  },
  {
    title: "Software Developer (Assistantship)",
    company: "George Mason University",
    period: "Aug 2023 – Dec 2024",
    description: [
      "Architected a prototype for an AI-powered student companion app using Spring Boot, React.js, and MySQL, assisting 200+ students with essential daily activities on campus.",
      "Integrated OpenAI and LangChain to process web-scraped data, delivering personalized suggestions with 90% relevance accuracy and improving app adoption by 20%.",
      "Optimized SQL query performance by 70% using strategic indexing, restructured joins, and caching.",
    ],
    skills: ["React.js", "Spring Boot", "LangChain", "OpenAI", "MySQL"],
    current: false,
  },
  {
    title: "Software Engineer Fellow",
    company: "Headstarter AI",
    period: "Feb 2023 – Jul 2024",
    description: [
      "Built 5+ AI apps and APIs using Next.js, OpenAI, Pinecone, and Stripe, seen by 1000+ users with 98% accuracy.",
      "Led 4+ engineering fellows using MVC design patterns from design through deployment.",
      "Coached by engineers from Amazon, Bloomberg, and Capital One on Agile, CI/CD, and microservice patterns.",
    ],
    skills: ["Next.js", "Pinecone", "Git", "Agile", "Microservices"],
    current: false,
  },
  {
    title: "Full Stack Developer",
    company: "Development Bank of Singapore (Tech India)",
    period: "Oct 2020 – Dec 2022",
    description: [
      "Engineered the Cross-Border Payments Regulation app using Angular, Spring Boot, and Spring Security, processing 10M+ international transactions annually.",
      "Enhanced database efficiency by 30% with optimized ORM via Spring Data JPA and scalable microservices.",
      "Used Spring Boot Batch with Shell Scripting jobs orchestrated in AWS EKS.",
    ],
    skills: ["Spring Boot", "JPA", "AWS", "Angular", "Spring Security"],
    current: false,
  },
  {
    title: "Software Developer Intern",
    company: "ADTRAN Networks India Private Limited",
    period: "Jan 2020 – Sep 2020",
    description: [
      "Developed and tested network automation scripts using Python and Scala, improving system efficiency and reliability.",
      "Monitored network performance via server log analysis and Salesforce dashboards.",
    ],
    skills: ["Python", "Scala", "Linux", "Salesforce"],
    current: false,
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Certified Associate Developer",
    link: "https://www.credly.com/badges/b718ea7d-5b1b-4370-af8c-d837780e0dcb/public_url",
    image: "/AWS-badge.png",
    issuer: "Amazon Web Services",
  },
  {
    title: "Oracle Certified Java SE 8 Associate",
    link: "https://www.credly.com/badges/91411d1d-c3a6-4238-9c2d-e68e3565b5f0/public_url",
    image: "/Oracle_Associates_Badge.png",
    issuer: "Oracle",
  },
  {
    title: "CodePath Advanced Technical Interview Prep",
    link: "/CodePath_Certificate.pdf",
    image: "/CodePath.png",
    issuer: "CodePath",
  },
];
