import type { Metadata } from 'next';
import './globals.css';
 codex/convert-static-html-to-next.js-mdx-app-73bfih

import { Navbar } from '@/components/navbar';
 main

export const metadata: Metadata = {
  title: 'Pixelwise Privacy Framework',
  description: 'A practical framework for product teams building privacy-first software.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
 codex/convert-static-html-to-next.js-mdx-app-73bfih
      <body>{children}</body>

      <body>
        <Navbar />
        {children}
      </body>
 main
    </html>
  );
}
