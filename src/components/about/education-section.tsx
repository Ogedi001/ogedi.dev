import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";

export function EducationSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-2xl font-semibold font-heading">Education</h2>
        <div className="mt-6 space-y-4">
          {siteConfig.education.map((edu: any, index: number) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border p-4"
            >
              <div>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {edu.dateRange}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
