import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function FeaturedProject() {
  const project = siteConfig.projects[0];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Featured Project
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-heading">
              TaskCollab
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real-time collaboration platform with AI-powered automation. Built
              with WebSockets, BullMQ, and OpenAI integration.
            </p>
            <ul className="mt-6 space-y-3">
              {project?.highlights
                .slice(0, 3)
                .map((highlight: string, i: number) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project?.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-muted-foreground">Real-time collaboration</p>
                <p className="text-sm text-muted-foreground mt-2">
                  WebSocket-powered live updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
