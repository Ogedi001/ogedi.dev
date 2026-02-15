import Link from "next/link";
import { Container } from "@/components/layout/container";

export function CtaSection() {
  return (
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
  );
}
