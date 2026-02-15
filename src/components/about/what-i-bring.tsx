import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";
import Link from "next/link";

const valueProps = [
  {
    icon: "⚡",
    title: "Full-Stack Expertise",
    desc: "From designing scalable backend APIs to building intuitive frontend experiences",
  },
  {
    icon: "🔧",
    title: "System Design",
    desc: "Architecture decisions that scale from prototype to production",
  },
  {
    icon: "🤖",
    title: "AI/LLM Integration",
    desc: "Practical AI implementations using LangChain, RAG, and OpenAI",
  },
];

export function WhatIBring() {
  return (
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
              {valueProps.map((prop, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <span className="text-2xl">{prop.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{prop.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold font-heading">Experience</h2>
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
        </div>
      </Container>
    </section>
  );
}
