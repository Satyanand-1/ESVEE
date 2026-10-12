import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://esveetech.com'),
  title: {
    template: 'Esvee Technologies Inc | %s',
    default: 'Esvee Technologies Inc | IT Consulting & Technology Services',
  },
  description: 'Esvee Technologies Inc helps organizations turn business challenges into practical technology outcomes through enterprise applications, SAP solutions, and modern web development.',
  openGraph: {
    title: 'Esvee Technologies Inc | IT Consulting & Technology Services',
    description: 'Esvee Technologies Inc helps organizations turn business challenges into practical technology outcomes.',
    url: 'https://esveetech.com',
    siteName: 'Esvee Technologies Inc',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
