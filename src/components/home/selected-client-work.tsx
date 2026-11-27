import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";

export function SelectedClientWork() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
            Selected client work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-heading">
            Websites built for real products and teams.
          </h2>
          <p className="mt-3 text-muted-foreground">
            A mix of product-team collaboration and independent client work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {siteConfig.clientWork.map((work, index) => (
            <article
              key={work.name}
              className="group overflow-hidden rounded-2xl border bg-card transition-colors hover:border-blue-500/40"
            >
              <div className="relative min-h-64 overflow-hidden bg-linear-to-br from-blue-950 via-slate-900 to-indigo-950 p-7 text-white sm:min-h-72 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10"
                />
                <div className="relative flex h-full min-h-50 flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold tracking-wide">
                      {work.name}
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/75">
                      {work.category}
                    </span>
                  </div>
                  <div className="mt-10 max-w-sm">
                    <p className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                      {work.previewHeading}
                    </p>
                    <p className="mt-3 text-sm text-white/65">
                      {work.previewDetail}
                    </p>
                  </div>
                  <div className="mt-7 flex items-center gap-2 text-xs text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live website
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {work.relationship}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {work.name}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Visit website
                  <span className="sr-only">(opens in a new tab)</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
