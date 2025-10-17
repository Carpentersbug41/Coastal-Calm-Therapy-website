# Pre-Deployment Checklist ✅

Run through this before your first deployment:

## Code Readiness

- [x] All linter errors fixed (no red squiggles)
- [x] No TypeScript errors
- [x] All imports correct
- [x] No unused files

## Environment Setup

- [ ] Created `.env.local` with your local settings
- [ ] Added `.env.local` to `.gitignore` ✅ (should already be there)
- [ ] Know which environment variables you'll need in Vercel:
  - `NEXT_PUBLIC_SITE_URL` (required)
  - `EMAIL_SERVICE_API_KEY` (when ready)
  - `CONTACT_EMAIL` (when ready)

## Git Status

```bash
# Run this command:
git status

# You should see your changes ready to commit
```

- [ ] All changes committed
- [ ] Pushed to GitHub main branch

## Test Locally (Important!)

```bash
# Run a production build locally first:
npm run build

# If this succeeds, deployment will work!
```

- [ ] Build completes without errors
- [ ] No warnings about missing files
- [ ] No TypeScript errors

## Quick Test

```bash
# Start production server locally:
npm run build
npm run start

# Visit http://localhost:3000 and check:
```

- [ ] Homepage loads
- [ ] `/apply` page loads
- [ ] `/blog` page loads
- [ ] Images appear
- [ ] Forms render correctly

## Ready to Deploy?

If all checkboxes above are ✅, you're ready!

```bash
# Final commit and push:
git add .
git commit -m "Ready for production deployment"
git push origin main
```

Then follow the **DEPLOYMENT-GUIDE.md** steps!

---

## Quick Build Test

Run this right now to check if everything will deploy successfully:

```bash
# This is exactly what Vercel will run:
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Collecting page data
# ✓ Generating static pages
# ✓ Finalizing page optimization
```

If you see errors, fix them before deploying!

---

## Common Pre-Deploy Fixes

### If build fails locally:

**Error: "Module not found"**
```bash
# Fix: Reinstall dependencies
rm -rf node_modules
npm install
npm run build
```

**Error: TypeScript errors**
```bash
# Check for errors:
npx tsc --noEmit

# Fix them in your code, then:
npm run build
```

**Error: Environment variable not defined**
```bash
# Create .env.local file with:
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## You're Ready When:

✅ `npm run build` completes successfully  
✅ No TypeScript errors  
✅ Code pushed to GitHub  
✅ You have a Vercel account  

**Then deploy! 🚀**

