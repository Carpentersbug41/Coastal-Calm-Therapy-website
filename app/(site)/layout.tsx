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
    default: 'The Anxiety Protocol - 30-Day Cognitive Bootcamp to Master Anxiety',
    template: '%s | The Anxiety Protocol',
  },
  description:
    'A rigorous, evidence-based 30-day program for high-functioning professionals. The Carpenter Method combines expert human strategy with intensive structured drills to master anxiety 10x faster than traditional therapy.',
  keywords: [
    'anxiety treatment',
    'anxiety therapy',
    'cognitive bootcamp',
    'anxiety protocol',
    'high-intensity therapy',
    'carpenter method',
    'rapid anxiety relief',
    'anxiety mastery',
    'cognitive behavioral therapy',
    'exposure therapy',
    'anxiety skills',
    'structured anxiety treatment',
  ],
  authors: [{ name: 'Robert Carpenter' }],
  creator: 'The Anxiety Protocol',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'The Anxiety Protocol',
    title: 'The Anxiety Protocol - 30-Day Cognitive Bootcamp to Master Anxiety',
    description:
      'Stop coping with anxiety. Start mastering it. A structured 30-day program combining human expertise with intensive practice drills for rapid, measurable results.',
    images: [
      {
        url: '/og-template.png',
        width: 1200,
        height: 630,
        alt: 'The Anxiety Protocol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Anxiety Protocol - Master Anxiety in 30 Days',
    description:
      'Stop coping with anxiety. Start mastering it. A structured 30-day program combining human expertise with intensive practice drills for rapid, measurable results.',
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
        <meta name="google-site-verification" content="P2ONhhPYT3AxNnjpjmxmm8FRnQeB0wMIuhsIPK22RJE" />
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

