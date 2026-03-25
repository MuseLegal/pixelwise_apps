import Link from 'next/link';

export default function HomePage() {
  return (
 codex/convert-static-html-to-next.js-mdx-app-73bfih
    <>
      <header className="home-header">
        <div className="header-inner">
          <Link href="/" className="brand-lockup">
            <span className="brand-text">Pixelwise</span>
          </Link>
          <div className="header-right">
            <Link href="/framework/introduction" className="header-login">Open Framework</Link>
          </div>
        </div>
      </header>

      <main className="home-main">
        <p className="subtitle">Practical privacy controls for product and engineering teams.</p>
        <h1>Pixelwise Privacy Framework</h1>
        <p className="description">
          A modern, implementation-focused framework for tracking governance, policy boundaries, risk evaluation,
          and operational decision-making.
        </p>
        <div className="hero-actions">
          <Link href="/framework/introduction" className="hero-btn primary">Read Framework</Link>
          <Link href="/framework/principles" className="hero-btn secondary">Browse Chapters</Link>
        </div>
        <p className="helper">Framework chapters are fully MDX-driven, so updates happen by editing content files only.</p>
      </main>
    </>

    <main className="home-shell">
      <section className="hero section">
        <p className="eyebrow">Pixelwise</p>
        <h1>Privacy Framework for Modern Product Teams</h1>
        <p className="lead">
          Build privacy into your roadmap with chapter-by-chapter guidance that translates legal requirements into practical product decisions.
        </p>
        <div className="hero-cta-row">
          <Link href="/framework/introduction" className="button primary">Read the Framework</Link>
          <Link href="/framework/principles" className="button ghost">Explore Principles</Link>
        </div>
      </section>

      <section className="section card-grid">
        <article className="card">
          <h2>Actionable Chapters</h2>
          <p>Each chapter is focused, practical, and easy to update from Markdown + JSX with frontmatter metadata.</p>
        </article>
        <article className="card">
          <h2>Built for Teams</h2>
          <p>Share one source of truth across legal, product, and engineering while keeping the docs lightweight.</p>
        </article>
        <article className="card">
          <h2>Static Deploy Friendly</h2>
          <p>Export directly for GitHub Pages and host the full framework as static assets with no runtime backend.</p>
        </article>
      </section>
    </main>
 main
  );
}
