import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";

export function SkillsSection() {
  return (
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
              {siteConfig.skills.databases.slice(0, 6).map((skill: string) => (
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
  );
}
