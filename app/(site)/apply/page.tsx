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
                  Begin the Diagnostic Process.
                </h1>
                
                {/* Explanation */}
                <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
                  This is the first, critical step of The Anxiety Protocol. The following questions are not a simple contact form; they are a clinical instrument designed to provide the initial data for your case. Your answers will allow us to make an accurate determination of whether our model is the correct fit for your specific situation. Please answer with care and candor.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* THE FILTER */}
      <section className="py-12 md:py-16 bg-warm-linen/50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-4">
                A Reminder: The Protocol's Mandate
              </h2>
              <p className="text-lg md:text-xl text-body text-center leading-relaxed max-w-3xl mx-auto mb-12">
                This is an intensive, 30-day program engineered for a defined outcome. It is not a substitute for traditional, open-ended therapy.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Who it's for */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <h4 className="text-xl font-bold text-sea-sage mb-6">Our Protocol is for you if:</h4>
                  <p className="text-body leading-7">
                    You value data, a structured process, and a clear path to a defined outcome. You have tried traditional therapy and found it lacking. You want a finite, intensive protocol with a clear finish line.
                  </p>
                </div>
              </ScrollReveal>

              {/* Not for */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <h4 className="text-xl font-bold text-sea-sage mb-6">Our Protocol is NOT for you if:</h4>
                  <p className="text-body leading-7">
                    You are seeking a supportive space for open-ended talk. You are in an acute crisis or have deep-seated developmental trauma that requires long-term exploratory work.
                  </p>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">The Fit & Alignment Call</h3>
                    <p className="text-body leading-7">
                      If your diagnostic data indicates a strong match, you will be invited to a brief, no-obligation consultation to confirm alignment before a final decision is made.
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
      <StickyCtaMobile href="#apply-form" text="Submit Diagnostic" />
    </>
  );
}

