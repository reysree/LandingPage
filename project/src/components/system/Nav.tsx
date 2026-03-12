"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { siteSettings } from "@/content/site";
import { LeetCodeIcon } from "@/components/icons/LeetCodeIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteSettings.github, icon: Github, label: "GitHub" },
  { href: siteSettings.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${siteSettings.email}`, icon: Mail, label: "Email" },
  { href: siteSettings.leetcode, icon: LeetCodeIcon, label: "LeetCode" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-200"
      style={{ color: "var(--text-secondary)" }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : -90,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute flex items-center justify-center"
      >
        <Sun size={17} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 90 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute flex items-center justify-center"
      >
        <Moon size={17} />
      </motion.div>
    </button>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[50] transition-all duration-300",
        scrolled
          ? "backdrop-blur-md border-b"
          : "border-b border-transparent"
      )}
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottomColor: scrolled ? "var(--border-default)" : "transparent",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="Home - S.Bangaru"
          >
            <Image
              src="/icon"
              alt="S.Bangaru"
              width={32}
              height={32}
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
              sizes="32px"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-3 py-1.5 text-base font-medium rounded-md transition-colors duration-150",
                    active ? "" : "hover:bg-[var(--bg-elevated)]"
                  )}
                  style={{ color: active ? "var(--accent-primary)" : "var(--text-secondary)" }}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "var(--accent-subtle)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              );
            })}
            <a
              href={siteSettings.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-base font-medium rounded-md hover:bg-[var(--bg-elevated)] transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              Résumé
            </a>
          </nav>

          {/* Right: socials + theme + mobile toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-md transition-colors hover:bg-[var(--bg-elevated)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <ThemeToggle />
            <button
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-md"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMobileOpen((p) => !p)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t overflow-hidden bg-frosted"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderTopColor: "var(--border-default)",
            }}
          >
            <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className="px-3 py-2 text-base font-medium rounded-md transition-colors"
                    style={{
                      color: active ? "var(--accent-primary)" : "var(--text-secondary)",
                      background: active ? "var(--accent-subtle)" : "transparent",
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
              <a
                href={siteSettings.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-base font-medium rounded-md transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                Résumé
              </a>
              <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: "1px solid var(--border-default)" }}>
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-md transition-colors hover:bg-[var(--bg-elevated)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
