# 🖼️ How to Add Beautiful Images to Your Therapy Site

## Quick Summary
I've added **placeholder SVG images** that work right now, but for the best look, you should replace them with real photos. Here's the easiest way:

---

## 🎯 What You Need

### 1. **Hero Image** (Homepage)
**Location**: `public/images/hero-plant.svg`
**Replace with**: `hero-plant.jpg` or `hero-plant.png`
**Size**: 1200x840px (or similar aspect ratio)
**Style**: 
- Soft plant by sunlit window
- Light, airy feel with bokeh/blur
- Desaturated, warm tones
- Calming greens and creams

### 2. **Post Fallback** (Blog cards without covers)
**Location**: `public/images/post-fallback.svg`
**Replace with**: `post-fallback.jpg` or `post-fallback.png`
**Size**: 600x380px (or 3:2 aspect ratio)
**Style**:
- Flat-lay journal with leaves
- Neutral background
- Warm, calming aesthetic
- Minimal and clean

---

## 📥 Easiest Way: Download from Unsplash (FREE!)

### Step 1: Get the Hero Plant Image

1. Go to: **https://unsplash.com/s/photos/plant-window**
2. Look for images with:
   - Soft natural light
   - Green plants
   - Minimal, calm composition
3. Click on an image you like
4. Click the **"Download free"** button (arrow down icon)
5. Save as `hero-plant.jpg`
6. Copy it to: `public/images/hero-plant.jpg`

**Recommended searches:**
- "succulent window light"
- "plant minimal window"
- "indoor plant sunlight"
- "monstera window"

### Step 2: Get the Post Fallback Image

1. Go to: **https://unsplash.com/s/photos/journal-flatlay**
2. Look for images with:
   - Notebook or journal
   - Leaves or plants
   - Neutral, soft colors
   - Top-down view
3. Download and save as `post-fallback.jpg`
4. Copy it to: `public/images/post-fallback.jpg`

**Recommended searches:**
- "notebook leaves flatlay"
- "journal minimalist"
- "planner plants overhead"
- "notepad eucalyptus"

---

## 🎨 Alternative Free Image Sources

### **Pexels** (No attribution required)
- https://pexels.com
- Search: "therapy plant" or "calm workspace"

### **Pixabay** (Public domain)
- https://pixabay.com
- Search: "mindfulness" or "zen plant"

---

## ⚡ Super Quick Method (5 minutes)

### Option 1: Use Unsplash Direct Download

I recommend these specific images (just click and download):

**For Hero:**
- https://unsplash.com/photos/a-potted-plant-sitting-on-top-of-a-table-next-to-a-window-5SFcHXYZRlw
- https://unsplash.com/photos/green-plant-on-white-ceramic-pot-F-gHSDQndl0
- https://unsplash.com/photos/green-leafed-plant-on-clear-glass-vase-filled-with-water-8OyKWQgBsKQ

**For Blog Posts:**
- https://unsplash.com/photos/pen-on-white-lined-paper-selective-focus-photography-505eectW54k
- https://unsplash.com/photos/white-printer-paper-on-green-typewriter-YLSwjSy7stw

### Option 2: Use AI-Generated (If you have access)
Use tools like:
- **Midjourney**: "soft indoor plant by window, natural light, calming therapy aesthetic --ar 3:2"
- **DALL-E**: "minimalist plant by window, soft natural lighting, therapy office"

---

## 🔄 After Adding Real Images

### Update the code (Optional - for better performance):

**In `app/(site)/page.tsx`** (line 78):
Change from:
```tsx
<img
  src="/images/hero-plant.svg"
  ...
/>
```

To:
```tsx
<Image
  src="/images/hero-plant.jpg"
  alt="Soft natural greenery by a sunlit window"
  fill
  priority
  className="object-cover rounded-3xl shadow-soft-lg ring-1 ring-black/5 group-hover:scale-[1.02] transition-transform duration-500"
/>
```

**In `components/post-card.tsx`** (line 32):
Change from:
```tsx
<img
  src="/images/post-fallback.svg"
  ...
/>
```

To:
```tsx
<Image
  src="/images/post-fallback.jpg"
  alt={post.title}
  width={600}
  height={400}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
```

---

## ✅ Current Status

✅ **SVG placeholders are working** - Your site looks good now!
⚠️ **For best results** - Replace with real photos when you can
🎨 **Recommended** - Takes 5-10 minutes to download and replace

---

## 💡 Pro Tips

1. **Keep images under 1MB** for fast loading
2. **Use JPG for photos** (better compression)
3. **Use PNG for graphics** (if you need transparency)
4. **Stick to the calming color palette**: greens, blues, creams, sand tones
5. **Avoid busy/cluttered images** - minimal is better for therapy sites

---

## 🎯 Need Help?

The site looks great with the SVG placeholders! Replace them when you have time. The animations and styling will make even simple images look amazing! 🌊✨

