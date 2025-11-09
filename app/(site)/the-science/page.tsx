import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'
import { getFeaturedPost } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'The Science | The Anxiety Protocol',
  description: 'Your feeling of being stuck is not a psychological failure. It is a biological reality. The definitive neurobiological argument for our diagnostic-led, multi-tool model.',
  openGraph: {
    title: 'The Science: Why Training, Not Talking, Rewires Anxiety | The Anxiety Protocol',
    description: 'The traditional therapy model is fundamentally misaligned with the neurobiology of anxiety. This is the scientific case for our diagnostic-led model.',
    url: '/the-science',
    type: 'website',
  },
  alternates: {
    canonical: '/the-science',
  },
}

export default function TheSciencePage() {
  // Dynamically fetch featured articles for contextual links
  const hardwareArticle = getFeaturedPost('science-hardware-link');
  const softwareArticle = getFeaturedPost('science-software-link');

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* BLOCK 2: HEADLINE & INTRODUCTION */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              The Science: Why Training, Not Talking, Rewires Anxiety.
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-body mb-8">
              Your feeling of being stuck is not a psychological failure. It is a biological reality.
            </h2>

            <div className="text-lg leading-8 text-body text-left space-y-4">
              <p>
                The traditional therapy model is built on a premise that is fundamentally misaligned with the neurobiology of anxiety. It assumes that anxiety is a "software" problem that can be solved with the logic of conversation.
              </p>
              <p>
                Chronic anxiety, however, is often a "hardware" problem, a "software" problem, or a complex feedback loop between the two. The first failure of the old model is its one-size-fits-all approach. The first principle of our protocol is a ruthlessly precise diagnosis to determine the true nature of your anxiety's engine. This is the scientific case for our diagnostic-led model.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 3: THE HARDWARE PROBLEM */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                The Hardware Problem: A Faulty Smoke Alarm
              </h2>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  A healthy nervous system is like a well-calibrated smoke alarm. It sounds a loud, full-body alarm during a real fire (a genuine threat) and stays quiet when you're just making toast.
                </p>
                
                <p>
                  A chronically anxious nervous system is like a faulty smoke alarm. Through past experiences, its sensitivity has been turned up too high. Now, it screams "five-alarm fire" at the harmless steam from the toaster. The physical, pre-cognitive hijack—the racing heart, the tight chest—happens <em>before</em> your rational mind can even assess the situation. This is not a thinking error. It is a mechanical one.
                </p>
                
                <p>
                  You cannot have a reasonable conversation with a shrieking smoke alarm. This is a classic "bottom-up" problem, where the body's alarm triggers the mind's story. For this, tools like Titration and Pendulation, delivered via the Somatic Gym, are the correct prescription.{' '}
                  {hardwareArticle && (
                    <em>(For a detailed breakdown of a foundational hardware-level tool, see the Skill Blueprint: <Link href={`/articles/${hardwareArticle.slug}`} className="text-sea-sage font-semibold hover:text-seafoam underline transition-colors">{hardwareArticle.title}</Link>.)</em>
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 4: THE SOFTWARE PROBLEM */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                The Software Problem: A Catastrophic Storyteller
              </h2>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  However, for many, the problem originates in the "software." The body can be calm, but the mind runs a catastrophic future-prediction, a self-critical narrative, or a looping rumination. This "top-down" process then <em>triggers</em> the body's hardware, creating the very physical anxiety it was predicting.
                </p>
                
                <p>
                  This is not a faulty alarm; it's a faulty forecast. Attempting to solve this with bottom-up physical exercises alone is inefficient. It requires a cognitive tool designed to de-couple from the story, not just calm the body. This is where a precision instrument like the Cognitive Post-Mortem, delivered via the Therapeutic Engine, is the correct prescription.{' '}
                  {softwareArticle && (
                    <em>(The full deconstruction of this method is available in the Briefing: <Link href={`/articles/${softwareArticle.slug}`} className="text-sea-sage font-semibold hover:text-seafoam underline transition-colors">{softwareArticle.title}</Link>.)</em>
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 5: THE BIOLOGY OF CHANGE */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                The Biology of Change: Building a New Superhighway
              </h2>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  The brain is not fixed. It constantly rewires itself based on what you do. This is a biological law called neuroplasticity. The core principle is simple: "neurons that fire together, wire together."
                </p>
                
                <p>
                  When a neural pathway is used repeatedly, the brain insulates it with a fatty sheath called myelin. Think of it like paving a dirt path into a superhighway. The more myelin, the faster, more efficient, and more <em>automatic</em> that pathway becomes. A chronic anxiety response is a highly-myelinated, six-lane superhighway in your brain.
                </p>
                
                <p>
                  Insight and talking do not build myelin. Only one thing does: focused, high-volume repetition. To create a new, calm response, you must build a new superhighway through consistent practice.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 6: THE PHYSICS OF CHANGE */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                The Physics of Change: The Library vs. The Gymnasium
              </h2>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  If changing anxiety is a physical task of building a new "neural highway," then the volume of practice is non-negotiable. This is where the old model suffers its most critical design flaw.
                </p>
                
                <p>
                  Traditional therapy is a library. It is a wonderful place for insight, contemplation, and learning. But you cannot get physically stronger by going to the library once a week.
                </p>
                
                <p>
                  Our protocol is a gymnasium. It is a structured environment designed for high-repetition training. One hour of therapy is 0.6% of your week. In the other 99.4%, your brain is using its old, default superhighways. A library is the wrong tool for a physical training problem. To build a new response, you need the neurological equivalent of time in the gym.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 7: THE MASTER CLINICIAN'S ROLE */}
        <div className="max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8">
                The Master Clinician's Role: Diagnosis Dictates the Tools
              </h2>
              
              <div className="space-y-6 text-lg leading-8 text-body">
                <p>
                  The ultimate failure of the old model is its lack of diagnostic precision. It applies the same tool—talking—to every problem.
                </p>
                
                <p>
                  Our protocol is a complete toolkit. The irreplaceable role of the Human Architect is to perform the deep-diagnostic to determine the unique nature of your anxiety engine. Is it top-down, bottom-up, or a hybrid? What is the precise calibration of Titration required—enough to create new learning, but not so much as to cause overwhelm? When is the right moment to introduce the Cognitive Post-Mortem?
                </p>
                
                <p>
                  The Tools are Only as Good as the Strategist Who Deploys Them. This is applied neuroscience. Power comes from a precise, expert-led diagnosis. This is what creates a predictable result.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center mt-12">
              <Link
                href="/the-architect"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-sea-sage to-seafoam rounded-2xl hover:shadow-soft-lg hover:scale-105 transition-all duration-300 shadow-soft"
              >
                <span>Meet The Architect</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  )
}

