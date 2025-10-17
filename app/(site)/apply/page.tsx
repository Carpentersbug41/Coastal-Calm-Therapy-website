import Image from 'next/image';
import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ApplyForm } from '@/components/apply-form';
import { OfferPanel } from '@/components/offer-panel';
import { StickyCtaMobile } from '@/components/sticky-cta-mobile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for The Anxiety Protocol | Master Your Anxiety in 30 Days',
  description: 'Book a free 15-minute consultation for The Anxiety Protocol. A structured, coach-led cognitive bootcamp built for high-performing professionals.',
  openGraph: {
    title: 'Apply for The Anxiety Protocol',
    description: 'Book a free 15-minute consultation. Master your anxiety in 30 days with a structured cognitive bootcamp.',
    url: '/apply',
    type: 'website',
  },
  alternates: {
    canonical: '/apply',
  },
};

export default function ApplyPage() {
  return (
    <>
      {/* HERO SECTION - Above the fold */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-brand-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-sage-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
                  <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-sea-sage">Limited to 4 new clients/month</span>
                </div>
                
                {/* H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  Master Your Anxiety<br />in 30 Days
                </h1>
                
                {/* Subhead */}
                <p className="text-xl md:text-2xl text-sea-sage font-medium mb-6 leading-relaxed max-w-3xl mx-auto">
                  A structured, coach-led cognitive bootcamp built for high-performing professionals.
                </p>
                
                {/* Trust line */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-soft-clay mb-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Licensed psychotherapist</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>HIPAA-grade platform</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Confidential consultation</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href="#apply-form"
                  onClick={(e) => {
                    e.preventDefault();
                    // Track GA4 event
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'select_content', {
                        content_type: 'button',
                        item_id: 'hero_cta',
                        location: 'hero',
                      });
                    }
                    document.querySelector('#apply-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-5 bg-gradient-to-r from-sea-sage to-seafoam text-white text-lg font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Book a Free 15-min Consult</span>
                  <svg className="ml-2 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* OFFER PANEL - Price & What's Included */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={100}>
              <OfferPanel variant="default" showCta={true} />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="py-12 md:py-16 bg-warm-linen/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
                Is This Program Right for You?
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Who it's for */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-seafoam/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sea-sage">Perfect For</h3>
                  </div>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>High-performing professionals ready for intensive work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Individuals seeking rapid, measurable results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Those willing to do structured practice 2–3× per week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>People frustrated with traditional therapy's slow pace</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Not for */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-soft-clay/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sea-sage">Not For</h3>
                  </div>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Individuals in acute crisis (please seek emergency care)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Those looking for passive support without active practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>People unable to commit to the 30-day intensive format</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Those needing medication management (psychiatric care)</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
                How It Works
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Apply</h3>
                    <p className="text-body leading-7">
                      Complete the brief application form below. Tell me about what you're experiencing and what you hope to achieve.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Free 15-Minute Consultation</h3>
                    <p className="text-body leading-7">
                      Within 24–48 hours, I'll review your application and schedule a brief, confidential call to determine if the program is a good fit.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Start Your 30-Day Plan</h3>
                    <p className="text-body leading-7">
                      If we're aligned, we'll schedule your first 90-minute Strategy Session and begin building your personalized protocol immediately.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="py-12 md:py-16 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                  Apply for The Program
                </h2>
                <p className="text-lg text-body leading-7">
                  Start your journey to mastering anxiety. Fill out this brief form and I'll be in touch within 24–48 hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg ring-1 ring-dune-shadow">
                <ApplyForm />
              </div>
            </ScrollReveal>

            {/* Trust badges below form */}
            <ScrollReveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-soft-clay">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Licensed psychotherapist (BACP Reg.)</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>HIPAA-grade platform • End-to-end encryption</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyCtaMobile href="#apply-form" text="Book Free 15-min Consult" />
    </>
  );
}

