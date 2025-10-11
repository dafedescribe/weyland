# wey WhatsApp Link Service - Design Guidelines

## Design Approach
**Reference-Based Approach**: WhatsApp-themed modern SaaS design with influences from contemporary link management and analytics platforms, emphasizing emerald green brand identity with glassmorphism effects.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary: `142 71% 45%` (Emerald Green #10b981)
- Secondary: `160 84% 39%` (Darker Green #059669)
- Accent: `38 92% 50%` (Amber #fbbf24)

**Neutrals:**
- Dark: `222 47% 11%` (Slate 900 #0f172a)
- Light: `210 40% 98%` (Slate 50 #f8fafc)
- Text Primary: `215 25% 27%` (Slate 800 #1e293b)
- Text Secondary: `215 16% 47%` (Slate 500 #64748b)

**Dark Mode Support**: Full theme toggle with inverted color scheme

### B. Typography
- **Headings**: Inter or Poppins (Bold, 700-800 weight)
  - Hero: text-3xl to text-6xl with gradient effect (green to emerald)
  - Section titles: text-4xl to text-5xl
- **Body**: Inter or System UI (Regular, 400-500 weight)
  - text-lg to text-xl for subheadings
  - text-base for descriptions
- **Code/Stats**: JetBrains Mono or Fira Code for command examples

### C. Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 (p-4, h-8, m-6, py-20, etc.)
**Containers**: max-w-7xl for full sections, max-w-6xl for content sections
**Grid Systems**: 
- Features: 3-column grid (md:grid-cols-3)
- Footer: 4-column grid (lg:grid-cols-4)
- Mobile: Always single column stack

### D. Component Library

**Navigation**:
- Sticky glassmorphic navbar with backdrop-blur-lg
- Scroll-based background opacity changes
- Smooth scroll navigation to sections
- Mobile hamburger menu with slide-in drawer

**Hero Section**:
- Full viewport height split layout (60/40)
- Gradient backgrounds: white to light green
- Animated phone mockup with floating analytics cards
- Stats display: 3-column grid with key metrics
- Dual CTAs: Primary (WhatsApp) + Secondary (scroll to demo)

**Feature Cards**:
- White bg with subtle shadow (hover: lift + green border glow)
- Lucide icons in gradient circle backgrounds
- Padding: p-6 to p-8
- Grid layout: 3 columns desktop, 1 mobile

**Timeline (How It Works)**:
- Horizontal on desktop, vertical on mobile
- Number badges (01, 02, 03) with large circular icons
- Dotted connecting lines (animated)
- Screenshots/visual examples per step

**Guide Cards**:
- Tab-based interface or accordion layout
- Video thumbnails with play button overlay
- Duration and difficulty badges
- Modal expansion for full content
- Media placeholders configurable in content.js

**Pricing Cards**:
- Horizontal card layout with "Popular" badge on free tier
- Feature lists with checkmarks
- Interactive cost calculator with sliders
- Prominent CTAs per tier

**Media Gallery**:
- Masonry/bento box layout
- Video cards (large), screenshots (medium), testimonials (small)
- Lightbox for images, modal for videos
- Category filtering

**FAQ Accordion**:
- 2-column layout on desktop
- Expandable panels with chevron icons
- Search/filter bar at top
- Smooth expand/collapse animations

**CTA Section**:
- Full-width gradient background (green to emerald)
- Centered content with large white text
- 3-column stats bar
- Large primary button (white bg, green text) with arrow animation

**Footer**:
- Dark background (slate-900)
- 4-column grid with brand, product, resources, company
- Social icons for WhatsApp, Twitter, Instagram
- Copyright and "Made in Nigeria 🇳🇬" badge

### E. Animations
**Micro-interactions**:
- Card hover: translate-y-(-2) with shadow increase
- Button hover: scale and color transitions
- Icon pulse/float effects on hero mockup
- Smooth scroll behavior for navigation
- Accordion expand/collapse transitions
- Particle/dot animations on hero background (subtle)

**Key Principle**: Minimal, purposeful animations - no excessive motion

## Images & Media
**Hero Section**: Animated phone mockup showing WhatsApp interface with wey link (custom illustration or high-quality stock)

**How It Works**: 3 screenshots showing:
1. WhatsApp chat with bot
2. Link creation command example
3. Analytics dashboard preview

**Guides Section**: Video thumbnails for 6+ tutorial categories (YouTube embeds), UI screenshots with annotations

**Media Gallery**: Mix of tutorial videos, before/after screenshots, user testimonials with avatars

**Success Stories**: User photos with results achieved

All media URLs centralized in `src/config/content.js` for easy management

## Special Features
- Glassmorphism effects with backdrop-blur on cards and navigation
- Gradient text effects on headings
- WhatsApp green theme throughout
- Interactive cost calculator with real-time updates
- Smooth section transitions with scroll spy
- Mobile-first responsive design
- Configurable content system for easy updates