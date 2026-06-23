import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Inter, Space_Grotesk } from 'next/font/google';
import { headers } from 'next/headers';
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

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'signatureyachtservices.vercel.app';
  // Check if we are running in local/sandbox environments or production secure environments
  const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
  const siteUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(siteUrl),
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
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Signature Yacht Services | Marine HVAC & Refrigeration',
      description: 'Expert dockside marine HVAC & refrigeration across South Florida. Available within 24 hours.',
    },
    icons: {
      icon: [
        { url: '/icon', type: 'image/png', sizes: '32x32' },
      ],
      apple: [
        { url: '/apple-icon', type: 'image/png', sizes: '180x180' },
      ],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0A1628" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
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
