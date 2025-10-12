# How the Blog System Works

## Overview

This website uses a **file-based blog system** with **no backend database**. Blog posts are simply MDX files in the `content/blog/` directory. Next.js automatically discovers, parses, and displays them.

## Adding a New Blog Post

### Quick Steps

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter metadata at the top
3. Write your content in Markdown
4. Save the file - it automatically appears on the site!

### File Naming

The filename becomes the URL slug:
- `managing-anxiety.mdx` → `/blog/managing-anxiety`
- `first-steps.mdx` → `/blog/first-steps`

**Rules:**
- Use lowercase and hyphens (kebab-case)
- No spaces or special characters
- Use descriptive names that match the content

### Required Frontmatter Structure

Every blog post MUST start with frontmatter (metadata) between `---` markers:

```yaml
---
title: "Your Blog Post Title"
date: "2024-10-12"
description: "A brief description of the post (used for SEO and previews)"
tags: ["tag1", "tag2", "tag3"]
cover: "/images/your-image.jpg"
---
```

**Frontmatter Fields:**

| Field | Required | Format | Example |
|-------|----------|--------|---------|
| `title` | ✅ Yes | String | `"Managing Anxiety: 7 Evidence-Based Techniques"` |
| `date` | ✅ Yes | YYYY-MM-DD | `"2024-10-12"` |
| `description` | ✅ Yes | String (1-2 sentences) | `"Discover practical strategies..."` |
| `tags` | ✅ Yes | Array of strings | `["anxiety", "mental health", "CBT"]` |
| `cover` | ❌ No | Image path | `"/images/rockpool.jpg"` |

### Content Writing (Markdown)

After the frontmatter, write your content using standard Markdown:

```markdown
# Main Heading

Your introduction paragraph here.

## Section Heading

Content with **bold** and *italic* text.

### Subsection

- Bullet point 1
- Bullet point 2

1. Numbered list
2. Second item

[Link text](https://example.com)
```

**MDX Features:**
- Full Markdown support (headings, lists, links, images, etc.)
- React components can be embedded (though none are currently imported)
- Reading time is automatically calculated

## How It Works Under the Hood

### File Structure

```
content/blog/           # All blog posts live here
├── welcome.mdx
├── first-steps.mdx
└── managing-anxiety.mdx
```

### System Flow

1. **Discovery:** `lib/mdx.ts` scans `content/blog/` for all `.mdx` and `.md` files
2. **Parsing:** Each file is read and frontmatter is validated using Zod schema
3. **Processing:** Reading time is calculated, slugs are extracted from filenames
4. **Sorting:** Posts are sorted by date (newest first) in `lib/posts.ts`
5. **Rendering:** Blog pages automatically display the content

### Key Files

| File | Purpose |
|------|---------|
| `lib/mdx.ts` | Core MDX file reading and parsing |
| `lib/posts.ts` | Post retrieval, sorting, pagination, and filtering |
| `app/(site)/blog/page.tsx` | Blog listing page |
| `app/(site)/blog/[slug]/page.tsx` | Individual blog post page |
| `components/post-card.tsx` | Blog post preview cards |

### Automatic Features

The system automatically provides:

✅ **Reading time calculation** - Based on word count  
✅ **Date sorting** - Newest posts appear first  
✅ **Pagination** - 10 posts per page  
✅ **Tag extraction** - All unique tags from all posts  
✅ **Frontmatter validation** - Ensures required fields are present  
✅ **SEO metadata** - Title and description for each post  
✅ **URL generation** - Clean URLs from filenames  

## Images for Blog Posts

### Adding a Cover Image

1. Add your image to `public/images/`
2. Reference it in frontmatter: `cover: "/images/your-image.jpg"`

### Available Images

Current unused images for new blog posts:
- `/images/wall.jpg`
- `/images/plant-window.jpg`
- `/images/plant-detail.jpg`
- `/images/hero-coastal.jpg`

Already used:
- `/images/pier.jpg` (welcome.mdx)
- `/images/plant-laptop-book.jpg` (first-steps.mdx)
- `/images/rockpool.jpg` (managing-anxiety.mdx)

### Image Guidelines

- Optimized for web (JPG/PNG/WebP)
- Recommended size: 1200x630px for social sharing
- Keep file sizes under 500KB when possible
- Use descriptive filenames

