import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app'
  ),
  title: {
    default: 'Coastal Calm Therapy - Calm. Clarity. Connection.',
    template: '%s | Coastal Calm Therapy',
  },
  description:
    'A welcoming space for mental health resources, mindfulness practices, and insights on calm living. Find clarity and connection through our blog and resources.',
  keywords: [
    'therapy',
    'mental health',
    'mindfulness',
    'calm',
    'wellness',
    'self-care',
    'anxiety',
    'stress relief',
  ],
  authors: [{ name: 'Coastal Calm Therapy' }],
  creator: 'Coastal Calm Therapy',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Coastal Calm Therapy',
    title: 'Coastal Calm Therapy - Calm. Clarity. Connection.',
    description:
      'A welcoming space for mental health resources, mindfulness practices, and insights on calm living.',
    images: [
      {
        url: '/og-template.png',
        width: 1200,
        height: 630,
        alt: 'Coastal Calm Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coastal Calm Therapy - Calm. Clarity. Connection.',
    description:
      'A welcoming space for mental health resources, mindfulness practices, and insights on calm living.',
    images: ['/og-template.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Optional: Plausible Analytics (uncomment and set PLAUSIBLE_DOMAIN in .env) */}
        {/* {process.env.PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )} */}
      </head>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

