import type React from "react";
import Image from "next/image";

const IMAGE_LINE_REGEX = /^!\[(.*?)\]\((\S+?)(?:\s+"(.*?)")?\)$/;
const ITALIC_LINE_REGEX = /^\*(.+)\*$/;

export function renderContent(content: string) {
  const elements: React.ReactNode[] = [];
  const lines = content.split("\n");
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockKey = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockContent = [];
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

    const imageMatch = line.match(IMAGE_LINE_REGEX);
    if (imageMatch) {
      const [, alt, src, title] = imageMatch;
      let caption = title;
      const nextLine = lines[i + 1]?.trim() ?? "";
      const captionMatch = nextLine.match(ITALIC_LINE_REGEX);

      if (!caption && captionMatch) {
        caption = captionMatch[1].trim();
        i += 1;
      }

      elements.push(
        <figure key={`image-${i}`} className="my-8">
          <Image
            src={src}
            alt={alt || "Diagram"}
            width={1400}
            height={900}
            sizes="(max-width: 768px) 100vw, 896px"
            className="h-auto w-full rounded-lg border bg-card"
          />
          {caption && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>,
      );
      continue;
    }

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

    if (line.trim() === "") {
      elements.push(<br key={i} />);
      continue;
    }

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

    elements.push(
      <p key={i} className="my-4 text-muted-foreground">
        {line}
      </p>,
    );
  }

  return elements;
}
