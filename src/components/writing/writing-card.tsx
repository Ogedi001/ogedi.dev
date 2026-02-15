import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WritingCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    tags?: string[];
    date: string;
    readingTime?: string;
  };
}

export function WritingCard({ post }: WritingCardProps) {
  return (
    <Link key={post.slug} href={`/writing/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
