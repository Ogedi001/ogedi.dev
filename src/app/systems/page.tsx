import { getSystems } from "@/lib/mdx/utils";
import { Container } from "@/components/layout/container";
import { SystemCard } from "@/components/systems/system-card";

export const metadata = {
  title: "Systems | Ogedi Favour Uchibeke",
  description:
    "Detailed case studies of backend systems, architectures, and technical solutions I've built.",
};

export default function SystemsPage() {
  const systems = getSystems();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Systems
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Detailed case studies of backend systems, architectures, and
            technical solutions I've built throughout my career as a senior
            engineer.
          </p>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system: any) => (
              <SystemCard key={system.slug} system={system} />
            ))}
          </div>

          {systems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No case studies available yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
