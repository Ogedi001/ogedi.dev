import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSystems } from "@/components/home/featured-systems";
import { ExperienceHighlights } from "@/components/home/experience-highlights";
import { FeaturedProject } from "@/components/home/featured-project";
import { SelectedClientWork } from "@/components/home/selected-client-work";
import { SkillsSection } from "@/components/home/skills-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedSystems />
      <ExperienceHighlights />
      <SelectedClientWork />
      <FeaturedProject />
      <SkillsSection />
      <CtaSection />
    </div>
  );
}
