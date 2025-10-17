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
  title: 'The Anxiety Protocol - 30-Day Cognitive Bootcamp to Master Anxiety',
  description: 'A rigorous, evidence-based 30-day program for high-functioning professionals. Master anxiety 10x faster than traditional therapy with structured drills and expert coaching. £2,500 fixed price.',
  keywords: [
    'anxiety treatment',
    'anxiety therapy UK',
    'cognitive bootcamp',
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
    title: 'The Anxiety Protocol - Master Anxiety in 30 Days',
    description: 'Stop coping with anxiety. Start mastering it. A structured 30-day program for high-performing professionals. £2,500 fixed price.',
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
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-4">
                  The Anxiety<br />
                  <span className="bg-gradient-to-r from-seafoam to-golden-shell bg-clip-text text-transparent">
                    Protocol
                  </span>
                </h1>
                
                <p className="text-2xl text-sea-sage font-medium mb-4">
                  A Cognitive Bootcamp to Master Your Anxiety
                </p>
                
                <p className="text-lg leading-8 text-body mb-8">
                  For the high-functioning professional, anxiety isn't just a feeling—it's a critical 
                  system failure. This rigorous, 30-day program rebuilds that system from the ground up 
                  through a structured curriculum of intensive practice sessions and expert human strategy.
                </p>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Book Free 15-min Consult</span>
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
                    alt="Coastal path at golden hour with soft sand and sea grass"
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

      {/* 3. WHO IT'S FOR / NOT FOR */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage text-center mb-12">
                Is This Program Right for You?
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Who it's for */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-seafoam/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sea-sage">Perfect For</h3>
                  </div>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>High-performing professionals ready for intensive work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Individuals seeking rapid, measurable results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Those willing to do structured practice 2–3× per week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-seafoam mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>People frustrated with traditional therapy's slow pace</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Not for */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft ring-1 ring-dune-shadow h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-soft-clay/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-sea-sage">Not For</h3>
                  </div>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Individuals in acute crisis (please seek emergency care)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Those looking for passive support without active practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>People unable to commit to the 30-day intensive format</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-soft-clay mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Those needing medication management (psychiatric care)</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. 3-STEP PROCESS */}
      <section className="py-16 md:py-20 bg-warm-linen/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-body">
                  Three simple steps to start your transformation
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Apply</h3>
                    <p className="text-body leading-7">
                      Complete the brief application form. Tell me about what you're experiencing and what you hope to achieve.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Free 15-Minute Consultation</h3>
                    <p className="text-body leading-7">
                      Within 24–48 hours, I'll review your application and schedule a brief, confidential call to determine if the program is a good fit.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Start Your 30-Day Plan</h3>
                    <p className="text-body leading-7">
                      If we're aligned, we'll schedule your first 90-minute Strategy Session and begin building your personalized protocol immediately.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-10 text-center">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-gradient-to-r from-sea-sage to-seafoam text-white font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Start Your Application</span>
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 5. PROOF (Testimonials) */}
      <section className="py-16 md:py-20">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                From Anxious to Confident in 30 Days
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Real results from professionals who completed The Anxiety Protocol.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link 
                href="/testimonials" 
                className="inline-flex items-center text-sea-sage font-medium hover:text-golden-shell group transition-colors"
              >
                <span>Read more testimonials</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Deconstruction & Diagnostics</h3>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Cognitive Defusion</h3>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Somatic Regulation</h3>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">Committed Action & Exposure</h3>
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
                  Your Head Coach: Robert Carpenter
                </h2>
                
                <p className="text-xl italic text-soft-clay mb-6">
                  Psychotherapist, Author, and Creator of The Anxiety Protocol
                </p>
                
                <div className="space-y-4 text-lg leading-8 text-body mb-8">
                  <p>
                    I'm a licensed psychotherapist, published author, and anxiety specialist. After 20 years treating 
                    anxiety across diverse cultures, I recognized a critical gap: high-performing individuals need a 
                    faster, more structured, and more effective approach than traditional talk therapy can provide.
                  </p>
                  
                  <p>
                    As your <strong className="text-sea-sage">Head Coach</strong>, I design your personalized 30-day training program, analyze the data from 
                    your practice sessions, and provide the high-level oversight to ensure you achieve your goals.
                  </p>

                  <p className="font-medium text-sea-sage">
                    This isn't therapy as you know it. It's a structured bootcamp where you'll do the reps, build 
                    the skills, and learn to become your own therapist.
                  </p>
                </div>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Apply to the Bootcamp</span>
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
                  <h3 className="text-lg font-bold text-sea-sage mb-2">What should I expect from the free consultation?</h3>
                  <p className="text-body leading-7">
                    The 15-minute consultation is a brief, no-pressure conversation to determine if the program aligns with your 
                    needs. We'll discuss your current challenges and whether the intensive format is right for you.
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
                Anxiety Mastery Insights
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Evidence-based strategies and practical skills from our curriculum
              </p>
            </div>
          </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 100}>
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-12 text-center">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-sea-sage font-medium hover:text-golden-shell group transition-colors"
                >
                  <span>View all posts</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
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
                    Ready to Master Your Anxiety?
                  </h3>
                  <p className="text-lg text-white/95 leading-8 max-w-xl">
                    Stop coping. Start mastering. Apply for the 30-day Anxiety Protocol and 
                    get the skills to become your own therapist.
                  </p>
                </div>
                
                <Link
                  href="/apply"
                  className="flex-shrink-0 inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Apply Now</span>
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
