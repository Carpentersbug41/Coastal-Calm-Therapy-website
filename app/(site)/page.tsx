import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'
import { PostCard } from '@/components/post-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { TestimonialCard } from '@/components/testimonial-card'
import { OfferPanel } from '@/components/offer-panel'
import { OrganizationSchema, ServiceSchema } from '@/components/structured-data'
import { getLatestPosts } from '@/lib/posts'
import { getRandomTestimonials } from '@/lib/testimonials'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Anxiety Protocol - A New Model for Anxiety Resolution',
  description: 'A 30-day, data-driven intensive engineered to solve anxiety for those failed by traditional talk therapy. We don\'t manage problems; we make ourselves redundant.',
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
  ],
  openGraph: {
    title: 'The Anxiety Protocol - A New Model for Anxiety Resolution',
    description: 'A 30-day, data-driven intensive engineered to solve anxiety for those who have been failed by traditional talk therapy. We don\'t manage problems; we make ourselves redundant.',
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
  
  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <ServiceSchema />
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
                  <span className="text-sm font-medium text-sea-sage">A New Model for Anxiety Resolution</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  A year in therapy is not a sign of commitment. It's a symptom of an inefficient model.
                </h1>
                
                <p className="text-xl leading-8 text-body mb-8">
                  The Anxiety Protocol is a 30-day, data-driven intensive engineered to solve anxiety for those who have been failed by traditional talk therapy. We don't manage problems; we make ourselves redundant.
                </p>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Begin the Diagnostic</span>
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
                You're Not Broken. The Model Is.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                If you've found traditional talk therapy to be a slow, unstructured, and frustrating process, the problem isn't you. It is a system with three fundamental design flaws that guarantee inefficiency.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">The Misaligned Incentive</h3>
                    <p className="text-body">The traditional model is built on repeat business. The therapist's financial success is tied to the length of your treatment. This is a fundamental conflict of interest. Our model is engineered to solve it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">The Fidelity Failure</h3>
                    <p className="text-body">A human therapist is inherently variable. Mood, bias, and fatigue alter how a protocol is delivered. In a system that demands precision, human variability is not a feature; it is a bug.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">The Dosage Failure</h3>
                    <p className="text-body">Your nervous system rewires through high-repetition practice. The one-hour-a-week session is a neurologically insignificant dose. To create lasting change, the required dosage is closer to 10-15x what traditional therapy can provide. It is a system designed to fail.</p>
                  </div>
                </div>
              </div>
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
                The Solution: A System Engineered for High-Dosage Practice
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                Our protocol solves these flaws by deconstructing the therapeutic process and creating a system capable of delivering the necessary dosage for rapid change. It is an integrated system of human strategy and two distinct, powerful tools.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {/* Pillar 1: Expert Human Strategy */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">1. Expert Human Strategy</h3>
                      <p className="text-lg leading-8 text-body">
                        Your protocol is overseen by a human Clinical Strategist. Their sole function is high-level diagnosis, data analysis of your session transcripts, and strategic adjustment of your protocol.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Pillar 2: The Precision Instrument */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">2. The Precision Instrument</h3>
                      <p className="text-lg leading-8 text-body">
                        2-3 times per week, you will engage in a full therapeutic session with our AI-guided instrument. It executes your human-designed protocol with perfect fidelity, perfect recall, and zero judgment.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Pillar 3: The Flight Simulator */}
              <ScrollReveal delay={300}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">3. The Flight Simulator</h3>
                      <p className="text-lg leading-8 text-body">
                        1-2 times per day, you will run short, 5-10 minute drills in our proprietary Flight Simulator. This is your somatic gym where you build the high volume of "reps" necessary to make your new skills automatic.
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
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="text-sm font-medium text-sea-sage">The 30-Day Protocol</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                The 30-Day Protocol: Your Path to Redundancy
              </h2>
              <p className="text-lg text-body max-w-3xl mx-auto leading-8">
                This is not a collection of techniques. It is a structured, sequential process to deconstruct and rebuild your relationship with anxiety.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">1. The Anxiety Blueprint</h3>
                    <p className="text-body leading-7">
                      A single, intensive 90-minute diagnostic session to map your specific anxiety patterns and design your bespoke 30-day training protocol.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">2. The High-Dosage Training</h3>
                    <p className="text-body leading-7">
                      Engage in 1-2 daily drills in the Flight Simulator to build foundational skills, supplemented by 2-3 full AI-led sessions per week to integrate the work.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">3. The Data-Driven Reviews</h3>
                    <p className="text-body leading-7">
                      Brief, weekly 15-minute tactical check-ins with your strategist to review transcript data and make high-leverage adjustments to your protocol.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal delay={400}>
              <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">4. The Redundancy Protocol</h3>
                    <p className="text-body leading-7">
                      The final 90-minute session where we make ourselves obsolete and co-create your 'Go-Forward Plan'—the user's manual for your own mind.
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
                    src="/images/robert-carpenter.jpg"
                    alt="Robert Carpenter - Clinical Strategist and Systems Engineer for The Anxiety Protocol"
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
                  Licensed Psychotherapist & Systems Engineer
                </p>
                
                <div className="space-y-4 text-lg leading-8 text-body mb-8">
                  <p>
                    I am a trained psychotherapist, but I am a systems engineer at heart. Early in my career, I saw the traditional therapeutic model was failing my most capable clients. The lack of a clear protocol, the absence of data, the indefinite timeline—it was a system designed for dependency, not results. I became obsessed with one question: If we were to re-engineer therapy for maximum efficiency and a defined outcome, what would it look like? The Anxiety Protocol is the answer.
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* NEW SECTION: The "Aggressive Filter" */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
              This Protocol is Not For Everyone
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Column 1: This is for you if: */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 h-full shadow-soft border border-dune-shadow bg-gradient-to-br from-seafoam/10 to-transparent">
                <h3 className="text-xl font-bold text-sea-sage mb-3">Our Protocol is for you if:</h3>
                <p className="text-body leading-7">
                  You value data, a structured process, and a clear path to a defined outcome. You have tried traditional therapy and found it lacking. You want a finite, intensive protocol with a clear finish line.
                </p>
              </div>
            </ScrollReveal>

            {/* Column 2: This is NOT for you if: */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 h-full shadow-soft border border-dune-shadow bg-gradient-to-br from-soft-clay/10 to-transparent">
                <h3 className="text-xl font-bold text-sea-sage mb-3">Our Protocol is NOT for you if:</h3>
                <p className="text-body leading-7">
                  You are seeking a supportive space for open-ended talk. You are in an acute crisis or have deep-seated developmental trauma that requires long-term exploratory work.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* NEW SECTION: The "Trust Protocol" */}
      <section className="py-16 md:py-20 bg-warm-linen border-y border-dune-shadow">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
              A Note on the Integrity of Our System
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Principle 1 */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">Principle 1: Absolute Confidentiality.</h3>
                <p className="text-body leading-7">
                  All session data is encrypted end-to-end and treated with absolute clinical confidentiality.
                </p>
              </div>
            </ScrollReveal>

            {/* Principle 2 */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">Principle 2: Zero Data Training.</h3>
                <p className="text-body leading-7">
                  It is a foundational rule that your personal session data is never used to train any language model. Our system is a closed loop.
                </p>
              </div>
            </ScrollReveal>

            {/* Principle 3 */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 shadow-soft border border-dune-shadow">
                <h3 className="text-xl font-bold text-sea-sage mb-3">Principle 3: Enterprise-Grade Security.</h3>
                <p className="text-body leading-7">
                  Our system is built on secure, enterprise-level cloud infrastructure to protect your data.
                </p>
              </div>
            </ScrollReveal>
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
                <div className="grid gap-8 md:grid-cols-3">
                  {latestPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>

                <div className="text-center mt-12">
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
                    Apply for the Protocol.
                  </h3>
                  <p className="text-lg text-white/95 leading-8 max-w-xl">
                    We accept a maximum of four new clients per month to ensure the highest level of strategic oversight. If you are ready to stop talking and start solving, the next step is to begin the diagnostic.
                  </p>
                </div>
                
                <Link
                  href="/apply"
                  className="flex-shrink-0 inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Begin the Diagnostic</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}