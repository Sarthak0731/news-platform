# News Platform - UI/UX Design Prompt for Lovable AI

## 📰 Project Overview

**Project Name:** News Platform  
**Purpose:** A multi-region, multi-category news aggregation platform with SEO optimization  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Firebase Backend  
**Target Users:** News readers across different regions (US, India, Europe, Global) interested in various news categories  
**Status:** Production-ready (needs modern UI/UX refresh)

---

## 🎯 Key Features to Design

### 1. **Homepage - Latest News Feed**
- **Layout:** Masonry/grid layout with article cards
- **Key Elements:**
  - Large hero section highlighting top trending story
  - Article cards showing:
    - Article title (bold, clickable)
    - Summary/description (2-3 lines)
    - Category badge (color-coded)
    - Region indicator with flag emoji
    - Publication date
    - Source publication name
    - Thumbnail image placeholder
  - Pagination or infinite scroll capability
  - Loading states with skeleton screens
  - Error state handling with retry button
- **Features:**
  - Dark mode toggle (persist preference)
  - Search functionality (optional enhancement)
  - Responsive design (mobile, tablet, desktop)

### 2. **Navigation & Header**
- **Top Navigation Bar:**
  - Logo/brand name on left ("📰 News Platform")
  - Region selector dropdown (US, India, Europe, Global)
  - Category navigation (dynamically loaded from API)
  - Dark mode toggle button (top right)
  - Sticky header that stays visible while scrolling
- **Mobile Menu:**
  - Hamburger menu for regions and categories
  - Smooth slide-out drawer animation
  - Touch-friendly buttons and spacing

### 3. **Category Pages** (`/category/[category]`)
- **Layout:** Similar to homepage but filtered by category
- **Features:**
  - Page title showing selected category
  - Filter pills showing active filters
  - Breadcrumb navigation (Home > Category Name)
  - Same article card layout as homepage
  - Category-specific color coding/theming

### 4. **Region-Specific Pages** (`/news/[region]`)
- **Layout:** News filtered by selected region
- **Features:**
  - Region header with flag and name
  - Regional weather/time display (optional)
  - Featured stories section (top 3-5 stories)
  - Category breakdown showing top stories per category
  - Regional color theme/accent colors

### 5. **Region + Category Pages** (`/news/[region]/[category]`)
- **Layout:** Double-filtered view (region AND category)
- **Features:**
  - Breadcrumb: Home > Region > Category
  - Applied filters display
  - Refined article list
  - "View all in region" and "View all in category" links

---

## 🎨 Design Requirements

