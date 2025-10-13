'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './container';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
  { name: 'Subscribe', href: '/subscribe' },
];

export function Header() {
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
            className="group flex items-center gap-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-seafoam rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-sea-sage to-seafoam flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">🌊</span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sea-sage to-seafoam bg-clip-text text-transparent">
              The Anxiety Protocol
            </span>
          </Link>

          {/* Navigation links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all px-4 py-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sea-sage ${
                  isActive(item.href)
                    ? 'text-sea-sage bg-pebble'
                    : 'text-olive-grey hover:text-sea-sage hover:bg-pebble/50'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-golden-shell rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
