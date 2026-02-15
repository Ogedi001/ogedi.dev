import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystemBySlug, getSystems } from "@/lib/mdx/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const systems = getSystems();
  return systems.map((system: any) => ({
    slug: system.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    return {
      title: "System Not Found",
    };
  }

  return {
    title: `${system.title} | Ogedi Favour Uchibeke`,
    description: system.description,
  };
}

export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 border-b">
        <Container>
          <Link href="/systems">
            <Button variant="ghost" className="mb-6 -ml-3">
              ← Back to Systems
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {system.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">
            {system.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {system.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">{system.date}</p>
        </Container>
      </section>

      {/* Metrics */}
      {system.metrics && (
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {system.metrics.map((metric: any, index: number) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="text-sm font-medium">{metric.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto">
            {system.content.split("\n").map((line: string, index: number) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {line.replace("# ", "")}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("```")) {
                return null;
              }
              if (line.trim() === "") {
                return <br key={index} />;
              }
              if (line.startsWith("- ") || line.startsWith("* ")) {
                return (
                  <li key={index} className="ml-4">
                    {line.replace(/^[*-] /, "")}
                  </li>
                );
              }
              if (/^\d+\.\s/.test(line)) {
                return (
                  <li key={index} className="ml-4 list-decimal">
                    {line.replace(/^\d+\.\s/, "")}
                  </li>
                );
              }
              if (line.includes("`")) {
                const parts = line.split("`");
                return (
                  <p key={index} className="my-4">
                    {parts.map((part: string, i: number) =>
                      i % 2 === 1 ? (
                        <code
                          key={i}
                          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
                        >
                          {part}
                        </code>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                );
              }
              return (
                <p key={index} className="my-4 text-muted-foreground">
                  {line}
                </p>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
}
