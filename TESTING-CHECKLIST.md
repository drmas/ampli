# Ampli Landing Page - Testing Checklist

## 🚀 Quick Start: Run Local Server

Choose one of these methods to start testing locally:

### Option 1: Python HTTP Server (Recommended)
```bash
cd /Users/attia/Developer/Hustle/Ampli/landing-page
python3 -m http.server 8000
```
Then open: **http://localhost:8000**

### Option 2: Node.js http-server
```bash
cd /Users/attia/Developer/Hustle/Ampli/landing-page
npx http-server -p 8000
```
Then open: **http://localhost:8000**

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## ✅ Testing Checklist

### 🎯 Priority 1: Critical Fixes Verification

#### Vibe AI RSS Feed Fix
- [ ] Navigate to http://localhost:8000/vibe-ai/
- [ ] Scroll to "Latest Issues" section
- [ ] Verify 4 posts load (should show AI-related content, NOT Berlin content)
- [ ] Click on a post - should open https://amplivibeai.substack.com post
- [ ] Check browser DevTools Network tab - should see request to `https://amplivibeai.substack.com/feed`

#### Partner Contact Form Fix
- [ ] Navigate to http://localhost:8000/partners/
- [ ] Scroll to "Let's Talk Partnership" section
- [ ] Click "Send Email to Partner with Us" button
- [ ] Verify email client opens with:
  - To: amplitechcom@gmail.com
  - Subject: Partnership Inquiry - Ampli
  - Pre-filled body template
- [ ] Click direct email link at bottom - should also open email to amplitechcom@gmail.com

#### Berlin Event Photos
- [ ] Navigate to http://localhost:8000/berlin/
- [ ] Scroll to "Moments from Our Meetups" section
- [ ] Verify 6 event photos display (not placeholder)
- [ ] First photo should span 2 columns (featured)
- [ ] Hover over photos - should zoom slightly
- [ ] All photos should have proper alt text (right-click > Inspect to verify)
- [ ] Photos should lazy load (check Network tab)

---

### 🔗 Navigation & Links (All Pages)

#### Header Navigation
- [ ] **Main Page** - Logo → Home works
- [ ] **Berlin Page** - Logo → Home works
- [ ] **Vibe AI Page** - Logo → Home works
- [ ] **Partners Page** - Logo → Home works
- [ ] Newsletter dropdown opens on hover (desktop)
- [ ] Berlin link → /berlin/
- [ ] Vibe AI link → /vibe-ai/
- [ ] Subscribe link scrolls smoothly to #subscribe
- [ ] Partner link → /partners/
- [ ] "Read on Substack" button opens https://ampli.substack.com in new tab

#### Mobile Navigation (Resize browser to < 768px)
- [ ] Hamburger icon appears
- [ ] Click hamburger → menu slides in from right
- [ ] Body scroll locks when menu open
- [ ] Click any link → menu closes
- [ ] Click hamburger again → menu closes

#### Footer Links (Test on all 4 pages)
- [ ] Berlin → /berlin/
- [ ] Vibe AI → /vibe-ai/
- [ ] Substack → https://ampli.substack.com (new tab)
- [ ] Sponsorship → /partners/
- [ ] Twitter/X → https://x.com/amplixyz (new tab)
- [ ] LinkedIn → https://www.linkedin.com/company/ampli-community (new tab)
- [ ] Email links trigger mailto

---

### 📧 Forms & Subscriptions

