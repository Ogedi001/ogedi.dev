import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingBySlug, getWriting } from "@/lib/mdx/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

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

function renderContent(content: string) {
  const elements: React.ReactNode[] = [];
  const lines = content.split("\n");
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockKey = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block start/end
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockContent = [];
        continue;
      } else {
        elements.push(
          <pre key={`code-${codeBlockKey++}`} className="prose-pre">
            <code className="font-mono text-sm">
              {codeBlockContent.join("\n")}
            </code>
          </pre>,
        );
        inCodeBlock = false;
        codeBlockContent = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Headers
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
          {line.replace("# ", "")}
        </h1>,
      );
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>,
      );
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>,
      );
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      elements.push(<br key={i} />);
      continue;
    }

    // Lists
    if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <li key={i} className="ml-4 text-muted-foreground">
          {line.replace(/^[*-] /, "")}
        </li>,
      );
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li key={i} className="ml-4 list-decimal text-muted-foreground">
          {line.replace(/^\d+\.\s/, "")}
        </li>,
      );
      continue;
    }

    // Inline code
    if (line.includes("`")) {
      const parts = line.split("`");
      elements.push(
        <p key={i} className="my-4">
          {parts.map((part: string, j: number) =>
            j % 2 === 1 ? (
              <code
                key={j}
                className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
              >
                {part}
              </code>
            ) : (
              <span key={j} className="text-muted-foreground">
                {part}
              </span>
            ),
          )}
        </p>,
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="my-4 text-muted-foreground">
        {line}
      </p>,
    );
  }
  return elements;
}
