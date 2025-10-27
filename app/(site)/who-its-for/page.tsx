import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who It\'s For - A Protocol for a Specific Type of Thinker',
  description: 'This protocol is designed for high-achieving, systems-thinking professionals who value data, structure, and measurable results. Is it right for you?',
  openGraph: {
    title: 'Who It\'s For - The Anxiety Protocol',
    description: 'A rigorous, demanding program designed for a specific mindset. Review carefully to determine if this protocol is right for you.',
  },
}

export default function WhoItsForPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              Engineered for a Specific Operating System.
            </h1>
            
            <p className="text-xl leading-8 text-body">
              Our protocol is a rigorous, demanding program designed for a specific mindset. Please review the 
              following lists carefully.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* This Protocol Is For You If */}
          <section className="mb-16">
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-seafoam">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-seafoam/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-sea-sage">
                    This Protocol Is for You If:
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You are a <strong className="text-sea-sage">high-achieving professional</strong> who wants a structured, 
                      evidence-based approach to your mental well-being.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You are <strong className="text-sea-sage">psychologically-minded</strong> and want to understand the mechanics 
                      of your own mind, not just talk about your feelings.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You value <strong className="text-sea-sage">data over dogma</strong> and are frustrated by subjective, 
                      unmeasurable approaches.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You see anxiety as a complex system problem to be <strong className="text-sea-sage">solved</strong>, not a 
                      lifelong condition to be passively managed.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You have tried traditional talk therapy and found it too slow, too unstructured, and lacking a clear action plan.
                    </p>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* Divider */}
          <div className="h-px bg-dune-shadow mb-16"></div>

          {/* This Protocol Is NOT For You If */}
          <section className="mb-16">
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-soft-clay">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-sea-sage">
                    This Protocol Is NOT for You If:
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-soft-clay mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You are in acute crisis, are having thoughts of self-harm, or require treatment for a severe psychiatric condition. 
                      <em className="text-soft-clay"> This is not a crisis service.</em>
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-soft-clay mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      Your primary challenge is deep, unprocessed developmental trauma. Our 30-day model is not designed to heal the 
                      underlying relational wounds.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-soft-clay mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You are looking for a conventional, open-ended therapeutic relationship for emotional support.
                    </p>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* CTA Section */}
          <ScrollReveal delay={300}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  If You Recognize Yourself in This Protocol, Take the Next Step.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  If you recognize yourself in the first list, apply for a strategic consultation to determine if you are a fit.
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
          </ScrollReveal>
        </div>
      </Container>
    </div>
  )
}

