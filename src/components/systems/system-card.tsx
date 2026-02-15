import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SystemCardProps {
  system: {
    slug: string;
    title: string;
    description: string;
    tags?: string[];
    metrics?: { value: string; label: string }[];
    date?: string;
  };
}

export function SystemCard({ system }: SystemCardProps) {
  return (
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
          <p className="text-sm text-muted-foreground mt-4">{system.date}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
