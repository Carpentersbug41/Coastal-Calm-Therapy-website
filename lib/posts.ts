import { getAllPosts, parseMdxFile, type Post } from './mdx';

export type { Post };

const POSTS_PER_PAGE = 10;

/**
 * Get all posts, sorted by date (newest first)
 */
export function getAllPostsSorted(): Post[] {
  return getAllPosts();
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  return parseMdxFile(slug);
}

/**
 * Get paginated posts
 */
export function getPaginatedPosts(page: number = 1): {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const allPosts = getAllPostsSorted();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

/**
 * Get next and previous posts for navigation
 */
export function getAdjacentPosts(currentSlug: string): {
  prev: Post | null;
  next: Post | null;
} {
  const allPosts = getAllPostsSorted();
  const currentIndex = allPosts.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: allPosts[currentIndex + 1] || null, // Older post
    next: allPosts[currentIndex - 1] || null, // Newer post
  };
}

/**
 * Get the latest N posts
 */
export function getLatestPosts(count: number = 3): Post[] {
  const allPosts = getAllPostsSorted();
  return allPosts.slice(0, count);
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allPosts = getAllPostsSorted();
  const tagSet = new Set<string>();
  
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Get posts by featured location tag
 * @param location - The featured location to filter by
 * @param limit - Optional limit on number of posts to return
 * @returns Posts that have the specified featured location tag, sorted by date (newest first)
 */
export function getPostsByFeaturedLocation(
  location: 'homepage-feature' | 'science-hardware-link' | 'science-software-link',
  limit?: number
): Post[] {
  const allPosts = getAllPostsSorted();
  
  const filteredPosts = allPosts.filter((post) => 
    post.featuredLocations && post.featuredLocations.includes(location)
  );

  return limit ? filteredPosts.slice(0, limit) : filteredPosts;
}

/**
 * Get the most recent post for a featured location
 * Useful for single-article placements like The Science page links
 */
export function getFeaturedPost(
  location: 'homepage-feature' | 'science-hardware-link' | 'science-software-link'
): Post | null {
  const posts = getPostsByFeaturedLocation(location, 1);
  return posts.length > 0 ? posts[0] : null;
}

