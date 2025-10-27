import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | The Anxiety Protocol',
  description: 'Common questions about The Anxiety Protocol, the Cognitive Simulator, investment, and how our 30-day program differs from traditional therapy.',
  openGraph: {
    title: 'Frequently Asked Questions',
    description: 'Get answers about The Anxiety Protocol, our unique methodology, and how we\'re different from traditional therapy.',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'Is this therapy?',
      answer: 'The Anxiety Protocol uses evidence-based therapeutic tools within a structured, high-performance training model. While designed and overseen by a trained therapist, it is not traditional, open-ended talk therapy. Our focus is on skill acquisition and measurable results within a fixed 30-day period.',
    },
    {
      question: 'Can I use my insurance to pay for this?',
      answer: 'No. Our program is considered a premium coaching or training service and is not covered by insurance as a conventional therapy.',
    },
    {
      question: 'Why is this better than traditional therapy?',
      answer: 'We are not a "better therapy"; we are a different, more intensive model designed for a specific type of mind. For clients who value data, structure, and efficiency, our protocol can achieve in 30 days what might take years in traditional models.',
    },
    {
      question: 'What is the "Cognitive Simulator"?',
      answer: 'The Cognitive Simulator is our proprietary, voice-based training technology. We do not use the term "AI," as it is associated with low-quality chatbots. Our Simulator is a sophisticated, purpose-built environment for high-repetition psychological skill practice in a completely private, judgment-free space.',
    },
    {
      question: 'What if I can\'t commit to 2-3 sessions per week?',
      answer: 'The program is designed for high-frequency practice because that\'s what drives rapid results. If you can\'t commit to this schedule, traditional weekly therapy may be a better fit. The protocol requires consistent engagement to achieve the promised outcomes.',
    },
    {
      question: 'How do I know if I\'m a good fit for this program?',
      answer: 'This protocol is designed for high-achieving professionals who are structured, results-oriented, and psychologically-minded. If you value data over subjective feelings, prefer clear protocols to open-ended processes, and see anxiety as a system to be solved rather than a lifelong condition to manage, this may be for you. Review our "Who It\'s For" page for a complete assessment.',
    },
    {
      question: 'What happens after the 30 days?',
      answer: 'Our goal is your independence. The final handover session includes a comprehensive go-forward plan based on your results. You\'ll have the skills, data, and protocols you need to maintain your progress autonomously. Some clients choose to engage in periodic "tune-up" sessions, but this is optional, not required.',
    },
    {
      question: 'Is my information private and secure?',
      answer: 'Absolutely. Our platform is HIPAA-grade with end-to-end encryption. All sessions are confidential, and your data is stored with the highest security standards. Every simulation transcript is private and accessible only to you and your Clinical Strategist.',
    },
    {
      question: 'What if I\'m in crisis or have thoughts of self-harm?',
      answer: 'This program is not a crisis service. If you are in acute crisis, experiencing thoughts of self-harm, or have a severe psychiatric condition requiring immediate care, please contact emergency services or a crisis hotline. Our protocol is designed for high-functioning anxiety, not crisis intervention.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'The program is £2,500 paid upfront. This investment reflects the intensive nature and accelerated timeline. We do not currently offer payment plans, but you can discuss any financial concerns during your strategic consultation.',
    },
    {
      question: 'How many clients do you accept per month?',
      answer: 'We accept a maximum of four new clients per month. This limit ensures that each client receives the highest level of strategic oversight and personalized attention from their Clinical Strategist. Selection is based on fit, not timing.',
    },
    {
      question: 'What should I expect from the strategic consultation?',
      answer: 'The strategic consultation is a brief, no-obligation conversation (typically 15-20 minutes) to determine if the program aligns with your needs and goals. We\'ll discuss your current challenges, your experience with anxiety, and whether the intensive format is appropriate for you. There is no pressure to commit.',
    },
  ]

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pebble border border-dune-shadow mb-6">
              <span className="w-2 h-2 bg-seafoam rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sea-sage">Questions & Answers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-sea-sage mb-6">
              Frequently Asked Questions
            </h1>
            
            <p className="text-xl leading-8 text-body">
              Clear answers about The Anxiety Protocol, our methodology, and how we're different from traditional therapy.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-soft border border-dune-shadow">
                <h2 className="text-xl md:text-2xl font-bold text-sea-sage mb-4">
                  {faq.question}
                </h2>
                <p className="text-lg leading-8 text-body">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <ScrollReveal delay={650}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-warm-linen/50 rounded-3xl p-8 md:p-12 border border-dune-shadow text-center">
              <h2 className="text-3xl font-bold text-sea-sage mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg leading-8 text-body mb-8">
                The best way to get your specific questions answered is through a strategic consultation. 
                Apply now and we'll address all your concerns in a personalized conversation.
              </p>
              
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
              >
                <span>Begin Your Application</span>
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