### Color Scheme
- **Light Mode:**
  - Background: White (#FFFFFF)
  - Text: Black (#000000)
  - Borders: Light gray (#E5E7EB)
  - Accents: Blue (#2563EB) for links and interactive elements
  - Category badges: Various colors (blue, green, red, orange, purple)
- **Dark Mode:**
  - Background: Near black (#000000)
  - Secondary bg: Dark gray (#111827)
  - Text: White (#FFFFFF)
  - Borders: Dark gray (#1F2937)
  - Accents: Light blue (#60A5FA) or gold (#FBBF24)

### Typography
- **Font Family:** System fonts recommended (font-sans)
- **Sizes:**
  - Page titles: 32-48px, bold
  - Card titles: 18-24px, bold
  - Body text: 14-16px
  - Small text: 12-14px
- **Line Heights:** Generous spacing (1.5-1.8x) for readability

### Spacing & Layout
- **Container Max Width:** 1280px (max-w-4xl in Tailwind)
- **Padding:** 
  - Desktop: 32px sides
  - Tablet: 24px sides
  - Mobile: 16px sides
- **Gap Between Cards:** 20-24px
- **Card Padding:** 16-20px internal padding

### Interactive Elements
- **Buttons:**
  - Rounded corners (6-8px radius)
  - Clear hover states (color change, shadow, underline)
  - Disabled states should appear greyed out
- **Links:**
  - Underline on hover
  - Color change on visited state (optional)
  - No underline by default (modern convention)
- **Forms (if added):**
  - Clear labels
  - Visible focus states
  - Error messages in red
  - Success messages in green

### Responsive Design Breakpoints
- **Mobile:** 320px - 640px
  - Single column layout
  - Full-width cards
  - Hamburger menu navigation
- **Tablet:** 641px - 1024px
  - Two column card layout (if appropriate)
  - Sticky header with reduced padding
- **Desktop:** 1025px+
  - Multi-column masonry/grid
  - Horizontal category navigation
  - Side panels (optional)

---

## 📱 Component Specifications

### Article Card Component
```
┌─────────────────────────────────────────┐
│ [Category Badge] [Region Flag + Name]   │
├─────────────────────────────────────────┤
│ Article Title (2 lines max)             │
│                                         │
│ Article Summary (2-3 lines of text)     │
│ Lorem ipsum dolor sit amet...           │
│                                         │
├─────────────────────────────────────────┤
│ 📰 Source Name    |    Date (MM/DD/YY)  │
└─────────────────────────────────────────┘
```

### Navigation Component
```
┌────────────────────────────────────────────────────┐
│ 📰 News Platform  [Region ▼] [Category ▼]  [🌙]  │
└────────────────────────────────────────────────────┘
```

### Loading State
- Skeleton screens with shimmer effect
- Placeholder cards while data loads
- "Loading news..." message with spinner

### Empty State
- Illustration or icon
- "No articles found" message
- "Try changing filters" suggestion
- Refresh button

---

## ✨ Additional Features to Consider

### 1. **Trending Section**
- Horizontal scrollable list of trending stories
- Mini cards showing just title and view count
- "🔥 Trending" label

### 2. **Category Showcase**
- Grid of category cards with preview images/colors
- Click to view category
- Show article count per category

### 3. **Breadcrumb Navigation**
- "Home > Region > Category" navigation trail
- Clickable breadcrumbs for easy navigation

### 4. **Search Bar** (optional)
- Prominent search input on homepage
- Search suggestions dropdown
- Recent searches (stored in localStorage)

### 5. **Article Filtering**
- Filter pills/chips showing active filters
- "Clear all filters" button
- Visual indication of active filters

### 6. **Pagination/Infinite Scroll**
- Either numbered pagination or "Load more" button
- Smooth scrolling to top after pagination
- Current page indicator

---

## 🌐 SEO & Metadata Considerations
- **Page Titles:** Descriptive, keyword-rich (auto-generated from data)
- **Meta Descriptions:** Concise, 150-160 characters (auto-generated)
- **Canonical URLs:** Prevent duplicate content
- **Open Graph Tags:** For social media sharing with images
- **Structured Data:** Schema markup for news articles

*(Note: Already implemented in Next.js backend, design just needs to work with this)*

---

## 📋 Implementation Notes for Developer

### Current State
- Next.js App Router structure with TypeScript
- Tailwind CSS v4 for styling
- Dark mode support via CSS classes
- Responsive design already partially implemented
- API integration with Firebase backend

### What Lovable AI Should Generate
1. **Modern, clean UI components** (React/Next.js compatible)
2. **Tailwind CSS styling** (matching existing setup)
3. **Responsive layouts** for all breakpoints
4. **Interactive states** (hover, active, disabled, loading)
5. **Dark mode variants** for all components
6. **Accessibility features** (ARIA labels, semantic HTML)

### Components to Create/Refresh
- [ ] Homepage layout with hero section
- [ ] Article card components (grid/masonry view)
- [ ] Navigation header with dropdowns
- [ ] Mobile hamburger menu with drawer
- [ ] Category/Region filter sections
- [ ] Loading skeleton screens
- [ ] Empty state screens
- [ ] Error handling screens
- [ ] Pagination/Load more component
- [ ] Search interface (if adding)
- [ ] Breadcrumb navigation
- [ ] Footer component

---

## 🎬 User Flows

### Primary Flow: View Latest News
1. User lands on homepage
2. Sees hero story + article grid
3. Scrolls through articles
4. Clicks article → opens in new tab (external link)

### Secondary Flow: Browse by Region
1. User clicks region dropdown
2. Selects region (US, India, Europe, Global)
3. Page filters to show only that region's news
4. Breadcrumb updates, title changes

### Tertiary Flow: Browse by Category
1. User clicks category from navigation
2. Sees articles filtered to that category
3. Can further filter by region
4. Can see category-specific styling

### Search Flow (optional)
1. User clicks search bar
2. Types keyword
3. Sees article suggestions
4. Clicks result → navigates to article

---

## 🎯 Design Priorities

**Must Have:**
- Clean, modern article card layout
- Responsive navigation
- Dark mode support
- Proper loading and error states
- Accessible design (WCAG AA compliant)

**Should Have:**
- Category color coding
- Trending section
- Advanced filtering UI
- Breadcrumb navigation
- Search functionality

**Nice to Have:**
- Animations and transitions
- Micro-interactions on buttons
- Custom scrollbar styling
- Social sharing buttons
- Related articles widget

---

## 📱 Screen Sizes to Design For
- **Mobile:** iPhone 12 (390px)
- **Tablet:** iPad (768px)
- **Desktop:** 1920px
- **Test:** All common screen sizes

---

## 🔗 Important Notes

**API Endpoints Available:**
- GET `/api/news` - Latest news
- GET `/api/news/category/[category]` - News by category
- GET `/api/news/region/[region]` - News by region
- GET `/api/news/region/[region]/category/[category]` - Filtered news
- GET `/api/categories` - All available categories

**Deployment Target:**
- Vercel (Next.js optimized)
- Must support ISR (Incremental Static Regeneration)
- Page revalidation every 1 hour

**Performance Requirements:**
- Page load under 3 seconds
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

---

## 📞 Brand Voice

**Tone:** Professional yet approachable, modern, trustworthy  
**Visual Style:** Clean, minimal, high contrast for readability  
**Values:** Accuracy, speed, accessibility, user experience

---

**Ready to Design!** 🚀

This prompt contains all the information needed to create a modern, functional UI/UX design for your news platform. Feel free to be creative with colors, animations, and layouts while maintaining the core functionality and requirements.