## Example: Complete Blog Post

**File:** `content/blog/coping-with-stress.mdx`

```markdown
---
title: "5 Simple Ways to Cope with Daily Stress"
date: "2024-10-15"
description: "Practical, evidence-based strategies to manage everyday stress and build resilience in your daily life."
tags: ["stress management", "self-care", "mental health", "wellness"]
cover: "/images/wall.jpg"
---

# 5 Simple Ways to Cope with Daily Stress

Stress is a natural part of life, but chronic stress can take a toll on your mental and physical health...

## 1. Practice Deep Breathing

When you feel stressed, your body enters "fight or flight" mode...

**How to do it:**
1. Find a quiet space
2. Breathe in for 4 counts
3. Hold for 4 counts
4. Exhale for 4 counts

## 2. Move Your Body

Physical activity is one of the most effective stress relievers...

[Continue with your content...]
```

## Best Practices

### Content Guidelines

1. **Write for your audience** - Coastal Calm Therapy focuses on mental health, mindfulness, and wellness
2. **Use clear headings** - Break content into scannable sections
3. **Include actionable advice** - Provide practical tips, not just theory
4. **Cite evidence** - Reference research when making claims
5. **Write compassionately** - Use a warm, supportive tone
6. **Keep it accessible** - Avoid jargon, explain technical terms

### SEO Optimization

- **Title:** 50-60 characters, include main keyword
- **Description:** 150-160 characters, compelling and descriptive
- **Tags:** 3-5 relevant tags per post
- **Headings:** Use proper hierarchy (H1 → H2 → H3)
- **Images:** Always include alt text in Markdown: `![Alt text](image.jpg)`

### Consistency

- Use consistent date format: `YYYY-MM-DD`
- Follow the same writing tone across posts
- Use similar content structure (intro → sections → conclusion)
- Maintain tag consistency (e.g., "mindfulness" not "mindfulness practices")

## Managing Posts

### Editing a Post

1. Open the `.mdx` file in `content/blog/`
2. Make your changes
3. Save - changes appear immediately in development

### Deleting a Post

1. Delete or rename the `.mdx` file in `content/blog/`
2. The post disappears from the site automatically

### Drafts

To create a draft post without publishing:
- Create the file with a future date, OR
- Move it outside the `content/blog/` directory temporarily

## Common Questions

**Q: Do I need to rebuild the site after adding a post?**  
A: In development (npm run dev), changes appear immediately. For production, you'll need to rebuild.

**Q: Can I use HTML in MDX files?**  
A: Yes, MDX supports HTML elements, but Markdown is preferred for consistency.

**Q: How do I add custom React components to posts?**  
A: You'd need to import them in the MDX file or configure them globally in the MDX renderer.

**Q: What happens if I forget required frontmatter?**  
A: The post won't display. Check the console for validation errors from Zod schema.

**Q: Can I schedule posts for future publication?**  
A: Not automatically. You can set a future date, but the post will still be visible. You'd need to add date filtering logic.

## Troubleshooting

**Post doesn't appear:**
- Check filename has `.mdx` or `.md` extension
- Verify frontmatter is properly formatted
- Ensure all required fields are present
- Look for syntax errors in frontmatter YAML

**Images don't load:**
- Verify image exists in `public/images/`
- Check path starts with `/images/` (not `./` or relative)
- Ensure filename matches exactly (case-sensitive)

**Formatting looks wrong:**
- Check Markdown syntax
- Ensure proper spacing around headings and lists
- Verify code blocks use proper triple-backtick syntax

## File-Based System Benefits

✅ **Simple** - No database setup or management  
✅ **Fast** - Static generation, no database queries  
✅ **Version Control** - Posts tracked in Git  
✅ **Portable** - Easy to backup and migrate  
✅ **Developer-Friendly** - Write in your code editor  
✅ **No Backend** - Fewer moving parts, less to break  

## Future Enhancements (Ideas)

Potential improvements to consider:
- Search functionality across posts
- Category/tag filtering on blog page
- Related posts suggestions
- RSS feed improvements
- Comments system integration
- Draft mode with date-based visibility
- Author management for multiple writers

---

**Last Updated:** October 12, 2024

