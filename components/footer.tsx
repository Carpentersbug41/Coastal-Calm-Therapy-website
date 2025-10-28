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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
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
              <p className="text-body mb-4 leading-7 max-w-md">
                A 30-day Resilience Bootcamp for mastering anxiety. The Protocol Framework combines expert 
                human strategy with intensive structured drills for accelerated, measurable results.
              </p>
              <p className="text-sm font-medium text-sea-sage mb-2">
                Stop Coping. Start Mastering.
              </p>
              <p className="text-xs text-soft-clay">
                Created by Robert Carpenter, licensed psychotherapist.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-sea-sage mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/blog"
                    className="text-body hover:text-sea-sage transition-colors inline-flex items-center group"
                  >
                    <span className="w-1 h-1 bg-seafoam rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-body hover:text-sea-sage transition-colors inline-flex items-center group"
                  >
                    <span className="w-1 h-1 bg-seafoam rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/subscribe"
                    className="text-body hover:text-sea-sage transition-colors inline-flex items-center group"
                  >
                    <span className="w-1 h-1 bg-seafoam rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rss.xml"
                    className="text-body hover:text-sea-sage transition-colors inline-flex items-center group"
                  >
                    <span className="w-1 h-1 bg-seafoam rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    RSS Feed
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-sea-sage mb-4 uppercase tracking-wider">
                Program Info
              </h4>
              <p className="text-sm text-body mb-3 leading-6">
                The Protocol Framework is an evidence-based psychological training system that combines expert 
                human strategy with our proprietary Resilience Simulator.
              </p>
              <p className="text-xs text-soft-clay leading-5">
                Professional clinical service. HIPAA-compliant and secure.
              </p>
            </div>
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
