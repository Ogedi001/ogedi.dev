import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingBySlug, getWriting } from "@/lib/mdx/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { renderContent } from "@/components/mdx/render-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getWriting();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Ogedi Favour Uchibeke`,
    description: post.description,
  };
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-16 border-b">
        <Container>
          <Link href="/writing">
            <Button variant="ghost" className="mb-6 -ml-3">
              ← Back to Writing
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.date}</span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto">
            {renderContent(post.content)}
          </article>
        </div>
      </section>
    </div>
  );
}
