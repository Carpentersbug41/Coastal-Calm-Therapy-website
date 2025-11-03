import Link from 'next/link';
import { Container } from '@/components/container';
import { PostCard } from '@/components/post-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { BlogSubscribe } from '@/components/blog-subscribe';
import { getPaginatedPosts } from '@/lib/posts';

interface BlogPageProps {
  searchParams: { page?: string };
}

export const metadata = {
  title: 'From the Lab: Insights on Anxiety Engineering',
  description:
    'Research and development insights from The Anxiety Protocol. Deconstructing the flawed traditional model, explaining our engineering principles, and demonstrating the skills that solve anxiety.',
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPages, hasNextPage, hasPrevPage } = getPaginatedPosts(currentPage);

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-6">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-sage-700">Research & Development</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-900 to-sage-700 bg-clip-text text-transparent">
                From the Lab: Insights on Anxiety Engineering
              </span>
            </h1>
            
            <p className="text-xl text-ink/70 max-w-3xl mx-auto leading-8">
              A library of intellectual property. Deconstructing the traditional therapy model, 
              explaining the engineering principles behind our protocol, and demonstrating the skills that solve anxiety.
            </p>
          </div>
        </ScrollReveal>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 100}>
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <ScrollReveal>
                <div className="flex justify-center items-center gap-4">
                  {hasPrevPage && (
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-white border-2 border-brand-500 text-brand-900 font-medium hover:bg-brand-50 hover:scale-105 transition-all duration-300 shadow-soft"
                    >
                      <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </Link>
                  )}

                  <span className="px-4 py-2 text-ink/70 font-medium">
                    Page {currentPage} of {totalPages}
                  </span>

                  {hasNextPage && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-medium hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
                    >
                      Next
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* Subscribe section */}
            <ScrollReveal delay={200}>
              <div className="max-w-4xl mx-auto">
                <BlogSubscribe />
              </div>
            </ScrollReveal>
          </>
        ) : (
          <ScrollReveal>
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <p className="text-xl text-ink/70">
                No posts found. Check back soon for new content!
              </p>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </div>
  );
}
