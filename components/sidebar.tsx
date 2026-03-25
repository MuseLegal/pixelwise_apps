import Link from 'next/link';
import type { FrameworkChapter } from '@/lib/content';

export function Sidebar({ chapters, activeSlug }: { chapters: FrameworkChapter[]; activeSlug: string }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-heading">Framework Chapters</div>
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/framework/${chapter.slug}`}
            className={`section-link ${chapter.slug === activeSlug ? 'active' : ''}`}
          >
            {chapter.frontmatter.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
