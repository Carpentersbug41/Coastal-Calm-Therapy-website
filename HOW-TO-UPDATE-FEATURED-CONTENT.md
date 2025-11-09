# Quick Guide: How to Update Featured Content

## For Marketing Team - No Developer Required! 🎯

This guide shows you how to control which articles appear as featured content across the site by simply editing article files.

---

## The Three Featured Locations

### 1. **Homepage "Required Reading"** 
Shows the 2 most recent articles you tag as essential reading for new visitors.

### 2. **The Science Page - Hardware Link**
Shows 1 article about body-based (somatic) tools in the hardware section.

### 3. **The Science Page - Software Link**
Shows 1 article about mind-based (cognitive) tools in the software section.

---

## How to Make an Article Featured

### Step 1: Open the Article File
All articles are in: `content/blog/`

Example: `content/blog/weekly-fail.mdx`

### Step 2: Find the Frontmatter
At the top of every article, you'll see a section between `---` marks:

```yaml
---
title: "Article Title"
date: "2026-10-20"
description: "Article description"
tags: ["therapy", "anxiety"]
cover: "/images/image.jpg"
---
```

### Step 3: Add the Featured Location Tag

Add this line to the frontmatter (or modify if it already exists):

```yaml
featuredLocations: ["homepage-feature"]
```

**Available Tags:**
- `homepage-feature` - Shows on homepage
- `science-hardware-link` - Shows in Science page hardware section
- `science-software-link` - Shows in Science page software section

### Step 4: Save the File
That's it! The website will automatically update.

---

## Examples

### Make an Article Featured on Homepage Only:
```yaml
---
title: "Why Therapy Fails"
date: "2026-10-20"
description: "..."
tags: ["therapy"]
featuredLocations: ["homepage-feature"]
---
```

### Make an Article Featured in Multiple Places:
```yaml
---
title: "Somatic Anchoring"
date: "2026-10-20"
description: "..."
tags: ["somatic therapy"]
featuredLocations: ["homepage-feature", "science-hardware-link"]
---
```

### Remove Featured Status:
Delete the `featuredLocations` line entirely, or change it to:
```yaml
featuredLocations: []
```

---

## Rules to Remember

### Homepage "Required Reading":
- ✅ Can have many articles tagged, but only the **2 most recent** will show
- ✅ Articles are sorted by their `date` field (newest first)
- ✅ To rotate featured articles, just tag new ones and untag old ones

### Science Page Links:
- ✅ Each location shows only **1 article** (the most recent)
- ✅ To change which article shows, tag the new one and untag the old one
- ✅ Use `science-hardware-link` for somatic/body tools
- ✅ Use `science-software-link` for cognitive/mind tools

---

## Current Featured Articles (as of Nov 9, 2025)

### Homepage:
1. "Why Weekly Therapy Often Fails" (`weekly-fail.mdx`)
2. "Why 'Positive Thinking' Fails" (`why-positive-thinking-fails.mdx`)

### Science Page - Hardware:
- "How to Install a Somatic Anchor" (`somatic-anchor-blueprint.mdx`)

### Science Page - Software:
- "The Cognitive Post-Mortem" (`cognitive-post-mortem-briefing.mdx`)

---

## Troubleshooting

**Q: I tagged an article but it's not showing up**
- Check that the `featuredLocations` tag is spelled exactly right (case-sensitive)
- Verify the file is saved
- Refresh your browser (Ctrl+F5 to force refresh)

**Q: The wrong article is showing**
- Check the `date` field - newer dates take priority
- Make sure only one article has the tag (for Science page links)

**Q: I want to preview changes before publishing**
- Test on your local development server first
- Ask a developer to help set up a staging environment

---

## Quick Reference: Tag Names

Copy and paste these exactly as shown:

```yaml
featuredLocations: ["homepage-feature"]
featuredLocations: ["science-hardware-link"]
featuredLocations: ["science-software-link"]
```

Or combine them:
```yaml
featuredLocations: ["homepage-feature", "science-hardware-link"]
```

---

**Questions?** Contact the development team or refer to `DYNAMIC-CONTENT-IMPLEMENTATION.md` for technical details.

