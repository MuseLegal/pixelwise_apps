import type { FrameworkChapter } from '@/lib/content';
import { Sidebar } from './sidebar';

export function DocLayout({
  chapters,
  currentSlug,
  children,
}: {
  chapters: FrameworkChapter[];
  currentSlug: string;
  children: React.ReactNode;
}) {
  return (
    <main className="docs-shell">
      <Sidebar chapters={chapters} activeSlug={currentSlug} />
      <article className="doc-content">{children}</article>
    </main>
  );
}
