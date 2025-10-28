# app/(site)/about/page.tsx
```typescript
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

# app/(site)/who-its-for/page.tsx
```typescript
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
                      You are tired of just "managing" your anxiety and want a structured plan to <strong className="text-sea-sage">solve</strong> it.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You want more than just emotional support; you want concrete <strong className="text-sea-sage">skills and tools</strong> that give you control.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-seafoam mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg leading-7 text-body">
                      You are frustrated with a lack of clear progress and want a <strong className="text-sea-sage">data-driven approach</strong> where you can see your improvement.
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

# app/(site)/investment/page.tsx
```typescript
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
              An Investment in Your Future Self
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
                The investment in the 30-Day Protocol is £2,500. This is not a fee for therapy sessions. It is a fixed-price investment in a specific outcome: reclaiming your focus, your peace of mind, and your ability to perform at your best, free from the grip of anxiety. Consider the high cost of <em>not</em> solving this problem—the lost productivity, the strained relationships, the constant mental fatigue. Our protocol is engineered to deliver a decisive return on that investment in one month.
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
                  <span><strong className="text-sea-sage">The Training:</strong> 8-12 high-intensity drills in the Resilience Simulator.</span>
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

# app/(site)/protocol/page.tsx
```typescript
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
                      Phase 2: Building New Neural Pathways for Calm
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
                      Phase 3: Tracking Your Progress Toward the Goal
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

