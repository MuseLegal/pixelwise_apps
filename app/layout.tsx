import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pixelwise Privacy Framework',
  description: 'A practical framework for product teams building privacy-first software.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
