# Placeholder Images

This directory needs the following placeholder images for the therapy site design:

## Required Images

1. **hero-plant.jpg** (1200x840px recommended)
   - Soft natural greenery by a sunlit window
   - Light, airy feel with bokeh effect
   - Desaturated, warm tones
   - Suggest: Unsplash search "plant window light" or "succulent minimal"

2. **post-fallback.jpg** (600x380px recommended)
   - Flat-lay journal with leaves
   - Neutral background
   - Warm, calming aesthetic
   - Suggest: Unsplash search "journal flatlay" or "notebook leaves minimal"

3. **pebbles.jpg** (optional, for future use)
   - Rounded pebbles on shoreline
   - Soft coastal colors
   - Suggest: Unsplash search "pebbles beach" or "zen stones"

## Where to Get Free Images

- **Unsplash**: https://unsplash.com/ (free, no attribution required)
- **Pexels**: https://pexels.com/ (free, no attribution required)
- **Pixabay**: https://pixabay.com/ (free, no attribution required)

## Image Guidelines

- Keep images **airy and desaturated**
- Use **warm, neutral tones** (coastal blues, sand, soft greens)
- Avoid busy, cluttered compositions
- Prefer **natural, organic elements** (plants, stones, water, natural light)
- Images should feel **calming and therapeutic**, not corporate or salesy

## Temporary Workaround

Until you add real images, the site will show broken image icons. You can:

1. Download placeholder images from the suggested sources above
2. Or use a placeholder service temporarily by updating the image paths in:
   - `app/(site)/page.tsx` (line 53: hero-plant.jpg)
   - `components/post-card.tsx` (line 26: post-fallback.jpg)

