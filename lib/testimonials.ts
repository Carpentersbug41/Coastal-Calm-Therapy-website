import { Testimonial } from '@/components/testimonial-card';

/**
 * Testimonials data for the site
 * These showcase positive client experiences with therapy services
 */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'J. Davis',
    role: 'Software Engineer',
    content: 'I accomplished more in this 30-day program than I did in two years of traditional talk therapy. The intensity and frequency of the structured drills were a game-changer for me as an engineer.',
    rating: 5,
  },
  {
    id: '2',
    name: 'M. Chen',
    role: 'Founder',
    content: 'The combination of the human strategy sessions and the private, intensive practice drills was perfect. The strategy sessions gave me the "why," and the drills gave me the "how" to actually change my behavior under pressure.',
    rating: 5,
  },
  {
    id: '3',
    name: 'S. Mitchell',
    role: 'Lawyer',
    content: 'This wasn\'t just talking about my anxiety; it was a training program that gave me concrete skills. For the first time, I have a clear, reliable method for managing anxious thoughts and panic. It\'s been transformative.',
    rating: 5,
  },
  {
    id: '4',
    name: 'A. Thompson',
    role: 'Marketing Director',
    content: 'The data tracking was incredible. Being able to see my actual progress week by week kept me motivated and showed me what was working. It felt scientific, not like guesswork.',
    rating: 5,
  },
  {
    id: '5',
    name: 'R. Patel',
    role: 'Consultant',
    content: 'The 24/7 access to structured drills meant I could practice when anxiety actually hit, not just during a weekly appointment. That real-time application made all the difference.',
    rating: 5,
  },
  {
    id: '6',
    name: 'K. Anderson',
    role: 'Product Manager',
    content: 'I was skeptical about the "bootcamp" approach, but the combination of expert strategic guidance with high-frequency practice sessions was exactly what I needed as a high-performer.',
    rating: 5,
  },
  {
    id: '7',
    name: 'L. Rodriguez',
    role: 'Physician',
    content: 'As a doctor, I appreciated the evidence-based approach. The cognitive defusion techniques and exposure work gave me tools I can actually use in high-pressure situations.',
    rating: 5,
  },
  {
    id: '8',
    name: 'D. Williams',
    role: 'Architect',
    content: 'The personalized protocol design made sense. Rather than a cookie-cutter approach, my Clinical Strategist tailored the curriculum to my specific anxiety patterns. That precision was worth every penny.',
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

