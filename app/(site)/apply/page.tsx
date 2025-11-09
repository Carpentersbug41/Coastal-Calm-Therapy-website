import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ApplyForm } from '@/components/apply-form';
import { StickyCtaMobile } from '@/components/sticky-cta-mobile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Begin Your Confidential Diagnostic | The Anxiety Protocol',
  description: 'Start your professional review. Complete our confidential diagnostic to allow our Clinical Architect to determine if our protocol is the correct solution for you.',
  openGraph: {
    title: 'Begin Your Confidential Diagnostic | The Anxiety Protocol',
    description: 'Start the first step towards a new protocol. A confidential diagnostic to determine if our 30-day intensive is the right fit for your needs.',
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
                  <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-sea-sage">Confidential Diagnostic</span>
                </div>
                
                {/* H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  Begin Your Confidential Diagnostic
                </h1>
                
                {/* Sub-headline */}
                <h2 className="text-2xl md:text-3xl font-semibold text-sea-sage/80 mb-8">
                  The First Step Towards a New Protocol
                </h2>
                
                {/* Explanation */}
                <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
                  This is the starting point for our professional review. The following is not a simple contact form, but a confidential diagnostic designed to provide the initial data for your case file. Your candid answers will allow our Clinical Architect to make an accurate, initial determination of whether our model is the correct and most effective solution for you.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* PREREQUISITES */}
      <section className="py-12 md:py-16 bg-warm-linen/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                A Final Check for Fit
              </h2>
              <p className="text-lg md:text-xl text-body leading-relaxed mb-8">
                Our protocol is a significant commitment. To ensure a successful outcome, please confirm that the following statements accurately describe your situation:
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft ring-1 ring-dune-shadow">
                <ul className="space-y-4 text-body leading-7">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sea-sage mt-2"></span>
                    <span><strong>You are a 'therapy veteran'</strong> who has tried the traditional model and found it lacking.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sea-sage mt-2"></span>
                    <span><strong>You are seeking a structured, finite protocol</strong> with a clear finish line, not an open-ended exploration.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sea-sage mt-2"></span>
                    <span><strong>You value a data-driven process</strong> and are ready to move from talking to training.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-sea-sage mt-2"></span>
                    <span><strong>You are NOT in an acute crisis</strong> or dealing with deep-seated developmental trauma that requires long-term exploratory work.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* THE SELECTION PROCESS */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
                Our Three-Step Assessment Process
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">You Submit Your Confidential Diagnostic</h3>
                    <p className="text-body leading-7">
                      Complete the secure, encrypted form below. This allows us to begin a professional review of your case.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">We Conduct a Professional Review</h3>
                    <p className="text-body leading-7">
                      Your diagnostic will be personally reviewed by our Clinical Architect within 24-48 business hours to determine a potential clinical match.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">The Clinical Match Consultation</h3>
                    <p className="text-body leading-7">
                      If the diagnostic indicates a strong fit, you will be invited to a brief, confidential consultation with the Architect to confirm that our protocol is the definitive right choice for you.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* DIAGNOSTIC FORM */}
      <section id="apply-form" className="py-12 md:py-16 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                  Confidential Diagnostic Form
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg ring-1 ring-dune-shadow">
                <ApplyForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyCtaMobile href="#apply-form" text="Submit Diagnostic" />
    </>
  );
}

