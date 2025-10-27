import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 30-Day Protocol - A Finite Project with Measurable Outcomes',
  description: 'Discover the structured 30-day intensive protocol that replaces years of traditional therapy. Four clear phases designed for rapid skill acquisition and measurable results.',
  openGraph: {
    title: 'The 30-Day Protocol',
    description: 'A finite project with a measurable outcome. Not an unstructured weekly process, but a 30-day intensive with a clear beginning, middle, and end.',
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
              <span className="text-sm font-medium text-sea-sage">30-Day Intensive Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              A 30-Day Sprint from Anxiety to Autonomy.
            </h1>
            
            <p className="text-xl leading-8 text-body">
              Traditional therapy is an unstructured, weekly process that can last for years. Our protocol is the 
              antidote: a 30-day intensive with a clear beginning, middle, and end.
            </p>
          </div>
        </ScrollReveal>

        {/* Strategic Roadmap Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical connecting line for mobile, hidden on desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sea-sage via-seafoam to-sea-sage md:hidden"></div>
            
            {/* Horizontal connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-sea-sage via-seafoam to-sea-sage"></div>

            {/* Step 1 */}
            <ScrollReveal delay={100}>
              <div className="relative mb-12 md:mb-24">
                <div className="flex items-start gap-6 md:flex-col md:items-center md:text-center">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-white">
                    1
                  </div>
                  <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-dune-shadow flex-1 md:mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      STEP 1: The Diagnostic & Blueprint
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      The protocol begins with a 90-minute deep-dive session with your Human Clinical Strategist. We deconstruct 
                      the specific patterns of your anxiety to design your personalized training protocol. You leave with a clear, 
                      actionable blueprint for the month.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={200}>
              <div className="relative mb-12 md:mb-24">
                <div className="flex items-start gap-6 md:flex-col md:items-center md:text-center">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-white">
                    2
                  </div>
                  <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-dune-shadow flex-1 md:mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      STEP 2: The Simulator Drills
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      For four weeks, you engage in short (20-30 minute) "skill-building drills" 2-3 times per week in our proprietary 
                      Cognitive Simulator. This is where you build new neural pathways through high-repetition practice in a private, 
                      judgment-free environment.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={300}>
              <div className="relative mb-12 md:mb-24">
                <div className="flex items-start gap-6 md:flex-col md:items-center md:text-center">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-white">
                    3
                  </div>
                  <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-dune-shadow flex-1 md:mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      STEP 3: The Performance Reviews
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      Once a week, you have a brief, 15-minute data-driven check-in call with your Human Strategist. This is not a 
                      therapy session. We review the data from your Simulator drills, analyze progress, and make high-leverage 
                      adjustments to your plan.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal delay={400}>
              <div className="relative">
                <div className="flex items-start gap-6 md:flex-col md:items-center md:text-center">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-white">
                    4
                  </div>
                  <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-dune-shadow flex-1 md:mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4">
                      STEP 4: The Handover & Go-Forward Plan
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      At the end of the 30 days, we conduct a final 90-minute session. We review a full month of performance data, 
                      measure your results against your initial goals, and build a clear plan for your autonomous, post-program success. 
                      Our goal is your independence.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={500}>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Your Protocol Begins with an Application.
                </h3>
                <p className="text-lg text-white/95 leading-8 mb-8 max-w-xl mx-auto">
                  We accept a maximum of four new clients per month. Apply for a strategic consultation to determine if you are a fit.
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

