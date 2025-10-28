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
  title: 'The Anxiety Protocol - Re-Engineering Therapy for a Structured Mind',
  description: 'Not open-ended talk therapy. A 30-day, data-driven training protocol engineered to solve anxiety. High-performance psychological training for structured, results-oriented professionals. £2,500 fixed price.',
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
  ],
  openGraph: {
    title: 'The Anxiety Protocol - Re-Engineering Therapy for a Structured Mind',
    description: 'A 30-day, data-driven training protocol for high-achieving professionals. Not therapy as usual—engineered for maximum efficiency and measurable results.',
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
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-6">
                  Master Anxiety in 30 Days.
                </h1>
                
                <p className="text-xl leading-8 text-body mb-8">
                  For the structured mind that's tired of talking and ready to solve the problem.
                </p>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Begin Your Application</span>
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
                You're Not Broken. Your *Method* Is.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-6">
                If you've found traditional talk therapy to be a slow, unstructured, and frustrating process, you're not alone. The problem isn't you; it's a model that wasn't designed for a mind that needs a clear plan, measurable results, and a defined end-point. You don't need another year of talking. You need a better toolkit.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">An Unending Process</h3>
                    <p className="text-body">Aimless weekly conversations with no clear finish line.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">A Data Black Box</h3>
                    <p className="text-body">Progress is based on subjective feelings, not objective metrics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 glass-effect rounded-2xl shadow-soft border border-dune-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-soft-clay/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-soft-clay" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sea-sage mb-2">An Inefficient Dosage</h3>
                    <p className="text-body">A 50-minute session once a week is too low a frequency to build new neural pathways.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-8 text-body font-medium text-sea-sage">
                You are trying to run high-performance software on an outdated operating system. It's time for an upgrade.
              </p>
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
                A System Built for One Result: Your Freedom.
              </h2>
              
              <p className="text-lg leading-8 text-body mb-12 text-center">
                We deliver results by separating the two core functions of effective therapy:
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {/* Human Clinical Strategist */}
              <ScrollReveal delay={100}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">Expert Human Strategy</h3>
                      <p className="text-lg leading-8 text-body">
                        Your program is architected by a Clinical Strategist who maps your specific anxiety patterns and builds your personal plan for relief.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Resilience Simulator */}
              <ScrollReveal delay={200}>
                <div className="glass-effect rounded-3xl p-8 shadow-soft-lg border border-dune-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sea-sage text-white flex items-center justify-center font-bold text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sea-sage mb-3">Intensive Skill Practice</h3>
                      <p className="text-lg leading-8 text-body">
                        You will build new neural pathways for calm through high-repetition drills in our proprietary Resilience Simulator, a private, judgment-free training environment. This intensive practice is the key to making change happen fast.
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">1. Map Your Operating System</h3>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">2. Master Your Internal Dialogue</h3>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">3. Command Your Physiology</h3>
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
                    <h3 className="text-xl font-bold text-sea-sage mb-2">4. Re-Engage With Your Life</h3>
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
                  Your Clinical Strategist: Robert Carpenter
                </h2>
                
                <p className="text-xl italic text-soft-clay mb-6">
                  Licensed Psychotherapist & Author of "Drop the Rope"
                </p>
                
                <div className="space-y-4 text-lg leading-8 text-body mb-8">
                  <p>
                    I am a trained therapist, but I am a <strong className="text-sea-sage">systems-thinker</strong> at heart. 
                    Early in my career, I saw that the traditional therapeutic model was failing a specific type of client: 
                    the structured, results-oriented professional. The lack of a clear protocol, the absence of data, the 
                    indefinite timeline—it was a system designed for a different kind of mind.
                  </p>
                  
                  <p>
                    I became obsessed with one question: <em>If we were to re-engineer the process of therapy for maximum 
                    efficiency and measurable results, what would it look like?</em>
                  </p>

                  <p className="font-medium text-sea-sage text-xl">
                    The Anxiety Protocol is the answer.
                  </p>
                </div>

                <Link
                  href="/apply"
                  className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                >
                  <span>Begin Your Application</span>
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
                  <h3 className="text-lg font-bold text-sea-sage mb-2">What is the purpose of the strategic consultation?</h3>
                  <p className="text-body leading-7">
                    The 15-minute consultation is the final step in our application process. It is a no-obligation conversation 
                    to confirm that the program's intensity and methodology align with your specific needs and mindset.
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
                From the Lab: Insights on Anxiety Mastery
              </h2>
            </div>
          </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={100}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                  {latestPosts.map((post, index) => (
                    <Link 
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="text-base md:text-lg text-sea-sage hover:text-golden-shell font-medium transition-colors text-center"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>

                <div className="text-center">
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
                    Apply for a Strategic Consultation.
                  </h3>
                  <p className="text-lg text-white/95 leading-8 max-w-xl">
                    We accept a maximum of four new clients per month. If you believe this protocol was designed 
                    for you, the next step is to apply for a no-obligation strategic consultation to determine if you are a fit.
                  </p>
                </div>
                
                <Link
                  href="/apply"
                  className="flex-shrink-0 inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
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
      </section>
    </>
  )
}