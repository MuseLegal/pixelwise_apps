 codex/convert-static-html-to-next.js-mdx-app-73bfih
import Link from 'next/link';

 main
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
 codex/convert-static-html-to-next.js-mdx-app-73bfih
    <div className="framework-page">
      <div className="topbar">
        <div className="topbar-inner">
          <div className="top-left">
            <div className="logo">
              <Link href="/">Pixelwise</Link> <span>Framework</span>
            </div>
          </div>
          <div className="top-right">
            <div className="top-nav">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/framework/${chapter.slug}`}
                  className={chapter.slug === currentSlug ? 'active' : ''}
                >
                  {chapter.frontmatter.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="top-actions">
            <Link href="/" className="header-login">Home</Link>
          </div>
        </div>
      </div>

      <div className="app-frame">
        <Sidebar chapters={chapters} activeSlug={currentSlug} />
        <main className="content">
          <div className="content-inner">{children}</div>
        </main>
        <aside className="right">
          <div className="right-inner">
            <div className="right-block">
              <h4>MDX editing</h4>
              <p>Edit chapter body content in <code>content/framework/*.mdx</code>.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <main className="docs-shell">
      <Sidebar chapters={chapters} activeSlug={currentSlug} />
      <article className="doc-content">{children}</article>
    </main>
 main
  );
}
