import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

/**
 * Card component for displaying a blog post preview
 */
export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="group relative flex flex-col h-full bg-drift-sand rounded-3xl shadow-soft hover:shadow-soft-lg ring-1 ring-dune-shadow overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Cover image with overlay gradient */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-pebble">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <Image
            src="/images/plant-window.jpg"
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-sea-sage/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Reading time badge */}
        <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-sea-sage">{post.readingTime}</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Meta info */}
        <div className="flex items-center gap-2 text-sm text-soft-clay mb-3">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime={post.date}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-sea-sage mb-3 group-hover:text-golden-shell transition-colors leading-tight">
          <Link 
            href={`/blog/${post.slug}`} 
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sea-sage rounded-lg"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-body mb-4 flex-1 leading-7 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-dune-shadow">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pebble text-sea-sage border border-dune-shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more indicator */}
        <div className="mt-4 flex items-center text-sm font-medium text-sea-sage group-hover:text-golden-shell">
          <span>Read more</span>
          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}
