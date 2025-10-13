import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'
import { PostCard } from '@/components/post-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { TestimonialCard } from '@/components/testimonial-card'
import { getLatestPosts } from '@/lib/posts'
import { getRandomTestimonials } from '@/lib/testimonials'

export default function HomePage() {
  const latestPosts = getLatestPosts(3)
  const featuredTestimonials = getRandomTestimonials(3)

  return (
    <>
      {/* HERO */}
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
                  A Cognitive Bootcamp to Master Anxiety
                </p>
                
                <p className="text-lg leading-8 text-body mb-8">
                  For the high-functioning professional, anxiety isn't just a feeling—it's a critical 
                  system failure. This rigorous, 30-day program rebuilds that system from the ground up 
                  through a structured curriculum of intensive practice sessions and expert human strategy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                  >
                    <span>Apply for the Program</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 border-2 border-sea-sage text-sea-sage font-medium hover:bg-pebble hover:scale-105 transition-all duration-300"
                  >
                    <span>Learn More About the Protocol</span>
                  </Link>
                </div>
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

      {/* DIVIDER */}
      <div className="relative">
        <Container>
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-dune-shadow"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="glass-effect px-6 py-2 rounded-full text-sm text-body border border-dune-shadow">
                ✨
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="text-sm font-medium text-sea-sage">✨</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                From Anxious to Confident in 30 Days.
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Real results from professionals who completed The Anxiety Protocol.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
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

      {/* DIVIDER */}
      <div className="relative">
        <Container>
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-dune-shadow"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="glass-effect px-6 py-2 rounded-full text-sm text-body border border-dune-shadow">
                ✨
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* CURRICULUM */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="text-sm font-medium text-sea-sage">The Structured Curriculum</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Your Personalized Training Protocol
              </h2>
              <p className="text-xl font-medium text-sea-sage mb-4">
                A Structured, Tailored Curriculum
              </p>
              <p className="text-lg text-body max-w-3xl mx-auto leading-8">
                Your anxiety is unique. Your treatment plan should be too. The Anxiety Protocol is not a one-size-fits-all program. 
                It is a dynamic bootcamp built from a core curriculum of four evidence-based skill modules.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft border border-dune-shadow">
                <p className="text-lg text-body leading-8">
                  In your initial 90-minute Strategy Session, your Head Coach will conduct a deep diagnostic of your specific anxiety patterns. 
                  We will then design your personalized 30-day protocol, determining the precise sequence and emphasis of these modules to 
                  target your unique challenges and goals.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-sea-sage text-center mb-8">
                The Core Curriculum Modules:
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:gap-10">
            {/* Module 1 */}
            <ScrollReveal delay={100}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-3">Module 1: Deconstruction & Diagnostics</h3>
                    <p className="text-body mb-4 leading-7">
                      Before we can build, we must understand. In this module, you will use our analytical tools to create a 
                      precise, data-driven map of your anxiety. You will learn to identify your exact triggers, the core thoughts 
                      and feelings that hook you, and the subtle avoidance patterns that keep you stuck.
                    </p>
                    <p className="text-sm text-soft-clay italic">
                      Drills Include: Functional Analysis Mapping, Somatic Awareness Training, Introduction to Titration.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Module 2 */}
            <ScrollReveal delay={200}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-3">Module 2: Cognitive Defusion</h3>
                    <p className="text-body mb-4 leading-7">
                      Anxious thoughts are not commands; they are noise. This module provides a suite of powerful techniques to 
                      change your relationship with your mind. You will learn to "unhook" from worrying thoughts, see them as 
                      temporary mental events, and strip them of their power to control your behavior.
                    </p>
                    <p className="text-sm text-soft-clay italic">
                      Drills Include: Advanced Defusion Techniques, Metaphorical Practice (e.g., 'Tug of War'), In-Vivo Thought Labeling.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Module 3 */}
            <ScrollReveal delay={300}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-3">Module 3: Somatic Regulation</h3>
                    <p className="text-body mb-4 leading-7">
                      The physical sensations of anxiety—a racing heart, a tight chest—are often the most distressing part of the 
                      experience. This module trains your nervous system's capacity to tolerate these sensations without spiraling 
                      into panic. You will build the foundational skill of "affect tolerance."
                    </p>
                    <p className="text-sm text-soft-clay italic">
                      Drills Include: Advanced Pendulation & Titration, Breathwork Protocols, Grounding Exercises.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Module 4 */}
            <ScrollReveal delay={400}>
              <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all border border-dune-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sea-sage mb-3">Module 4: Committed Action & Exposure</h3>
                    <p className="text-body mb-4 leading-7">
                      This is where insight becomes action. This module is focused on helping you re-engage with the life your 
                      anxiety has taken from you. You will clarify your core values and design small, courageous, real-world 
                      "behavioral experiments" to approach feared situations, with the new skills you've learned to manage the internal storm.
                    </p>
                    <p className="text-sm text-soft-clay italic">
                      Drills Include: Values Clarification, Imaginal Exposure Rehearsals, Behavioral Experiment Design.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="rounded-2xl bg-seafoam/10 p-8 border border-seafoam/30">
                <p className="text-lg text-body leading-8 text-center">
                  <strong className="text-sea-sage">Your 30-day bootcamp is a unique combination of these core modules,</strong> designed 
                  by your Head Coach specifically for you. This is the power of the Protocol Framework: the rigor of a structured curriculum 
                  combined with the precision of a personalized strategy.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sea-sage/5 to-seafoam/5">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="text-sm font-medium text-sea-sage">Fixed-Price Investment</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                One month. One price. Measurable results.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-soft-lg ring-1 ring-dune-shadow">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-seafoam/20 to-golden-shell/20 blur-3xl"></div>
                
                <div className="relative p-10 md:p-12">
                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="mb-2">
                      <span className="text-6xl md:text-7xl font-bold text-sea-sage">£2,500</span>
                    </div>
                    <p className="text-xl text-body">
                      for the complete 30-day Cognitive Bootcamp
                    </p>
                    <p className="text-sm text-soft-clay mt-2">
                      This intensive program is designed to achieve in 30 days what can often take years 
                      in traditional weekly therapy, at a fraction of the long-term cost
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-sea-sage mb-4">What's Included:</h3>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sea-sage">2 Expert Human Strategy Sessions (90 minutes each)</p>
                        <p className="text-sm text-body">Initial diagnostic & protocol design + final debrief & go-forward plan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sea-sage">3 Weekly Integration Check-ins (15 minutes)</p>
                        <p className="text-sm text-body">Rapid strategic adjustments based on your progress data</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sea-sage">8-12 Structured Skill Drills (2-3x weekly)</p>
                        <p className="text-sm text-body">Voice-guided intensive practice sessions using our proprietary training platform, available 24/7 on your schedule</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sea-sage">Complete Session Transcripts & Data Analytics</p>
                        <p className="text-sm text-body">Objective tracking of your progress with automated summaries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sea-sage">Skill Cheat Sheets & Practice Logs</p>
                        <p className="text-sm text-body">Personalized resources for continued independent practice</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-seafoam/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-sea-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sea-sage">Proprietary Training Platform</p>
                        <p className="text-sm text-body">A HIPAA-compliant, end-to-end encrypted platform designed specifically for our Protocol Framework</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="block w-full text-center px-8 py-4 rounded-2xl bg-gradient-to-r from-sea-sage to-seafoam text-white font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                  >
                    Apply for the Program
                  </Link>

                  {/* Note */}
                  <p className="mt-6 text-center text-sm text-body">
                    <strong>Limited Availability:</strong> To maintain the highest quality of strategic oversight, I accept a maximum of 4 new clients per month.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* DIVIDER */}
      <div className="relative">
        <Container>
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-dune-shadow"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="glass-effect px-6 py-2 rounded-full text-sm text-body border border-dune-shadow">
                ✨
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* ABOUT ME SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-sea-sage mb-3">
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
                    As your <strong className="text-sea-sage">Head Coach</strong>, I do not act as a traditional therapist. 
                    I am your clinical strategist. I design your personalized 30-day training program, analyze the data from 
                    your practice sessions, and provide the high-level oversight to ensure you achieve your goals.
                  </p>

                  <p>
                    The Anxiety Protocol is built on my proprietary <strong className="text-sea-sage">"Protocol Framework,"</strong> a 
                    hybrid system that integrates high-level clinical strategy with our proprietary precision training platform. This 
                    allows you to engage in high-frequency, structured practice at an intensity previously impossible, leading to 
                    dramatically accelerated results.
                  </p>

                  <div className="p-6 bg-seafoam/10 rounded-2xl border border-seafoam/30 my-6">
                    <h3 className="font-bold text-sea-sage mb-3">Published Works:</h3>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-seafoam mt-1">📖</span>
                        <div>
                          <strong className="text-sea-sage">"Drop the Rope: A Scientific Approach to Mastering Anxiety"</strong>
                          <span className="text-body block text-sm mt-0.5">
                            The definitive guide to the counterintuitive truth about anxiety—why fighting it makes it worse, 
                            and how defusion, exposure, and acceptance can set you free.
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-seafoam mt-1">📖</span>
                        <div>
                          <strong className="text-sea-sage">"The Loving Trap"</strong>
                          <span className="text-body block text-sm mt-0.5">
                            How to increase resilience in children through effective parenting—breaking free from 
                            helicopter parenting and returning choices to children where they belong.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="font-medium text-sea-sage">
                    This isn't therapy as you know it. It's a structured bootcamp where you'll do the reps, build 
                    the skills, and learn to become your own therapist. I provide the strategy, our training 
                    platform provides the drills, and you get measurable results in 30 days.
                  </p>
                </div>

                <Link
                  href="/contact"
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

      {/* FEATURES – warm band */}
      <section className="relative py-20 bg-warm-linen border-y border-dune-shadow">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Why This Program is Superior
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                The Unfair Advantages of The Protocol Framework
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={100}>
              <Feature
                title="⚡ Velocity"
                body="High-frequency structured drills (2-3x per week) accelerate skill acquisition at a rate impossible in traditional weekly therapy."
                icon={
                  <div className="relative">
                    <div className="absolute inset-0 bg-seafoam rounded-full blur-xl opacity-20"></div>
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-sea-sage text-white text-2xl shadow-soft">
                      ⚡
                    </span>
                  </div>
                }
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Feature
                title="📊 Data, Not Guesswork"
                body="Every session is transcribed and analyzed. We track real progress and make precise strategic adjustments based on hard evidence."
                icon={
                  <div className="relative">
                    <div className="absolute inset-0 bg-golden-shell rounded-full blur-xl opacity-20"></div>
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-golden-shell text-olive-grey text-2xl shadow-soft">
                      📊
                    </span>
                  </div>
                }
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Feature
                title="🎯 On-Demand Access"
                body="Training happens on your schedule, not a therapist's. Structured drills are available 24/7 for maximum convenience and real-world integration."
                icon={
                  <div className="relative">
                    <div className="absolute inset-0 bg-seafoam rounded-full blur-xl opacity-20"></div>
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-seafoam text-white text-2xl shadow-soft">
                      🎯
                    </span>
                  </div>
                }
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* LATEST POSTS */}
      {latestPosts.length > 0 && (
        <section className="py-20 md:py-28">
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

      {/* CTA BANNER */}
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
                  href="/contact"
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

function Feature({
  title,
  body,
  icon,
}: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <div className="group h-full rounded-3xl bg-drift-sand p-8 shadow-soft hover:shadow-soft-lg ring-1 ring-dune-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-sea-sage mb-3 group-hover:text-golden-shell transition-colors">{title}</h3>
      <p className="text-body leading-7">{body}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-sea-sage opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more</span>
        <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  )
}
