import Link from 'next/link';
import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { BlogLeadMagnet } from '@/components/blog-lead-magnet';
import { BlogArchiveTabs } from '@/components/blog-archive-tabs';
import { cornerstoneArticles } from '@/lib/articles-data';

export default function ArticlesPage() {

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* SECTION 1: THE BRIEFING ROOM */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sea-sage to-seafoam bg-clip-text text-transparent">
                The Briefing Room
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-sea-sage max-w-3xl mx-auto leading-snug mb-4">
              The Clinical Library for the Intelligent Client.
            </h2>
            <p className="text-lg text-olive-grey/80 max-w-3xl mx-auto leading-8">
              This is the intellectual and strategic core of our protocol, made transparent for you. It is a library of our core research, clinical models, and deconstructed skills. We operate on the principle that a fully-informed client is the most capable partner in their own success.
            </p>
          </div>
        </ScrollReveal>

        <hr className="my-12 border-sage-200" />

        {/* SECTION 2: CORNERSTONE CONTENT */}
        <ScrollReveal delay={100}>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-4 text-center">
              Foundational Briefings: Required Reading
            </h2>
            <p className="text-lg text-olive-grey/70 max-w-2xl mx-auto text-center mb-12 leading-7">
              To fully understand our model, begin with our foundational manifesto. The subsequent briefings provide deeper analysis of the core principles.
            </p>
            
            <div className="space-y-8">
              {cornerstoneArticles.map((article, index) => (
                <ScrollReveal key={article.slug} delay={index * 100}>
                  {index === 0 ? (
                    // Special prominent styling for the manifesto (first article)
                    <div className="bg-gradient-to-br from-pebble to-warm-linen rounded-2xl shadow-soft-lg ring-2 ring-sea-sage/30 p-10 md:p-12 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="inline-block px-3 py-1 bg-sea-sage text-white text-sm font-bold rounded-full">
                          FOUNDATIONAL MANIFESTO
                        </span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-sea-sage mb-4 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-base md:text-lg text-olive-grey/80 mb-6 leading-relaxed">
                        {article.description}
                      </p>
                      <Link 
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center justify-center rounded-2xl px-8 py-4 bg-sea-sage text-white font-medium shadow-soft hover:shadow-soft-lg hover:bg-golden-shell hover:text-olive-grey hover:scale-105 transition-all duration-300 group"
                      >
                        Read the Manifesto
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  ) : (
                    // Standard grid for other articles
                    <div></div>
                  )}
                </ScrollReveal>
              ))}
              
              {/* Supporting Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {cornerstoneArticles.slice(1).map((article, index) => (
                  <ScrollReveal key={article.slug} delay={(index + 1) * 100}>
                    <div className="bg-gradient-to-br from-pebble to-warm-linen rounded-2xl shadow-soft ring-1 ring-black/5 p-8 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      <h4 className="text-xl font-bold text-sea-sage mb-4 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-olive-grey/80 mb-6 leading-relaxed flex-grow">
                        {article.description}
                      </p>
                      <Link 
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center text-sea-sage font-medium hover:text-golden-shell transition-colors group"
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

        {/* SECTION 4: THE CLINICAL ARCHIVE */}
        <ScrollReveal delay={300}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-sea-sage mb-8 text-center">
              The Clinical Archive
            </h2>
            <p className="text-lg text-olive-grey/70 max-w-2xl mx-auto text-center mb-12 leading-7">
              Explore the complete library, organized by clinical function.
            </p>

            <BlogArchiveTabs />
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}

