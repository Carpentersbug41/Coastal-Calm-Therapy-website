import { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Prose wrapper for typography styling in MDX content
 */
export function Prose({ children, className = '' }: ProseProps) {
  return (
    <div
      className={`prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-headings:text-brand-900 prose-a:text-brand-900 prose-a:no-underline hover:prose-a:underline prose-pre:bg-sand-50 prose-pre:border prose-pre:border-sand-100 prose-p:leading-8 prose-li:leading-7 ${className}`}
    >
      {children}
    </div>
  );
}
