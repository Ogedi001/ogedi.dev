import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/configs/config";
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Sparkles,
  Terminal,
  Server,
  Github,
  Linkedin,
  X,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    label: "Node.js & APIs",
    desc: "Building scalable backends",
  },
  { icon: Server, label: "NestJS", desc: "Enterprise APIs" },
  { icon: Terminal, label: "Rust", desc: "High-performance systems" },
  { icon: Database, label: "Databases", desc: "PostgreSQL, Redis, MongoDB" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS, Azure, Kubernetes" },
  { icon: Sparkles, label: "AI & LLMs", desc: "OpenAI, LangChain, RAG" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-15 md:py-20 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]" />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <h1 className="animate-fade-in-up delay-100 text-2xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-heading">
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
            <div className="animate-fade-in-up delay-300 mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
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

          {/* Profile Photo */}
          <div className="hidden lg:block relative animate-fade-in-up delay-200">
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl -rotate-3" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/ogedi.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
