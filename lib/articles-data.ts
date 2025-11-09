/**
 * Cornerstone Articles Data
 * These are the foundational briefings from "The Briefing Room"
 * that are featured on the Articles page as required reading.
 * 
 * NOTE: This is legacy static data maintained for the Articles page.
 * For dynamic featured content on other pages, articles now use the
 * "featuredLocations" field in their MDX frontmatter:
 * 
 * - 'homepage-feature': Featured on homepage "Required Reading" section
 * - 'science-hardware-link': Featured in The Science page hardware section
 * - 'science-software-link': Featured in The Science page software section
 * 
 * See lib/posts.ts for query functions: getPostsByFeaturedLocation() and getFeaturedPost()
 */

export interface Article {
  slug: string;
  title: string;
  description: string;
}

export const cornerstoneArticles: Article[] = [
  {
    slug: 'weekly-fail',
    title: "Why Weekly Therapy Often Fails (And a 'Bootcamp' Model That Works)",
    description: "A deconstruction of the five systemic flaws in the traditional model that make it structurally inefficient for solving anxiety."
  },
  {
    slug: 'why-positive-thinking-fails',
    title: "Why 'Positive Thinking' Fails: The Truth About Your Brain's Panic Alarm",
    description: "The core neuroscientific argument for our hardware-first approach, explaining the 'Faulty Smoke Alarm' principle."
  },
  {
    slug: 'Not-a-Character-Flaw',
    title: "Not a Character Flaw: A New Way to Understand Overwhelming Anxiety",
    description: "The foundational reframing of anxiety as a technical problem to be solved, not a personal failing to be managed."
  }
];

