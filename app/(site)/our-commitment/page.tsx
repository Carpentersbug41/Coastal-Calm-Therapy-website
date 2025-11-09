import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Commitment | The Anxiety Protocol',
  description: 'A high-expectation contract. Our protocol is a partnership, not a passive process. This is our commitment to you, and what we require in return.',
  openGraph: {
    title: 'A High-Expectation Contract | The Anxiety Protocol',
    description: 'The success of this intensive is built on mutual commitment and absolute clarity. Our promise to you, and the standard to which we hold you accountable.',
    url: '/our-commitment',
    type: 'website',
  },
  alternates: {
    canonical: '/our-commitment',
  },
}

export default function OurCommitmentPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* BLOCK 2: HEADLINE & INTRODUCTION */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              A High-Expectation Contract
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-body mb-8">
              Our protocol is a partnership, not a passive process. This is our commitment to you, and what we require in return.
            </h2>

            <p className="text-lg leading-8 text-body">
              The success of this intensive is built on a foundation of mutual commitment and absolute clarity. We are not a traditional therapy service; we are a specialized protocol with a defined outcome. Below are the non-negotiable principles that govern our work together. They are our promise to you, and the standard to which we will hold you accountable.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 3: OUR COMMITMENT TO YOU */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Our Commitment to You: The Four Pillars
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1: Clinical Excellence */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Clinical Excellence
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  We commit to providing a protocol architected from the first principles of neuroscience and evidence-based practice. Every tool we deploy and every strategic decision we make will be relentlessly focused on a single metric: the fastest, most durable path to your autonomy.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2: Absolute Confidentiality */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Absolute Confidentiality
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  We commit to protecting your data with the highest possible level of security and discretion. Your diagnostic information and session transcripts are protected by end-to-end, HIPAA-grade encryption. Your privacy is paramount and non-negotiable.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3: Radical Transparency */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Radical Transparency
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  We commit to treating you as an intelligent, capable partner. You will have access to all your session data, transcripts, and reports. We operate with a "no black box" policy, ensuring you understand the "why" behind every step of your protocol.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 4: Singular Focus on Your Outcome */}
            <ScrollReveal delay={400}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-seafoam/20 border border-seafoam/40">
                    <svg className="w-6 h-6 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    A Singular Focus on Your Outcome
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  We commit to an ethical model where our success is 100% aligned with yours. Our goal is to install the tools for your independence and make ourselves redundant. We are not in the business of creating long-term dependency.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 4: YOUR COMMITMENT TO THE PROTOCOL */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Your Commitment: The Four Requirements
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirement 1: Radical Candor */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-sea-sage/20 border border-sea-sage/40">
                    <svg className="w-6 h-6 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Radical Candor
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  You must commit to providing honest and direct feedback. The protocol is a data-driven system; its effectiveness depends entirely on the quality and accuracy of the data you provide. This is a space for clinical honesty, not politeness.
                </p>
              </div>
            </ScrollReveal>

            {/* Requirement 2: Rigorous Execution */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-sea-sage/20 border border-sea-sage/40">
                    <svg className="w-6 h-6 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Rigorous Execution
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  You must commit to the work. The "neural superhighway" of a calm response is built with one material: repetition. This means executing your daily Somatic Gym drills and engaging fully with your Therapeutic Engine sessions as prescribed. There are no shortcuts.
                </p>
              </div>
            </ScrollReveal>

            {/* Requirement 3: Full Engagement */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-sea-sage/20 border border-sea-sage/40">
                    <svg className="w-6 h-6 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Full Engagement
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  You must commit to being an active partner, not a passive patient. This means reviewing your session data, completing your homework, and coming to your weekly check-ins with the Architect prepared to engage in a high-level strategic review.
                </p>
              </div>
            </ScrollReveal>

            {/* Requirement 4: Commitment to the Intensive */}
            <ScrollReveal delay={400}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-sea-sage/20 border border-sea-sage/40">
                    <svg className="w-6 h-6 text-sea-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-sea-sage">
                    Commitment to the Intensive
                  </h3>
                </div>
                <p className="text-base leading-7 text-body">
                  You must commit to the full, uninterrupted 30-day protocol. This is an intensive, front-loaded installation. Its efficacy is dependent on a concentrated, continuous period of engagement.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 5: FINAL CTA */}
        <ScrollReveal delay={450}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
              If You Accept These Terms, We Are Ready to Begin.
            </h2>
            
            <p className="text-lg leading-8 text-body mb-10">
              This is the contract for a successful outcome. It is a partnership built on mutual respect, shared data, and a relentless focus on a single goal: graduating you from the protocol with a toolkit for lifelong autonomy.
            </p>

            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sea-sage to-seafoam rounded-2xl hover:shadow-soft-lg hover:scale-105 transition-all duration-300 shadow-soft"
            >
              <span>Begin a Confidential Diagnostic</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}

