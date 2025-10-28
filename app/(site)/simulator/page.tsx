import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Resilience Simulator - Your Judgment-Free Training Environment',
  description: 'Our proprietary, voice-based training technology provides a private space for high-repetition psychological skill practice. Not AI—a sophisticated cognitive training environment.',
  openGraph: {
    title: 'The Resilience Simulator',
    description: 'A tireless, judgment-free sparring partner for your mind. Practice vulnerable psychological skills in complete privacy.',
  },
}

export default function SimulatorPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
              <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sea-sage">The Core Engine of Your 30-Day Protocol</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              A Tireless, Judgment-Free Sparring Partner for Your Mind.
            </h1>
            
            <p className="text-xl leading-8 text-body">
              The centerpiece of The Anxiety Protocol is our proprietary Resilience Simulator. It is not a therapist. 
              It is a highly sophisticated, voice-based training environment engineered to do one thing with flawless 
              precision: run the specific skill-building drills designed for you by your Human Strategist.
            </p>
          </div>
        </ScrollReveal>

        {/* Why We Built It */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                Why We Built It
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                Acquiring new psychological skills requires intense, consistent practice. As one of our clients discovered, 
                practicing these vulnerable skills with a machine can be <em>more</em> effective than with a person:
              </p>

              <blockquote className="pl-6 border-l-4 border-seafoam italic text-lg text-body mb-6">
                "I feel like I could get in my head a lot more if I was in front of a person... overthinking just the 
                way I am... What are they thinking about me, my reaction?"
              </blockquote>

              <p className="text-lg leading-8 text-body font-medium text-sea-sage">
                Our Simulator solves this problem.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Design Principles */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                Design Principles
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Principle 1: Zero Relational Risk</h4>
                  <p className="text-lg leading-8 text-body">
                    The Simulator provides a 100% private training environment with no human observer. This complete absence of social judgment is a deliberate design choice to create the optimal conditions for vulnerable, high-repetition practice.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Principle 2: Perfect Fidelity & Dosage</h4>
                  <p className="text-lg leading-8 text-body">
                    The system is engineered to execute your specific protocol with perfect fidelity, every time. This ensures a consistent, high-intensity practice dosage that is impossible to achieve in traditional, human-led models.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Principle 3: On-Demand Availability</h4>
                  <p className="text-lg leading-8 text-body">
                    The platform is designed for asynchronous use, allowing you to complete your drills on your schedule. This removes the friction of appointments and integrates seamlessly into a high-performer's workflow.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Principle 4: High-Fidelity Data Capture</h4>
                  <p className="text-lg leading-8 text-body">
                    Every drill is transcribed and analyzed, creating a stream of objective performance data. This feedback loop allows your Human Strategist to make precise, evidence-based adjustments to your protocol.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <ScrollReveal delay={450}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Simulator is an Integrated Component of the Protocol.
                </h2>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  Access to the Resilience Simulator is granted exclusively to clients accepted into The Anxiety Protocol. It is not a standalone product. The technology is powerful only when wielded by an expert human strategist. The next step is to apply for the full 30-day program.
                </p>
                
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Begin Your Application</span>
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

