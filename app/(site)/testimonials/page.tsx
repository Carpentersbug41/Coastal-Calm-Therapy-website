import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { TestimonialCard } from '@/components/testimonial-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { getTestimonials } from '@/lib/testimonials';

export const metadata: Metadata = {
  title: 'Program Results & Success Stories',
  description: 'Real results from high-performing professionals who completed The Anxiety Protocol. Discover how the 30-day Cognitive Bootcamp transformed their relationship with anxiety.',
  openGraph: {
    title: 'Program Results | The Anxiety Protocol',
    description: 'From anxious to confident in 30 days. Real results from the Cognitive Bootcamp.',
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
                <span className="text-sm font-medium text-sea-sage">Program Results</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                From Anxious to 
                <span className="bg-gradient-to-r from-seafoam to-golden-shell bg-clip-text text-transparent"> Confident</span>
              </h1>
              
              <p className="text-xl leading-8 text-body mb-8">
                Real results from high-performing professionals who completed The Anxiety Protocol. 
                These stories reflect the transformative power of structured, intensive training combined 
                with expert guidance and data-driven adjustments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Apply for the Program</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/blog"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 border-2 border-sea-sage text-sea-sage font-medium hover:bg-pebble hover:scale-105 transition-all duration-300"
                >
                  <span>Learn About the Protocol</span>
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
                What Program Graduates Say
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Every anxiety journey is unique, but the skills learned in The Anxiety Protocol create lasting change.
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
                  10x
                </div>
                <div className="text-lg text-body">
                  Faster Than Traditional Therapy
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-sea-sage">
                  30
                </div>
                <div className="text-lg text-body">
                  Days to Mastery
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-sea-sage">
                  100%
                </div>
                <div className="text-lg text-body">
                  Data-Driven Adjustments
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
                  Ready to Master Your Anxiety?
                </h3>
                <p className="text-lg text-white/95 leading-8 max-w-2xl mx-auto mb-8">
                  Stop coping. Start mastering. Apply for the 30-day Cognitive Bootcamp and join 
                  high-performers who've transformed their relationship with anxiety.
                </p>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Apply Now</span>
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
                Confidentiality Guaranteed
              </h2>
              <p className="text-lg text-body leading-8">
                All testimonials are shared with explicit client consent and have been anonymized to protect privacy. 
                Names and identifying details have been changed while preserving the essence of each experience. 
                The Anxiety Protocol operates under HIPAA-compliant standards with end-to-end encryption for all sessions and data.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

