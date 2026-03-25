import Link from 'next/link';

export function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link href="/" className="brand">Pixelwise</Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/framework/introduction">Framework</Link>
        </div>
      </nav>
    </header>
  );
}
