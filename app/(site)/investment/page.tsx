import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment - The Anxiety Protocol',
  description: 'A fixed price of £2,500 for a defined outcome. Not payment for time, but investment in your independence. The complete 30-Day Protocol engineered for results.',
  openGraph: {
    title: 'Investment',
    description: 'A fixed price for a defined outcome. An investment in redundancy—permanent elimination of costs from the old, inefficient model.',
  },
}

export default function InvestmentPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Hero Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
              <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sea-sage">Investment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              A Fixed Price for a Defined Outcome.
            </h1>
            
            <p className="text-xl leading-8 text-body">
              The investment in the 30-Day Protocol is a single, fixed fee of <strong className="text-sea-sage">£2,500</strong>. This is not a payment for time or a subscription for endless sessions. It is an investment in a finite, structured, and data-driven system engineered for one specific outcome: your independence.
            </p>
          </div>
        </ScrollReveal>

        {/* Section 2: The Value Proposition */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow mb-8">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                An Investment in Redundancy
              </h2>
              
              <p className="text-lg leading-8 text-body">
                The value of the protocol is not in the process, but in the result. The return on your investment is the permanent elimination of the costs associated with the old, inefficient model.
              </p>
            </div>
          </ScrollReveal>

          {/* Value Proposition 1 */}
          <ScrollReveal delay={150}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-seafoam mb-6">
              <h3 className="text-2xl font-bold text-sea-sage mb-4">
                A Finite Timeline vs. Endless Sessions
              </h3>
              
              <p className="text-lg leading-8 text-body">
                The average therapy client spends 1-2 years in treatment. Our protocol is a 30-day intensive. The return is the reclamation of your time and the elimination of years of recurring costs.
              </p>
            </div>
          </ScrollReveal>

          {/* Value Proposition 2 */}
          <ScrollReveal delay={200}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-seafoam mb-6">
              <h3 className="text-2xl font-bold text-sea-sage mb-4">
                A Defined Outcome vs. Vague Exploration
              </h3>
              
              <p className="text-lg leading-8 text-body">
                You are not investing in "exploring your feelings." You are investing in a tangible outcome: a re-engineered system for managing your internal state. The return is a clear, measurable result, not just a hope of feeling better.
              </p>
            </div>
          </ScrollReveal>

          {/* Value Proposition 3 */}
          <ScrollReveal delay={250}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-seafoam">
              <h3 className="text-2xl font-bold text-sea-sage mb-4">
                A Permanent Skill Set vs. Lifelong Dependency
              </h3>
              
              <p className="text-lg leading-8 text-body">
                The protocol is designed to make you your own expert. The return is not a temporary fix, but a permanent upgrade to your mental toolkit, rendering us and the traditional model obsolete.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 3: What the Investment Includes */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-8">
                The Complete 30-Day Protocol
              </h2>
              
              <ul className="space-y-6 text-lg leading-8 text-body">
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-sea-sage">The Anxiety Blueprint:</strong> Two 90-minute 1-on-1 strategy sessions with your Clinical Strategist for deep diagnosis, protocol design, and the final handover.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-sea-sage">The AI-Led Sessions:</strong> 8-12 full therapeutic sessions in the Precision Instrument to deconstruct cognitive patterns and integrate new skills with perfect fidelity.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-sea-sage">The Daily Drills:</strong> Unlimited access to the Resilience Simulator for the high-repetition daily practice required to build new neural pathways.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-sea-sage">The Data-Driven Reviews:</strong> Three 15-minute weekly performance reviews with your strategist to analyze your session data and make high-leverage adjustments.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-sea-sage">The Data & Resources:</strong> Full access to all your session transcripts, performance analytics, and our post-program library of skill-building materials.
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 4: Application Process */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={350}>
            <div className="bg-warm-linen/50 rounded-3xl p-8 md:p-12 border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                Our Process: We Select for Fit
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                To ensure the highest level of strategic oversight and the integrity of the cohort, we accept a maximum of four new clients per month. This is not first-come, first-served. We select clients based on a single criterion: a precise fit between your needs and our methodology.
              </p>

              <p className="text-lg leading-8 text-body">
                The first step is to submit an application. If your profile aligns with our protocol, you will be invited to a no-obligation strategic consultation to make a final determination.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 5: Final CTA */}
        <ScrollReveal delay={400}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  A Deliberate Investment in Your Autonomy.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  If you are ready to stop paying for an endless process and start investing in a defined outcome, the next step is to begin the diagnostic process.
                </p>
                
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Begin the Diagnostic</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}

