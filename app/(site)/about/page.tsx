import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - My Goal is to Make Myself Redundant',
  description: 'Robert Carpenter is a licensed psychotherapist who was forced to become an engineer. The Anxiety Protocol is a system built not just to manage anxiety, but to solve it.',
  openGraph: {
    title: 'About Robert Carpenter - Clinical Engineer',
    description: 'A licensed psychotherapist forced to become an engineer. Re-engineering therapy for defined outcomes, measurable results, and maximum efficiency.',
  },
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              My Goal is to Make Myself Redundant.
            </h1>
            
            <h2 className="text-xl md:text-2xl text-soft-clay">
              A Statement from Your Clinical Engineer, Robert Carpenter.
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal Rule */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto mb-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative group order-2 lg:order-1 flex justify-center">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sea-sage/20 to-seafoam/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl bg-gradient-to-br from-sea-sage/10 to-seafoam/10 shadow-soft-lg ring-1 ring-dune-shadow group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <Image
                  src="/images/robert-carpenter.jpg"
                  alt="Robert Carpenter - Clinical Engineer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={200} className="order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sea-sage mb-2">
                Robert Carpenter
              </h2>
              
              <p className="text-xl text-soft-clay mb-8">
                Psychotherapist & Clinical Engineer
              </p>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  I am a licensed psychotherapist who was forced to become an engineer. For years, I applied the best, evidence-based tools of modern therapy, only to watch my most capable clients remain stuck. The data was undeniable: the failure was not in the client; it was in the architecture of the therapeutic model itself.
                </p>
                
                <p>
                  That professional failure became my obsession. I went back to first principles, deconstructing the entire process to answer one question: <strong>If we were to re-engineer therapy for a defined outcome, measurable results, and maximum efficiency, what would it look like?</strong>
                </p>
                
                <p>
                  The Anxiety Protocol is the answer. It is a system built not just to manage anxiety, but to solve it.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal Rule */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* My Function is Strategic, Not Therapeutic */}
        <section className="mb-16 max-w-6xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8 text-center">
                My Function is Strategic, Not Therapeutic
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg leading-8 text-body">
                  My function within the 30-day protocol is not that of a traditional therapist. The billable-hour, talk-based model is an inefficient and unreliable vehicle for skill acquisition. My role is purely strategic, focused on the three high-leverage areas where human expertise is irreplaceable:
                </p>
              </div>
            </div>
            
            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Column 1 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam/10 text-seafoam text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Forensic Diagnosis & Blueprint Design
                </h3>
                <p className="text-body leading-7">
                  I conduct the initial deep-dive analysis to map your unique anxiety algorithm and architect your bespoke 30-day protocol.
                </p>
              </div>

              {/* Column 2 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam/10 text-seafoam text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Data Analysis & Performance Review
                </h3>
                <p className="text-body leading-7">
                  I analyse the objective, verbatim data from your AI-led sessions to track progress, identify leverage points, and find the signal in the noise.
                </p>
              </div>

              {/* Column 3 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam/10 text-seafoam text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Strategic Optimisation
                </h3>
                <p className="text-body leading-7">
                  In our weekly check-ins, I provide the precise, data-driven adjustments required to optimise your protocol for the fastest possible, durable result.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-8 text-body">
                The day-to-day, high-repetition practice is executed using the <strong>Clinical Check-in</strong> and the <strong>Somatic Drill</strong>. This division of labour is the core of our model's efficiency. It allows me to provide you with pure, undiluted strategic oversight, ensuring the entire project remains relentlessly focused on the outcome.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Horizontal Rule */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* My Engineering Philosophy */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={400}>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8 text-center">
                My Engineering Philosophy
              </h2>
              
              <p className="text-lg leading-8 text-body mb-8 text-center">
                My work is governed by a simple, non-negotiable set of principles. This is the ethos that underpins the entire protocol.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Principle 1 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Data Over Dogma
                </h3>
                <p className="text-body leading-7">
                  I am not wedded to any single therapeutic modality, only to the objective data of what works. We follow the evidence, not a pre-written script.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Skills Over Insight
                </h3>
                <p className="text-body leading-7">
                  Whilst understanding is useful, it is not a skill. My focus is on equipping you with a verifiable, transportable toolkit that functions under real-world pressure.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Autonomy Over Dependency
                </h3>
                <p className="text-body leading-7">
                  The entire protocol is engineered to make you the expert. Success is not measured by your reliance on me, but by your radical independence from me.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Horizontal Rule */}
        <div className="max-w-4xl mx-auto mb-16">
          <hr className="border-t border-dune-shadow" />
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={500}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Process Begins with Data.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  Our protocol is a serious engagement for individuals who are ready for a new model. The process begins with a diagnostic application to determine if our system is the correct fit for your specific situation.
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

