import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Is This For You? | The Anxiety Protocol',
  description: 'This protocol was engineered for one type of person: the intelligent, capable individual who has been failed by the traditional therapy model. The Veteran\'s Protocol.',
  openGraph: {
    title: 'Is This For You? | The Anxiety Protocol',
    description: 'A powerful, validating entry point for the Veteran of the Failed System—the intelligent, capable individual ready to graduate from talking to training.',
    url: '/is-this-for-you',
    type: 'website',
  },
  alternates: {
    canonical: '/is-this-for-you',
  },
}

export default function IsThisForYouPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* BLOCK 2: HEADLINE & INTRODUCTION */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              The Veteran's Protocol
            </h1>
            
            <h2 className="text-2xl md:text-3xl leading-snug text-body font-semibold mb-8">
              This protocol was engineered for one type of person: the intelligent, capable individual who has been failed by the traditional therapy model.
            </h2>
            
            <div className="prose prose-lg max-w-3xl mx-auto text-left space-y-6">
              <p className="text-lg leading-8 text-body">
                If you are here, it is likely you have already done the work. You have spent months, or years, in talk therapy. You are self-aware, conscientious, and committed to your own growth. And you are still stuck. Let us be the first to state, unequivocally: <strong className="text-sea-sage">The problem is not a failure of your effort. It is a failure of the tool you have been given.</strong>
              </p>
              
              <p className="text-lg leading-8 text-body">
                You feel the disconnect. You have the <em>insight</em>—you can talk at length about why you feel anxious—but you lack the <em>skills</em> to stop the physical, physiological hijack when it happens. This protocol was designed to close that gap. It is for those who are ready to graduate from talking to training.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 3: THE VALIDATION CHECKLIST */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4 text-center">
                Your Observations Were Correct
              </h2>
              <p className="text-lg leading-8 text-body text-center max-w-3xl mx-auto">
                This protocol is for you if the following clinical observations resonate:
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {/* Observation 1 */}
            <ScrollReveal delay={150}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <p className="text-lg leading-8 text-body">
                  <strong className="text-sea-sage text-xl">You've correctly identified the problem as "hardware," not "software."</strong> You know the anxiety is a physical, automatic reaction that happens <em>before</em> conscious thought. You need a tool that can intervene at the level of the nervous system.
                </p>
              </div>
            </ScrollReveal>

            {/* Observation 2 */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <p className="text-lg leading-8 text-body">
                  <strong className="text-sea-sage text-xl">You've grown tired of open-ended conversation and crave a structured process.</strong> Your desire for a clear blueprint, measurable data, and a defined finish line is not a sign of resistance; it's a sign of clarity.
                </p>
              </div>
            </ScrollReveal>

            {/* Observation 3 */}
            <ScrollReveal delay={250}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <p className="text-lg leading-8 text-body">
                  <strong className="text-sea-sage text-xl">You suspect that one hour a week is an insufficient "dose" of practice.</strong> Your intuition is a correct neurobiological assessment. Creating durable change in the brain requires a volume of practice the old model is structurally incapable of delivering.
                </p>
              </div>
            </ScrollReveal>

            {/* Observation 4 */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft-lg border border-seafoam/40 bg-gradient-to-br from-seafoam/5 to-transparent">
                <p className="text-lg leading-8 text-body">
                  <strong className="text-sea-sage text-xl">You are ready to be treated as a capable, active partner, not a passive patient.</strong> You don't want to be "fixed." You want to be given a superior toolkit and the training to become the lead engineer of your own system.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 4: THE EXCLUSION CRITERIA */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal delay={350}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4 text-center">
                Our Commitment to a Precise Fit
              </h2>
              <p className="text-lg leading-8 text-body text-center max-w-3xl mx-auto mb-8">
                We are ruthlessly committed to our metric of success, which means we are equally committed to working only with individuals for whom our model is the correct tool. This protocol is <strong>not</strong> the right fit if:
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {/* Exclusion 1 */}
            <ScrollReveal delay={400}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft border border-soft-clay/40 bg-gradient-to-br from-soft-clay/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-soft-clay/20 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg leading-8 text-body">
                    You are seeking a supportive space for open-ended, exploratory talk.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Exclusion 2 */}
            <ScrollReveal delay={450}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft border border-soft-clay/40 bg-gradient-to-br from-soft-clay/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-soft-clay/20 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg leading-8 text-body">
                    You are in an acute crisis or dealing with deep-seated developmental trauma that requires long-term, human-led exploratory work.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Exclusion 3 */}
            <ScrollReveal delay={500}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft border border-soft-clay/40 bg-gradient-to-br from-soft-clay/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-soft-clay/20 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg leading-8 text-body">
                    You are not prepared to commit to the rigour of daily practice for the 30-day intensive.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Exclusion 4 */}
            <ScrollReveal delay={550}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft border border-soft-clay/40 bg-gradient-to-br from-soft-clay/5 to-transparent">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-soft-clay/20 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg leading-8 text-body">
                    You are looking for a passive process or are not ready to be held accountable for a tangible outcome.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 5: FINAL CTA */}
        <ScrollReveal delay={600}>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-sage to-seafoam shadow-soft-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative p-10 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  If This Resonates, You Are in the Right Place.
                </h2>
                <p className="text-lg text-white/95 leading-8 max-w-2xl mx-auto mb-8">
                  This is not a passive process; it is a high-expectation contract for those who are serious about solving this problem. If you recognize yourself in this description, the next step is to review the evidence of our results.
                </p>
                
                <Link
                  href="/results"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>See the Verifiable Results</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

