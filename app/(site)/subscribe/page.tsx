import Image from 'next/image';
import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { BlogSubscribe } from '@/components/blog-subscribe';

export const metadata = {
  title: 'Get Free Book Chapters - The Faulty Smoke Alarm',
  description:
    'Get the first three chapters of The Faulty Smoke Alarm free. Learn foundational skills to recalibrate your nervous system and master anxiety from the ground up.',
};

export default function SubscribePage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Page header */}
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-6">
                <span className="text-2xl">📖</span>
                <span className="text-sm font-medium text-sage-700">Free Book Chapters</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-900 to-sage-700 bg-clip-text text-transparent">
                  Master Your Anxiety<br />From the Ground Up
                </span>
              </h1>
              
              <p className="text-xl text-ink/70 leading-8 max-w-2xl mx-auto">
                Get the first three chapters of <em className="font-semibold">The Faulty Smoke Alarm</em> and learn 
                the foundational skill that changes everything: your somatic anchor.
              </p>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal delay={100}>
            <div className="relative group mb-12">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-sage-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-soft-lg ring-1 ring-black/5">
                <Image
                  src="/images/rockpool.jpg"
                  alt="Peaceful rockpool - finding your grounding anchor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* What subscribers receive */}
          <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl shadow-soft-lg ring-1 ring-black/5 p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold text-brand-900 mb-6">
                What You'll Learn in These Free Chapters
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-brand-900">
                      Why Positive Thinking Fails
                    </strong>
                    <p className="text-ink/80 text-sm leading-6">
                      The neuroscience behind why "just calm down" never works—and what actually does
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-brand-900">
                      Your First "Bottom-Up" Skill
                    </strong>
                    <p className="text-ink/80 text-sm leading-6">
                      How to find your "somatic anchor"—solid ground in the middle of a panic storm
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <strong className="text-brand-900">
                      The Right Tool for the Job
                    </strong>
                    <p className="text-ink/80 text-sm leading-6">
                      A complete framework to recalibrate your nervous system from the ground up
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Subscribe form */}
          <ScrollReveal delay={400}>
            <BlogSubscribe />
          </ScrollReveal>

          {/* Additional context */}
          <ScrollReveal delay={600}>
            <div className="mt-12 text-center">
              <p className="text-ink/70 leading-7 mb-6">
                Join thousands of readers who are learning to work <em>with</em> their body, not against it. 
                No fluff. No toxic positivity. Just practical, evidence-based skills that actually work.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-ink/60">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your privacy matters</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
}

