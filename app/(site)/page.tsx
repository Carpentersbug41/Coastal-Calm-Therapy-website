import Link from 'next/link'
import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import { OrganizationSchema, ServiceSchema } from '@/components/structured-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Still Stuck After a Year in Therapy? - The Anxiety Protocol',
  description: 'You haven\'t failed. You\'ve been failed by a system with a fatal design flaw. The Anxiety Protocol: A 30-day engineering solution for those who have done the talking.',
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
    'inefficient therapy model',
    'solve anxiety',
    'data-driven therapy',
    'structured anxiety program',
    'clinical engineering',
    'therapy failed me',
  ],
  openGraph: {
    title: 'Still Stuck After a Year in Therapy? - The Anxiety Protocol',
    description: 'You haven\'t failed. You\'ve been failed by a system with a fatal design flaw. A 30-day engineering solution for those who have done the talking.',
    url: '/',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <ServiceSchema />
      {/* SECTION 1: THE HOOK (ABOVE THE FOLD) */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-brand-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-sage-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-sea-sage mb-6">
                Still Stuck After a Year in Therapy?
              </h1>
              
              <h3 className="text-2xl md:text-3xl font-bold text-body mb-8">
                You haven't failed. You've been failed by a system with a fatal design flaw.
              </h3>

              <div className="space-y-4 text-lg leading-8 text-body mb-8 text-left max-w-4xl mx-auto">
                <p>You've done the talking. You've paid the bills. You've been patient. Yet the physical, disproportionate hijack of anxiety still runs your life. The old model has no answer for this, so the unspoken conclusion is that the failure is yours.</p>
                
                <p className="font-bold">That is not a diagnosis. It is an excuse.</p>
                
                <p>The problem was never your effort. It's that the weekly, talk-based model delivers a <strong>neurologically insignificant dosage</strong>. It is the wrong tool for a hardware-level problem. We don't intend to fix that broken system. We have engineered its replacement.</p>
              </div>

              <Link
                href="/protocol"
                className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
              >
                <span>VIEW THE BLUEPRINT</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>

            {/* NEW CONTENT: THREE SYSTEMIC FAILURES */}
            <ScrollReveal delay={100}>
              <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mt-16 mb-8 text-center">
                We Engineered Our Protocol Against Three Systemic Failures:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="glass-effect rounded-3xl p-6 shadow-soft border border-dune-shadow">
                  <h4 className="text-xl font-bold text-sea-sage mb-3">1. Misaligned Financial Incentives</h4>
                  <p className="text-body leading-7">
                    The old model profits from your continued attendance, not your rapid graduation. Our fixed-term, fixed-price intensive aligns our success directly with yours.
                  </p>
                </div>

                <div className="glass-effect rounded-3xl p-6 shadow-soft border border-dune-shadow">
                  <h4 className="text-xl font-bold text-sea-sage mb-3">2. Insufficient Dosage</h4>
                  <p className="text-body leading-7">
                    One hour a week is a mathematical impossibility for overwriting a conditioned response. Our system is engineered to deliver a 15x therapeutic dosage.
                  </p>
                </div>

                <div className="glass-effect rounded-3xl p-6 shadow-soft border border-dune-shadow">
                  <h4 className="text-xl font-bold text-sea-sage mb-3">3. An Over-Reliance on "Talk"</h4>
                  <p className="text-body leading-7">
                    Insight is not a skill. Talking about the faulty hardware does not fix it. Our protocol focuses on high-repetition practice to recalibrate your system.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* SECTION 4: THE UNFAIR ADVANTAGE */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                Our Unfair Advantage: A Radical Re-Engineering of Dosage.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                The core flaw of the old model is mathematical. Our protocol solves it by delivering a volume and quality of targeted practice that is structurally impossible for any human-only model to replicate.
              </p>
            </ScrollReveal>

            {/* DOSAGE COMPARISON GRAPHIC */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow mb-12">
                <h3 className="text-2xl font-bold text-sea-sage mb-12 text-center relative z-10">DOSAGE COMPARISON</h3>
                <div className="flex items-end justify-center gap-12 md:gap-20" style={{ height: '380px' }}>
                  {/* Old Model Bar */}
                  <div className="flex flex-col items-center gap-4 flex-1 max-w-xs">
                    <div className="w-full bg-soft-clay/30 rounded-t-lg flex items-end justify-center" style={{ height: '40px' }}>
                      <div className="text-center py-2">
                        <div className="text-sm font-medium text-body">1</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sea-sage mb-1">OLD MODEL</div>
                      <div className="text-sm text-body">1 Session/Week</div>
                    </div>
                  </div>

                  {/* New Model Bar */}
                  <div className="flex flex-col items-center gap-4 flex-1 max-w-xs">
                    <div className="w-full bg-sea-sage rounded-t-lg flex items-center justify-center text-white font-bold text-2xl" style={{ height: '280px' }}>
                      15+
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sea-sage mb-1">THE ANXIETY PROTOCOL</div>
                      <div className="text-sm text-body">Equivalent of 15+ Sessions/Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* THREE-COMPONENT SYSTEM */}
            <ScrollReveal delay={200}>
              <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mb-8 text-center">
                Our Three-Component System:
              </h3>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Component 1: The Human Strategist */}
              <ScrollReveal delay={300}>
                <div className="glass-effect rounded-3xl p-6 shadow-soft-lg border border-dune-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3 text-center">The Human Strategist</h4>
                  <p className="text-sm uppercase tracking-wide text-soft-clay mb-3 text-center">(The Architect)</p>
                  <p className="text-body leading-7">
                    Your protocol is designed and overseen by a human Clinical Engineer. Their sole function is high-level diagnosis, data analysis, and strategic adjustment of your protocol. They are the architect, not the labour.
                  </p>
                </div>
              </ScrollReveal>

              {/* Component 2: The Clinical Check-in */}
              <ScrollReveal delay={400}>
                <div className="glass-effect rounded-3xl p-6 shadow-soft-lg border border-dune-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3 text-center">The Clinical Check-in</h4>
                  <p className="text-sm uppercase tracking-wide text-soft-clay mb-3 text-center">(The Therapeutic Engine)</p>
                  <p className="text-body leading-7">
                    2-3 times per week, you will engage in a full therapeutic session with our AI-led instrument. It executes your human-designed protocol with perfect fidelity and zero ego. This is where the deep clinical work is done.
                  </p>
                </div>
              </ScrollReveal>

              {/* Component 3: The Somatic Drill */}
              <ScrollReveal delay={500}>
                <div className="glass-effect rounded-3xl p-6 shadow-soft-lg border border-dune-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3 text-center">The Somatic Drill</h4>
                  <p className="text-sm uppercase tracking-wide text-soft-clay mb-3 text-center">(The High-Repetition Gym)</p>
                  <p className="text-body leading-7">
                    1-2 times per day, you will run targeted drills prescribed by your Strategist. This is your somatic gym where you build the thousands of "reps" necessary to make new neural pathways automatic.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* CLIENT FEEDBACK: OBJECTION HANDLER */}
            <ScrollReveal delay={600}>
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border-l-4 border-sea-sage bg-gradient-to-br from-sea-sage/5 via-seafoam/5 to-golden-shell/5">
                  <h4 className="text-lg md:text-xl font-bold text-sea-sage mb-6 uppercase tracking-wide">
                    Client Feedback: The Advantage of a Non-Human Instrument
                  </h4>
                  
                  <blockquote className="mb-6">
                    <p className="text-lg md:text-xl leading-relaxed text-body italic mb-4">
                      "I feel like I could get in my head a lot more if I was in front of a person... it's distracting because you're... aware of that person. And that awareness is kind of splitting your concentration away from the task itself.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-body italic">
                      It's like the judgement, the just random thoughts of like, how should I be reacting right now? What are they thinking about me, my reaction?"
                    </p>
                  </blockquote>
                  
                  <footer className="text-base md:text-lg font-bold text-sea-sage">
                    — Melissa, Graduate of The Anxiety Protocol.
                  </footer>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* SECTION 5: THE OUTCOME */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                The Result: A Return of Your Future.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-10 text-center">
                The primary pain of anxiety is not the feeling itself. It is the <strong>opportunity cost</strong>. The promotion you didn't chase, the business you didn't build, the life you are not living. We are not selling a reduction in symptoms. We are selling a return of your future.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <blockquote className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
                <p className="text-xl md:text-2xl leading-relaxed text-body italic mb-6">
                  "Three months ago, a critical project deadline would have sent me into a multi-day spiral. Last week, I navigated it with a sense of focused calm I didn't think was possible. This wasn't about 'managing' my anxiety; it was about getting a functional upgrade. I got my future back."
                </p>
                <footer className="text-lg font-bold text-sea-sage">
                  — Alex, Product Lead
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </Container>
      </section>


      {/* SECTION 6: THE COMMITMENT CONTRACT (THE FILTER) */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                This Protocol is a High-Expectation Contract.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                We have engineered a high-performance system, and it demands commitment. We are rigorous in our selection process because our reputation is forged by a single metric: the undeniable success of the individuals we work with. We do not accept ambivalence. We select for dedication.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* FOR YOU */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border-2 border-sea-sage h-full">
                  <h3 className="text-2xl font-bold text-sea-sage mb-6 text-center">THIS PROTOCOL IS FOR YOU IF:</h3>
                  <ul className="space-y-4 text-body leading-7">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-sea-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You are a therapy veteran fed up with a lack of tangible progress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-sea-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You are ready to stop talking and start executing a plan.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-sea-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You value data, structure, and a defined outcome.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-sea-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You are ruthlessly committed to solving this problem, now.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* NOT FOR YOU */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border-2 border-soft-clay h-full">
                  <h3 className="text-2xl font-bold text-soft-clay mb-6 text-center">THIS IS NOT FOR YOU IF:</h3>
                  <ul className="space-y-4 text-body leading-7">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-clay flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>You are looking for a supportive space for open-ended talk.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-clay flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>You are not prepared to commit to daily drills for 30 days.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-clay flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>You want a passive process or are not ready to be accountable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-soft-clay flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>You are in an acute crisis requiring immediate, long-term human support.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>


      {/* SECTION 7: THE FINAL CALL TO ACTION */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                The Application is the First Diagnostic.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-8 text-center">
                Our process begins with your application. It is a diagnostic designed to ensure a mutual fit for this intensive protocol. We accept a maximum of four new individuals per month to ensure the absolute integrity of our strategic oversight.
              </p>
              
              <p className="text-lg leading-8 text-body mb-10 text-center font-medium">
                If you are ready to get on with it, the work begins now.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center">
                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-10 py-5 bg-sea-sage text-white font-bold text-lg shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>BEGIN THE DIAGNOSTIC</span>
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  )
}