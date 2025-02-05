"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import AboutMe from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Chat from "../components/Chat";
import { motion } from "framer-motion";

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-white">
        {/* Header */}
        <Header />
        {/* Hero Section with Parallax on the Image */}
        <Hero />

        {/* About Section with a subtle Parallax on each card */}
        <AboutMe id={"about"} />

        {/* Projects Section */}
        <Projects props={{ id: "projects" }} />

        {/* Experience Section */}
        <Experience props={{ id: "experience" }} />

        {/* Skills Section */}
        <Skills props={{ id: "skills" }} />

        {/* Certifications Section */}
        <Certifications props={{ id: "certifications" }} />

        {/* Contact Section */}
        <Contacts props={{ id: "contact" }} />
        {/* Chat Component */}
        <Chat />
      </div>
    </ParallaxProvider>
  );
}

export default App;
