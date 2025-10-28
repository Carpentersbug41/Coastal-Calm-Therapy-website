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
              Your 30-Day Path to Self-Mastery
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
                      Phase 1: Mapping Your Anxiety's DNA
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      We don't guess; we diagnose. In a 90-minute deep-dive, your strategist will map the precise mechanics of your anxiety, so we know exactly what we need to fix.
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
                      Phase 2: Installing New Instincts for Calm.
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      This is where you do the work. Through 2-3 weekly drills in our simulator, you will actively build and automate the specific skills—somatic and cognitive—that give you control over your nervous system.
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
                      Phase 3: Optimizing Your Performance.
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      Each week, your strategist reviews your performance data. These brief, 15-minute calls ensure you are on track, troubleshoot any issues, and optimize your plan for the fastest possible results.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Data-Driven Insight Section */}
            <ScrollReveal delay={350}>
              <div className="relative mb-12 md:mb-24">
                <div className="max-w-4xl mx-auto">
                  <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-dune-shadow">
                    <h2 className="text-2xl md:text-3xl font-bold text-sea-sage mb-6">
                      From Data to Insight: Your Weekly Performance Report
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body mb-6">
                      At the end of each week, your Human Strategist analyzes the complete transcripts and metadata from your Simulator drills. They distill this raw data into a concise, actionable Performance Report, identifying key patterns and progress metrics. This is not a subjective summary; it is an objective analysis of your performance.
                    </p>
                    
                    {/* Weekly Performance Report Visual Mockup */}
                    <div className="mt-8 bg-white rounded-2xl border-2 border-dune-shadow shadow-soft-lg overflow-hidden">
                      {/* Report Header */}
                      <div className="bg-gradient-to-r from-sea-sage to-seafoam px-6 py-4">
                        <h3 className="text-xl font-bold text-white text-center">
                          The Anxiety Protocol: Weekly Performance Report
                        </h3>
                      </div>
                      
                      {/* Report Body */}
                      <div className="p-6 md:p-8 space-y-6">
                        {/* Chart Section */}
                        <div>
                          <h4 className="text-lg font-bold text-sea-sage mb-4">Skill Adherence: Week 2</h4>
                          
                          {/* Chart Container */}
                          <div className="relative h-64 bg-warm-linen/30 rounded-xl p-4 border border-dune-shadow">
                            {/* Y-axis label */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-sea-sage whitespace-nowrap">
                              Adherence Score (%)
                            </div>
                            
                            {/* Chart area with grid and line */}
                            <div className="ml-8 mr-4 h-full flex flex-col justify-between relative">
                              {/* Grid lines and Y-axis values */}
                              <div className="absolute inset-0 flex flex-col justify-between">
                                {[100, 75, 50, 25, 0].map((value) => (
                                  <div key={value} className="flex items-center">
                                    <span className="text-xs text-body w-8 -ml-8">{value}</span>
                                    <div className="flex-1 border-t border-dune-shadow/30"></div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Line Chart SVG */}
                              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                                {/* Upward trending line */}
                                <polyline
                                  points="30,140 150,80 270,30"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  className="text-seafoam"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                {/* Data points */}
                                <circle cx="30" cy="140" r="5" className="fill-sea-sage" />
                                <circle cx="150" cy="80" r="5" className="fill-sea-sage" />
                                <circle cx="270" cy="30" r="5" className="fill-sea-sage" />
                              </svg>
                              
                              {/* X-axis labels */}
                              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs font-medium text-sea-sage px-2">
                                <span>Drill 1</span>
                                <span>Drill 2</span>
                                <span>Drill 3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Strategist's Analysis Box */}
                        <div className="bg-gradient-to-br from-seafoam/10 to-golden-shell/10 rounded-xl p-6 border-l-4 border-seafoam">
                          <h4 className="text-lg font-bold text-sea-sage mb-3">Strategist's Analysis</h4>
                          <p className="text-base leading-7 text-body">
                            Data shows a significant improvement in your use of the Somatic Anchoring skill (from 65% to 88% adherence). However, a pattern of avoidance is emerging around the 'second dart' self-critical thought in Drill 3. We will focus on this in our next review.
                          </p>
                        </div>
                      </div>
                    </div>
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
                      Phase 4: Your Plan for Lasting Freedom
                    </h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 text-body">
                      We end by consolidating your new toolkit and building a clear, actionable plan to ensure you can manage your own system autonomously, long after the program is over. Our goal is your independence.
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

