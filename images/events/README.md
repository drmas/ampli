# Event Photos Directory

This directory contains photos for the Berlin page event gallery section.

## Photo Requirements

### Naming Convention
- `event-1.jpg` - Featured photo (will span 2 columns in the gallery)
- `event-2.jpg` - Standard photo
- `event-3.jpg` - Standard photo
- `event-4.jpg` - Standard photo
- `event-5.jpg` - Standard photo
- `event-6.jpg` - Standard photo

### Technical Specs
- **Format**: JPG or PNG
- **Dimensions**: ~1200x900px (4:3 aspect ratio recommended)
- **File Size**: < 200KB each (compressed for web)
- **Content**: Tech meetups, networking events, conferences, Berlin tech scene

## Where to Find Photos

### Free Stock Photo Sources
1. **Unsplash** (https://unsplash.com)
   - Search: "tech meetup", "networking event", "conference"
   - License: Free to use, no attribution required

2. **Pexels** (https://pexels.com)
   - Search: "tech conference", "startup event", "business networking"
   - License: Free to use, no attribution required

3. **Your Own Events**
   - Use real photos from Ampli Berlin meetups
   - Ensure you have permission to use photos of attendees

## Quick Start

To add sample photos quickly:

### Option 1: Manual Download
1. Go to Unsplash.com
2. Search for "tech meetup"
3. Download 6 high-quality images
4. Rename them to event-1.jpg through event-6.jpg
5. Compress them using TinyPNG.com or similar
6. Place in this directory

### Option 2: Use Unsplash API (Terminal)
```bash
# Install curl if needed
# Download sample tech event photos from Unsplash

cd /Users/attia/Developer/Hustle/Ampli/landing-page/images/events/

# Featured image (larger)
curl -L "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" -o event-1.jpg

# Additional event photos
curl -L "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80" -o event-2.jpg
curl -L "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80" -o event-3.jpg
curl -L "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80" -o event-4.jpg
curl -L "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80" -o event-5.jpg
curl -L "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" -o event-6.jpg
```

## After Adding Photos

Once you've added your photos, the Berlin page (`/berlin/index.html`) will automatically display them in the Event Highlights section. The gallery is already configured to use these filenames.

## Replacing with Real Event Photos

When you have real photos from your events:
1. Replace the sample photos with your own
2. Keep the same filenames (event-1.jpg, event-2.jpg, etc.)
3. Maintain similar dimensions and file sizes
4. Consider which photo should be "featured" (event-1.jpg displays larger)
