# 📧 Forms Setup - Quick Start Guide

Your website has 3 forms that need to be connected. This should take about **20 minutes total**.

---

## 🎯 What You're Setting Up

| Form | Location | What It Does | Service Needed |
|------|----------|--------------|----------------|
| **Subscribe Box** | Every blog post + `/blog` page | Sends free book chapters | MailerLite |
| **Contact Form** | `/contact` page | General inquiries | Formspree |
| **Apply Form** | `/apply` page | Program applications | Formspree |

---

## ⚡ Quick Setup (20 minutes)

### Step 1: Create Your Environment File (2 minutes)

1. In your `Website` folder, find `env-example.txt`
2. **Copy it** and **rename the copy** to `.env.local`
3. Open `.env.local` in a text editor (Notepad is fine)

You'll fill this in as you complete the next steps.

---

### Step 2: Set Up Formspree (10 minutes)

This handles your **Contact Form** and **Apply Form**.

#### A) Create Account
1. Go to **https://formspree.io/**
2. Click **Sign Up** (free plan is perfect)
3. Verify your email

#### B) Create Your Forms

**First Form - Contact:**
1. Click **+ New Form**
2. Name it: `Contact Form`
3. Click **Create**
4. You'll see an endpoint like: `https://formspree.io/f/abc123xyz`
5. Copy everything after `/f/` (e.g., `abc123xyz`)

**Second Form - Apply:**
1. Click **+ New Form** again
2. Name it: `Apply Form` 
3. Click **Create**
4. Copy the ID after `/f/` again (it'll be different)

#### C) Configure Email Notifications

For **EACH form**:
1. Go to the form in Formspree dashboard
2. Click **Settings** → **Email Notifications**
3. Enter **YOUR email address** (where you want to receive messages)
4. Customize subject line if you want (e.g., "New Contact Form Submission")
5. Click **Save**

#### D) Update Your .env.local File

Open your `.env.local` file and update these lines:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
NEXT_PUBLIC_FORMSPREE_APPLY_ENDPOINT=https://formspree.io/f/YOUR_APPLY_FORM_ID
```

Replace `YOUR_CONTACT_FORM_ID` and `YOUR_APPLY_FORM_ID` with the actual IDs you copied.

✅ **Contact & Apply Forms Done!**

---

### Step 3: Set Up MailerLite (8 minutes)

This handles your **blog subscription boxes** (the "Get Free Chapters" forms).

#### A) Create Account
1. Go to **https://www.mailerlite.com/**
2. Click **Sign Up** (free for up to 1,000 subscribers!)
3. Verify your email
4. Complete onboarding questions

#### B) Get Your API Key
1. Click your **profile icon** (top right)
2. Click **Integrations**
3. Click **MailerLite API**
4. Click **Generate new token**
5. Name it: `Coastal Calm Website`
6. **Copy the entire key** (it's very long, starts with `eyJ...`)

#### C) Create a Subscriber Group
1. Go to **Subscribers** → **Groups**
2. Click **Create group**
3. Name it: `Blog Subscribers` or `Free Chapter Subscribers`
4. Click **Create**
5. Click on the group you just made
6. Look at your browser's URL bar: `https://dashboard.mailerlite.com/groups/123456789/subscribers`
7. **Copy the number** (e.g., `123456789`)

#### D) Update Your .env.local File

Open your `.env.local` file and update these lines:

```
MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGc... (paste your long key here)
MAILERLITE_GROUP_ID=123456789 (paste your group ID here)
```

✅ **Blog Subscriptions Done!**

---

### Step 4: Set Up Welcome Email (Optional but Recommended)

People subscribe to get your **free book chapters**, so let's send them automatically!

#### In MailerLite:
1. Go to **Automations**
2. Click **Create automation**
3. Choose **Welcome new subscribers**
4. Set trigger: "Subscriber joins group: Blog Subscribers"
5. Click **Add step** → **Email**
6. Design your email:
   - **Subject**: "Your Free Chapters from The Faulty Smoke Alarm 📖"
   - **Body**: Write a warm welcome message
   - Include a link to download your PDF chapters (upload to Google Drive/Dropbox first)
7. Click **Save**
8. Click **Activate**

Now new subscribers get chapters automatically! 🎉

---

### Step 5: Restart Your Dev Server

**Important!** Environment variables only load when the server starts.

1. Stop your dev server (press `Ctrl+C` in the terminal)
2. Start it again:
   ```bash
   npm run dev
   ```
3. Wait for "Ready in X seconds"

---

## ✅ Test Everything (5 minutes)

### Test Subscribe Box:
1. Go to any blog post: `http://localhost:3001/blog/why-positive-thinking-fails`
2. Scroll to bottom
3. Enter your email → click "Get Free Chapters"
4. Should see "Welcome Aboard!" message
5. Check MailerLite dashboard → your email should be there!

### Test Contact Form:
1. Go to: `http://localhost:3001/contact`
2. Fill out the form
3. Click submit
4. Should see success message
5. Check your email → you should receive the form submission from Formspree!

### Test Apply Form:
1. Go to: `http://localhost:3001/apply`
2. Fill out the form
3. Click submit
4. Should see "Application Received!" message
5. Check your email → you should receive the application from Formspree!

---

## 🚀 Deploy to Production (When Ready)

When you deploy to Vercel:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add these variables (one by one):
   - `NEXT_PUBLIC_SITE_URL` = `https://theanxietyprotocol.com`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = Your contact form endpoint
   - `NEXT_PUBLIC_FORMSPREE_APPLY_ENDPOINT` = Your apply form endpoint
   - `MAILERLITE_API_KEY` = Your MailerLite key
   - `MAILERLITE_GROUP_ID` = Your group ID
3. Click **Save** for each
4. Redeploy your site

---

## 🆘 Troubleshooting

### "Server configuration error"
- Check that you've set the API keys correctly in `.env.local`
- Make sure there are no extra spaces or quotes
- Restart your dev server

### "Formspree endpoint not configured"
- Check that the variable starts with `NEXT_PUBLIC_`
- Check that you replaced `REPLACE_ME` with actual form ID
- Restart your dev server

### Not receiving emails
- Check your spam folder
- Verify your email is set in Formspree settings
- Check Formspree's submission logs in their dashboard

### Changes not appearing
- Always restart dev server after editing `.env.local`
- Hard refresh browser (`Ctrl+F5`)
- Check browser console for errors

---

## 📋 Summary

**Free Tiers:**
- ✅ Formspree: 50 submissions/month (plenty for starting!)
- ✅ MailerLite: 1,000 subscribers (perfect for growing!)
- ✅ Total cost: £0.00

**What You've Achieved:**
- ✅ Blog visitors can subscribe and get free chapters automatically
- ✅ Contact form sends you inquiries
- ✅ Apply form sends you program applications
- ✅ Professional email automation set up
- ✅ Zero spam, clean conversion funnel

---

## 🎯 Next Steps

1. Upload your book chapters PDF to Google Drive/Dropbox
2. Get shareable link
3. Add link to your MailerLite welcome email
4. Test everything thoroughly
5. When ready, add environment variables to Vercel
6. Go live! 🚀

**Questions?** Check `email_installation_guide.md` for more detailed info!

