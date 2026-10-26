import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, FileText, Github, ShieldCheck } from "lucide-react";

export function FeaturedProject() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="mb-10">
          <Badge variant="outline">Selected Projects</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-heading">
            Products I&apos;m building
          </h2>
        </div>

        <div className="space-y-12">
          {siteConfig.projects.map((project) => (
            <article
              key={project.name}
              className="grid items-center gap-12 rounded-xl border bg-background p-6 md:p-8 lg:grid-cols-2"
            >
              <div>
                <Badge variant="outline" className="mb-4">
                  {project.category} · {project.status}
                </Badge>
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl font-heading">
                  {project.name}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {project.highlights.slice(0, 3).map((highlight: string) => (
                    <li key={highlight} className="flex items-start text-sm">
                      <span className="mr-2 text-blue-600 dark:text-blue-400">
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Explore {project.name}
                  </a>
                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Engineering Case Study
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="flex aspect-video items-center justify-center rounded-lg border bg-linear-to-br from-blue-600/20 to-indigo-600/20">
                  <div className="p-8 text-center">
                    <ShieldCheck className="mx-auto mb-4 h-16 w-16 text-primary" />
                    <p className="text-muted-foreground">{project.tagline}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.name === "TrustFlow"
                        ? "Private transactions with explicit lifecycle boundaries"
                        : "Collaboration workflows under active development"}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
