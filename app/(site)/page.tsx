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
                  <span className="text-sm font-medium text-sea-sage">Welcome to Your Journey</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sea-sage mb-4">
                  Coastal Calm<br />
                  <span className="bg-gradient-to-r from-seafoam to-golden-shell bg-clip-text text-transparent">
                    Therapy
                  </span>
                </h1>
                
                <p className="text-2xl text-sea-sage font-medium mb-4">
                  Calm. Clarity. Connection.
                </p>
                
                <p className="text-lg leading-8 text-body mb-8">
                  A welcoming space for modern, evidence-based therapy. Practical tools,
                  grounded perspective, and steady support—so you can move through life
                  with more ease.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/blog"
                    className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300"
                  >
                    <span>Read the Blog</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/subscribe"
                    className="group inline-flex items-center justify-center rounded-2xl px-8 py-4 border-2 border-sea-sage text-sea-sage font-medium hover:bg-pebble hover:scale-105 transition-all duration-300"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span>Subscribe</span>
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
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 glass-effect px-6 py-3 rounded-2xl shadow-soft animate-float">
                    <p className="text-sm font-medium text-sea-sage">✨ Evidence-Based Care</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seafoam/20 border border-seafoam mb-6">
                <span className="text-sm font-medium text-sea-sage">Client Experiences</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                Stories of Growth & Healing
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Real experiences from people who have found clarity and calm
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

      {/* FEATURES – warm band */}
      <section className="relative py-20 bg-warm-linen border-y border-dune-shadow">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4">
                How I Can Help
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Discover resources and support tailored to your journey
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={100}>
              <Link href="/blog">
                <Feature
                  title="Blog"
                  body="Gentle, practical writing on calm living, boundaries, stress and recovery."
                  icon={
                    <div className="relative">
                      <div className="absolute inset-0 bg-seafoam rounded-full blur-xl opacity-20"></div>
                      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-sea-sage text-white text-2xl shadow-soft">
                        📖
                      </span>
                    </div>
                  }
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link href="/contact">
                <Feature
                  title="Contact"
                  body="Questions or referrals? I'll reply personally and usually within 48 hours."
                  icon={
                    <div className="relative">
                      <div className="absolute inset-0 bg-golden-shell rounded-full blur-xl opacity-20"></div>
                      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-golden-shell text-olive-grey text-2xl shadow-soft">
                        ✉️
                      </span>
                    </div>
                  }
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link href="/subscribe">
                <Feature
                  title="Newsletter"
                  body="Occasional notes and new posts—no spam, unsubscribe anytime."
                  icon={
                    <div className="relative">
                      <div className="absolute inset-0 bg-seafoam rounded-full blur-xl opacity-20"></div>
                      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-seafoam text-white text-2xl shadow-soft">
                        🔔
                      </span>
                    </div>
                  }
                />
              </Link>
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
                Latest Posts
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto leading-8">
                Fresh ideas and calm-first practices
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
                    Ready to talk?
                  </h3>
                  <p className="text-lg text-white/95 leading-8 max-w-xl">
                    Share what's going on. I'll get back to you within two working days.
                  </p>
                </div>
                
                <Link
                  href="/contact"
                  className="flex-shrink-0 inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-golden-shell text-olive-grey font-medium shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Get in Touch</span>
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
