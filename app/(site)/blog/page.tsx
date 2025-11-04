import Link from 'next/link';
import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { BlogLeadMagnet } from '@/components/blog-lead-magnet';
import { BlogArchiveTabs } from '@/components/blog-archive-tabs';

export default function BlogPage() {
  // Cornerstone articles data
  const cornerstoneArticles = [
    { slug: 'weekly-fail', title: "Why Weekly Therapy Often Fails (And a 'Bootcamp' Model That Works)", description: "A deconstruction of the five systemic flaws in the traditional model that make it structurally inefficient for solving anxiety." },
    { slug: 'why-positive-thinking-fails', title: "Why 'Positive Thinking' Fails: The Truth About Your Brain's Panic Alarm", description: "The core neuroscientific argument for our hardware-first approach, explaining the 'Faulty Smoke Alarm' principle." },
    { slug: 'Not-a-Character-Flaw', title: "Not a Character Flaw: A New Way to Understand Overwhelming Anxiety", description: "The foundational reframing of anxiety as a technical problem to be solved, not a personal failing to be managed." },
  ];

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* SECTION 1: THE BRIEFING ROOM */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-900 to-sage-700 bg-clip-text text-transparent">
                The Engineer&apos;s Briefing Room
              </span>
            </h1>
            
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-8">
              <strong>Technical Briefings & Deconstructions</strong>
            </p>
            <p className="text-lg text-ink/60 max-w-3xl mx-auto leading-7 mt-3">
              This is our R&D library. A collection of strategic documents, skill blueprints, and system deconstructions 
              that form the intellectual foundation of our protocol.
            </p>
          </div>
        </ScrollReveal>

        <hr className="my-12 border-sage-200" />

        {/* SECTION 2: CORNERSTONE CONTENT */}
        <ScrollReveal delay={100}>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4 text-center">
              Required Reading: The Foundational Briefings
            </h2>
            <p className="text-lg text-ink/60 max-w-2xl mx-auto text-center mb-12 leading-7">
              For new visitors, these three articles provide the core conceptual framework of our entire model. 
              Understanding these principles is the first step.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cornerstoneArticles.map((article, index) => (
                <ScrollReveal key={article.slug} delay={index * 100}>
                  <div className="bg-gradient-to-br from-sage-50 to-sand-50 rounded-2xl shadow-soft ring-1 ring-black/5 p-8 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                    <h4 className="text-xl font-bold text-brand-900 mb-4 leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-ink/70 mb-6 leading-relaxed flex-grow">
                      {article.description}
                    </p>
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-brand-700 font-medium hover:text-brand-900 transition-colors group"
                    >
                      Read the Briefing
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <hr className="my-12 border-sage-200" />

        {/* SECTION 3: LEAD MAGNET */}
        <ScrollReveal delay={200}>
          <div className="mb-16">
            <BlogLeadMagnet />
          </div>
        </ScrollReveal>

        <hr className="my-12 border-sage-200" />

        {/* SECTION 4: THE FULL ARCHIVE */}
        <ScrollReveal delay={300}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-8 text-center">
              The Full R&D Archive
            </h2>
            <p className="text-lg text-ink/60 max-w-2xl mx-auto text-center mb-12 leading-7">
              Explore the complete library, organised by function.
            </p>

            <BlogArchiveTabs />
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
