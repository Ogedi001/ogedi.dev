import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About | Ogedi Favour Uchibeke",
  description:
    "Learn more about Ogedi Favour Uchibeke, a Senior Full-Stack Engineer with 5+ years of experience in distributed systems, cloud-native architectures, and AI/LLM integration.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-heading">
              About me
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {siteConfig.aboutMe.intro}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold font-heading">
                My background
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>{siteConfig.aboutMe.core}</p>
                <p>{siteConfig.aboutMe.focus}</p>
              </div>

              <h2 className="text-2xl font-semibold mt-12 font-heading">
                What I bring
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Full-Stack Expertise</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      From designing scalable backend APIs to building intuitive
                      frontend experiences
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-medium">System Design</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Architecture decisions that scale from prototype to
                      production
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-medium">AI/LLM Integration</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Practical AI implementations using LangChain, RAG, and
                      OpenAI
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-heading">
                Experience
              </h2>
              <div className="mt-6 space-y-6">
                {siteConfig.experience.map((exp: any, index: number) => (
                  <div
                    key={index}
                    className="rounded-lg border p-4 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {exp.dateRange}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights
                        .slice(0, 2)
                        .map((highlight: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="mr-2 text-blue-600 dark:text-blue-400">
                              ▸
                            </span>
                            {highlight}
                          </li>
                        ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tech.slice(0, 5).map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/systems"
                className="inline-flex items-center mt-6 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View detailed case studies →
              </Link>
            </div>
            1
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <h2 className="text-2xl font-semibold font-heading">
            Technical skills
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-medium">Frontend</h3>
              <ul className="mt-3 space-y-1.5">
                {siteConfig.skills.frontend.map((skill: string) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-medium">Backend</h3>
              <ul className="mt-3 space-y-1.5">
                {siteConfig.skills.backend.slice(0, 6).map((skill: string) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-medium">Cloud & Infrastructure</h3>
              <ul className="mt-3 space-y-1.5">
                {siteConfig.skills.cloud.map((skill: string) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-medium">AI & ML</h3>
              <ul className="mt-3 space-y-1.5">
                {siteConfig.skills.ai.map((skill: string) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold font-heading">Education</h2>
          <div className="mt-6 space-y-4">
            {siteConfig.education.map((edu: any, index: number) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {edu.dateRange}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
