import { Metadata } from "next";
import { AboutIntro } from "@/components/about/about-intro";
import { WhatIBring } from "@/components/about/what-i-bring";
import { SkillsGrid } from "@/components/about/skills-grid";
import { EducationSection } from "@/components/about/education-section";

export const metadata: Metadata = {
  title: "About | Ogedi Favour Uchibeke",
  description:
    "Learn more about Ogedi Favour Uchibeke, a Senior Full-Stack Engineer with 5+ years of experience in distributed systems, cloud-native architectures, and AI/LLM integration.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutIntro />
      <WhatIBring />
      <SkillsGrid />
      <EducationSection />
    </div>
  );
}
