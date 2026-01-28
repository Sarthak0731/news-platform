# News Platform - UI/UX Design Prompt for Lovable AI

## 📰 Project Overview

**Project Name:** News Platform  
**Purpose:** A multi-region, multi-category news aggregation platform with SEO optimization  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Firebase Backend  
**Target Users:** News readers across different regions (US, India, Europe, Global) interested in various news categories  
**Status:** Production-ready (needs modern UI/UX refresh)

---

## 🎯 Key Features to Design

### 1. **Homepage - Latest News Feed (All Regions, All Categories)**
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
- **Navigation on Home:**
  - Region selector dropdown (US, India, Europe, Global)
  - Category navigation (dynamically loaded from API)

### 2. **Navigation & Header**
- **Top Navigation Bar (on Homepage & Region Pages):**
  - Logo/brand name on left ("📰 News Platform") - clickable, goes to home
  - Region selector dropdown (US, India, Europe, Global)
  - Category navigation (dynamically loaded from API)
  - Dark mode toggle button (top right)
  - Sticky header that stays visible while scrolling
- **Top Navigation Bar (on Category Pages Only):**
  - Logo/brand name on left ("📰 News Platform") - clickable, goes to home
  - **NO region selector** (hidden/removed)
  - Category name/breadcrumb shown prominently
  - Dark mode toggle button (top right)
  - Sticky header that stays visible while scrolling
- **Mobile Menu:**
  - Hamburger menu for regions and categories (not shown on category pages)
  - Smooth slide-out drawer animation
  - Touch-friendly buttons and spacing

### 3. **Category Pages** (`/category/[category]`)
- **Layout:** Article grid filtered by category, showing articles from ALL regions combined
- **Key Features:**
  - Page title: "Category Name" (e.g., "Technology News")
  - Breadcrumb navigation: Home (logo clickable) > Category Name
  - **NO region filter dropdown** on this page
  - Articles displayed in grid/masonry layout
  - Category badge prominently displayed
  - Region indicators visible on each article card (to show which region the news is from)
  - Pagination or infinite scroll
  - Loading and error states
  - Article cards showing: title, summary, region flag, source, date
- **Navigation Back:**
  - To view a specific region's news again: User must click home logo, then navigate to that region
  - No direct navigation from category page to region page

### 4. **Region-Specific Pages** (`/news/[region]`)
- **Layout:** Two-column or grid layout showing all categories for that region
- **Key Features:**
  - Region header with flag, name, and theme color for that region
  - Grid/showcase of all available categories:
    - Each category as a card/section showing:
      - Category name
      - Latest article count or featured articles
      - Click to view category news for that specific region
  - Featured stories section (top 3-5 stories from that region across all categories)
  - All categories visible - user can pick which category to explore within this region
  - Sticky header with region name and back-to-home option
- **Navigation on Region Page:**
  - Home logo (top left) - goes back to homepage
  - No category dropdown (instead, categories shown as cards/sections below)
  - Can select any category to view that category's news in this specific region
  - Can click region selector to switch to a different region

### 5. **Region + Category Pages** (`/news/[region]/[category]`)
- **Layout:** Filtered article list for specific region AND category
- **Key Features:**
  - Breadcrumb: Home > Region Name > Category Name
  - Applied filters display prominently
  - Region name shown in header with color theme
  - Category badge shown
  - Refined article list (only from selected region + selected category)
  - Link to: "View all in [Region]" → takes to region page
  - Link to: "View all in [Category]" → takes to category page (all regions)
  - Back navigation works intuitively based on how user got here

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

### Navigation Component - Homepage & Region Pages
```
┌────────────────────────────────────────────────────────┐
│ 📰 News Platform  [Region ▼] [Category ▼]     [🌙]    │
└────────────────────────────────────────────────────────┘
```

### Navigation Component - Category Pages (No Region Selector)
```
┌────────────────────────────────────────────────────────┐
│ 📰 News Platform  [Category Name]           [🌙]      │
└────────────────────────────────────────────────────────┘
```

