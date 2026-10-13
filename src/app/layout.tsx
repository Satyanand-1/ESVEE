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
    template: '%s | Esvee',
    default: 'Esvee Technologies | Technology Consulting and Workforce Solutions',
  },
  description: 'Esvee Technologies Inc provides technology consulting, workforce solutions, and delivery support across cloud, software engineering, data, cybersecurity, telecom, enterprise platforms, and SAP.',
  openGraph: {
    title: 'Esvee Technologies | Technology Consulting and Workforce Solutions',
    description: 'Experienced consultants, flexible delivery teams, and practical technology solutions.',
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
