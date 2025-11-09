import Link from 'next/link'
import { Container } from '@/components/container'
import { ScrollReveal } from '@/components/scroll-reveal'
import { OrganizationSchema, ServiceSchema } from '@/components/structured-data'
import { Metadata } from 'next'
import { getPostsByFeaturedLocation } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Still Stuck After a Year in Therapy? - The Anxiety Protocol',
  description: 'You were given the wrong tool. We built the right one. A structured, 30-day intensive designed to install the core skills for autonomy through neurologically significant practice.',
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
    description: 'You were given the wrong tool. We built the right one. A structured, 30-day intensive designed to install the core skills for autonomy through neurologically significant practice.',
    url: '/',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  // Dynamically fetch featured articles for "Required Reading" section
  // Returns the 2 most recent articles tagged with 'homepage-feature'
  const featuredArticles = getPostsByFeaturedLocation('homepage-feature', 2);

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
              
              <h2 className="text-2xl md:text-3xl font-bold text-body mb-8">
                You Were Given the Wrong Tool. We Built the Right One.
              </h2>

              <div className="space-y-4 text-lg leading-8 text-body mb-8 text-left max-w-4xl mx-auto">
                <p>You have done the work. You have analyzed the story. But the physical, physiological hijack of anxiety remains. The problem isn't a lack of insight; it is a lack of the right kind of practice. To recalibrate a hardware-level problem, you need a neurologically significant dose of training, not more conversation.</p>
              </div>

              <Link
                href="/protocol"
                className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
              >
                <span>Explore The Protocol</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>

            {/* NEW CONTENT: DIAGNOSIS OF THE OLD MODEL */}
            <ScrollReveal delay={100}>
              <h3 className="text-2xl md:text-3xl font-bold text-sea-sage mt-16 mb-8 text-center">
                A Diagnosis of the Old Model's Design Flaws
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="glass-effect rounded-3xl p-6 shadow-soft border border-dune-shadow">
                  <h4 className="text-xl font-bold text-sea-sage mb-3">1. Indefinite Timelines</h4>
                  <p className="text-body leading-7">
                    The traditional model often lacks a defined endpoint, fostering dependency. Our protocol is a fixed-term, 30-day intensive designed to install the core skills for autonomy.
                  </p>
                </div>

                <div className="glass-effect rounded-3xl p-6 shadow-soft border border-dune-shadow">
                  <h4 className="text-xl font-bold text-sea-sage mb-3">2. Insignificant Dosage</h4>
                  <p className="text-body leading-7">
                    One hour a week is a mathematical and neurological impossibility for overwriting a deeply conditioned response. Our system is engineered for high-repetition practice.
                  </p>
                </div>

                <div className="glass-effect rounded-3xl p-6 shadow-soft border border-dune-shadow">
                  <h4 className="text-xl font-bold text-sea-sage mb-3">3. Insight Without Installation</h4>
                  <p className="text-body leading-7">
                    Talking about a faulty alarm system doesn't fix it. Real change requires installing and automating new skills at the level of the nervous system, not just discussing them.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* SECTION 3.5: REQUIRED READING FROM THE BRIEFING ROOM */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-soft-clay/10 to-golden-shell/10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                From The Briefing Room: Required Reading
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                For a deeper clinical analysis of the principles that drive our protocol, the following briefings are essential.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <ScrollReveal key={article.slug} delay={100 + (index * 100)}>
                  <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-sea-sage mb-4">
                      {article.title}
                    </h3>
                    <p className="text-base leading-7 text-body mb-6 flex-grow">
                      {article.description}
                    </p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-sea-sage/10 text-sea-sage font-medium border-2 border-sea-sage hover:bg-sea-sage hover:text-white transition-all duration-300"
                    >
                      Read the Briefing
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: THE CORE PROTOCOL */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                The Core of the Protocol: Neurologically Significant Dosage
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                Lasting change in the nervous system is a biological process that requires a high volume of quality repetitions. Our hybrid model is engineered to provide a therapeutic dose that is structurally impossible for a human-only model to replicate.
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
            <div className="grid md:grid-cols-3 gap-8">
              {/* Component 1: The Human Architect */}
              <ScrollReveal delay={300}>
                <div className="glass-effect rounded-3xl p-6 shadow-soft-lg border border-dune-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3 text-center">The Human Architect</h4>
                  <p className="text-body leading-7">
                    Your protocol is designed and personally overseen by a human expert. Their role is pure strategy: to conduct your deep-diagnostic, architect your therapeutic blueprint, and analyze your data to make critical course corrections.
                  </p>
                </div>
              </ScrollReveal>

              {/* Component 2: The Therapeutic Engine */}
              <ScrollReveal delay={400}>
                <div className="glass-effect rounded-3xl p-6 shadow-soft-lg border border-dune-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3 text-center">The Therapeutic Engine</h4>
                  <p className="text-body leading-7">
                    Your human-designed plan is executed by our precision AI instrument. It ensures a level of consistency and focus that creates a uniquely safe and effective environment for the deep clinical work, free from the variables of human judgment.
                  </p>
                </div>
              </ScrollReveal>

              {/* Component 3: The Somatic Gym */}
              <ScrollReveal delay={500}>
                <div className="glass-effect rounded-3xl p-6 shadow-soft-lg border border-dune-shadow h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-sea-sage mb-3 text-center">The Somatic Gym</h4>
                  <p className="text-body leading-7">
                    Daily, targeted drills prescribed by your Architect. This is your high-repetition practice environment, where you build the new neural pathways until they become automatic.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 5: RESULT AND PROOF */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                The Advantage of a Purpose-Built Instrument
              </h2>
              
              <p className="text-lg leading-8 text-body mb-10 text-center">
                A core part of the protocol is creating the optimal environment for practice. For many, this means removing the social friction and self-consciousness that comes with a human audience, allowing for a deeper level of focus.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <blockquote className="glass-effect rounded-3xl p-8 md:p-12 shadow-soft-lg border border-dune-shadow bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
                <p className="text-xl md:text-2xl leading-relaxed text-body italic mb-6">
                  "I feel like I could get in my head a lot more if I was in front of a person... it's distracting because you're aware of that person. And that awareness is kind of splitting your concentration away from the task itself. It's like the judgement, the just random thoughts of like, how should I be reacting right now? What are they thinking about me, my reaction?"
                </p>
                <footer className="text-lg font-bold text-sea-sage">
                  — Melissa, Graduate of The Anxiety Protocol
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center mt-10">
                <Link
                  href="/results"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>See More Verifiable Results</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>


      {/* SECTION 6: THE FINAL CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-6 text-center">
                This is a New Model. It Requires a New Level of Clarity.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-10 text-center">
                This protocol is not for everyone. It is a structured, intensive engagement designed for a specific type of person—the capable, intelligent individual who is ready to move from talking to training. The first step is to determine if you are a fit for the work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center">
                <Link
                  href="/is-this-for-you"
                  className="group inline-flex items-center justify-center rounded-2xl px-10 py-5 bg-sea-sage text-white font-bold text-lg shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Is This Protocol For You?</span>
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