### Region Page Layout - Category Showcase
```
┌─────────────────────────────────────────────────────────┐
│  🇺🇸 US News                                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  Technology  │  │   Business   │  │   Sports     │ │
│  │  • 124 news  │  │  • 89 news   │  │  • 156 news  │ │
│  │              │  │              │  │              │ │
│  │ [Featured    │  │ [Featured    │  │ [Featured    │ │
│  │  article]    │  │  article]    │  │  article]    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Health    │  │   Politics    │  │ Entertainment│ │
│  │  • 78 news  │  │  • 203 news   │  │  • 145 news  │ │
│  │              │  │              │  │              │ │
│  │ [Featured    │  │ [Featured    │  │ [Featured    │ │
│  │  article]    │  │  article]    │  │  article]    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ Featured Stories from US                                │
│ [Article 1] [Article 2] [Article 3]                    │
└─────────────────────────────────────────────────────────┘
```

### Category Page Layout (All Regions Combined)
```
┌─────────────────────────────────────────────────────────┐
│ Technology News                                         │
│ Home > Technology                                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ┌──────────────────────────────────────────────────┐  │
│ │ [Tech Article 1]                  🇺🇸 US         │  │
│ │ Summary...                        📰 TechCrunch  │  │
│ └──────────────────────────────────────────────────┘  │
│                                                         │
│ ┌──────────────────────────────────────────────────┐  │
│ │ [Tech Article 2]                  🇮🇳 India      │  │
│ │ Summary...                        📰 TheHindu    │  │
│ └──────────────────────────────────────────────────┘  │
│                                                         │
│ ┌──────────────────────────────────────────────────┐  │
│ │ [Tech Article 3]                  🇪🇺 Europe     │  │
│ │ Summary...                        📰 EuroNews    │  │
│ └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
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

### 1. **Category Showcase Grid** (CRITICAL for Region Pages)
- **Location:** On region pages (`/news/[region]`)
- Grid/card layout showing all available categories for that region
- Each category card displays:
  - Category name
  - Article count in that category for that region
  - Optional featured article preview or icon/color
  - Click to view that category's news for that specific region
- Color-coded by category
- Clickable to navigate to `/news/[region]/[category]`

### 2. **Trending Section**
- Horizontal scrollable list of trending stories
- Mini cards showing just title and view count
- "🔥 Trending" label
- Can appear on homepage and region pages

### 3. **Breadcrumb Navigation**
- Homepage: "Home > Region > Category" when on filtered pages
- Clickable breadcrumbs for navigation back
- Home logo always clickable to return to homepage
- Shows current filter chain

### 4. **Search Bar** (optional)
- Prominent search input on homepage
- Search suggestions dropdown
- Recent searches (stored in localStorage)
- Shows which region/category each result belongs to

### 5. **Region/Category Links**
- On category pages: Link to "View all US news", "View all India news", etc. (optional)
- On region+category pages: Link to "View all [Category]" and "View all [Region]"
- Clear visual indication of what these links do

### 6. **Pagination/Infinite Scroll**
- Either numbered pagination or "Load more" button
- Smooth scrolling to top after pagination
- Current page indicator
- Works for all filtered views (homepage, category, region, region+category)

---

## 🌐 SEO & Metadata Considerations
- **Page Titles:** Descriptive, keyword-rich (auto-generated from data)
- **Meta Descriptions:** Concise, 150-160 characters (auto-generated)
- **Canonical URLs:** Prevent duplicate content
- **Open Graph Tags:** For social media sharing with images
- **Structured Data:** Schema markup for news articles

*(Note: Already implemented in Next.js backend, design just needs to work with this)*

---

## 🔀 CRITICAL NAVIGATION LOGIC

### Navigation Header Behavior

**Page Type: Homepage (`/`)**
- Show: Logo + Region Dropdown + Category Navigation + Dark Mode Toggle
- Featured: Hero story + all articles from all regions and categories

**Page Type: Region Page (`/news/[region]`)**
- Show: Logo + Region Dropdown + Dark Mode Toggle
- **Hide:** Category navigation dropdown (instead show category cards/grid below)
- Featured: Region-specific header + Category showcase grid + Featured stories

**Page Type: Category Page (`/category/[category]`)**
- Show: Logo + Category Name/Breadcrumb + Dark Mode Toggle
- **Hide:** Region dropdown completely (not visible)
- Featured: Category-specific articles from ALL regions with region badges visible on each card

**Page Type: Region+Category Page (`/news/[region]/[category]`)**
- Show: Logo + Breadcrumb (Home > Region > Category) + Dark Mode Toggle
- **Hide:** Region dropdown and category navigation dropdown
- Featured: Double-filtered articles + Links to "View all [Region]" and "View all [Category]"

### Key Navigation Rules

1. **From Category Page to Region View:**
   - User CANNOT directly switch regions
   - User must: Click Home Logo → Returns to homepage → Select region → Browse region's categories
   - This prevents confusion between "all regions" and "one region" views

2. **From Region Page to Category View:**
   - User can select a category from the category showcase grid
   - Takes to `/news/[region]/[category]` (specific region + specific category)
   - OR can click home logo and select category from homepage to view all regions

3. **Category Page Features:**
   - Shows articles from ALL regions combined
   - Region badge on each card indicates source region
   - No region filter available (intentional design choice)
   - User can see global perspective of that topic

4. **Region Page Features:**
   - Shows all categories available for that region
   - Category cards/grid showcase all options
   - Featured articles from that region
   - Can switch regions without returning to home

5. **Home Logo Behavior:**
   - Available on ALL pages
   - Always returns to homepage
   - Resets all filters (shows all regions + all categories)

### URL Structure Mapping

| Page Type | URL | Nav Bar | Key Feature |
|-----------|-----|---------|------------|
| Home | `/` | Region ▼ + Category ▼ | All regions, all categories |
| Region | `/news/us` | Region ▼ (no category ▼) | Category showcase grid, region-specific |
| Category | `/category/tech` | Category name (no region ▼) | All regions combined, global view |
| Region+Cat | `/news/us/tech` | Breadcrumb only | Specific region + category combination |

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

### Primary Flow: View Latest News (All Regions, All Categories)
1. User lands on homepage
2. Sees hero story + article grid (all regions, all categories)
3. Header shows region dropdown + category navigation
4. Scrolls through articles with region and category badges visible
5. Clicks article → opens in new tab (external link)

### Flow A: Browse News by Region
1. User on homepage clicks region dropdown (e.g., "US")
2. Navigates to `/news/us` (region page)
3. Sees region header with flag and themed color
4. Below: Grid/showcase of all available categories
5. Featured articles section from that region
6. User can click any category card to see that category's news FOR THAT REGION ONLY
7. Navigation bar shows: Home logo, region name (no category dropdown)
8. To switch region: Use region dropdown
9. To view category across ALL regions: Must click home logo first, then click category

### Flow B: Browse News by Category (All Regions Combined)
1. User on homepage clicks category from navigation (e.g., "Technology")
2. Navigates to `/category/technology`
3. Sees category page with articles from ALL REGIONS combined
4. Page title: "Technology" 
5. Breadcrumb: Home Logo > Technology
6. Navigation bar shows: Home logo, category name (NO region dropdown)
7. Each article card still shows its region (US flag, India flag, etc.)
8. User sees all technology news globally
9. **To view same category for a specific region:**
   - Must click home logo to return to homepage
   - Then select region from dropdown
   - Then browse that region's categories and click the specific category
   - This takes to `/news/[region]/[category]`

### Flow C: Browse Specific Region + Specific Category
1. User on region page (`/news/us`) clicks a category card
2. Navigates to `/news/us/technology` (region + category)
3. Sees only US technology articles
4. Breadcrumb: Home Logo > US > Technology
5. Shows links: "View all US news" and "View all Technology news"
6. Can navigate back to region by clicking breadcrumb or "View all US news"
7. To see that category from another region: Must go home first

### Flow D: Return Navigation from Category to Region
1. User is on category page (`/category/technology`)
2. To switch to a region's view: Click home logo (📰)
3. Returned to homepage with all regions + all categories
4. Then select desired region from dropdown
5. Then select category from that region
6. Now on `/news/[region]/[category]` specific filtered view

### Search Flow (optional)
1. User clicks search bar on any page
2. Types keyword
3. Sees article suggestions (shows region and category)
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
