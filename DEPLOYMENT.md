# Deployment Guide - Coastal Calm Therapy

Quick reference for deploying your site to production.

## Prerequisites

Before deploying, ensure:

- [x] `npm run build` completes successfully
- [x] `npm run typecheck` passes
- [x] All environment variables are configured
- [x] You have a GitHub repository (for Vercel deployment)

## Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Coastal Calm Therapy website"
git branch -M main
git remote add origin https://github.com/yourusername/coastal-calm-therapy.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com/) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next

### Step 3: Set Environment Variables

In your Vercel project settings, add:

**Required:**
```
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
```

**Optional (if using):**
```
RESEND_API_KEY=your_key
CONTACT_TO=you@yourdomain.com
CONTACT_FROM=noreply@yourdomain.com
MAILERLITE_API_KEY=your_key
MAILERLITE_GROUP_ID=your_group
PLAUSIBLE_DOMAIN=your-project.vercel.app
```

### Step 4: Deploy

Click "Deploy" and wait for the build to complete (usually 1-2 minutes).

Your site will be live at `https://your-project.vercel.app`!

## Custom Domain Setup

### In Vercel:

1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `coastalcalmtherapy.com`)
3. Follow the DNS configuration instructions

### Common DNS Providers:

**For Apex Domain (example.com):**
- **Type:** A
- **Name:** @
- **Value:** 76.76.21.21

**For www Subdomain (www.example.com):**
- **Type:** CNAME
- **Name:** www
- **Value:** cname.vercel-dns.com

### After DNS Setup:

1. Wait for DNS propagation (up to 48 hours, usually much faster)
2. Update `NEXT_PUBLIC_SITE_URL` in Vercel to your custom domain
3. Redeploy the site

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Blog posts render properly
- [ ] Contact form submits successfully
- [ ] Subscribe page displays correctly
- [ ] Dark mode toggle works
- [ ] Navigation links are correct
- [ ] SEO meta tags are visible (view page source)
- [ ] `/sitemap.xml` is accessible
- [ ] `/robots.txt` is accessible
- [ ] `/rss.xml` is accessible

## Set Up Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for free account
3. Create a new form
4. Copy your form endpoint: `https://formspree.io/f/YOUR_ID`
5. Add to Vercel environment variables as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
6. Redeploy

## Set Up MailerLite (Newsletter)

### Option A: Embed (Default)

1. Go to [mailerlite.com](https://www.mailerlite.com/)
2. Create or edit a form
3. Choose "Embedded form"
4. Copy the embed code
5. Edit `app/(site)/subscribe/page.tsx`
6. Paste code where the comment indicates
7. Commit and push to deploy

### Option B: API (Advanced)

1. Get API key from MailerLite dashboard
2. Add to Vercel environment variables
3. Uncomment API route code in `app/api/subscribe/route.ts`
4. Update subscribe page to use custom form
5. Commit and push to deploy

## Enable Analytics (Optional)

### Plausible:

1. Sign up at [plausible.io](https://plausible.io/)
2. Add your domain
3. Copy the domain name
4. Add `PLAUSIBLE_DOMAIN` to Vercel environment variables
5. Uncomment script in `app/(site)/layout.tsx`
6. Commit and push to deploy

## Monitoring & Maintenance

### Regular Tasks:

- **Weekly:** Check form submissions
- **Monthly:** Review analytics
- **As needed:** Add new blog posts
- **Quarterly:** Update dependencies (`npm update`)

### Updating the Site:

```bash
# Make your changes locally
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically rebuild and deploy.

## Troubleshooting

### Build Fails on Vercel

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check environment variables are set correctly

### Contact Form Not Working

1. Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set
2. Check Formspree dashboard for submissions
3. Test form on localhost first
4. Ensure environment variable starts with `NEXT_PUBLIC_`

### Images Not Loading

1. Ensure images are in the `public/` directory
2. Use correct paths (e.g., `/images/photo.jpg`, not `./images/photo.jpg`)
3. Check file names match exactly (case-sensitive)

### Dark Mode Issues

Expected behavior: theme may flash on first load. This is normal to prevent hydration mismatch.

## Performance Optimization

After deployment, test with:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (in Chrome DevTools)

Target scores: **90+** across all metrics.

### Common Improvements:

1. Optimize images (use WebP, compress files)
2. Add blog post cover images
3. Enable caching headers (Vercel does this automatically)
4. Minimize custom fonts (Inter is already optimized)

## Support

For deployment issues:

- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **This project:** Review README.md and code comments

---

**Need help?** All configuration is in the code with clear comments. Check the relevant files for detailed instructions.

