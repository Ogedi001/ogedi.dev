import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/configs/config";
import { ArrowRight, Code2, Database, Cloud, Sparkles } from "lucide-react";

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

export function HeroSection() {
  return (
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
            <span className="text-blue-600 dark:text-blue-400">scale</span> and{" "}
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
                  <p className="text-sm font-medium truncate">{skill.label}</p>
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
  );
}
