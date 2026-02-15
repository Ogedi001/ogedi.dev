import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";

export function SkillsGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <h2 className="text-2xl font-semibold font-heading">
          Technical skills
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-medium">Frontend</h3>
            <ul className="mt-3 space-y-1.5">
              {siteConfig.skills.frontend.map((skill: string) => (
                <li key={skill} className="text-sm text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-medium">Backend</h3>
            <ul className="mt-3 space-y-1.5">
              {siteConfig.skills.backend.slice(0, 6).map((skill: string) => (
                <li key={skill} className="text-sm text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-medium">Cloud & Infrastructure</h3>
            <ul className="mt-3 space-y-1.5">
              {siteConfig.skills.cloud.map((skill: string) => (
                <li key={skill} className="text-sm text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h3 className="font-medium">AI & ML</h3>
            <ul className="mt-3 space-y-1.5">
              {siteConfig.skills.ai.map((skill: string) => (
                <li key={skill} className="text-sm text-muted-foreground">
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
