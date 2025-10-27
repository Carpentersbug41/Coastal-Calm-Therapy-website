# Email Installation Guide - Complete Idiot's Guide 🚀

This guide walks you through setting up ALL the email functionality on your Coastal Calm website.

---

## 📧 What Email Features You Have

Your website has **3 email features**:

1. **Blog Subscription Boxes** - On every blog post, visitors can get free chapters
2. **Contact Form** - On `/contact` page, visitors can apply for your program  
3. **Blog Page Subscription** - On `/blog` listing page, visitors can subscribe

---

## 🎯 PART 1: Set Up MailerLite (Blog Subscriptions)

This handles all the "Get Free Chapters" subscription boxes.

### Step 1: Create a MailerLite Account

1. Go to [https://www.mailerlite.com/](https://www.mailerlite.com/)
2. Click **Sign Up** (it's FREE for up to 1,000 subscribers)
3. Fill in your details and verify your email
4. Complete the onboarding questions

### Step 2: Get Your API Key

1. Log into MailerLite dashboard
2. Click your **profile icon** (top right) → **Integrations**
3. Click on **MailerLite API**
4. Click **Generate new token**
5. Give it a name like "Coastal Calm Website"
6. **Copy the API key** - it looks like: `eyJ0eXAiOiJKV1QiLCJhbGc...` (very long)

### Step 3: Get Your Group ID (Optional but Recommended)

Groups help you organize subscribers:

1. In MailerLite, go to **Subscribers** → **Groups**
2. Click **Create group**
3. Name it something like "Book Chapter Subscribers" or "Blog Subscribers"
4. After creating, click on the group
5. Look at your browser's URL bar - it will say: `https://dashboard.mailerlite.com/groups/123456789/subscribers`
6. **Copy the number** (that's your Group ID) - e.g., `123456789`

### Step 4: Add to Your Website

1. In your website folder, find the file `.env.local`
   - If it doesn't exist, **copy** `env-example.txt` and **rename** it to `.env.local`

2. Open `.env.local` in any text editor (Notepad, VS Code, etc.)

3. Find these lines:
   ```
   MAILERLITE_API_KEY=your_api_key_here
   MAILERLITE_GROUP_ID=your_group_id_here
   ```

4. Replace with your actual values:
   ```
   MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGc...
   MAILERLITE_GROUP_ID=123456789
   ```

5. **Save the file**

### Step 5: Test It!

1. **Restart your development server:**
   - Stop the current server (Ctrl+C in terminal)
   - Run: `npm run dev`
   - Wait for "Ready in X seconds"

2. **Go to any blog post:**
   - Example: `http://localhost:3001/blog/why-positive-thinking-fails`
   - Scroll to the bottom
   - You should see the "Get the First Three Chapters Free" box

3. **Test the subscription:**
   - Enter your email address
   - Click "Get Free Chapters"
   - You should see "Welcome Aboard!" success message

4. **Check MailerLite:**
   - Go back to MailerLite dashboard
   - Click **Subscribers**
   - Your test email should appear there!

✅ **Done!** Your blog subscription is working!

---

## 📞 PART 2: Set Up Formspree (Contact Form)

This handles your "Apply for the Program" contact form.

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **Sign Up** (FREE plan is fine)
3. Verify your email

### Step 2: Create a Form

1. Log into Formspree dashboard
2. Click **+ New Form**
3. Name it "Coastal Calm Contact Form" or "Anxiety Protocol Applications"
4. Click **Create**

### Step 3: Get Your Endpoint URL

1. You'll see a page with your form settings
2. Find the **Integration** section
3. Copy the endpoint URL - looks like:
   ```
   https://formspree.io/f/xyzabc123
   ```
   (The part after `/f/` is your form ID)

### Step 4: Add to Your Website

1. Open `.env.local` again

2. Find this line:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/REPLACE_ME
   ```

3. Replace with your actual endpoint:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123
   ```

4. **Save the file**

### Step 5: Configure Email Notifications (Important!)

1. Back in Formspree dashboard, click on your form
2. Go to **Settings** → **Email Notifications**
3. Enter **YOUR email address** (where you want to receive applications)
4. You can customize the email subject and format
5. Click **Save**

### Step 6: Test It!

1. **Restart your dev server** (if you haven't already)

2. **Go to contact page:**
   - `http://localhost:3001/contact`

3. **Fill out the form:**
   - Enter test details
   - Click "Submit Application"
   - You should see "Application Received!" message

4. **Check your email:**
   - You should receive an email from Formspree
   - It will contain the form submission details

✅ **Done!** Your contact form is working!

---

## 🎁 PART 3: Set Up Automated Email (Send the Free Chapters)

Right now, when someone subscribes, they're added to MailerLite. But you need to actually SEND them the free chapters!

### Option A: Automated Welcome Email (Recommended)

1. In MailerLite, go to **Automations**
2. Click **Create automation**
3. Choose **Welcome new subscribers**
4. Set the trigger to: "Subscriber joins group: Book Chapter Subscribers"
5. Click **Add email**
6. Create your email:
   - **Subject**: "Your Free Chapters from The Faulty Smoke Alarm 📖"
   - **Body**: Write your message and include a download link or PDF attachment
7. Click **Save** and **Activate**

Now, every new subscriber automatically gets your free chapters!

### Option B: Manual Campaign (Simple but Manual)

1. Upload your PDF chapters somewhere (Google Drive, Dropbox, etc.)
2. Get a shareable link
3. In your welcome email template, include that link

---

## 🚀 PART 4: Deploy to Production (Going Live!)

When you're ready to make your site live:

### For Vercel Deployment:

1. Go to [https://vercel.com/](https://vercel.com/)
2. Sign up / log in with GitHub
3. Connect your repository
4. Go to your project → **Settings** → **Environment Variables**
5. Add these variables (same as your `.env.local`):
   ```
   NEXT_PUBLIC_SITE_URL=https://theanxietyprotocol.com
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123
   MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGc...
   MAILERLITE_GROUP_ID=123456789
   ```
6. Click **Save**
7. Redeploy your site

---

## ✅ CHECKLIST - Make Sure Everything Works

Before going live, test everything:

### Blog Subscriptions:
- [ ] Visit a blog post (e.g., `/blog/why-positive-thinking-fails`)
- [ ] Subscription box appears at the bottom
- [ ] Enter email and submit
- [ ] Success message appears
- [ ] Email appears in MailerLite dashboard
- [ ] Subscriber receives automated welcome email with chapters

### Blog Listing Page:
- [ ] Visit `/blog`
- [ ] Subscription box appears at the bottom
- [ ] Test subscription (should work same as above)

### Contact Form:
- [ ] Visit `/contact`
- [ ] Fill out application form
- [ ] Success message appears
- [ ] You receive email notification with the application

---

## 🆘 Troubleshooting

### "Server configuration error" when testing subscriptions:
- Check that `MAILERLITE_API_KEY` is set correctly in `.env.local`
- Make sure there are no extra spaces or quotes
- Restart your dev server

### "Formspree endpoint not configured" error:
- Check that `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set correctly
- Must start with `NEXT_PUBLIC_` to work in browser
- Restart your dev server

### Not receiving emails from Formspree:
- Check your spam folder
- Verify your email is set in Formspree settings
- Check Formspree submission logs in their dashboard

### Emails not added to MailerLite:
- Check the MailerLite API key is correct
- Verify API token has not expired
- Check MailerLite submission logs in their dashboard

### Changes not appearing:
- Always restart your dev server after changing `.env.local`
- Hard refresh your browser (Ctrl+F5)
- Clear browser cache if needed

---

## 💡 Pro Tips

1. **Test with real email addresses first** - use your own email to test everything

2. **Set up email templates in MailerLite** - design beautiful branded emails for your subscribers

3. **Monitor your Formspree submissions** - check the dashboard regularly for applications

4. **Create different groups in MailerLite** - separate "blog subscribers" from "program applicants" if you collect those too

5. **Don't commit `.env.local` to Git** - it's already in `.gitignore` but double-check!

6. **Backup your API keys** - save them somewhere secure (password manager)

---

## 📍 Where Are Subscription Boxes?

### ✅ Currently Active:
1. **Every Individual Blog Post** - At the bottom after the content
   - Example: `http://localhost:3001/blog/why-positive-thinking-fails`
   - Located in: `app/(site)/blog/[slug]/page.tsx` (lines 188-190)

2. **Blog Listing Page** - At the bottom after all posts
   - URL: `http://localhost:3001/blog`
   - Located in: `app/(site)/blog/page.tsx` (lines 92-97)

3. **Contact Form** - For program applications
   - URL: `http://localhost:3001/contact`
   - Located in: `app/(site)/contact/page.tsx`

### 🤔 Should You Add More?

**Homepage Subscription Box?**
- **My Recommendation: NO (for now)**
- Your homepage is optimized for high-value conversions (£2,500 program applications)
- Adding a "free stuff" CTA might dilute your main conversion goal
- Instead, your blog brings in free chapter subscribers, then nurtures them toward the program
- This is a better funnel: Blog → Free Chapters → Email Nurture → Program Application

**Dedicated /subscribe Page?**
- **My Recommendation: OPTIONAL**
- You already have a `/subscribe` page at `app/(site)/subscribe/page.tsx`
- But with subscription boxes on all blog pages, it's redundant
- **Keep it** if you want a dedicated landing page for ads or social media
- **Skip it** if you're happy with blog subscriptions only

### 💡 Smart Subscription Strategy

Here's the flow I've set up for you:

```
Visitor → Blog Post (reads content) → Loves it! → 
Subscribes for free chapters → Gets 3 chapters via email → 
MailerLite nurture sequence → Decides to apply for program → 
/contact page → You get application → Schedule consultation → $$$
```

This is better than putting subscribe boxes everywhere!

---

## 📊 Where Everything Is Located

For reference, here's where the email code lives:

- **Blog subscription box component**: `components/blog-subscribe.tsx`
- **Individual blog post pages**: `app/(site)/blog/[slug]/page.tsx` (line 189)
- **Blog listing page**: `app/(site)/blog/page.tsx` (line 95)
- **Contact form**: `app/(site)/contact/page.tsx`
- **Subscribe API**: `app/api/subscribe/route.ts`
- **Contact API**: `app/api/contact/route.ts`
- **Homepage**: `app/(site)/page.tsx` (currently NO subscription box - by design!)

---

## 🎉 You're All Set!

Once you complete these steps:
- ✅ Visitors can subscribe on any blog post
- ✅ Visitors can subscribe on the blog listing page
- ✅ Visitors can apply for your program via contact form
- ✅ You receive all applications by email
- ✅ Subscribers automatically get their free chapters
- ✅ Clean conversion funnel from blog → subscriber → client

Questions? Just check the troubleshooting section or test each feature step by step!

