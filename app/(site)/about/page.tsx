import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - My Goal is to Make Myself Redundant',
  description: 'Robert Carpenter is a licensed psychotherapist who was forced to become an engineer. The Anxiety Protocol is a system built to solve anxiety as an engineering problem.',
  openGraph: {
    title: 'About Robert Carpenter - Clinical Strategist',
    description: 'A rigorous clinician forced to become a disruptor by the evidence of his own failure. Re-engineering therapy for defined outcomes, measurable results, and maximum efficiency.',
  },
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
              <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sea-sage">Meet Your Clinical Strategist</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              My Goal is to Make Myself Redundant.
            </h1>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto mb-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative group order-2 lg:order-1 flex justify-center">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sea-sage/20 to-seafoam/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl bg-gradient-to-br from-sea-sage/10 to-seafoam/10 shadow-soft-lg ring-1 ring-dune-shadow group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <Image
                  src="/images/glasses1.png"
                  alt="Robert Carpenter - Psychotherapist and Coach specializing in Anxiety"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={200} className="order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sea-sage mb-3">
                Robert Carpenter
              </h2>
              
              <p className="text-xl italic text-soft-clay mb-6">
                Psychotherapist, Author, and Systems-Thinker
              </p>
              
              <div className="space-y-4 text-lg leading-8 text-body">
                <p>
                  I am a licensed psychotherapist who was forced to become an engineer. For years, I applied the best, evidence-based tools of modern therapy, only to watch them fail my most capable clients. I saw intelligent people trapped in a slow, unstructured system that wasn't giving them the results they deserved. The data was undeniable: the model was broken.
                </p>
                
                <p>
                  My professional failure became my obsession. I went back to first principles, deconstructing the entire therapeutic process to answer one question: If we were to re-engineer therapy for a defined outcome, measurable results, and maximum efficiency, what would it look like? The Anxiety Protocol is the answer. It is a system built not just to manage anxiety, but to solve it as an engineering problem.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Clinical Strategist Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                My Role: Clinical Strategist
              </h2>
              
              <div className="space-y-4 text-lg leading-8 text-body">
                <p>
                  My function within the 30-day protocol is not that of a traditional therapist. The hour-long talk therapy model is an inefficient vehicle for skill acquisition. My role is purely strategic, focused on the three high-leverage areas where human expertise is irreplaceable:
                </p>
                
                <ul className="space-y-3 text-lg text-body">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>1. Forensic Diagnosis & Blueprint Design:</strong> I conduct the initial deep-dive analysis to map your unique anxiety algorithm and architect your bespoke 30-day protocol.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>2. Data Analysis & Performance Review:</strong> I analyze the objective, verbatim data from your simulator and instrument sessions to track progress, identify sticking points, and find the signal in the noise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>3. Strategic Optimization:</strong> I provide expert, high-level guidance during our weekly check-ins to make the precise, data-driven adjustments that will optimize your protocol for the fastest possible result.</span>
                  </li>
                </ul>
                
                <p>
                  The day-to-day, high-repetition practice work happens in the Resilience Simulator and the Precision Instrument—tools engineered to do that job with a fidelity I could never match. This division of labor allows me to provide you with pure, undiluted strategic expertise.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <ScrollReveal delay={500}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The First Step in a Strategic Process
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  Our protocol is a serious engagement for individuals who are ready for a new model. The process begins with a diagnostic intake to determine if our system is the correct fit for your specific situation.
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

