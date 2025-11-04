import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ApplyForm } from '@/components/apply-form';
import { StickyCtaMobile } from '@/components/sticky-cta-mobile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Diagnostic | The Anxiety Protocol',
  description: 'Begin the diagnostic process. This clinical instrument provides the initial data for your case to determine if The Anxiety Protocol is the correct fit for your specific situation.',
  openGraph: {
    title: 'The Diagnostic | The Anxiety Protocol',
    description: 'Complete the diagnostic intake. A clinical instrument designed to determine if our 30-day intensive protocol is appropriate for your needs.',
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
                  <span className="text-sm font-medium text-sea-sage">The Diagnostic</span>
                </div>
                
                {/* H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  The First Step: The Clinical Diagnostic
                </h1>
                
                {/* Explanation */}
                <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
                  This is the critical entry point to The Anxiety Protocol. The following is not a contact form; it is a clinical instrument designed to provide the initial data for your case. Your answers will allow us to make an accurate determination of whether our model is the correct fit for your specific situation. Please answer with care and candour.
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
                Prerequisites for Application
              </h2>
              <p className="text-lg md:text-xl text-body leading-relaxed mb-8">
                This is an intensive, 30-day programme engineered for a defined outcome. It is not a substitute for traditional, open-ended therapy. Before proceeding, confirm that you meet the following criteria:
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
                Our Process for Determining Fit
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Submit Your Diagnostic Data</h3>
                    <p className="text-body leading-7">
                      Complete the secure, encrypted form below. This is our primary tool for assessing the fit between your needs and our methodology.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Clinical Strategist Review</h3>
                    <p className="text-body leading-7">
                      Your application will be personally reviewed by our Clinical Strategist within 24-48 business hours to determine if the protocol is appropriate.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">The Strategic Consultation</h3>
                    <p className="text-body leading-7">
                      If your diagnostic data indicates a strong match, you will be invited to a brief, no-obligation consultation to confirm final alignment before a decision is made.
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
                  The Diagnostic Intake
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg ring-1 ring-dune-shadow">
                <ApplyForm />
              </div>
            </ScrollReveal>

            {/* Trust signals directly below form */}
            <ScrollReveal delay={200}>
              <div className="mt-8 glass-effect rounded-2xl p-6 text-center ring-1 ring-dune-shadow">
                <p className="text-sm text-soft-clay leading-relaxed">
                  <strong className="text-sea-sage">Data Integrity Commitment:</strong> Your submission is confidential and protected by end-to-end encryption on a HIPAA-grade platform. All services are provided by a BACP registered psychotherapist.
                </p>
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

