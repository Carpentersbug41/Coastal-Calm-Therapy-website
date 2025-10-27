import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ApplyForm } from '@/components/apply-form';
import { StickyCtaMobile } from '@/components/sticky-cta-mobile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for The Anxiety Protocol | Strategic Consultation Application',
  description: 'Apply for a strategic consultation with The Anxiety Protocol. Complete our diagnostic application to determine if you meet the requirements for this intensive, high-accountability program.',
  openGraph: {
    title: 'Apply for The Anxiety Protocol | Strategic Consultation',
    description: 'Submit your application for a strategic consultation. Our rigorous selection process ensures the program is a strong fit for high-achievers ready for intensive work.',
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
                {/* H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  Application for a Strategic Consultation.
                </h1>
                
                {/* Subhead */}
                <h3 className="text-2xl md:text-3xl text-sea-sage font-semibold mb-6 leading-relaxed max-w-3xl mx-auto">
                  This is the first step in our rigorous selection process.
                </h3>
                
                {/* Explanation */}
                <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
                  Complete the application below with care and candor. This is a diagnostic tool to determine if you have the mindset and commitment required for this intensive program. If your application is a strong match, you will be invited to a no-obligation, 15-minute strategic consultation.
                </p>
              </div>
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
                A Reminder of the Required Mindset.
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Who it's for */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <h4 className="text-xl font-bold text-sea-sage mb-6">This Protocol is Engineered For:</h4>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>High-achievers who demand a structured, data-driven process.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Psychologically-minded individuals focused on solving the problem.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Those prepared for an intensive, high-accountability program.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Not for */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <h4 className="text-xl font-bold text-sea-sage mb-6">This Protocol is NOT For:</h4>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Individuals in acute crisis or requiring psychiatric care.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Those seeking open-ended, passive emotional support.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Anyone not prepared to engage in consistent, independent practice.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* THE SELECTION PROCESS */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
                The Selection Process
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Submit Your Application:</h3>
                    <p className="text-body leading-7">
                      Complete the diagnostic form below. This is our primary tool for assessing fit.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">The Strategic Review:</h3>
                    <p className="text-body leading-7">
                      Your application will be personally reviewed by our Clinical Strategist within 24-48 business hours.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">The Final Consultation:</h3>
                    <p className="text-body leading-7">
                      If your application is a strong match, you will be invited to a brief, no-obligation consultation to confirm alignment before a final decision is made.
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
                  The Application
                </h2>
                <p className="text-lg text-body leading-7">
                  This is not a contact form. Your answers will be used to evaluate your suitability for the 30-day protocol.
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
      <StickyCtaMobile href="#apply-form" text="Submit Application" />
    </>
  );
}

