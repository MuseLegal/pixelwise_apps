import Link from 'next/link';
import type { FrameworkChapter } from '@/lib/content';

export function Sidebar({ chapters, activeSlug }: { chapters: FrameworkChapter[]; activeSlug: string }) {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">Framework</p>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              href={`/framework/${chapter.slug}`}
              className={chapter.slug === activeSlug ? 'active' : ''}
            >
              {chapter.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
