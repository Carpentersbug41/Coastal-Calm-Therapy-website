import { ReactNode } from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

/**
 * Testimonial card component with coastal theme styling
 */
export function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  const { name, role, content, rating } = testimonial;

  return (
    <div className={`
      group h-full rounded-3xl bg-drift-sand p-8 shadow-soft hover:shadow-soft-lg 
      ring-1 ring-dune-shadow transition-all duration-300 hover:-translate-y-1
      ${featured ? 'md:col-span-2 bg-gradient-to-br from-drift-sand to-pebble' : ''}
    `}>
      {/* Quote icon */}
      <div className="mb-4">
        <svg 
          className="w-10 h-10 text-seafoam opacity-40" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-golden-shell' : 'text-soft-clay/30'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      )}

      {/* Content */}
      <blockquote className="mb-6">
        <p className="text-body leading-7 italic">&ldquo;{content}&rdquo;</p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dune-shadow">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-seafoam to-sea-sage flex items-center justify-center text-white font-medium shadow-soft">
            {name.charAt(0)}
          </div>
        </div>
        <div>
          <div className="font-medium text-sea-sage">{name}</div>
          {role && (
            <div className="text-sm text-body">{role}</div>
          )}
        </div>
      </div>
    </div>
  );
}

