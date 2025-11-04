'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from './container';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'The Protocol', href: '/protocol' },
  { name: 'Results', href: '/results' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
  { name: 'Investment', href: '/investment' },
  { name: 'Apply', href: '/apply', highlight: true },
];

interface HeaderProps {
  minimal?: boolean;
}

export function Header({ minimal = false }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Check if current page is /apply for automatic minimal mode
  const isApplyPage = pathname === '/apply';
  const shouldBeMinimal = minimal || isApplyPage;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-soft border-b border-dune-shadow' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-5">
          {/* Logo / Site name */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/images/logo_ap1.png"
                alt="The Anxiety Protocol"
                width={80}
                height={80}
                className="w-full h-full object-contain transition-transform group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sea-sage to-seafoam bg-clip-text text-transparent">
              The Anxiety Protocol
            </span>
          </Link>

          {/* Navigation links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {shouldBeMinimal ? (
              // Minimal mode: Only show Apply CTA
              <Link
                href="/apply"
                className="relative text-sm font-medium transition-all px-6 py-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sea-sage bg-sea-sage text-white hover:bg-golden-shell hover:text-olive-grey hover:scale-105"
              >
                Apply
              </Link>
            ) : (
              // Full navigation
              navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all px-4 py-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sea-sage ${
                    item.highlight
                      ? 'bg-sea-sage text-white hover:bg-golden-shell hover:text-olive-grey hover:scale-105'
                      : isActive(item.href)
                      ? 'text-sea-sage bg-pebble'
                      : 'text-olive-grey hover:text-sea-sage hover:bg-pebble/50'
                  }`}
                >
                  {item.name}
                  {!item.highlight && isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-golden-shell rounded-full"></span>
                  )}
                </Link>
              ))
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
