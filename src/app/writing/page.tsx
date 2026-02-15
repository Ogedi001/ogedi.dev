import { getWriting } from "@/lib/mdx/utils";
import { Container } from "@/components/layout/container";
import { WritingCard } from "@/components/writing/writing-card";

export const metadata = {
  title: "Writing | Ogedi Favour Uchibeke",
  description:
    "Technical blog posts about backend development, system architecture, and software engineering.",
};

export default function WritingPage() {
  const posts = getWriting();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Writing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Technical blog posts about backend development, system architecture,
            and software engineering best practices.
          </p>
        </div>
      </section>

      {/* Writing Grid */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <WritingCard key={post.slug} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No blog posts available yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