#### Subscribe Forms (Main, Berlin, Vibe AI)
- [ ] **Main Page** (#subscribe section)
  - [ ] Email input validation (try invalid email)
  - [ ] Submit → redirects to Substack confirmation
- [ ] **Berlin Page** (#subscribe section)
  - [ ] Email input validation
  - [ ] Submit → redirects to Substack
- [ ] **Vibe AI Page** (#subscribe section)
  - [ ] Email input validation
  - [ ] Submit → redirects to Substack

---

### 📱 Responsive Design Testing

Test these breakpoints (resize browser or use DevTools device toolbar):

#### Mobile: 375px (iPhone SE)
- [ ] Header: Logo + hamburger visible
- [ ] Hero: Content stacked vertically
- [ ] Newsletter cards: 1 column
- [ ] Company logos: 2 columns
- [ ] Forms: Stacked inputs
- [ ] Footer: Stacked layout
- [ ] All text readable
- [ ] No horizontal scroll

#### Tablet: 768px (iPad)
- [ ] Header: Logo + full nav visible
- [ ] Hero: Content side-by-side (on main/vibe-ai)
- [ ] Newsletter cards: 2 columns
- [ ] Company logos: 3 columns
- [ ] Forms: Inline on some pages
- [ ] Footer: Grid layout appears

#### Desktop: 1024px+
- [ ] Hero: Full side-by-side layout
- [ ] Newsletter cards: 3 columns (main page)
- [ ] Company logos: 5 columns
- [ ] Forms: Inline layout
- [ ] Event gallery: 4 columns
- [ ] All spacing looks correct

---

### 🎨 Visual & Animation

#### Hero Animations (Main & Vibe AI pages)
- [ ] Hero badge fades in first
- [ ] Heading fades in second
- [ ] Description fades in third
- [ ] CTAs fade in fourth
- [ ] Stats fade in last
- [ ] Signal rings animate continuously

#### Scroll Reveals
- [ ] Scroll down slowly on any page
- [ ] Sections with "reveal" class fade in as you scroll
- [ ] Animation triggers when element is ~10% visible

#### Hover Effects
- [ ] Newsletter cards: Border color changes + gradient overlay
- [ ] Buttons: Lift up slightly + shadow appears
- [ ] Company logos: Color appears (from grayscale)
- [ ] Nav links: Underline animates in
- [ ] Event photos: Scale up slightly

#### Header Behavior
- [ ] On page load: Gradient background
- [ ] After scrolling 100px down: Solid background
- [ ] Remains fixed at top while scrolling

---

### 📊 Content Verification

#### Main Page (index.html)
- [ ] Stats show: 5K+ subs, 2 channels, Weekly
- [ ] Berlin channel card present with yellow accent
- [ ] Vibe AI channel card present with purple accent
- [ ] "Coming Soon" card with dashed border
- [ ] Subscribe CTA in hero section

#### Berlin Page (berlin/index.html)
- [ ] Stats: 3K+ subs, Weekly, 5 min read (yellow/gold color)
- [ ] Hero image: Berlin TV Tower loaded
- [ ] Company logos: 11 companies displayed
- [ ] Luma calendar: Events embed loads
- [ ] Event gallery: 6 photos displayed
- [ ] 4 feature cards: Jobs, Events, Guest Posts, Community
- [ ] Cross-promo to Vibe AI at bottom (purple gradient)

#### Vibe AI Page (vibe-ai/index.html)
- [ ] Stats: 2K+ subs, Weekly, 5 min read (purple color)
- [ ] 4 feature cards: AI Tools, Vibe Coding, Agentic AI, Tutorials
- [ ] Robot emoji (🤖) in hero visual
- [ ] Purple theme throughout (NOT yellow)
- [ ] Cross-promo to Berlin at bottom (yellow gradient)
- [ ] RSS feed shows AI-specific posts

#### Partners Page (partners/index.html)
- [ ] Stats: 5K+ subs, 45% open rate, 12% click rate, 2 channels
- [ ] 4 audience cards displayed
- [ ] 5 partner logos: BPM, Spiced, SumUp, HelloFresh, PLA
- [ ] Partner logos link to external sites (new tab)
- [ ] 3 partnership option cards
- [ ] Contact section with mailto functionality

---

### ⚡ Performance

#### Page Load Speed
- [ ] Open DevTools → Network tab → Clear → Refresh
- [ ] Page loads in < 3 seconds (on fast connection)
- [ ] Images lazy load (check Network tab - images load as you scroll)
- [ ] No console errors in DevTools Console tab

#### Check for Console Errors
- [ ] **Main page**: No errors
- [ ] **Berlin page**: No errors (ignore Luma embed warnings if any)
- [ ] **Vibe AI page**: No errors
- [ ] **Partners page**: No errors

#### Lighthouse Audit (Optional but Recommended)
1. Open DevTools → Lighthouse tab
2. Select "Desktop" mode
3. Click "Analyze page load"
4. Check scores:
   - [ ] Performance > 85
   - [ ] Accessibility > 90
   - [ ] Best Practices > 90
   - [ ] SEO > 90

---

### 🔍 SEO & Meta Tags

Test each page's meta tags (View Page Source or use browser extension):

#### All Pages Should Have:
- [ ] `<title>` tag present and descriptive
- [ ] `<meta name="description">` present
- [ ] `<meta property="og:title">` (for social sharing)
- [ ] `<meta property="og:description">` (for social sharing)
- [ ] Favicon displays in browser tab

---

### ♿ Accessibility Quick Check

#### Keyboard Navigation
- [ ] Press Tab repeatedly - can navigate through all links/buttons
- [ ] Focus indicator visible on all interactive elements
- [ ] Newsletter dropdown navigable with Tab and Enter
- [ ] Can reach and activate subscribe buttons
- [ ] Mobile menu accessible via keyboard

#### Alt Text on Images
- [ ] Right-click any image → Inspect
- [ ] Verify `alt` attribute present with descriptive text
- [ ] Event photos have descriptive alt text
- [ ] Company logos have company names as alt text

---

### 🌐 Browser Compatibility (If Available)

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium) - Primary
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

Key features to verify:
- [ ] CSS Grid layout works
- [ ] Backdrop filter (header blur) works
- [ ] Smooth scroll works
- [ ] Animations work

---

## 🐛 Common Issues & Solutions

### Issue: RSS Feed Not Loading
**Symptoms**: "Loading recent issues..." stays forever
**Solution**:
1. Check browser console for CORS errors
2. Verify internet connection
3. Try the feed URL directly in browser: https://amplivibeai.substack.com/feed
4. rss2json.com API may be rate-limited - wait a few minutes

### Issue: Event Photos Not Showing
**Symptoms**: Broken image icons
**Solution**:
1. Verify files exist: `ls images/events/`
2. Check file names match exactly: event-1.jpg, event-2.jpg, etc.
3. Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Issue: Mailto Link Doesn't Open
**Symptoms**: Nothing happens when clicking email button
**Solution**:
1. Ensure you have a default email client configured
2. Try right-click → Copy Link Address → paste in browser
3. Email should be: amplitechcom@gmail.com

### Issue: Smooth Scroll Not Working
**Symptoms**: Page jumps instead of smooth scroll
**Solution**:
1. Some browsers don't support CSS `scroll-behavior`
2. This is expected on older browsers
3. Functionality still works, just not animated

---

## ✅ Final Verification

Before considering testing complete:

- [ ] All 3 critical fixes verified (RSS, mailto, photos)
- [ ] Tested on at least 2 different browsers
- [ ] Tested responsive design at 3+ breakpoints
- [ ] No console errors on any page
- [ ] All navigation links work
- [ ] All forms functional
- [ ] All images load properly

---

## 📝 Document Your Findings

If you find issues, note them here or in a separate file:

```
Issue: [Brief description]
Page: [Which page]
Steps to Reproduce:
1.
2.
3.

Expected:
Actual:
Screenshot/Video: [If available]
```

---

## 🚢 Ready to Deploy?

Once all tests pass:
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Fix Vibe AI RSS feed, update partner contact form, add event photos"
   git push origin main
   ```

2. Deploy to your hosting (GitHub Pages, Netlify, etc.)

3. Re-test on production URL

4. Monitor for any production-specific issues

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify all files are in correct locations
3. Clear browser cache and retry
4. Test in incognito/private window

Good luck with your testing! 🎉
