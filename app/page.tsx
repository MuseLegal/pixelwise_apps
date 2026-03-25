import Link from 'next/link';

export default function HomePage() {
  return (
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
  );
}
