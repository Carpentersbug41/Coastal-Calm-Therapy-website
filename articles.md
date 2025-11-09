# Articles Management Guide

## Overview

The articles system is fully dynamic and centralized. All article data is managed from a single source of truth: `lib/articles-data.ts`

## File Structure

```
lib/
  └── articles-data.ts          # Central data source (EDIT THIS FILE)

app/(site)/
  ├── page.tsx                  # Homepage (displays featured articles)
  ├── articles/
  │   ├── page.tsx              # Articles index page
  │   └── [slug]/
  │       └── page.tsx          # Individual article pages
  └── the-science/
      └── page.tsx              # Science page (with article links)

content/
  └── blog/                     # Article MDX files (e.g., weekly-fail.mdx)
```

## How to Change Featured Articles on Homepage

The homepage displays the **"Required Reading"** section with featured articles.

### Step 1: Open the homepage file
```
app/(site)/page.tsx
```

### Step 2: Find the `featuredArticles` array (around line 43)

```typescript
export default function HomePage() {
  // Featured articles for "Required Reading" section
  const featuredArticles = [
    {
      slug: 'weekly-fail',
      title: "Why Weekly Therapy Often Fails (And a 'Bootcamp' Model That Works)",
      description: "A deconstruction of the five systemic flaws..."
    },
    {
      slug: 'why-positive-thinking-fails',
      title: "Why 'Positive Thinking' Fails...",
      description: "The core neuroscientific argument..."
    }
  ];
```

### Step 3: Edit the articles

**To change an article:**
- Edit the `slug` (must match MDX filename)
- Edit the `title` (displays on card)
- Edit the `description` (displays on card)

**To add a third article:**
```typescript
const featuredArticles = [
  {
    slug: 'weekly-fail',
    title: "Why Weekly Therapy Often Fails...",
    description: "..."
  },
  {
    slug: 'why-positive-thinking-fails',
    title: "Why 'Positive Thinking' Fails...",
    description: "..."
  },
  {
    slug: 'Not-a-Character-Flaw',
    title: "Not a Character Flaw...",
    description: "..."
  }
];
```

**To change the order:**
Just reorder the objects in the array

## How to Add New Articles

### Step 1: Add article data to `lib/articles-data.ts`

```typescript
export const cornerstoneArticles: Article[] = [
  // ... existing articles ...
  {
    slug: 'your-new-article-slug',
    title: 'Your Article Title Here',
    description: 'A brief description of what this article covers.'
  }
];
```

**Important:**
- `slug` must match your MDX filename (e.g., `your-new-article-slug.mdx`)
- `slug` becomes the URL: `/articles/your-new-article-slug`

### Step 2: Create the article content file

Create a new file in `content/blog/` with the matching slug:
```
content/blog/your-new-article-slug.mdx
```

### Step 3: Add frontmatter to your MDX file

```mdx
---
title: 'Your Article Title Here'
description: 'A brief description of what this article covers.'
date: '2025-01-15'
category: 'Core Concepts'
readingTime: '8 min read'
---

Your article content here...
```

## How to Edit Existing Articles

### Change article metadata (title, description):
Edit `lib/articles-data.ts`

### Change article content:
Edit the corresponding MDX file in `content/blog/`

### Example:
To edit "Why Weekly Therapy Fails":
1. **Metadata:** Edit `lib/articles-data.ts` (slug: 'weekly-fail')
2. **Content:** Edit `content/blog/weekly-fail.mdx`

## Managing Skill Blueprints (Science Page Links)

The Science page references skill blueprint articles. To change these:

### Edit `lib/articles-data.ts`:

```typescript
export const skillBlueprints = {
  somaticAnchor: {
    slug: 'somatic-anchor-blueprint',
    title: 'How to Install a Somatic Anchor',
    description: 'A detailed breakdown of a foundational hardware-level tool.'
  },
  cognitivePostMortem: {
    slug: 'cognitive-post-mortem-briefing',
    title: 'The Cognitive Post-Mortem',
    description: 'The full deconstruction of this precision cognitive method.'
  }
};
```

**To add a new skill blueprint:**
1. Add a new property to `skillBlueprints`
2. Create the corresponding MDX file
3. Reference it in the Science page using the property name

## Quick Reference: Current Articles

### Cornerstone Articles (All)
1. **weekly-fail** - "Why Weekly Therapy Often Fails"
2. **why-positive-thinking-fails** - "Why 'Positive Thinking' Fails"
3. **Not-a-Character-Flaw** - "Not a Character Flaw"

### Featured on Homepage (Currently)
1. weekly-fail
2. why-positive-thinking-fails

### Skill Blueprints (Science Page)
1. somatic-anchor-blueprint
2. cognitive-post-mortem-briefing

## Common Tasks

### Add a third featured article to homepage:

Open `app/(site)/page.tsx` and add a third object to the array:

```typescript
const featuredArticles = [
  {
    slug: 'weekly-fail',
    title: "Why Weekly Therapy Often Fails...",
    description: "..."
  },
  {
    slug: 'why-positive-thinking-fails',
    title: "Why 'Positive Thinking' Fails...",
    description: "..."
  },
  {
    slug: 'Not-a-Character-Flaw', // Add this
    title: "Not a Character Flaw...",
    description: "..."
  }
];
```

### Change the order of featured articles:

Open `app/(site)/page.tsx` and reorder the objects in the array

### Remove an article from cornerstone list:
Delete or comment out the article object in `cornerstoneArticles` array

### Update article title site-wide:
Just edit the `title` field in `lib/articles-data.ts` - it updates everywhere automatically

## Where Articles Appear

| Location | Data Source | File to Edit |
|----------|-------------|--------------|
| Homepage `/` | Local `featuredArticles` array | `app/(site)/page.tsx` (line ~43) |
| Articles Index `/articles` | `cornerstoneArticles` from data file | `lib/articles-data.ts` |
| Science Page `/the-science` | `skillBlueprints` from data file | `lib/articles-data.ts` |

## Benefits of This System

✅ **Clear structure** - Easy to find and edit articles
✅ **Type-safe** - TypeScript catches errors
✅ **Dynamic rendering** - Articles render from data automatically
✅ **Flexible** - Homepage can be customized independently
✅ **No hardcoding** - Add/remove articles by editing arrays

## Troubleshooting

**Article not showing up?**
- Check the `slug` matches the MDX filename exactly
- Check the article is in the correct array (`cornerstoneArticles` or `featuredArticles`)
- Restart the dev server: `npm run dev`

**Link returns 404?**
- Ensure MDX file exists in `content/blog/` with matching slug
- Check MDX file has valid frontmatter

**Changes not appearing?**
- Clear Next.js cache: Delete `.next` folder
- Restart dev server

## Need Help?

- **Homepage featured articles:** `app/(site)/page.tsx` (line ~43 for data, line ~141 for rendering)
- **Articles index page data:** `lib/articles-data.ts` (cornerstone articles)
- **Science page skill blueprints:** `lib/articles-data.ts` (skillBlueprints object)
- **Article content files:** `content/blog/*.mdx`
- **Articles index page:** `app/(site)/articles/page.tsx`

