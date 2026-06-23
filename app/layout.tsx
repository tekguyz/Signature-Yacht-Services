import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-technical',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  title: 'Signature Yacht Services | Marine HVAC & Refrigeration — Fort Lauderdale',
  description:
    'Expert Marine HVAC & Refrigeration for yachts, sailboats, and commercial vessels across South Florida. 24/7 dockside dispatch. Call (954) 701-0752.',
  keywords: [
    'Yacht Air Conditioning',
    'Marine Refrigeration',
    'Chilled Water Pipe Insulation',
    'Marine Mold Remediation',
    'Fort Lauderdale Yacht Service',
    'Dockside AC Repair',
    'South Florida Yacht Support',
  ],
  authors: [{ name: 'Signature Yacht Services' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Signature Yacht Services | Marine HVAC & Refrigeration — Fort Lauderdale',
    description:
      'Expert Marine HVAC & Refrigeration for yachts and commercial vessels. 24/7 dockside dispatch across South Florida.',
    siteName: 'Signature Yacht Services',
    images: [
      {
        url: 'https://picsum.photos/seed/yacht-dockside-miami/1200/630',
        width: 1200,
        height: 630,
        alt: 'Signature Yacht Services — Luxury Yacht HVAC & Climate Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Yacht Services | Marine HVAC & Refrigeration',
    description: 'Expert dockside marine HVAC & refrigeration across South Florida. Available within 24 hours.',
    images: ['https://picsum.photos/seed/yacht-dockside-miami/1200/630'],
  },
  icons: {
    icon: 'https://picsum.photos/seed/anchor/32/32',
    apple: 'https://picsum.photos/seed/anchor/180/180',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body
        className="antialiased bg-navy-deep text-pure-white font-body"
        suppressHydrationWarning
      >
        {/* Skip-to-content for keyboard users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
