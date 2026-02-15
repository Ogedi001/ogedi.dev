import Link from "next/link";
import { getSystems } from "@/lib/mdx/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system: any) => (
              <Link key={system.slug} href={`/systems/${system.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {system.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {system.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {system.tags?.map((tag: string) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {system.metrics && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        {system.metrics.map((metric: any, index: number) => (
                          <div key={index}>
                            <p className="text-2xl font-bold text-primary">
                              {metric.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-4">
                      {system.date}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {systems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No case studies available yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
