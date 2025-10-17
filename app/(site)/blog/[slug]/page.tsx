import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ArticleSchema, BreadcrumbSchema } from '@/components/structured-data';
import { getPostBySlug, getAllPostsSorted, getAdjacentPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

interface PostPageProps {
  params: { slug: string };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPostsSorted();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      ...(post.cover && { images: [post.cover] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(post.cover && { images: [post.cover] }),
    },
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(params.slug);

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app';
  const postUrl = `${siteUrl}/blog/${params.slug}`;

  return (
    <article className="py-12 md:py-20">
      {/* Structured Data for SEO */}
      <ArticleSchema
        title={post.title}
        description={post.description}
        publishDate={post.date}
        authorName="Robert Carpenter"
        imageUrl={post.cover ? `${siteUrl}${post.cover}` : undefined}
        url={postUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Blog', url: `${siteUrl}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-ink/70 hover:text-brand-900 mb-10 group transition-colors"
            >
              <svg
                className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to blog
            </Link>
          </ScrollReveal>

          {/* Post header */}
          <ScrollReveal delay={100}>
            <header className="mb-10">
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-ink/60 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-sage-50 text-sage-700 border border-sage-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-xl text-ink/70 leading-8 border-l-4 border-brand-500 pl-6 py-2">
                {post.description}
              </p>
            </header>
          </ScrollReveal>

          {/* Cover image */}
          {post.cover && (
            <ScrollReveal delay={200}>
              <div className="mb-12 rounded-3xl overflow-hidden shadow-soft-lg ring-1 ring-black/5 group">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Post content */}
          <ScrollReveal delay={300}>
            <div className="bg-white rounded-3xl shadow-soft ring-1 ring-black/5 p-8 md:p-12 mb-12">
              <Prose>
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </Prose>
            </div>
          </ScrollReveal>

          {/* Previous/Next navigation */}
          {(prev || next) && (
            <ScrollReveal delay={400}>
              <nav className="mt-16 pt-10 border-t border-sage-100">
                <h3 className="text-lg font-semibold text-brand-900 mb-6">Continue Reading</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prev && (
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="group p-6 rounded-2xl border-2 border-sage-100 bg-white hover:border-brand-500 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex items-center text-sm text-ink/60 mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                      </div>
                      <div className="font-semibold text-brand-900 group-hover:text-brand-700 transition-colors leading-snug">
                        {prev.title}
                      </div>
                    </Link>
                  )}

                  {next && (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="group p-6 rounded-2xl border-2 border-sage-100 bg-white hover:border-brand-500 hover:shadow-soft transition-all duration-300 text-right md:ml-auto"
                    >
                      <div className="flex items-center justify-end text-sm text-ink/60 mb-2">
                        Next
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="font-semibold text-brand-900 group-hover:text-brand-700 transition-colors leading-snug">
                        {next.title}
                      </div>
                    </Link>
                  )}
                </div>
              </nav>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </article>
  );
}
