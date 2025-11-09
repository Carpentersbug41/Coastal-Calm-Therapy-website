import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { z } from 'zod';

// Frontmatter schema for validation
export const FrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(), // ISO date string
  description: z.string(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  // Featured location tags for dynamic content integration
  featuredLocations: z.array(z.enum(['homepage-feature', 'science-hardware-link', 'science-software-link'])).optional().default([]),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export interface Post extends Frontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all MDX files from the content/blog directory
 */
export function getAllMdxFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  
  const files = fs.readdirSync(CONTENT_DIR);
  return files.filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

/**
 * Read and parse a single MDX file
 */
export function parseMdxFile(slug: string): Post | null {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const altFilePath = path.join(CONTENT_DIR, `${slug}.md`);
    
    let fileContents: string;
    
    if (fs.existsSync(filePath)) {
      fileContents = fs.readFileSync(filePath, 'utf8');
    } else if (fs.existsSync(altFilePath)) {
      fileContents = fs.readFileSync(altFilePath, 'utf8');
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);
    
    // Validate frontmatter
    const validatedData = FrontmatterSchema.parse(data);
    
    // Calculate reading time
    const { text: readingTimeText } = readingTime(content);

    return {
      slug,
      ...validatedData,
      readingTime: readingTimeText,
      content,
    };
  } catch (error) {
    console.error(`Error parsing MDX file ${slug}:`, error);
    return null;
  }
}

/**
 * Get all posts from the content directory
 */
export function getAllPosts(): Post[] {
  const files = getAllMdxFiles();
  
  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      return parseMdxFile(slug);
    })
    .filter((post): post is Post => post !== null)
    // Sort by date descending (newest first)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

