import fs from "fs";
import path from "path";
import { SystemMeta, System } from "@/types/system";
import { WritingMeta, Writing } from "@/types/writing";

const systemsDirectory = path.join(process.cwd(), "src/content/systems");
const writingDirectory = path.join(process.cwd(), "src/content/writing");

export function getMDXFiles(directory: string) {
  if (!fs.existsSync(directory)) {
    return [];
  }
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"));
}

export function readMDXFile(directory: string, slug: string) {
  const filePath = path.join(directory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf-8");
}

export function extractFrontmatter(mdxContent: string) {
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = mdxContent.match(frontmatterRegex);

  if (!match) {
    return { content: mdxContent, frontmatter: {} };
  }

  const frontmatterBlock = match[1];
  const content = mdxContent.replace(frontmatterRegex, "").trim();

  const frontmatter: Record<string, any> = {};
  frontmatterBlock.split("\n").forEach((line) => {
    const [key, ...value] = line.split(":");
    if (key && value) {
      const valueStr = value.join(":").trim();
      // Handle array values
      if (valueStr.startsWith("[") && valueStr.endsWith("]")) {
        frontmatter[key.trim()] = valueStr
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/^"|"$/g, ""));
      } else {
        frontmatter[key.trim()] = valueStr.replace(/^"|"$/g, "");
      }
    }
  });

  return { content, frontmatter };
}

export function getSystems(): SystemMeta[] {
  const files = getMDXFiles(systemsDirectory);
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const content = readMDXFile(systemsDirectory, slug);
      if (!content) return null;
      const { frontmatter } = extractFrontmatter(content);
      return {
        slug,
        title: frontmatter.title || "",
        description: frontmatter.description || "",
        date: frontmatter.date || "",
        tags: frontmatter.tags || [],
      } as SystemMeta;
    })
    .filter((item): item is SystemMeta => item !== null);
}

export function getSystemBySlug(slug: string): System | null {
  const content = readMDXFile(systemsDirectory, slug);
  if (!content) return null;
  const { content: mdxContent, frontmatter } = extractFrontmatter(content);
  return {
    slug,
    content: mdxContent,
    title: frontmatter.title || "",
    description: frontmatter.description || "",
    date: frontmatter.date || "",
    tags: frontmatter.tags || [],
    metrics: frontmatter.metrics || [],
  } as System;
}

export function getWriting(): WritingMeta[] {
  const files = getMDXFiles(writingDirectory);
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const content = readMDXFile(writingDirectory, slug);
      if (!content) return null;
      const { frontmatter } = extractFrontmatter(content);
      return {
        slug,
        title: frontmatter.title || "",
        description: frontmatter.description || "",
        date: frontmatter.date || "",
        tags: frontmatter.tags || [],
        readingTime: frontmatter.readingTime || "",
      } as WritingMeta;
    })
    .filter((item): item is WritingMeta => item !== null);
}

export function getWritingBySlug(slug: string): Writing | null {
  const content = readMDXFile(writingDirectory, slug);
  if (!content) return null;
  const { content: mdxContent, frontmatter } = extractFrontmatter(content);
  return {
    slug,
    content: mdxContent,
    title: frontmatter.title || "",
    description: frontmatter.description || "",
    date: frontmatter.date || "",
    tags: frontmatter.tags || [],
    readingTime: frontmatter.readingTime || "",
  } as Writing;
}
