# Deploying to Vercel - Complete Guide

## 🚀 Quick Start (First Time Setup)

### Prerequisites
- ✅ You have a GitHub account
- ✅ Your code is ready to deploy
- ✅ You have a Vercel account (free: https://vercel.com/signup)

---

## Step 1: Push Your Code to GitHub

### Option A: If you already have a GitHub repo
```bash
# Check current status
git status

# Stage all changes
git add .

# Commit your changes
git commit -m "Add conversion optimizations and SEO improvements"

# Push to GitHub
git push origin main
```

### Option B: If this is a new repo
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit with conversion optimizations"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.

---

## Step 2: Connect to Vercel

### Method 1: Via Vercel Dashboard (Easiest)

1. **Go to Vercel:** https://vercel.com
2. **Sign in** (use GitHub for easiest integration)
3. **Click "Add New..."** → **"Project"**
4. **Import your GitHub repository:**
   - You'll see a list of your repos
   - Click **"Import"** next to your project
5. **Configure project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** Auto-detected (`next build`)
   - **Output Directory:** Auto-detected (`.next`)

6. **Add Environment Variables** (IMPORTANT):
   ```
   NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
   ```
   *(You'll update this with your actual domain later)*

7. **Click "Deploy"**

🎉 **That's it!** Vercel will build and deploy your site.

---

## Step 3: Configure Environment Variables

After first deployment, add these environment variables in Vercel:

### Required Variables

1. **Go to:** Your Project → Settings → Environment Variables

2. **Add these:**

```bash
# Site URL (update after you get your domain)
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.vercel.app

# Email service (when you set it up)
EMAIL_SERVICE_API_KEY=your_sendgrid_or_ses_key
CONTACT_EMAIL=your@email.com
FROM_EMAIL=noreply@yourdomain.com

# Optional: If using Formspree for contact form
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: If using Plausible Analytics
PLAUSIBLE_DOMAIN=yourdomain.com
```

3. **Click "Save"** after each variable

---

## Step 4: Set Up Custom Domain (Optional)

### If you have a custom domain:

1. **Go to:** Your Project → Settings → Domains
2. **Add your domain:** `anxietyprotocol.com` (example)
3. **Follow Vercel's instructions** to update your DNS:
   - **A Record:** Point to Vercel's IP
   - **CNAME:** Point `www` to `cname.vercel-dns.com`
4. **Wait 24-48 hours** for DNS propagation

### Update environment variable:
```bash
NEXT_PUBLIC_SITE_URL=https://anxietyprotocol.com
```

---

## 🔄 Updating Your Site (Future Deployments)

### Every time you make changes:

```bash
# 1. Make your changes to the code

# 2. Test locally
npm run dev
# Visit http://localhost:3000 and verify changes

# 3. Commit changes
git add .
git commit -m "Description of what you changed"

# 4. Push to GitHub
git push origin main
```

**That's it!** Vercel automatically:
- ✅ Detects the push
- ✅ Builds your site
- ✅ Deploys to production
- ✅ Usually takes 1-3 minutes

---

## 📊 Monitoring Deployments

### View deployment status:

1. **Vercel Dashboard:** https://vercel.com/dashboard
2. **Your Project** → **Deployments** tab
3. **You'll see:**
   - ✅ Green checkmark = Successful
   - 🔄 Building = In progress
   - ❌ Red X = Failed (click for error logs)

### Preview deployments:
- Every push creates a **preview URL**
- Test changes before they go live
- Share preview links with others

---

## 🔧 Troubleshooting

### Build fails?

**Check the build logs in Vercel:**

1. Go to **Deployments**
2. Click the **failed deployment**
3. Click **"View Build Logs"**
4. Look for errors (usually TypeScript or missing files)

**Common issues:**

#### Missing environment variables
```
Error: NEXT_PUBLIC_SITE_URL is not defined
```
**Fix:** Add the variable in Vercel settings

#### Build timeout
```
Error: Build exceeded maximum time
```
**Fix:** Contact Vercel support or optimize build

#### Module not found
```
Error: Cannot find module 'X'
```
**Fix:** Run `npm install` locally, commit `package-lock.json`

---

## 🎯 Post-Deployment Checklist

After your first deployment:

### 1. Test Core Functionality
- [ ] Visit your Vercel URL
- [ ] Test `/apply` page loads
- [ ] Test form submission
- [ ] Check mobile responsive design
- [ ] Verify all images load
- [ ] Test all internal links

### 2. Update Sitemap
- [ ] Update `NEXT_PUBLIC_SITE_URL` in environment variables
- [ ] Redeploy (push a change to trigger rebuild)
- [ ] Visit `https://yoursite.com/sitemap.xml`
- [ ] Verify all URLs are correct

### 3. Submit to Google
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add your property (domain)
- [ ] Submit sitemap: `https://yoursite.com/sitemap.xml`

### 4. Test Analytics (if configured)
- [ ] GA4 tracking loads on all pages
- [ ] Test form submission event fires
- [ ] Check Vercel Analytics dashboard

### 5. Performance Check
- [ ] Run Lighthouse audit: https://pagespeed.web.dev
- [ ] Target scores:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

---

## 🚦 Vercel Features You Should Know

### 1. Automatic HTTPS
- ✅ SSL certificate automatically provisioned
- ✅ Renews automatically
- ✅ No configuration needed

### 2. Edge Network (CDN)
- ✅ Your site is cached globally
- ✅ Fast loading everywhere
- ✅ Automatic cache invalidation

### 3. Preview Deployments
- ✅ Every branch gets its own URL
- ✅ Test before merging to main
- ✅ Share with clients/team

### 4. Environment Variables
- ✅ Different values for production/preview
- ✅ Encrypted and secure
- ✅ Available at build time and runtime

### 5. Analytics
- ✅ Built-in Web Vitals tracking
- ✅ See Core Web Vitals scores
- ✅ Free tier available

---

## 📝 Development Workflow

### Recommended workflow:

```bash
# 1. Create a new branch for features
git checkout -b feature/new-blog-post

# 2. Make changes and test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Add new blog post"
git push origin feature/new-blog-post

# 4. Vercel creates a preview deployment
# You get a unique URL like: feature-new-blog-post-abc123.vercel.app

# 5. Test the preview URL

# 6. If good, merge to main on GitHub
# This automatically deploys to production
```

---

## 🔐 Security Best Practices

### 1. Environment Variables
- ✅ Never commit API keys to git
- ✅ Use Vercel's environment variables
- ✅ Keep `.env.local` in `.gitignore`

### 2. API Routes
- ✅ Validate all form inputs
- ✅ Rate limit form submissions
- ✅ Use CORS when needed

### 3. Domain
- ✅ Enable Vercel's firewall (free)
- ✅ Set up DDoS protection
- ✅ Use custom domain with SSL

---

## 💰 Pricing (Vercel)

### Hobby Plan (FREE) ✨
- ✅ Perfect for your use case
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Analytics (basic)
- ✅ Edge network
- ❌ No team collaboration
- ❌ Limited build minutes (6000/month - plenty!)

### Pro Plan ($20/month)
Only needed if you:
- Need team collaboration
- Exceed free bandwidth
- Want advanced analytics
- Need commercial usage

**For a single therapy practice website, FREE is perfect!**

---

## 🎬 Quick Reference Commands

```bash
# Local development
npm run dev          # Start dev server
npm run build        # Test production build
npm run start        # Test production locally

# Git workflow
git status           # Check what changed
git add .            # Stage all changes
git commit -m "..."  # Commit with message
git push origin main # Deploy to production

# Check deployment
vercel               # Deploy from CLI (optional)
vercel --prod        # Deploy to production directly
```

---

## 🆘 Getting Help

### Vercel Documentation
- Main docs: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs

### Common Issues
- Build errors: Check build logs in dashboard
- Environment variables: Settings → Environment Variables
- Domain issues: Settings → Domains
- Performance: Check Vercel Analytics

### Support
- Community: https://github.com/vercel/vercel/discussions
- Twitter: @vercel
- Email: support@vercel.com (Pro plans)

---

## ✅ You're All Set!

Your deployment checklist:

1. ✅ Push code to GitHub
2. ✅ Connect GitHub to Vercel
3. ✅ Add environment variables
4. ✅ Deploy!
5. ✅ Test the live site
6. ✅ Submit sitemap to Google
7. ✅ Monitor analytics

**Future updates:** Just `git push` and Vercel handles the rest!

---

## 🎉 Bonus: Vercel CLI (Optional)

Install for more control:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from terminal
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs
```

**But honestly, GitHub integration is easier!** The CLI is optional.

---

**Questions?** Everything should deploy smoothly since your code is already optimized for production!

