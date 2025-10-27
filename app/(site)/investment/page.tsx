import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment & Application - The Anxiety Protocol',
  description: 'The 30-day protocol is a fixed investment of £2,500. We accept a maximum of four new clients per month. Apply for a strategic consultation.',
  openGraph: {
    title: 'Investment & Application',
    description: 'An investment in a measurable outcome. Not payment for time, but investment in a specific, data-driven result.',
  },
}

export default function InvestmentPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              An Investment in a Measurable Outcome.
            </h1>
            
            <p className="text-xl leading-8 text-body">
              The Protocol is a 30-day, high-intensity program. The investment is a fixed price of <strong className="text-sea-sage">£2,500</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Value Proposition */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                This Is Not Payment for Time
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                This is an investment in a specific, data-driven result. The long-term cost of unstructured weekly therapy 
                can exceed £10,000 over two years with no guaranteed outcome.
              </p>

              <p className="text-lg leading-8 text-body font-medium text-sea-sage">
                Our protocol is engineered for a decisive result in one month.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* What's Included */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-8">
                What's Included
              </h2>
              
              <ul className="space-y-6 text-lg leading-8 text-body">
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0">•</span>
                  <span><strong className="text-sea-sage">The Blueprint:</strong> A 90-minute 1-on-1 diagnostic session & custom protocol design.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0">•</span>
                  <span><strong className="text-sea-sage">The Training:</strong> 8-12 high-intensity drills in the Cognitive Simulator.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0">•</span>
                  <span><strong className="text-sea-sage">The Oversight:</strong> 4 weekly 1-on-1 performance reviews with your Clinical Strategist.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0">•</span>
                  <span><strong className="text-sea-sage">The Handover:</strong> A 90-minute final session to review results and build your go-forward plan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0">•</span>
                  <span><strong className="text-sea-sage">The Data Dashboard:</strong> Full access to all session transcripts, metrics, and performance analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sea-sage mr-3 flex-shrink-0">•</span>
                  <span><strong className="text-sea-sage">The Resource Library:</strong> Post-program access to our full suite of skill-building materials and maintenance protocols.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* Application Process */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={550}>
            <div className="bg-warm-linen/50 rounded-3xl p-8 md:p-12 border border-dune-shadow">
              <h2 className="text-3xl font-bold text-sea-sage mb-6">
                The Application Process
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                We accept a maximum of four new clients per month to ensure the highest level of strategic oversight.
              </p>

              <p className="text-lg leading-8 text-body mb-6">
                To be considered, the first step is to submit an application. If your profile aligns with our methodology, 
                you will be invited to a no-obligation strategic consultation to determine if you are a fit.
              </p>

              <p className="text-xl leading-8 font-bold text-sea-sage mt-8 mb-4 pl-6 border-l-4 border-sea-sage">
                This is not first-come, first-served. We select clients based on fit, not timing.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <ScrollReveal delay={600}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Next Step is Your Application.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  Submit your application for a strategic consultation. We'll review your profile and respond within 24-48 hours.
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

