"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/configs/config";
import { Github, Linkedin, X, ChevronDown } from "lucide-react";

const links = [
  { href: "/systems", label: "Systems" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Resume options for dropdown
const resumeOptions = [
  {
    href: "/resume/ogedi-resume-fullstack.pdf",
    label: "Fullstack",
    description: "Full-stack engineer",
  },
  {
    href: "/resume/ogedi-resume-backend.pdf",
    label: "Backend Only",
    description: "Backend engineer",
  },
];

// Icon mapping for socials
const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileResumeDropdownOpen, setMobileResumeDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile dropdown when route changes
  useEffect(() => {
    setMobileDropdownOpen(false);
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity group"
          >
            <span className="hidden sm:inline-flex items-center gap-1">
              <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                ⚡
              </span>
              Ogedi
            </span>
            <span className="sm:hidden font-mono">OG</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  pathname === link.href
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Resume Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-1">
                Resume
                <ChevronDown className="h-3 w-3" />
              </button>

              {/* Resume Dropdown Menu */}
              <div className="absolute left-0 top-full mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="bg-background rounded-lg border border-border shadow-lg overflow-hidden">
                  {resumeOptions.map((option) => (
                    <a
                      key={option.href}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    >
                      <span className="font-medium text-foreground">
                        {option.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {option.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button with Dropdown */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dropdown CTA */}
            <div className="relative group">
              <button className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-sm gap-1">
                Connect
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                <div className="bg-background rounded-lg border border-border shadow-lg overflow-hidden">
                  <div className="py-1">
                    {siteConfig.socials.map((social) => {
                      const Icon = socialIcons[social.icon];
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          {social.name}
                        </a>
                      );
                    })}
                  </div>
                  <div className="border-t border-border">
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      <span className="h-4 w-4 flex items-center justify-center">
                        💬
                      </span>
                      Let's Talk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4 border-t overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === link.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Resume Dropdown */}
                <div className="pt-2 mt-2 border-t">
                  <button
                    onClick={() =>
                      setMobileResumeDropdownOpen(!mobileResumeDropdownOpen)
                    }
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <span>Resume</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileResumeDropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileResumeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pl-4 mt-1">
                          {resumeOptions.map((option) => (
                            <a
                              key={option.href}
                              href={option.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="flex flex-col px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                            >
                              <span className="font-medium text-foreground">
                                {option.label}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {option.description}
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Connect Dropdown */}
                <div className="pt-2 mt-2 border-t">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <span>Connect</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileDropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pl-4 mt-1">
                          {siteConfig.socials.map((social) => {
                            const Icon = socialIcons[social.icon];
                            return (
                              <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {Icon && <Icon className="h-4 w-4" />}
                                {social.name}
                              </a>
                            );
                          })}
                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            <span className="h-4 w-4 flex items-center justify-center">
                              💬
                            </span>
                            Let's Talk
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
