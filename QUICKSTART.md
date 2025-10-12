# Quick Start Guide

Get your Coastal Calm Therapy website running in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Environment Variables

Copy the example environment file:

```bash
# Windows (PowerShell)
Copy-Item env-example.txt .env.local

# Mac/Linux
cp env-example.txt .env.local
```

Edit `.env.local` and set at minimum:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORMSPREE_ID
```

## 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Add Your First Blog Post (Optional)

Create `content/blog/my-first-post.mdx`:

```mdx
---
title: "My First Post"
date: "2024-10-15"
description: "This is my first blog post"
tags: ["mindfulness", "getting-started"]
---

# My First Post

Welcome to my blog! This is my first post.

## A Subheading

Here's some content with **bold text** and *italic text*.

- List item 1
- List item 2
- List item 3

Check out the [blog](/blog) for more posts!
```

Refresh `/blog` to see your new post.

## 5. Test the Contact Form

1. Sign up for free at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy the endpoint URL
4. Add it to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. Restart your dev server
6. Test the form at `/contact`

## 6. Customize Your Site

### Change Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: '#1E3A8A',  // Change this
    dark: '#1E40AF',
  },
  // ...
}
```

### Change Site Name

Edit `app/(site)/layout.tsx` and update metadata.

### Add Your Logo

Replace the text logo in `components/header.tsx` with an image:

```tsx
<Link href="/">
  <img src="/logo.png" alt="Coastal Calm Therapy" className="h-8" />
</Link>
```

## Next Steps

- Read the full [README.md](./README.md)
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for going live
- Explore the code comments for detailed explanations
- Customize the design to match your brand

## Common Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check for code issues
npm run typecheck  # Check TypeScript types
```

## Getting Help

- Check the code comments - they explain everything
- Review README.md for detailed documentation
- Search Next.js docs for framework questions
- Review Tailwind CSS docs for styling

---

**Ready to go?** Your site is now running at http://localhost:3000

