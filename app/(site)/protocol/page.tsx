import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 30-Day Intensive: A Blueprint for Independence',
  description: 'This is not an open-ended exploration. It is a structured engineering project with four distinct phases and a clear deliverable: your autonomy. Discover the three phases of our protocol: Diagnostic & System Mapping, High-Repetition Skill Training, and Stress Testing & The Redundancy Protocol.',
  openGraph: {
    title: 'The 30-Day Intensive: A Blueprint for Independence',
    description: 'This is not an open-ended exploration. It is a structured engineering project with four distinct phases and a clear deliverable: your autonomy. Discover the three phases of our protocol: Diagnostic & System Mapping, High-Repetition Skill Training, and Stress Testing & The Redundancy Protocol.',
  },
}

export default function ProtocolPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              The 30-Day Intensive: A Blueprint for Independence.
            </h1>
            
            <p className="text-xl md:text-2xl leading-8 text-body font-medium">
              This is not an open-ended exploration. It is a structured engineering project with four distinct phases and a clear deliverable: your autonomy.
            </p>
          </div>
        </ScrollReveal>

        {/* The Three Phases */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-12">
            {/* Phase 1 */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl md:text-7xl font-bold text-seafoam opacity-50">01</div>
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-seafoam/10 border border-seafoam/30">
                        <svg className="w-8 h-8 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      Phase 1 (Days 1-7): Diagnostic & System Mapping
                    </h3>
                    <p className="text-lg leading-8 text-body">
                      We conduct a deep diagnostic to identify the specific failure points in your system. We are not looking for a psychological label; we are looking for the precise mechanism of your conditioned responses. You'll receive your personalized <strong>"Anxiety Blueprint,"</strong> a document that maps your triggers, responses, and the core logic of your hijack spiral.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 2 */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl md:text-7xl font-bold text-seafoam opacity-50">02</div>
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-seafoam/10 border border-seafoam/30">
                        <svg className="w-8 h-8 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      Phase 2 (Days 8-21): High-Repetition Skill Training
                    </h3>
                    <p className="text-lg leading-8 text-body">
                      This is the core of the work. Guided by your Human Strategist, you will use the <strong>Flight Simulator</strong> to run daily, targeted drills. You will learn and myelinate the skills of Titration, Pendulation, Defusion, and Somatic Anchoring until they become automatic.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Phase 3 */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl md:text-7xl font-bold text-seafoam opacity-50">03</div>
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-seafoam/10 border border-seafoam/30">
                        <svg className="w-8 h-8 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      Phase 3 (Days 22-30): Stress Testing & The Redundancy Protocol
                    </h3>
                    <p className="text-lg leading-8 text-body">
                      We move from the simulator to the real world. You will apply your new skills to controlled, real-life stressors. The final session is the Handover. We analyze your 30 days of data and deliver your <strong>"Go-Forward Plan"</strong>a user's manual for your own mind, designed to make you a more effective therapist for yourself than we could ever be for you.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Closing Section - Your Deliverable */}
        <ScrollReveal delay={400}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6">
                Your Deliverable: A Toolkit for Life
              </h2>
              <p className="text-lg leading-8 text-body">
                We do not just solve the immediate problem; we equip you with the skills and the system to handle future challenges independently. You will leave this protocol with a verifiable set of tools and the confidence that you are no longer managing a problem, but are fully capable of solving it.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Final Call to Action */}
        <ScrollReveal delay={500}>
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-sea-sage rounded-xl hover:bg-opacity-90 transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl"
            >
              Apply for the Protocol
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}