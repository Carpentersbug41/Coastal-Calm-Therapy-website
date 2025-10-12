# Coastal Calm Therapy

**Calm. Clarity. Connection.**

A production-ready Next.js 14 website for Coastal Calm Therapy, featuring a blog powered by MDX, contact form, newsletter subscription, and SEO optimization.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
.
├── app/
│   ├── (site)/               # Main site pages
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Homepage
│   │   ├── blog/             # Blog pages
│   │   │   ├── page.tsx      # Blog index (with pagination)
│   │   │   └── [slug]/       # Individual blog posts
│   │   ├── contact/          # Contact form
│   │   └── subscribe/        # Newsletter subscription
│   ├── api/                  # API routes (Option B, commented)
│   │   ├── contact/          # Resend email API
│   │   └── subscribe/        # MailerLite API
│   ├── opengraph-image.tsx   # Dynamic OG image
│   ├── robots.txt/           # Robots.txt route
│   └── sitemap.xml/          # Sitemap route
├── components/               # Reusable components
│   ├── header.tsx           # Navigation + theme toggle
│   ├── footer.tsx           # Footer with links
│   ├── container.tsx        # Layout container
│   ├── theme-toggle.tsx     # Dark mode toggle
│   ├── prose.tsx            # MDX typography wrapper
│   └── post-card.tsx        # Blog post preview card
├── content/
│   └── blog/                # MDX blog posts
│       ├── welcome.mdx
│       └── first-steps.mdx
├── lib/
│   ├── mdx.ts               # MDX parsing utilities
│   ├── posts.ts             # Blog post helpers
│   └── rss.ts               # RSS feed generation
├── public/                   # Static assets
│   ├── favicon.ico
│   └── og-template.png      # OG image (replace with your own)
└── styles/
    └── globals.css          # Global styles + Tailwind
```

## 📝 Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`:

```bash
touch content/blog/my-new-post.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Your Post Title"
date: "2024-10-15"
description: "A brief description of your post"
tags: ["mindfulness", "wellness"]
cover: "/images/my-cover.jpg"  # Optional
---

# Your Post Title

Your content here...
```

3. The post will automatically appear on the blog index and generate a static page.

### Frontmatter Fields

- `title` (required): Post title
- `date` (required): ISO date string (YYYY-MM-DD)
- `description` (required): Meta description and preview text
- `tags` (required): Array of tags
- `cover` (optional): Path to cover image

## ⚙️ Configuration

### Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

#### Required

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
```

#### Optional (API Routes - Option B)

To use Resend for contact forms instead of Formspree:

1. Install Resend: `npm install resend`
2. Uncomment code in `app/api/contact/route.ts`
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_TO=you@yourdomain.com
CONTACT_FROM=noreply@yourdomain.com
```

4. Update `app/(site)/contact/page.tsx` to POST to `/api/contact`

To use MailerLite API instead of embed:

1. Uncomment code in `app/api/subscribe/route.ts`
2. Add to `.env.local`:

```env
MAILERLITE_API_KEY=your_api_key
MAILERLITE_GROUP_ID=your_group_id  # Optional
```

3. Update `app/(site)/subscribe/page.tsx` to use custom form

#### Optional (Analytics)

To enable Plausible Analytics:

1. Uncomment the script tag in `app/(site)/layout.tsx`
2. Add to `.env.local`:

```env
PLAUSIBLE_DOMAIN=yoursite.com
```

### Contact Form Setup (Default: Formspree)

1. Go to [Formspree](https://formspree.io/)
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_ID`)
4. Add to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

### Newsletter Setup (Default: MailerLite Embed)

1. Go to [MailerLite](https://www.mailerlite.com/)
2. Create or edit a signup form
3. Choose "Embedded form" and copy the code
4. Open `app/(site)/subscribe/page.tsx`
5. Replace the placeholder comment with your embed code

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to change the color palette:

```ts
colors: {
  primary: {
    DEFAULT: '#1E3A8A',  // Main brand color
    dark: '#1E40AF',     // Dark mode variant
  },
  secondary: {
    DEFAULT: '#60A5FA',  // Accent color
    dark: '#3B82F6',
  },
  // ...
}
```

### Typography

The site uses Inter font from Google Fonts. To change it:

1. Open `app/(site)/layout.tsx`
2. Import a different font from `next/font/google`
3. Update the `inter` variable and apply it

### Dark Mode

Dark mode is enabled by default with a toggle in the header. The theme preference is stored in localStorage and respects system preferences.

Colors are defined in `tailwind.config.ts` under the `dark:` variant.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Any optional variables you're using
5. Deploy!

Your site will be live at `https://your-project.vercel.app`.

### Custom Domain

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## 📊 SEO & Performance

The site includes:

- ✅ Dynamic metadata for all pages
- ✅ OpenGraph and Twitter Card images
- ✅ Sitemap at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ RSS feed at `/rss.xml`
- ✅ Semantic HTML and accessibility features
- ✅ Static generation for blog posts
- ✅ Optimized images with `next/image`

Target Lighthouse scores (mobile):

- **Performance:** ≥ 90
- **Accessibility:** ≥ 90
- **Best Practices:** ≥ 90
- **SEO:** ≥ 90

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler
```

## 🧪 Testing the Build

Before deploying:

```bash
# Build the project
npm run build

# Check for TypeScript errors
npm run typecheck

# Start production server locally
npm run start
```

## 📚 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + @tailwindcss/typography
- **Content:** MDX with gray-matter
- **Validation:** Zod
- **Markdown:** remark-gfm (GitHub Flavored Markdown)
- **Fonts:** Inter (via next/font/google)

## 🤝 Contributing

This is a personal project template. Feel free to fork and adapt it for your own use!

## 📄 License

MIT License - feel free to use this for your own projects.

## 🐛 Troubleshooting

### Build fails with MDX errors

Make sure all blog posts have valid frontmatter with all required fields (title, date, description, tags).

### Contact form doesn't work

1. Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set in `.env.local`
2. Check that the endpoint starts with `NEXT_PUBLIC_` (required for client-side access)
3. Test your Formspree endpoint directly

### Dark mode doesn't persist

This is expected on first load to avoid hydration mismatch. The theme should persist after the initial page load.

### RSS feed is empty

Make sure you have at least one blog post in `content/blog/` with valid frontmatter.

## 💬 Support

For issues or questions:

1. Check the troubleshooting section above
2. Review the code comments in relevant files
3. Open an issue on GitHub (if applicable)

---

Built with ❤️ for mental wellness and calm living.

