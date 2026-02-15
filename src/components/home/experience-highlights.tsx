import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ExperienceHighlights() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-heading">
            Where I&apos;ve worked
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building real-world systems at scale.
          </p>
        </div>

        <div className="space-y-6">
          {siteConfig.experience.slice(0, 3).map((exp: any, index: number) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
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
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.slice(0, 4).map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-flex items-center mt-8 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          View full experience →
        </Link>
      </Container>
    </section>
  );
}
