"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/configs/config";

const Header: React.FC = () => {
  const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
  const hasExperience =
    siteConfig.experience && siteConfig.experience.length > 0;
  const hasEducation = siteConfig.education && siteConfig.education.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) {
        header?.classList.add("bg-white/80", "backdrop-blur-sm");
      } else {
        header?.classList.remove("bg-white/80", "backdrop-blur-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300"
    >
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <ul className="flex items-center gap-8 justify-center">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              About
            </a>
          </li>
          {hasProjects && (
            <li>
              <a
                href="#projects"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Projects
              </a>
            </li>
          )}
          {hasExperience && (
            <li>
              <a
                href="#experience"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Experience
              </a>
            </li>
          )}
          {hasEducation && (
            <li>
              <a
                href="#education"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Education
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
