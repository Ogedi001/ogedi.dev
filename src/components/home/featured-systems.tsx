import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getSystems } from "@/lib/mdx/utils";
import { ArrowRight } from "lucide-react";

export function FeaturedSystems() {
  const systems = getSystems().slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-heading">
              Featured Systems
            </h2>
            <p className="mt-2 text-muted-foreground">
              Deep dives into engineering challenges I&apos;ve solved.
            </p>
          </div>
          <Link
            href="/systems"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system: any) => (
            <Link
              key={system.slug}
              href={`/systems/${system.slug}`}
              className="group block"
            >
              <article className="h-full rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500/50">
                <div className="flex flex-wrap gap-2 mb-4">
                  {system.tags?.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {system.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {system.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  Read case study
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
