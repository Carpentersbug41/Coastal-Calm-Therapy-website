import { Testimonial } from '@/components/testimonial-card';

/**
 * Testimonials data for the site
 * These showcase positive client experiences with therapy services
 */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Professional',
    content: 'The approach here is genuinely different. I felt heard, understood, and equipped with practical tools from day one. It\'s been transformative for managing my work anxiety.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Thompson',
    role: 'Parent',
    content: 'After years of struggling with stress and feeling overwhelmed, I finally found a space where I could be honest. The techniques I learned have helped me show up better for my family.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Creative Professional',
    content: 'I was skeptical about therapy, but this experience changed my mind entirely. The combination of empathy and evidence-based strategies gave me the clarity I desperately needed.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Michael Roberts',
    role: 'Business Owner',
    content: 'Managing a business while dealing with anxiety felt impossible. The practical frameworks and consistent support helped me find balance I didn\'t think was possible.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Teacher',
    content: 'What stood out most was the genuine care combined with actionable insights. I left every session feeling lighter and more capable of handling life\'s challenges.',
    rating: 5,
  },
  {
    id: '6',
    name: 'David Martinez',
    role: 'Healthcare Worker',
    content: 'Working in a high-stress environment, I needed tools that actually work. The grounded, practical approach here has been life-changing for my mental health and relationships.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Rachel Williams',
    role: 'Graduate Student',
    content: 'I appreciate the modern, non-judgmental approach. It feels like talking to someone who genuinely gets it while also challenging me to grow. Best decision I made for myself.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Tom Harris',
    role: 'Engineer',
    content: 'As someone who values logic and structure, I appreciated the evidence-based methods. But it was the human connection and understanding that made the real difference.',
    rating: 5,
  },
];

/**
 * Get a specified number of testimonials
 */
export function getTestimonials(limit?: number): Testimonial[] {
  if (limit) {
    return testimonials.slice(0, limit);
  }
  return testimonials;
}

/**
 * Get a random selection of testimonials
 */
export function getRandomTestimonials(count: number): Testimonial[] {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

