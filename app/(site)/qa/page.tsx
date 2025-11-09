import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import { QAAccordion } from '@/components/qa-accordion'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Q&A | The Anxiety Protocol',
  description: 'Your questions answered with clinical clarity. We operate on a principle of radical transparency. Get direct answers about our hybrid model, the 30-day intensive, and our diagnostic-led protocol.',
  openGraph: {
    title: 'Your Questions, Answered with Clinical Clarity | The Anxiety Protocol',
    description: 'Intelligent questions are a sign of a serious commitment. Get candid answers to the most important questions about our protocol.',
    url: '/qa',
    type: 'website',
  },
  alternates: {
    canonical: '/qa',
  },
}

export default function QAPage() {
  const qaData = [
    {
      section: 'The Hybrid Model & The Role of AI',
      questions: [
        {
          question: 'Is the "Therapeutic Engine" just a sophisticated chatbot? Where is the human connection?',
          answer: 'This is the most important question one can ask. The answer requires a clear distinction. The AI is a tool, not the therapist. Think of it as a surgical instrument: incredibly precise, consistent, and incapable of error, but it is wielded by a human surgeon. Your core therapeutic alliance is not with the software; it is with your Human Architect, who personally designs your protocol, analyzes all your data, and meets with you weekly for strategic oversight. The AI\'s function is to execute that human\'s plan with a fidelity that is impossible for a person to replicate, creating a pure, focused environment for your work. It is the best of both worlds: the strategic wisdom of an expert human and the flawless execution of a purpose-built instrument.',
        },
        {
          question: 'Is it safe and confidential to share sensitive information with an AI?',
          answer: 'Yes. In many ways, it is more secure than traditional models. Your data is protected by end-to-end, HIPAA-grade encryption from the moment you speak. Unlike a human, the AI has no personal curiosity, no biases, and cannot have a "bad day." It operates under a strict, unchangeable set of clinical and ethical rules programmed by the Architect. All your data is treated as a protected clinical record, subject to the same rigorous confidentiality standards as any medical facility.',
        },
      ],
    },
    {
      section: 'The 30-Day Intensive & The Outcome',
      questions: [
        {
          question: 'Why is the protocol a fixed 30-day intensive? What if I\'m not "cured" in 30 days?',
          answer: 'We reject the concept of being "cured" or "fixed." It is an unrealistic and unhelpful goal. The purpose of the 30-day intensive is not a magical cure; it is an Installation. In 30 days, we install the complete, foundational toolkit for you to manage your nervous system autonomously. The intensive is front-loaded to provide the high dosage of practice required to build new neural pathways. It concludes not with an abandonment, but with a Graduation and Handover, where you are equipped to be the expert of your own system. The goal is capability, not a cure.',
        },
        {
          question: 'What happens after the 30 days are over?',
          answer: 'The end of the intensive marks the successful completion of the installation phase and the beginning of your autonomy. You will have your personalized "Go-Forward Plan" and a complete toolkit for independent practice. For graduates who desire it, ongoing, less-frequent strategic consultations with your Architect are available to support your long-term success and navigate future challenges.',
        },
      ],
    },
    {
      section: 'The Protocol & Its Application',
      questions: [
        {
          question: 'How is this different from Cognitive Behavioural Therapy (CBT)?',
          answer: 'CBT is an excellent tool for "software" problems—addressing the conscious thoughts and stories that can drive anxiety. Our protocol integrates these tools. However, the primary failure of traditional CBT is one of dosage and application. It is a library, excellent for insight, but it often fails to provide the high-repetition, gymnasium-style training required to recalibrate the "hardware" of the nervous system. Our model ensures a neurologically significant dose of practice, targeting both the hardware and the software as needed, based on your specific diagnosis.',
        },
        {
          question: 'Will this work for my specific type of anxiety (e.g., social anxiety, panic attacks, GAD)?',
          answer: 'Our protocol is diagnostic-led. We do not treat labels; we treat the underlying mechanics of the anxiety engine. During the deep-diagnostic, the Architect\'s job is to map your specific system. Is it a "bottom-up" hardware problem (panic attacks)? A "top-down" software problem (catastrophic thinking in GAD)? A hybrid (social anxiety)? The protocol is then tailored, deploying the right tools (Somatic Gym for bottom-up, Therapeutic Engine for top-down) in the right sequence for your specific engine.',
        },
      ],
    },
    {
      section: 'The Investment',
      questions: [
        {
          question: 'Why is the investment £2,500?',
          answer: 'You are not investing in \'sessions.\' You are investing in a definitive outcome: the installation of a lifelong toolkit for autonomy. The fee reflects a complete, end-to-end clinical project, which includes: the personal, high-level strategic oversight of a senior Clinical Architect for the entire duration; access to a comprehensive suite of therapeutic tools 24/7; and a structured process designed to achieve a result in a concentrated timeframe, saving you the accumulated cost and opportunity cost of years spent in an inefficient, indefinite model.',
        },
      ],
    },
  ]

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* BLOCK 2: HEADLINE & INTRODUCTION */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              Your Questions, Answered with Clinical Clarity.
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-body mb-8">
              Intelligent questions are a sign of a serious commitment. Here are our direct answers.
            </h2>

            <div className="text-lg leading-8 text-body text-left">
              <p>
                We operate on a principle of radical transparency. We understand that you, as a veteran of the traditional therapy model, will have legitimate and highly intelligent questions about our protocol. This is not just expected; it is required. Below are our candid answers to the most common and important questions we receive.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-16">
          <hr className="border-dune-shadow" />
        </div>

        {/* BLOCK 3: THE Q&A SECTIONS */}
        {qaData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="max-w-4xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-sea-sage mb-8">
                {section.section}
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {section.questions.map((qa, qaIndex) => (
                <QAAccordion
                  key={qaIndex}
                  question={qa.question}
                  answer={qa.answer}
                  index={qaIndex}
                />
              ))}
            </div>

            {sectionIndex < qaData.length - 1 && (
              <div className="mt-12">
                <hr className="border-dune-shadow" />
              </div>
            )}
          </div>
        ))}

        {/* BLOCK 4: FINAL CTA */}
        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-warm-linen/50 rounded-3xl p-8 md:p-12 border border-dune-shadow text-center">
              <h2 className="text-3xl font-bold text-sea-sage mb-4">
                Clarity is the First Step.
              </h2>
              <p className="text-lg leading-8 text-body mb-8">
                If your questions have been answered and you feel this commitment to a structured, data-driven protocol aligns with your goals, the final step is to begin the formal diagnostic process.
              </p>
              
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
              >
                <span>Begin a Confidential Diagnostic</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  )
}
