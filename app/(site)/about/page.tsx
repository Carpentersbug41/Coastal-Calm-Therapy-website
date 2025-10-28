import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Meet the Architect of The Anxiety Protocol',
  description: 'Robert Carpenter is a trained therapist and systems-thinker who re-engineered therapy for the structured, results-oriented professional.',
  openGraph: {
    title: 'About Robert Carpenter - The Architect',
    description: 'A systems-thinker at heart, obsessed with one question: If we were to re-engineer the process of therapy for maximum efficiency and measurable results, what would it look like?',
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
              Obsessed with Finding a Better Way
            </h1>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto mb-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative group order-2 lg:order-1">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sea-sage/20 to-seafoam/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full aspect-[3/4] rounded-3xl bg-gradient-to-br from-sea-sage/10 to-seafoam/10 shadow-soft-lg ring-1 ring-dune-shadow group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <Image
                  src="/images/robert-carpenter.png"
                  alt="Robert Carpenter"
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
                  I am a therapist who became an engineer because traditional therapy was failing too many of my clients. I saw intelligent, capable people trapped in a slow, unstructured system that wasn't giving them the results they deserved. I became obsessed with one question: "How can we get our clients to a place of freedom and self-mastery, faster and more effectively?" The Anxiety Protocol is the answer to that obsession.
                </p>
                
                <blockquote className="pl-6 border-l-4 border-dune italic text-xl text-sea-sage font-medium">
                  "I realized then that anxiety wasn't a character flaw to be managed, but an engineering problem to be solved."
                </blockquote>
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
                  My role in your 30-day protocol is not that of a traditional therapist. I am your Clinical Strategist.
                </p>
                
                <p>
                  While I am a licensed psychotherapist with over 20 years of experience and a published author on psychological topics, my function here is purely strategic. The traditional model of hour-long talk therapy is an inefficient vehicle for skill acquisition.
                </p>
                
                <p>
                  My work with you is focused on three high-leverage areas:
                </p>
                
                <ul className="space-y-3 text-lg text-body">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Diagnostic & Blueprint Design:</strong> I conduct the initial deep-dive analysis to build your custom protocol.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Data Analysis & Performance Review:</strong> I analyze the objective data from your Simulator drills to track progress and identify sticking points.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Strategic Optimization:</strong> I provide expert, high-level guidance during our weekly check-ins to refine and optimize your protocol for maximum results.</span>
                  </li>
                </ul>
                
                <p>
                  The day-to-day, high-repetition practice work happens in our proprietary Resilience Simulator, a tool engineered to do that job with a fidelity and intensity I could never match as a human. This division of labor allows me to provide you with pure, undiluted strategic expertise.
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
                  Retain the Architect to Design Your Protocol.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  Apply for a strategic consultation to see if The Anxiety Protocol is right for you.
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

