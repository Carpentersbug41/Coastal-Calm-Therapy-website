import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { TestimonialCard } from '@/components/testimonial-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { getTestimonials } from '@/lib/testimonials';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read real stories from clients who have found clarity, calm, and healing through therapy. Discover how evidence-based therapy can help you.',
  openGraph: {
    title: 'Client Testimonials | Coastal Calm Therapy',
    description: 'Real experiences from people who have found clarity and calm through therapy.',
  },
};

export default function TestimonialsPage() {
  const allTestimonials = getTestimonials();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-seafoam/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-golden-shell/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="w-2 h-2 bg-golden-shell rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-sea-sage">Client Experiences</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                Stories of Growth & 
                <span className="bg-gradient-to-r from-seafoam to-golden-shell bg-clip-text text-transparent"> Healing</span>
              </h1>
              
              <p className="text-xl leading-8 text-body mb-8">
                Real experiences from people who have found clarity, calm, and connection through therapy.
                These testimonials reflect the transformative power of evidence-based care delivered with empathy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/blog"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 border-2 border-sea-sage text-sea-sage font-medium hover:bg-pebble hover:scale-105 transition-all duration-300"
                >
                  <span>Read the Blog</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 md:py-28 bg-warm-linen border-t border-dune-shadow">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                What Clients Are Saying
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Every journey is unique, and these stories reflect the diverse paths to healing and growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 50}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-sea-sage">
                  98%
                </div>
                <div className="text-lg text-body">
                  Client Satisfaction
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-sea-sage">
                  5/5
                </div>
                <div className="text-lg text-body">
                  Average Rating
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-sea-sage">
                  100+
                </div>
                <div className="text-lg text-body">
                  Lives Transformed
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 bg-warm-linen border-t border-dune-shadow">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Write Your Own Story?
                </h3>
                <p className="text-lg text-white/95 leading-8 max-w-2xl mx-auto mb-8">
                  Take the first step toward clarity and calm. Reach out today to start your journey.
                </p>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6">
                Your Privacy Matters
              </h2>
              <p className="text-lg text-body leading-8">
                All testimonials are shared with client consent and have been anonymized to protect privacy. 
                Names and identifying details have been changed while preserving the essence of each experience.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

