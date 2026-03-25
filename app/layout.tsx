import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Pixelwise Privacy Framework',
  description: 'A practical framework for product teams building privacy-first software.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
