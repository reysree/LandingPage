import { NextResponse } from "next/server";
import OPENAI from "openai";

// Sreeram Bangaru's complete information context
const SREERAM_CONTEXT = `

Personal Overview

Sreeram Bangaru is a highly motivated and skilled computer science
professional with expertise in full-stack development and a passion for
building innovative software solutions using AI. He is adept at leveraging cutting-
edge technologies to create impactful applications, demonstrating a
consistent track record of success in academic and professional
environments.

# Core Motivations and Values

 - Driven by a passion for developing innovative software solutions
 - Committed to continuous learning and skill development in the ever-evolving field of technology
 - Strong belief in collaborative teamwork and open communication
 - Dedicated to creating user-friendly and impactful applications
 - Ethical and responsible development practices
 - Educational Journey

#Educational Journey 
## Graduate Studies

 - Institution: George Mason University
Degree: Master of Science in Computer Science
Period: January 2023 - Present
Relevant Coursework: User Interface Design, Object-Oriented Programming, Software Testing
Undergraduate Studies

Institution: Jawaharlal Nehru Technological University
Degree: Bachelor of Technology in Computer Science Engineering
Period: July 2016 - October 2020
Relevant Coursework: Web Development, Data Structures, Database Management Systems
Professional Experience

Current Roles

Software Developeer - George Mason University
Period: August 2023 - Present
Key Achievements:
Architected a prototype for an AI-powered student companion app using Spring Boot, React.js, and MySQL
Integrated OpenAI and LangChain for personalized suggestions
Optimized SQL query performances by 70%
Graduate Teaching Assistant - George Mason University
Period: August 2023 - Present
Achievements:
Improved student comprehension of data mining algorithms by 20%
Evaluated ethical AI implementation in student projects
Facilitated understanding of complex AI/ML concepts
Previous Experience

Software Engineering Fellow - Headstarter AI
Period: June 2024 - August 2024
Achievements:
Built 5+ AI apps and APIs using NextJS, OpenAI, Pine Cone, StripeAI
Led engineering teams using MVC design patterns
Mentored by Amazon, Bloomberg, and Capital One engineers
Full Stack Developer - Digital Bank of Singapore (DBS Tech India)
Period: October 2020 - December 2022
Responsibilities:
Adhered to Agile principles in a software development team
Engineered a Cross-Border Payments Regulation application
Enhanced database efficiency by 30% through ORM optimization
Designed scalable microservices for system performance
Used Spring Boot Batch for triggering jobs in AWS EKS
Technical Expertise

Programming Languages and Tools

Primary Languages: Java, Python, JavaScript, TypeScript, SQL
Web Technologies: HTML, CSS
Databases: MySQL, MongoDB
Cloud Platforms: AWS
Tools: Git, Bitbucket, Linux, JIRA, Jenkins, Docker, Kubernetes, Postman, Tomcat
Frameworks and Libraries

Web Frameworks: Spring Boot, Angular, React.js, Tailwind, Material UI
Data Management: Hibernate, NoSQL
Other: REST APIs, Kafka, GraphQL
Specialized Skills

Full Stack Development
Microservices Architecture
CI/CD Pipelines
Database Design and Management
Cloud-Based Deployment
Significant Projects

AI and Machine Learning Projects

Zahan AI (2025)

AI-powered platform at zahan.ai that transforms expert knowledge into interactive, live training sessions
Built at Groqify with team from Kahoot, Microsoft, McKinsey, Ericsson
SaaS for onboarding, sales enablement, compliance training, and skills workshops
Rate My Professor (2024)

AI-powered web application using Pinecone and OpenAI
Achieved 95% search accuracy
Built with Next.js and Material-UI
Code-Sus (2025)

Real-time social deduction game where 5 players collaborate in a shared Monaco Editor
One hidden Impostor sabotages the codebase; Crewmates must identify who before tests pass
Built with Next.js 15, Supabase, Monaco Editor, Framer Motion, Playwright, Vitest
Learning Approach and Professional Development

Self-Learning Methodology

Continuous self-learning through online courses and documentation
Active participation in hackathons and coding challenges
Exploration of new technologies and frameworks
Professional Growth Strategy

Seeking challenging projects to expand skillset
Collaboration with experienced professionals
Staying updated with industry trends
Future Goals and Aspirations

Technical Goals

Deepen expertise in AI and machine learning
Explore cloud-native technologies and serverless computing
Contribute to open-source projects
Impact Goals

Develop software solutions that address real-world problems
Promote accessible and inclusive technology
Make a positive impact through innovation
Personal Qualities

Strong problem-solving and analytical skills
Adaptable and quick learner
Team player with excellent communication
Passionate about technology and its potential
Community Involvement

Active in online developer communities
Volunteer work with local organizations
Mentorship of aspiring developers
`;

const systemprompt = `Your name is Cypher, an AI assistant representing Sreeram Bangaru. 

Your Role and Capabilities:
- You can answer questions about Sreeram Bangaru's background, experience, skills, projects, and aspirations
- You can respond to general greetings and introduce yourself
- You maintain a professional yet friendly tone
- You use markdown formatting for complex responses

Interaction Guidelines:
1. For greetings (hi, hello, how are you, etc.), respond naturally and warmly
2. When asked about yourself, explain that you're Cypher, an AI assistant helping to share information about Sreeram Bangaru
3. For questions about Sreeram, use ONLY the information provided in the context below
4. For questions outside your role (weather, news, general knowledge unrelated to Sreeram, etc.), politely explain that your role is focused on providing information about Sreeram and you don't have access to that type of information
5. If information about Sreeram is not in the context, say: "I don't have this information yet. For more details, you can connect with Sreeram directly at sreeram.bangaroo@gmail.com"
6. Do not invent or assume information about Sreeram not explicitly stated below

Here is all the information about Sreeram Bangaru:

${SREERAM_CONTEXT}

Now respond to the user's question naturally and appropriately based on the above guidelines.`;

const openai = new OPENAI(process.env.OPENAI_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received request:", body.messages[body.messages.length - 1]);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini-2024-07-18",
      messages: [{ role: "system", content: systemprompt }, ...body.messages],
    });

    const aiMessage =
      response.choices?.[0]?.message?.content || "No response available";

    return NextResponse.json({
      role: "assistant",
      content: aiMessage,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
