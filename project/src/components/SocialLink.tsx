import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  Icon: LucideIcon;
  href: string;
  label?: string;
  newTab?: boolean;
}

export function SocialLink({ Icon, href, label, newTab }: SocialLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("mailto:")) {
      e.preventDefault();
      console.log("Attempting to open email client...");
      window.location.href = href;
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="transition-colors"
    >
      <Icon size={20} />
      {label && <span className="ml-1">{label}</span>}
    </motion.a>
  );
}
