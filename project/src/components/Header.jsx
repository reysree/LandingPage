import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { SocialLink } from "./SocialLink";

export default function Header() {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/reysree", newTab: true },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/sreerambangaru/",
      newTab: true,
    },
    {
      Icon: Mail,
      href: "mailto:sreeram.bangaroo@gmail.com",
      newTab: false,
    },
    {
      Icon: FileText,
      href: "/path/to/your-resume.pdf",
      label: "Resume",
      newTab: true,
    },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            My PortFolio
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {socialLinks.map((props) => (
              <SocialLink key={props.href} {...props} />
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
