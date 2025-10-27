# 🎯 Your Personal Setup Instructions

## ✅ Step 1: Contact Form - DONE!

You created your contact form and got: `https://formspree.io/f/mblzneva`

---

## 📝 Step 2: Create Your .env.local File

**Right now, in your Website folder:**

1. Create a **new file** called `.env.local` (exactly that name, with the dot at the start)
2. Open it in Notepad or VS Code
3. **Copy and paste this content:**

```
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://theanxietyprotocol.com

# ✅ Contact Form - Formspree (DONE!)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mblzneva

# ✅ Apply Form - Formspree (DONE!)
NEXT_PUBLIC_FORMSPREE_APPLY_ENDPOINT=https://formspree.io/f/mwprgjgb

# Newsletter - MailerLite API (you'll fill this in after)
MAILERLITE_API_KEY=REPLACE_ME
MAILERLITE_GROUP_ID=REPLACE_ME
```

4. **Save the file**

---

## ⏳ Step 3: Create Your Apply Form

Now create the second form in Formspree:

1. Go back to **https://formspree.io/**
2. Click **+ New Form**
3. Name it: `Apply Form`
4. Click **Create**
5. Copy the endpoint (will look like: `https://formspree.io/f/xxxxxxxx`)
6. Open your `.env.local` file
7. Replace `REPLACE_ME` in the `APPLY_ENDPOINT` line with your new form ID

**Example:**
```
NEXT_PUBLIC_FORMSPREE_APPLY_ENDPOINT=https://formspree.io/f/myournewformid
```

---

## ⏳ Step 4: Set Up MailerLite

This is for your blog subscription boxes:

### A) Create Account
1. Go to **https://www.mailerlite.com/**
2. Click **Sign Up** (free!)
3. Use your Gmail address
4. Verify your email

### B) Get API Key
1. Log into MailerLite
2. Click your **profile icon** (top right corner)
3. Click **Integrations**
4. Click **MailerLite API**
5. Click **Generate new token**
6. Name it: `Coastal Calm Website`
7. **Copy the entire key** (it's very long, starts with `eyJ...`)
8. Open your `.env.local` file
9. Replace `REPLACE_ME` in the `MAILERLITE_API_KEY` line

### C) Create Subscriber Group
1. In MailerLite, go to **Subscribers** → **Groups**
2. Click **Create group**
3. Name it: `Blog Subscribers`
4. Click **Create**
5. Click on the group you just created
6. Look at your browser's address bar
7. You'll see: `https://dashboard.mailerlite.com/groups/123456789/subscribers`
8. **Copy just the number** (e.g., `123456789`)
9. Open your `.env.local` file
10. Replace `REPLACE_ME` in the `MAILERLITE_GROUP_ID` line

---

## 🔄 Step 5: Restart Your Server

**Important!** After you've filled in all the values:

1. Stop your development server (press `Ctrl+C` in the terminal)
2. Start it again:
   ```
   npm run dev
   ```
3. Wait for "Ready" message

---

## ✅ Step 6: Test Everything!

### Test Contact Form:
1. Go to: http://localhost:3001/contact
2. Fill out the form with test data
3. Click submit
4. Check your Gmail - you should receive the submission!

### Test Apply Form:
1. Go to: http://localhost:3001/apply
2. Fill out the form
3. Click submit
4. Check your Gmail - you should receive the application!

### Test Subscribe Box:
1. Go to: http://localhost:3001/blog/why-positive-thinking-fails
2. Scroll to the bottom
3. Enter your email → click "Get Free Chapters"
4. Should see "Welcome Aboard!" message
5. Check MailerLite dashboard - your email should be there!

---

## 📧 Configure Email Notifications in Formspree

For both forms (Contact and Apply):

1. Go to Formspree dashboard
2. Click on the form
3. Go to **Settings** → **Email Notifications**
4. Enter **your Gmail address** (where you want to receive messages)
5. Customize the subject line if you want:
   - Contact Form: "New Contact Form Message"
   - Apply Form: "New Program Application"
6. Click **Save**

---

## 🎉 You're Done When:

- [ ] `.env.local` file created
- [ ] Contact form endpoint added
- [ ] Apply form created and endpoint added
- [ ] MailerLite account created
- [ ] MailerLite API key added
- [ ] MailerLite Group ID added
- [ ] Dev server restarted
- [ ] All 3 forms tested and working
- [ ] Email notifications configured

---

## 🆘 Having Issues?

### Forms not working:
- Check `.env.local` file has no typos
- Make sure you replaced ALL the `REPLACE_ME` values
- Restart your dev server (`Ctrl+C` then `npm run dev`)

### Not receiving emails:
- Check spam folder
- Verify your email address in Formspree settings
- Check Formspree dashboard submission logs

---

**Questions?** Check `FORMS-SETUP-QUICK-START.md` for more detailed help!

