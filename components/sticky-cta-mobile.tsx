'use client';

import { useEffect, useState } from 'react';

interface StickyCtaMobileProps {
  href: string;
  text: string;
  onClick?: () => void;
}

export function StickyCtaMobile({ href, text, onClick }: StickyCtaMobileProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_content', {
        content_type: 'button',
        item_id: 'sticky_cta_mobile',
        location: 'sticky',
      });
    }

    // Smooth scroll to href if it's an anchor
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glass-effect border-t border-dune-shadow p-4 shadow-soft-lg">
        <button
          onClick={handleClick}
          className="w-full inline-flex items-center justify-center rounded-2xl px-6 py-4 bg-gradient-to-r from-sea-sage to-seafoam text-white font-medium shadow-soft hover:shadow-soft-lg active:scale-95 transition-all duration-200"
        >
          <span>{text}</span>
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

