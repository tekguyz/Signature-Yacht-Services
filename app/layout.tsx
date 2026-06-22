import type { Metadata } from 'next';
import { Barlow_Condensed, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Configure Barlow Condensed for Display
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans', // Overriding default sans for heading match
});

// Configure Inter for Core Body
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

// Configure Space Grotesk for Technical
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-technical',
});

export const metadata: Metadata = {
  title: 'Signature Yacht Services | Fort Lauderdale Marine HVAC & Refrigeration',
  description: 'Expert Marine HVAC & Refrigeration services for yachts, boats, and commercial vessels across South Florida. Available 24/7. Call 954-701-0752.',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Signature Yacht Services | Fort Lauderdale Marine HVAC & Refrigeration',
    description: 'Expert Marine HVAC & Refrigeration services for yachts, boats, and commercial vessels across South Florida. Available 24/7. Call 954-701-0752.',
    siteName: 'Signature Yacht Services',
    images: [
      {
        url: 'https://picsum.photos/seed/yacht-dockside-miami/1200/630',
        width: 1200,
        height: 630,
        alt: 'Signature Yacht Services - Luxury Yacht HVAC & Climate Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Yacht Services | Marine HVAC & Refrigeration',
    description: 'Expert dockside marine HVAC & refrigeration solutions across South Florida. available within 24 hours.',
    images: ['https://picsum.photos/seed/yacht-dockside-miami/1200/630'],
  },
  icons: {
    icon: 'https://picsum.photos/seed/anchor/32/32',
    apple: 'https://picsum.photos/seed/anchor/180/180',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased bg-navy-deep text-pure-white font-body selection:bg-blue-electric selection:text-pure-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