# app/(site)/page.tsx
```typescript
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'
import { PostCard } from '@/components/post-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { TestimonialCard } from '@/components/testimonial-card'
import { OfferPanel } from '@/components/offer-panel'
import { OrganizationSchema, ServiceSchema, FAQSchema } from '@/components/structured-data'
import { getLatestPosts } from '@/lib/posts'
import { getRandomTestimonials } from '@/lib/testimonials'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Anxiety Protocol - Re-Engineering Therapy for a Structured Mind',
  description: 'Not open-ended talk therapy. A 30-day, data-driven training protocol engineered to solve anxiety. High-performance psychological training for structured, results-oriented professionals. £2,500 fixed price.',
  keywords: [
    'anxiety treatment',
    'anxiety therapy UK',
    'resilience bootcamp',
    'anxiety protocol',
    'rapid anxiety relief',
    'anxiety mastery',
    'online anxiety treatment',
    'intensive anxiety therapy',
    'anxiety coach',
    'panic attack treatment',
    '30 day anxiety program',
    'Robert Carpenter therapist',
  ],
  openGraph: {
    title: 'The Anxiety Protocol - Re-Engineering Therapy for a Structured Mind',
    description: 'A 30-day, data-driven training protocol for high-achieving professionals. Not therapy as usual—engineered for maximum efficiency and measurable results.',
    url: '/',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const latestPosts = getLatestPosts(3)
  const featuredTestimonials = getRandomTestimonials(2)

  // FAQ data for schema
  const faqs = [
    {
      question: 'Is my information private and secure?',
      answer: 'Absolutely. Our platform is HIPAA-grade with end-to-end encryption. All sessions are confidential, and your data is stored with the highest security standards.',
    },
    {
      question: 'What if I can\'t commit to 2–3 sessions per week?',
      answer: 'The program is designed for high-frequency practice because that\'s what drives rapid results. If you can\'t commit to this schedule, traditional weekly therapy may be a better fit.',
    },
    {
      question: 'What should I expect from the free consultation?',
      answer: 'The 15-minute consultation is a brief, no-pressure conversation to determine if the program aligns with your needs. We\'ll discuss your current challenges and whether the intensive format is right for you.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'The program is £2,500 paid upfront. This investment reflects the intensive nature and accelerated timeline. If cost is a concern, we can discuss options during your consultation.',
    },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <ServiceSchema />
      <FAQSchema faqs={faqs} />
      {/* 1. HERO + SINGLE PRIMARY CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-brand-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-sage-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Copy */}
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
                  <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-sea-sage">30-Day Intensive Program</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  Master Anxiety in 30 Days.
                </h1>
                
                <p className="text-xl leading-8 text-body mb-8">
                  A different kind of therapy, engineered for a structured mind. We don't just talk about anxiety—we give you the tools to solve it.
                </p>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Begin Your Application</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Hero image */}
            <ScrollReveal direction="right" delay={200}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-seafoam/30 to-golden-shell/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src="/images/hero-coastal.jpg"
                    alt="Clean architectural blueprint design representing a structured mental protocol"
                    fill
                    priority
                    className="object-cover rounded-3xl shadow-soft-lg ring-1 ring-dune-shadow group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 2. PRICE & WHAT'S INCLUDED (Compact) */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <OfferPanel variant="compact" showCta={true} />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6">
                You're Not Broken. Your Toolkit Is.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                If you've found traditional talk therapy to be a slow, unstructured, and frustrating process, you're not alone. The problem isn't you; it's a model that wasn't designed for a mind that needs a clear plan, measurable results, and a defined end-point. You don't need another year of talking. You need a better toolkit.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">An Unending Process</h3>
                    <p className="text-body">Aimless weekly conversations with no clear finish line.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">A Data Black Box</h3>
                    <p className="text-body">Progress is based on subjective feelings, not objective metrics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">An Inefficient Dosage</h3>
                    <p className="text-body">A 50-minute session once a week is too low a frequency to build new neural pathways.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-8 text-body font-medium text-sea-sage">
                You are trying to run high-performance software on an outdated operating system. It's time for an upgrade.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. THE SOLUTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                A System Built for One Result: Your Freedom.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                We deliver results by separating the two core functions of effective therapy:
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {/* Human Clinical Strategist */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">Expert Human Strategy</h3>
                      <p className="text-lg leading-8 text-body">
                        Your program is architected by a Clinical Strategist who maps your specific anxiety patterns and builds your personal plan for relief.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Resilience Simulator */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">Intensive Skill Practice</h3>
                      <p className="text-lg leading-8 text-body">
                        You will build new neural pathways for calm through high-repetition drills in our proprietary Resilience Simulator, a private, judgment-free training environment. This intensive practice is the key to making change happen fast.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. PROOF (Testimonials) */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                From a "Fast-Track to Panic" to Having "More Options."
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <blockquote className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow">
                <p className="text-xl md:text-2xl leading-relaxed text-body italic mb-6">
                  "The Simulator provided the high-intensity reps I needed, but the real breakthrough came from the weekly Performance Review. My strategist had analyzed every transcript and was able to pinpoint a core avoidance pattern I never would have seen on my own. That single, data-driven insight changed the entire trajectory of the program for me. It's the combination of flawless practice and expert human analysis that makes this system so powerful."
                </p>
                <footer className="text-lg font-medium text-sea-sage">
                  — Alex, Product Lead
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 6. PROGRAM DETAIL (Curriculum Modules) */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="text-sm font-medium text-sea-sage">The Structured Curriculum</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Your Personalized Training Protocol
              </h2>
              <p className="text-lg text-body max-w-3xl mx-auto leading-8">
                Your anxiety is unique. Your treatment plan should be too. The Anxiety Protocol is built from a core curriculum of four evidence-based skill modules, personalized to your specific needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Module 1 */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">1. Map Your Operating System</h3>
                    <p className="text-body leading-7">
                      Create a precise, data-driven map of your anxiety. Identify your exact triggers, core thoughts, and avoidance patterns.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Module 2 */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">2. Master Your Internal Dialogue</h3>
                    <p className="text-body leading-7">
                      Learn to "unhook" from anxious thoughts. See them as temporary mental events and strip them of their power to control your behavior.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Module 3 */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">3. Command Your Physiology</h3>
                    <p className="text-body leading-7">
                      Train your nervous system to tolerate physical anxiety sensations without spiraling. Build foundational "affect tolerance."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Module 4 */}
            <ScrollReveal delay={400}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">4. Re-Engage With Your Life</h3>
                    <p className="text-body leading-7">
                      Re-engage with the life your anxiety has taken from you. Design small, courageous behavioral experiments to approach feared situations.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-seafoam/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-56 h-56 bg-golden-shell/10 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative group order-2 lg:order-1 h-full flex items-center">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-sea-sage/20 to-seafoam/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-full aspect-[3/4] rounded-3xl bg-gradient-to-br from-sea-sage/10 to-seafoam/10 shadow-soft-lg ring-1 ring-dune-shadow group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                  <Image
                    src="/images/robert-carpenter.png"
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
                  Your Clinical Strategist: Robert Carpenter
                </h2>
                
                <p className="text-xl italic text-soft-clay mb-6">
                  Licensed Psychotherapist & Author of "Drop the Rope"
                </p>
                
                <div className="space-y-4 text-lg leading-8 text-body mb-8">
                  <p>
                    I am a trained therapist, but I am a <strong className="text-sea-sage">systems-thinker</strong> at heart. 
                    Early in my career, I saw that the traditional therapeutic model was failing a specific type of client: 
                    the structured, results-oriented professional. The lack of a clear protocol, the absence of data, the 
                    indefinite timeline—it was a system designed for a different kind of mind.
                  </p>
                  
                  <p>
                    I became obsessed with one question: <em>If we were to re-engineer the process of therapy for maximum 
                    efficiency and measurable results, what would it look like?</em>
                  </p>

                  <p className="font-medium text-sea-sage text-xl">
                    The Anxiety Protocol is the answer.
                  </p>
                </div>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Begin Your Application</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-16 md:py-20 bg-warm-linen border-y border-dune-shadow">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
                Common Questions
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-sea-sage mb-2">Is my information private and secure?</h3>
                  <p className="text-body leading-7">
                    Absolutely. Our platform is HIPAA-grade with end-to-end encryption. All sessions are confidential, 
                    and your data is stored with the highest security standards.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-sea-sage mb-2">What if I can't commit to 2–3 sessions per week?</h3>
                  <p className="text-body leading-7">
                    The program is designed for high-frequency practice because that's what drives rapid results. If you can't 
                    commit to this schedule, traditional weekly therapy may be a better fit.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="glass-effect rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-sea-sage mb-2">What is the purpose of the strategic consultation?</h3>
                  <p className="text-body leading-7">
                    The 15-minute consultation is the final step in our application process. It is a no-obligation conversation 
                    to confirm that the program's intensity and methodology align with your specific needs and mindset.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="glass-effect rounded-2xl p-6 shadow-soft">
                  <h3 className="text-lg font-bold text-sea-sage mb-2">Do you offer payment plans?</h3>
                  <p className="text-body leading-7">
                    The program is £2,500 paid upfront. This investment reflects the intensive nature and accelerated timeline. 
                    If cost is a concern, we can discuss options during your consultation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* LATEST POSTS (Optional) */}
      {latestPosts.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                From the Lab: Insights on Anxiety Mastery
              </h2>
            </div>
          </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={100}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                  {latestPosts.map((post, index) => (
                    <Link 
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="text-base md:text-lg text-sea-sage hover:text-golden-shell font-medium transition-colors text-center"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>

                <div className="text-center">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                  >
                    <span>View All Insights</span>
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      )}

      {/* 8. FINAL CTA BANNER */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Apply for a Strategic Consultation.
                  </h3>
                  <p className="text-lg text-white/95 leading-8 max-w-xl">
                    We accept a maximum of four new clients per month. If you believe this protocol was designed 
                    for you, the next step is to apply for a no-obligation strategic consultation to determine if you are a fit.
                  </p>
                </div>
                
                <Link
                  href="/apply"
                  className="flex-shrink-0 inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Begin Your Application</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

# app/(site)/simulator/page.tsx
```typescript
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
              A Private Space to Master Difficult Feelings
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

        {/* Why It Works So Well */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                Why It Works So Well For You:
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Practice Without Performance Anxiety</h4>
                  <p className="text-lg leading-8 text-body">
                    The Simulator is a 100% private, non-judgmental space. This allows you to practice vulnerable new skills without the fear of being watched or judged, which our clients find accelerates their progress.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Achieve Relief Faster</h4>
                  <p className="text-lg leading-8 text-body">
                    The on-demand nature of the Simulator allows for an intensity of practice that is impossible in weekly therapy. More practice means faster, more durable relief from your symptoms.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3">Get a Plan That Actually Solves Your Problem</h4>
                  <p className="text-lg leading-8 text-body">
                    Every drill is transcribed, providing your strategist with objective data. This allows them to see exactly what\'s working and what\'s not, and to fine-tune your plan with a level of precision that is unheard of in traditional therapy.
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

# app/(site)/blog/page.tsx
```typescript
import Link from 'next/link';
import { Container } from '@/components/container';
import { PostCard } from '@/components/post-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { BlogSubscribe } from '@/components/blog-subscribe';
import { getPaginatedPosts } from '@/lib/posts';

interface BlogPageProps {
  searchParams: { page?: string };
}

export const metadata = {
  title: 'Anxiety Mastery Insights',
  description:
    'Expert insights on anxiety mastery from The Anxiety Protocol. Learn about resilience bootcamp techniques, defusion skills, exposure therapy, and the science behind rapid anxiety treatment.',
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPages, hasNextPage, hasPrevPage } = getPaginatedPosts(currentPage);

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-6">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sage-700">Anxiety Mastery Education</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-900 to-sage-700 bg-clip-text text-transparent">
                Insights & Training Methods
              </span>
            </h1>
            
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-8">
              Learn the science and skills behind The Anxiety Protocol. Evidence-based insights on 
              defusion, exposure therapy, somatic practices, and the resilience bootcamp approach.
            </p>
          </div>
        </ScrollReveal>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 100}>
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <ScrollReveal>
                <div className="flex justify-center items-center gap-4">
                  {hasPrevPage && (
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-white border-2 border-brand-500 text-brand-900 font-medium hover:bg-brand-50 hover:scale-105 transition-all duration-300 shadow-soft"
                    >
                      <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </Link>
                  )}

                  <span className="px-4 py-2 text-ink/70 font-medium">
                    Page {currentPage} of {totalPages}
                  </span>

                  {hasNextPage && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-medium hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
                    >
                      Next
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* Subscribe section */}
            <ScrollReveal delay={200}>
              <div className="max-w-4xl mx-auto">
                <BlogSubscribe />
              </div>
            </ScrollReveal>
          </>
        ) : (
          <ScrollReveal>
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <p className="text-xl text-ink/70">
                No posts found. Check back soon for new content!
              </p>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </div>
  );
}