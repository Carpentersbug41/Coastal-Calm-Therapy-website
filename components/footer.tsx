'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from './container';

export function Footer() {
  const pathname = usePathname();
  const isApplyPage = pathname === '/apply';
  const currentYear = new Date().getFullYear();

  // Minimal footer for /apply page
  if (isApplyPage) {
    return (
      <footer className="relative mt-auto border-t border-dune-shadow bg-gradient-to-b from-drift-sand to-warm-linen">
        <Container>
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/images/logo_ap1.png"
                    alt="The Anxiety Protocol"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-body">
                  © {currentYear} The Anxiety Protocol. All rights reserved.
                </p>
              </div>
              <p className="text-xs text-soft-clay">
                Licensed psychotherapist • HIPAA-compliant platform
              </p>
            </div>
          </div>
        </Container>
      </footer>
    );
  }

  // Full footer for other pages
  return (
    <footer className="relative mt-auto border-t border-dune-shadow bg-gradient-to-b from-drift-sand to-warm-linen">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/30 to-transparent"></div>
      
      <Container>
        <div className="py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            {/* Brand */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo_ap1.png"
                  alt="The Anxiety Protocol"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-sea-sage to-seafoam bg-clip-text text-transparent">
                The Anxiety Protocol
              </h3>
            </div>
            <p className="text-body mb-4 leading-7">
              An engineered, 30-day intensive designed to solve anxiety for those failed by the traditional model. We measure success by our own redundancy.
            </p>
            <p className="text-sm font-medium text-sea-sage mb-2">
              Created by Robert Carpenter, Licensed Psychotherapist.
            </p>
            <p className="text-xs text-soft-clay">
              Professional clinical service. End-to-end encrypted and secure.
            </p>
            
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-dune-shadow">
              <Link href="/protocol" className="text-sm text-body hover:text-sea-sage transition-colors">
                The Protocol
              </Link>
              <Link href="/about" className="text-sm text-body hover:text-sea-sage transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-sm text-body hover:text-sea-sage transition-colors">
                Insights
              </Link>
              <Link href="/investment" className="text-sm text-body hover:text-sea-sage transition-colors">
                Investment
              </Link>
              <Link href="/apply" className="text-sm text-body hover:text-sea-sage transition-colors">
                Apply
              </Link>
            </nav>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-dune-shadow">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-body">
                © {currentYear} The Anxiety Protocol. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
