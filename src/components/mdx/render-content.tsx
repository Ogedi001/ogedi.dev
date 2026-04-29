import type React from "react";
import Image from "next/image";

const IMAGE_LINE_REGEX = /^!\[(.*?)\]\((\S+?)(?:\s+"(.*?)")?\)$/;
const ITALIC_LINE_REGEX = /^\*(.+)\*$/;
const ORDERED_ITEM_REGEX = /^\d+\.\s+(.*)$/;
const UNORDERED_ITEM_REGEX = /^[*-]\s+(.*)$/;
const TABLE_SEPARATOR_REGEX = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/;

function splitTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={`b-${match.index}`} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>,
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={`c-${match.index}`}
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      parts.push(
        <em key={`i-${match.index}`} className="italic">
          {token.slice(1, -1)}
        </em>,
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function renderContent(content: string) {
  const elements: React.ReactNode[] = [];
  const lines = content.split("\n");

  let i = 0;
  let inCodeBlock = false;
  let codeBlockLanguage = "";
  let codeBlockContent: string[] = [];
  let codeBlockKey = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLanguage = line.slice(3).trim();
        codeBlockContent = [];
      } else {
        elements.push(
          <pre key={`code-${codeBlockKey++}`} className="prose-pre my-6 overflow-x-auto rounded-lg border bg-muted/40 p-4">
            <code className="font-mono text-sm" data-language={codeBlockLanguage || undefined}>
              {codeBlockContent.join("\n")}
            </code>
          </pre>,
        );
        inCodeBlock = false;
        codeBlockLanguage = "";
        codeBlockContent = [];
      }
      i += 1;
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      i += 1;
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
      i += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="mt-8 mb-4 text-3xl font-bold">
          {renderInline(line.replace("# ", ""))}
        </h1>,
      );
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-8 mb-4 text-2xl font-bold">
          {renderInline(line.replace("## ", ""))}
        </h2>,
      );
      i += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-6 mb-3 text-xl font-bold">
          {renderInline(line.replace("### ", ""))}
        </h3>,
      );
      i += 1;
      continue;
    }

    const nextLine = lines[i + 1]?.trim() ?? "";
    if (line.includes("|") && TABLE_SEPARATOR_REGEX.test(nextLine)) {
      const headers = splitTableRow(line);
      i += 2;
      const rows: string[][] = [];

      while (i < lines.length && lines[i].trim().includes("|")) {
        rows.push(splitTableRow(lines[i]));
        i += 1;
      }

      elements.push(
        <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-muted/50">
              <tr>
                {headers.map((header, index) => (
                  <th key={`th-${index}`} className="border-b px-4 py-3 font-semibold text-foreground">
                    {renderInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`} className="border-b last:border-b-0">
                  {headers.map((_, colIndex) => (
                    <td key={`cell-${rowIndex}-${colIndex}`} className="px-4 py-3 align-top text-muted-foreground">
                      {renderInline(row[colIndex] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const unorderedMatch = line.match(UNORDERED_ITEM_REGEX);
    if (unorderedMatch) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length) {
        const m = lines[j].match(UNORDERED_ITEM_REGEX);
        if (!m) break;
        items.push(m[1]);
        j += 1;
      }

      elements.push(
        <ul key={`ul-${i}`} className="my-3 list-disc pl-6 space-y-2">
          {items.map((item, idx) => (
            <li key={`uli-${idx}`} className="text-muted-foreground marker:text-muted-foreground">
              {renderInline(item)}
            </li>
          ))}
        </ul>,
      );
      i = j;
      continue;
    }

    const orderedMatch = line.match(ORDERED_ITEM_REGEX);
    if (orderedMatch) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length) {
        const m = lines[j].match(ORDERED_ITEM_REGEX);
        if (!m) break;
        items.push(m[1]);
        j += 1;
      }

      elements.push(
        <ol key={`ol-${i}`} className="my-3 list-decimal pl-6 space-y-2">
          {items.map((item, idx) => (
            <li key={`oli-${idx}`} className="text-muted-foreground marker:text-muted-foreground">
              {renderInline(item)}
            </li>
          ))}
        </ol>,
      );
      i = j;
      continue;
    }

    if (trimmed === "") {
      elements.push(<br key={i} />);
      i += 1;
      continue;
    }

    elements.push(
      <p key={i} className="my-4 text-muted-foreground">
        {renderInline(line)}
      </p>,
    );
    i += 1;
  }

  return elements;
}
