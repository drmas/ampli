# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ampli is a tech newsletter platform with a multi-channel architecture. The landing page is built as a static HTML/CSS/JavaScript site hosted on GitHub Pages, featuring two primary newsletter channels (Ampli Berlin and Ampli Vibe AI) with a third "coming soon" slot.

## Architecture

### Multi-Page Structure
- **Root (`/index.html`)**: Main landing page showcasing both newsletter channels
- **Berlin (`/berlin/index.html`)**: Berlin tech jobs, events & community channel
- **Vibe AI (`/vibe-ai/index.html`)**: AI tools, trends & inspiration channel
- **Partners (`/partners/index.html`)**: Partnership and sponsorship opportunities page

### Channel Theming System
Each channel uses CSS custom properties for dynamic theming:
- Berlin channel: `data-channel="berlin"` - Yellow/gold accent (`--berlin-primary: #f5b84c`)
- AI channel: `data-channel="ai"` - Purple accent (`--ai-primary: #8b7bf7`)
- Theme variables cascade through `--channel-primary`, `--channel-secondary`, and `--channel-glow`

### Design System
The site uses a comprehensive design system defined in `css/styles.css`:
- Typography: Clash Display (headings) + Satoshi (body) from Fontshare
- Color system: Dark theme with accent colors for each channel
- Spacing scale: `--space-xs` through `--space-5xl` (0.25rem to 8rem)
- Border radius scale: `--radius-sm` to `--radius-full`
- Consistent animation timings: `--transition-fast/base/slow`

## Key Components

### Header & Navigation
- Fixed header with blur backdrop effect
- Desktop: Dropdown menu for newsletters
- Mobile: Hamburger menu with slide-in navigation
- Header background changes on scroll (see `initHeaderScroll()` in js/main.js:158)

### Hero Sections
Two hero patterns used across the site:
1. **Standard Hero** (main page, Vibe AI): Animated signal rings visualization with gradient overlays
2. **Berlin Hero** (berlin page): Background image with gradient overlay and glow effect

### Newsletter Cards
Reusable card component with hover effects:
- Dynamic accent colors via `--card-accent` CSS variable
- Icon, badge, title, description, tags, and CTA structure
- Gradient overlay on hover

### Forms
- Substack integration: Forms POST to `https://ampli.substack.com/api/v1/free`
- Inline subscribe forms with responsive layouts
- Channel selection checkboxes with custom styling

## JavaScript Functionality

### Core Modules (`js/main.js`)
- `initMobileMenu()`: Hamburger menu toggle with body scroll lock
- `initScrollReveal()`: Intersection Observer for fade-in animations
- `initSmoothScroll()`: Smooth scrolling for anchor links
- `initHeaderScroll()`: Header background opacity on scroll
- `fetchRSSFeed()`: Fetches Substack RSS feeds via rss2json.com API

### RSS Feed Integration
The RSS feed fetcher (lines 66-137) fetches recent Substack posts:
- API: `https://api.rss2json.com/v1/api.json`
- Handles Substack CDN image URLs
- Creates issue cards dynamically
- Fallback error UI with Substack link

### Page-Specific Scripts
- Berlin page: Loads main feed filtered for Berlin content
- Vibe AI page: Loads main feed filtered for AI content
- Both use `Ampli.fetchRSSFeed()` exported from main.js

## Development Workflow

### File Structure
```
/
├── index.html              # Main landing page
├── berlin/index.html       # Berlin channel page
├── vibe-ai/index.html      # AI channel page
├── partners/index.html     # Partnership page
├── css/styles.css          # Global styles & design system
├── js/main.js              # Core JavaScript functionality
└── images/
    ├── companies/          # Company logos for social proof
    └── partners/           # Partner logos (SVG preferred)
```

### Styling Approach
- Single global stylesheet (`css/styles.css`) for all pages
- Page-specific styles in `<style>` blocks within each HTML file
- Mobile-first responsive design with breakpoints at 640px, 768px, 1024px
- CSS custom properties for theming and consistency

### Adding New Channels
To add a new newsletter channel:
1. Create channel-specific CSS variables in styles.css (follow berlin/ai pattern)
2. Add channel data attribute to HTML: `data-channel="channel-name"`
3. Create new page in `/channel-name/index.html`
4. Update navigation dropdowns in all pages
5. Add channel card to main page channels section

### Working with RSS Feeds
- Main feed: `https://ampli.substack.com/feed`
- Section feeds not currently supported by Substack
- RSS fetcher shows 4 issues by default (configurable via limit parameter)
- Images are automatically resized to 800px width for performance

## External Dependencies
- Fontshare for typography (Clash Display, Satoshi)
- rss2json.com API for RSS feed parsing
- Substack for newsletter backend and subscription management
- Luma (lu.ma) for event calendar embeds (Berlin page only)

## Important Considerations

### Substack Integration
- Form submissions go directly to Substack's API
- No JavaScript validation required (handled by Substack)
- Subscribe forms work without JavaScript (progressive enhancement)

### Animation Performance
- Use CSS transforms and opacity for animations (GPU-accelerated)
- Intersection Observer for scroll-based reveals (better than scroll events)
- Signal ring animations use CSS keyframes (no JavaScript)

### Responsive Images
- Use `loading="lazy"` for below-fold images
- Unsplash images include width and quality parameters in URL
- Company logos are optimized SVG or PNG with fixed dimensions

### SEO & Meta Tags
Each page includes:
- Descriptive title and meta description
- Open Graph tags for social sharing
- SVG favicon with brand colors
- Semantic HTML structure (header, nav, section, footer)

## Common Tasks

### Update Newsletter Stats
Stats are hardcoded in hero sections. Update in:
- Main page: index.html lines 118-131
- Berlin page: berlin/index.html lines 487-500
- Vibe AI page: vibe-ai/index.html lines 236-249
- Partners page: partners/index.html lines 430-446

### Add Company Logo (Social Proof)
1. Add image to `/images/companies/`
2. Add to Berlin page company logos section (lines 551-585)
3. Use consistent size: 48px mobile, 56px desktop

### Add Partner Logo
1. Add SVG to `/images/partners/`
2. Add partner card to partners page grid (lines 505-580)
3. Include partner name and external link

### Modify Channel Colors
Update CSS variables in styles.css:
- Berlin: lines 37-40 (--berlin-primary, --berlin-secondary, --berlin-glow)
- AI: lines 42-45 (--ai-primary, --ai-secondary, --ai-glow)

## Deploy
This is a static site intended for GitHub Pages or similar hosting. No build process required - simply commit and push changes to deploy.
