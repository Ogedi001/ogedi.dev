import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";
import { getSystems } from "@/lib/mdx/utils";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Sparkles,
  Github,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const systems = getSystems().slice(0, 3);

  const skills = [
    {
      icon: Code2,
      label: "Node.js & APIs",
      desc: "Building scalable backends",
    },
    { icon: Database, label: "Databases", desc: "PostgreSQL, Redis, MongoDB" },
    { icon: Cloud, label: "Cloud & DevOps", desc: "AWS, Azure, Kubernetes" },
    { icon: Sparkles, label: "AI & LLMs", desc: "OpenAI, LangChain, RAG" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <Container>
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="animate-fade-in mb-6">
              <Badge variant="outline" className="gap-2 px-4 py-1.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new opportunities
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-heading">
              Building systems that{" "}
              <span className="text-blue-600 dark:text-blue-400">scale</span>{" "}
              and{" "}
              <span className="text-blue-600 dark:text-blue-400">perform</span>.
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I&apos;m{" "}
              <span className="font-semibold text-foreground">
                {siteConfig.name}
              </span>
              , a{" "}
              <span className="font-semibold text-foreground">
                {siteConfig.title}
              </span>{" "}
              with 5+ years of experience designing and deploying distributed
              systems that power millions of transactions.
            </p>

            {/* Quick Skills */}
            <div className="animate-fade-in-up delay-300 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                      {skill.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/systems"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:bg-foreground/90 transition-all hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Systems Section */}
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

      {/* Experience Highlights */}
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
            {siteConfig.experience
              .slice(0, 3)
              .map((exp: any, index: number) => (
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

      {/* Featured Project - TaskCollab */}
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
                Real-time collaboration platform with AI-powered automation.
                Built with WebSockets, BullMQ, and OpenAI integration.
              </p>
              <ul className="mt-6 space-y-3">
                {siteConfig.projects[0]?.highlights
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
                {siteConfig.projects[0]?.tech.map((tech: string) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href={siteConfig.projects[0]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={siteConfig.projects[0]?.github}
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
                  <p className="text-muted-foreground">
                    Real-time collaboration
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    WebSocket-powered live updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-heading">
              What I work with
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A curated toolkit for building resilient, scalable systems.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <div className="rounded-lg border p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-lg font-semibold">Frontend</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.skills.frontend?.map((skill: string) => (
                  <li
                    key={skill}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      ▸
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="rounded-lg border p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-lg font-semibold">Backend & APIs</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.skills.backend.slice(0, 6).map((skill: string) => (
                  <li
                    key={skill}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      ▸
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div className="rounded-lg border p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-lg font-semibold">Databases & Cache</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.skills.databases
                  .slice(0, 6)
                  .map((skill: string) => (
                    <li
                      key={skill}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="mr-2 text-blue-600 dark:text-blue-400">
                        ▸
                      </span>
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-lg border p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-lg font-semibold">Cloud & DevOps</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.skills.cloud.slice(0, 5).map((skill: string) => (
                  <li
                    key={skill}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      ▸
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="rounded-2xl border bg-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-heading">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m currently available for senior full-stack engineering
              roles, staff engineer positions, and consulting opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-all hover:scale-105"
              >
                Get in Touch
              </Link>
              <a
                href="https://linkedin.com/in/ogedi-favour-uchibeke-553955152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
