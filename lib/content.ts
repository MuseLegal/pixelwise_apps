import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type FrameworkFrontmatter = {
  title: string;
  description: string;
  order: number;
};

export type FrameworkChapter = {
  slug: string;
  frontmatter: FrameworkFrontmatter;
  content: string;
};

const frameworkPath = path.join(process.cwd(), 'content/framework');

function getAllFrameworkFiles() {
  return fs.readdirSync(frameworkPath).filter((file) => file.endsWith('.mdx'));
}

export function getFrameworkChapters(): FrameworkChapter[] {
  return getAllFrameworkFiles()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(frameworkPath, file);
      const source = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(source);

      return {
        slug,
        frontmatter: {
          title: String(data.title ?? slug),
          description: String(data.description ?? ''),
          order: Number(data.order ?? 999),
        },
        content,
      };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getFrameworkChapter(slug: string): FrameworkChapter | null {
  return getFrameworkChapters().find((chapter) => chapter.slug === slug) ?? null;
}
