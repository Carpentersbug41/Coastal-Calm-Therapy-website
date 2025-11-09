import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Architect - Your Protocol is Personally Architected by a Clinical Expert',
  description: 'Robert Carpenter is a licensed psychotherapist and Clinical Architect. The Anxiety Protocol is a system re-engineered from first principles to create lasting change.',
  openGraph: {
    title: 'The Architect - Robert Carpenter - Clinical Architect',
    description: 'A licensed psychotherapist and Clinical Architect. The Anxiety Protocol is a system re-engineered from first principles based on the objective data of what actually works.',
  },
}

export default function TheArchitectPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              Your Protocol is Personally Architected by a Clinical Expert.
            </h1>
            
            <h2 className="text-xl md:text-2xl text-soft-clay">
              A Statement on the Irreplaceable Role of Human Strategy.
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
              <p className="text-xl text-soft-clay mb-2">
                Robert Carpenter, Clinical Architect
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sea-sage mb-8">
                Licensed Psychotherapist
              </h2>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  For years as a licensed psychotherapist, I saw the same frustrating pattern: intelligent, capable clients would do all the work, gain all the insight, and yet remain stuck in the same cycles of anxiety. This led to a single, unavoidable conclusion: the failure was not in the client, but in the fundamental design of the therapeutic model itself.
                </p>
                
                <p>
                  The Anxiety Protocol is the result of that conclusion—a system re-engineered from first principles, based on the objective data of what actually works to create lasting change.
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
                The Architect's Role: Pure Strategy
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg leading-8 text-body">
                  My role within the 30-day intensive is not that of a traditional, talk-based therapist. It is focused exclusively on the three high-leverage areas where expert human oversight is irreplaceable:
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
                  Deep-Dive Diagnostic & Blueprint Design
                </h3>
                <p className="text-body leading-7">
                  I personally conduct the initial analysis to map your unique anxiety system and architect your bespoke 30-day protocol.
                </p>
              </div>

              {/* Column 2 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam/10 text-seafoam text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Data Analysis & Refinement
                </h3>
                <p className="text-body leading-7">
                  I analyze the objective data from your sessions to track progress, identify leverage points, and refine your protocol in real-time.
                </p>
              </div>

              {/* Column 3 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-seafoam/10 text-seafoam text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Strategic Adjustments
                </h3>
                <p className="text-body leading-7">
                  In our weekly check-ins, I provide the precise, data-driven course corrections required to ensure you are on the fastest, most effective path to autonomy.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-8 text-body">
                This division of labour is the core of the protocol's effectiveness. It ensures that the expert human intelligence in the system is dedicated entirely to a single goal: the success of your outcome.
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
                Our Guiding Principles
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* Principle 1 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Data Over Dogma
                </h3>
                <p className="text-body leading-7">
                  We are not wedded to any single therapeutic modality, only to the objective evidence of what works for you.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Skills Over Insight
                </h3>
                <p className="text-body leading-7">
                  While understanding is useful, our focus is on equipping you with a verifiable, transportable toolkit that functions under real-world pressure.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft-lg border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">
                  Autonomy Over Dependency
                </h3>
                <p className="text-body leading-7">
                  The entire protocol is engineered to make you the expert. Our success is measured not by your reliance on us, but by your independence from us.
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
                  The First Step is to Determine the Fit.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  This is a rigorous, intensive protocol for individuals who are ready for a new model. The process begins with a clinical diagnostic to ensure our system is the correct and most effective solution for your specific situation.
                </p>
                
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Begin a Confidential Diagnostic</span>
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

