import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Protocol: An Engineered System for a Defined Outcome',
  description: 'Traditional therapy is an art, built on open-ended exploration. The Anxiety Protocol is an engineering project, built on a single, non-negotiable principle: our goal is to make ourselves redundant. This page contains the full architectural blueprint of the 30-day intensive designed to achieve that outcome. It is a finite, structured, and data-driven system for those who are ready to stop talking and start solving.',
  openGraph: {
    title: 'The Protocol: An Engineered System for a Defined Outcome',
    description: 'Traditional therapy is an art, built on open-ended exploration. The Anxiety Protocol is an engineering project, built on a single, non-negotiable principle: our goal is to make ourselves redundant. This page contains the full architectural blueprint of the 30-day intensive designed to achieve that outcome. It is a finite, structured, and data-driven system for those who are ready to stop talking and start solving.',
  },
}

export default function ProtocolPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
              <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sea-sage">A Finite, Data-Driven Protocol</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              This is not therapy. This is a protocol.
            </h1>
            
            <p className="text-xl leading-8 text-body">
              Traditional therapy is an art, built on open-ended exploration. The Anxiety Protocol is an engineering project, built on a single, non-negotiable principle: <strong>our goal is to make ourselves redundant.</strong> This page contains the full architectural blueprint of the 30-day intensive designed to achieve that outcome. It is a finite, structured, and data-driven system for those who are ready to stop talking and start solving.
            </p>
          </div>
        </ScrollReveal>

        {/* Strategic Roadmap Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            <ScrollReveal delay={100}>
              <div className="mb-12 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                  The Diagnostic Failure of Traditional Therapy
                </h2>
                <p className="text-lg leading-8 text-body max-w-3xl mx-auto text-center">
                  Anxiety is not one thing. It runs on two distinct, interacting pathways: <strong>Top-Down</strong> (ignited by catastrophic thoughts) and <strong>Bottom-Up</strong> (triggered by a hyper-sensitive nervous system). While both are always in play, every anxiety spiral has an <strong>ignition point.</strong> The critical error of traditional therapy is its diagnostic imprecision—it applies a generic "talk it out" model without first identifying where the fire actually starts.
                </p>
                <p className="text-lg leading-8 text-body max-w-3xl mx-auto text-center mt-4">
                  This is why progress is so often slow and frustrating. The model fails to match the right tool to the right problem. It brings cognitive solutions to a physiological crisis, or insufficient practice to a deeply ingrained cognitive habit. Our protocol corrects this foundational error. We begin with a deep, forensic diagnosis to identify the primary driver of <em>your</em> system. The answer to that single question determines the entire strategy.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 2: The Three Pillars of the Protocol */}
            <ScrollReveal delay={200}>
              <div className="mb-12 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                  The Three Pillars of the Protocol
                </h2>
                <p className="text-lg leading-8 text-body max-w-3xl mx-auto text-center mb-12">
                  Once we have accurately diagnosed the primary pathway, we deconstruct the therapeutic role to deploy the correct, specialized tools with unparalleled precision and intensity.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Pillar 1 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">
                      Pillar 1: The Human Clinical Strategist (The Diagnostician)
                    </h3>
                    <p className="text-base leading-7 text-body">
                      The human expert's role is too valuable to be wasted on generic practice. Your strategist's function is exclusively high-level: a deep forensic analysis to diagnose your primary pathway; the architectural design of your bespoke 30-day protocol; and the ongoing, data-driven analysis of your session transcripts to make high-leverage adjustments.
                    </p>
                  </div>
                  {/* Pillar 2 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">
                      Pillar 2: The Precision Instrument (For Cognitive Work)
                    </h3>
                    <p className="text-base leading-7 text-body">
                      To deconstruct faulty <strong>Top-Down</strong> thought patterns, you will engage 2-3 times per week with our AI-guided instrument. It executes complex cognitive drills (like defusion and restructuring) with a fidelity a human cannot match, spotting and challenging recurring mental loops with surgical precision.
                    </p>
                  </div>
                  {/* Pillar 3 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">
                      Pillar 3: The Resilience Simulator (For Somatic Work)
                    </h3>
                    <p className="text-base leading-7 text-body">
                      To recalibrate a hyper-sensitive <strong>Bottom-Up</strong> nervous system, you will run short, daily drills in our proprietary Resilience Simulator. This somatic gym is where you achieve the high-volume 'reps' necessary for neuroplastic change in a sterile, non-judgmental environment.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 3: The Client Journey */}
            <ScrollReveal delay={300}>
              <div className="mb-12 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                  The 30-Day Blueprint: From Diagnosis to Redundancy
                </h2>
                <p className="text-lg leading-8 text-body max-w-3xl mx-auto text-center mb-12">
                  The protocol is a meticulously choreographed, four-phase intensive. Each phase has a clear objective and a defined deliverable.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Phase 1 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">Phase 1: The Anxiety Blueprint</h3>
                    <p className="text-base leading-7 text-body mb-4">
                      <strong>Objective:</strong> To move from a vague feeling of "anxiety" to a precise, mechanical understanding of your unique system.
                    </p>
                    <p className="text-base leading-7 text-body">
                      <strong>Deliverable:</strong> A written, tangible plan that maps your specific triggers, patterns, and the 30-day protocol designed to solve them.
                    </p>
                  </div>
                  {/* Phase 2 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">Phase 2: The High-Dosage Training</h3>
                    <p className="text-base leading-7 text-body mb-4">
                      <strong>Objective:</strong> To build and myelinate new neural pathways for calm and regulation through intensive, high-repetition practice.
                    </p>
                    <p className="text-base leading-7 text-body">
                      <strong>Deliverable:</strong> A measurable increase in your ability to tolerate distress and "unhook" from automatic thought patterns. Your new skills begin to become your new default.
                    </p>
                  </div>
                  {/* Phase 3 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">Phase 3: The Data-Driven Reviews</h3>
                    <p className="text-base leading-7 text-body mb-4">
                      <strong>Objective:</strong> To use your session data to iteratively refine and optimize the protocol for maximum impact.
                    </p>
                    <p className="text-base leading-7 text-body">
                      <strong>Deliverable:</strong> High-leverage strategic adjustments that accelerate progress and target the root of your specific sticking points.
                    </p>
                  </div>
                  {/* Phase 4 */}
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                    <h3 className="text-xl font-bold text-sea-sage mb-3">Phase 4: The Redundancy Protocol</h3>
                    <p className="text-base leading-7 text-body mb-4">
                      <strong>Objective:</strong> To consolidate your skills and transition you from being the client to being your own expert.
                    </p>
                    <p className="text-base leading-7 text-body">
                      <strong>Deliverable:</strong> A comprehensive 'Go-Forward Plan'—your personal user's manual for maintaining your progress and handling future challenges with full autonomy.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Final Call to Action */}
        <ScrollReveal delay={400}>
          <div className="max-w-4xl mx-auto text-center mt-16 md:mt-24">
            <div className="glass-effect rounded-3xl p-12 md:p-16 shadow-soft-xl border border-dune-shadow">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6">
                This is a System, Not a Suggestion.
              </h2>
              <p className="text-lg leading-8 text-body mb-8">
                The Anxiety Protocol is a rigorous, demanding, and highly effective system for individuals who are ready to do the work. We accept a maximum of four new clients per month to ensure the highest level of strategic oversight.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-sea-sage rounded-xl hover:bg-opacity-90 transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl"
              >
                Begin the Diagnostic
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}

