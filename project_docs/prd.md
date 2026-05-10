# PRD — Rahi's Collection Website

**Version:** 1.0
**Last updated:** 10 May 2026
**Owner:** Rahi's Collection, Ghungoor, Silchar
**Domain:** rahicollections.store
**Platform:** Next.js 15 (App Router)
**Target launch:** 4 weeks from start

---

## 1. Executive Summary

A blazing-fast, Gen-Z-coded website for **Rahi's Collection** — a family retail shop in Ghungoor, Silchar selling clothes, jewellery, and stationery. The site doubles as a digital storefront, brand showcase, and SEO funnel that drives walk-in customers and WhatsApp orders. **Design language:** light theme, warm cream base with bold maroon and butter accents, expressive typography, soft sticker-like UI elements, mobile-first. **Performance target:** Lighthouse 95+ across the board, sub-1.5s LCP on 4G.

This is **not an e-commerce site** in v1 — it's a marketing showcase + lead-capture site that converts to WhatsApp orders. E-commerce comes in Phase 2 if demand justifies it.

---

## 2. Business Context

### 2.1 The Shop

| Field | Value |
|---|---|
| Name | Rahi's Collection |
| Location | Ghungoor, Silchar, Cachar district, Assam, India |
| PIN | 788014 |
| Hours | Mon–Sat · 10:00 AM – 8:30 PM (Sunday closed) |
| Phones | +91 87218 73064 · +91 86381 88525 |
| Domain | rahicollections.store |
| Brand colors | Crimson red + cream (from existing signboard) |
| Established | (year to be filled by owner) |
| Existing presence | Physical shop only · Google Business Profile in setup |

### 2.2 Product Categories

1. **Ladies wear** — Sarees, salwar suits, kurtis, lehengas, leggings, dupattas, nighties
2. **Gents wear** — Shirts, t-shirts, trousers, kurtas, casual & festive wear
3. **Kids wear** — Frocks, baby clothes, school-going clothes, party wear
4. **Jewellery** — Imitation jewellery, bangles, earrings, necklaces, bridal sets, hair accessories
5. **Stationery** — School supplies, notebooks, pens, art materials, gifts, greeting cards

### 2.3 Why a Website (When Most Customers Walk In)

- **Local SEO juice** — A live website massively boosts Google Business Profile ranking
- **Trust signal** — Customers Google the shop before visiting; an empty result hurts
- **WhatsApp funnel** — Convert browsers to WhatsApp DMs for product enquiries / reservations
- **Brand pride** — Differentiates from competitors who only have an Instagram page
- **Festival campaigns** — Lookbooks for Durga Puja, Eid, Diwali drive foot traffic

---

## 3. Goals & Success Metrics

### 3.1 Primary Goals (6 months post-launch)

1. **Rank in Top 3** for "clothes shop in Silchar" and "saree shop Silchar" on Google Maps
2. **40+ WhatsApp enquiries/month** sourced from the website
3. **2,000+ unique monthly visitors** (mostly mobile, mostly local)
4. **Lighthouse 95+** on all pages (Performance, Accessibility, Best Practices, SEO)
5. **<1.5s LCP** on 4G — critical because most users are on mobile data, not Wi-Fi

### 3.2 Secondary Goals

- 500+ Instagram followers funneled from website
- 300+ Google reviews via post-visit prompts
- Bilingual (English + Bengali) hero copy

### 3.3 Anti-Goals (NOT in scope)

- Online checkout / payment gateway (Phase 2)
- User accounts, wishlists, carts
- Admin CMS (use file-based markdown for v1)
- Multi-language full site (just hero + 1-2 phrases in Bengali)

---

## 4. Target Audience

### 4.1 Primary Persona — "Ananya, 22, Silchar college student"
- Browses Instagram daily, follows local boutiques
- Will Google the shop before visiting
- Wants to see latest sarees / kurtis online before going in
- Will WhatsApp to ask "do you have this colour in size M?"
- Cares about aesthetic — a generic site will turn her off

### 4.2 Secondary Persona — "Mrs. Choudhury, 45, mom of two"
- Buys school stationery + kids clothes monthly
- Less digitally fluent — needs HUGE phone buttons and clear address
- Visits during festive shopping
- Uses Google Maps to find directions

### 4.3 Tertiary Persona — "Rohan, 30, NRI from London visiting family"
- Wants to buy gifts for family before flight back
- Discovers shop via Google search
- Will check Instagram + Google reviews before visiting
- Time-constrained — needs hours, address, phone visible immediately

**Design implications:** Mobile-first (90%+ traffic). Big tap targets. Clear hours/address/phone above the fold. Bilingual touches. Stunning product imagery. Easy WhatsApp link.

---

## 5. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Server components, Image opt, ISR, killer DX |
| Language | **TypeScript** (strict mode) | Catch bugs at build time |
| Styling | **Tailwind CSS v4** | Smallest CSS bundle, design-token friendly |
| Components | **shadcn/ui** (selected primitives) | Accessible, customizable, no runtime JS overhead |
| Animation | **Framer Motion** (selective) | Smooth Gen-Z micro-interactions |
| Icons | **Lucide React** | Tree-shakeable, consistent |
| Fonts | **next/font** (Fraunces + Inter + Caveat) | Self-hosted, zero CLS |
| Image | **next/image + Cloudinary** OR `next/image` only | Responsive, lazy, AVIF/WebP |
| Forms | **React Hook Form + Zod** | Tiny, type-safe |
| Analytics | **Vercel Analytics + Plausible** | Privacy-first, cookieless |
| Hosting | **Vercel** | Edge network, zero-config Next.js |
| CMS | **MDX files** (v1) → **Sanity** (v2 if needed) | Start free and simple |
| Monitoring | **Sentry** (free tier) | Error tracking |
| SEO tools | **next-seo + next-sitemap** | Schema, meta, sitemap |

### 5.1 Why NOT to use…

- **WordPress / Shopify** — slower, less control over design, not Gen-Z
- **Wix / Squarespace** — no SEO control, expensive, generic
- **Pure HTML/CSS** — harder to update, no image optimization, no SSG benefits
- **Gatsby** — Next.js is now strictly better for this use case
- **Astro** — viable but Next.js has stronger Vercel integration and better Image API

---

## 6. Design System

### 6.1 Design Direction

**"Boutique Gen-Z"** — warm, expressive, slightly retro, mobile-native. Think:
- A boutique magazine that lives on Instagram
- Crisp like Glossier, warm like Patagonia, playful like Notion
- Avoid: corporate stock-photo SaaS aesthetic, dark/futuristic vibes, generic e-commerce templates

### 6.2 Color Palette

#### Tokens (use these names in Tailwind config)

```
PRIMARY / BRAND
─ cream-50         #FFFAF2   ← page background
─ cream-100        #FFF4E6   ← cards, sections alternate
─ cream-200        #F5E9D7   ← borders, dividers

ACCENT / HERO
─ rahi-red-500     #C92340   ← primary CTA, hover, links (the BRAND red)
─ rahi-red-600     #A11C33   ← active states
─ rahi-red-100     #FBE3E8   ← soft tints for badges

SUPPORTING POPS
─ butter-300       #FFD89B   ← highlights, sticker accents
─ butter-100       #FFF4D6   ← featured sections
─ sage-400         #A8C4A2   ← second accent, "new" tags
─ blush-300        #FFC8DD   ← Gen-Z warmth, badges

TEXT
─ ink-900          #1A1410   ← primary text
─ ink-600          #5C4F44   ← secondary text
─ ink-400          #8C7E70   ← muted, captions

UTILITY
─ success          #16A34A
─ error            #DC2626
─ warning          #F59E0B
```

**Usage rules:**
- 60% cream base · 25% ink text · 10% rahi-red · 5% butter/sage/blush sprinkles
- NEVER use rahi-red as a large background — only accents, CTAs, key headlines
- Butter/sage/blush appear as **sticker-style badges**, never as large blocks
- All text on cream uses ink-900 or ink-600 — meet WCAG AA (4.5:1 minimum)

### 6.3 Typography

#### Font Stack

| Role | Font | Weights | Source |
|---|---|---|---|
| **Display headlines** | **Fraunces** (variable) | 400, 600, 800 + soft optical | Google Fonts via `next/font` |
| **Body / UI** | **Inter** (variable) | 400, 500, 600, 700 | Google Fonts |
| **Accent / Handwritten** | **Caveat** | 500, 700 | Google Fonts |

#### Why this pairing?
- **Fraunces** is a Gen-Z favorite — warm, slightly quirky serif with optical-size and softness axes. Used by Notion, Pitch, Linear marketing pages.
- **Inter** is the gold standard for UI text — neutral, hyper-legible at small sizes.
- **Caveat** as a *very occasional* handwritten accent (e.g., "✨ new arrival ✨", section labels) — adds personality without looking childish. Use sparingly.

#### Type Scale (mobile-first, fluid)

```
Display XL   clamp(3.5rem, 8vw, 6rem)      Fraunces 800   tracking -0.03em   line-height 1.0
Display L    clamp(2.5rem, 6vw, 4rem)      Fraunces 700   tracking -0.02em   line-height 1.05
Heading 1    clamp(2rem, 5vw, 3rem)        Fraunces 600   tracking -0.015em
Heading 2    clamp(1.5rem, 3.5vw, 2.25rem) Fraunces 600   tracking -0.01em
Heading 3    clamp(1.25rem, 2.5vw, 1.5rem) Inter 600
Body L       1.125rem (18px)               Inter 400      line-height 1.65
Body         1rem (16px)                   Inter 400      line-height 1.6
Caption      0.875rem (14px)               Inter 500
Micro        0.75rem (12px)                Inter 600 tracking 0.08em uppercase
Handwritten  varies                         Caveat 500-700  use sparingly
```

#### Loading Strategy

```ts
// app/fonts.ts
import { Fraunces, Inter, Caveat } from 'next/font/google';

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['SOFT', 'opsz'],
});
export const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
export const caveat = Caveat({ subsets: ['latin'], display: 'swap', variable: '--font-caveat', weight: ['500','700'] });
```

### 6.4 Spacing & Layout

```
Container max-width      1280px desktop · 100% mobile
Section vertical padding clamp(4rem, 10vw, 8rem)
Card border-radius       12px · 16px · 24px (large hero cards)
Button border-radius     999px (pill) for CTAs · 8px for secondary
Soft shadow              0 4px 20px rgba(26,20,16,0.06)
Hover shadow             0 8px 32px rgba(26,20,16,0.10)
Grid gap                 1rem mobile · 1.5rem tablet · 2rem desktop
```

### 6.5 Component Library

#### Buttons (3 variants)

```tsx
// Primary
className="bg-rahi-red-500 hover:bg-rahi-red-600 text-white px-8 py-4 rounded-full font-semibold transition-transform hover:-translate-y-0.5"

// Secondary
className="bg-cream-100 hover:bg-cream-200 text-ink-900 border-2 border-ink-900 px-8 py-4 rounded-full font-semibold"

// Sticker (Gen Z accent)
className="bg-butter-300 text-ink-900 px-4 py-1.5 rounded-full text-sm font-bold rotate-[-2deg] inline-block"
```

#### Cards (Product / Category)

- Cream-100 background, soft shadow, rounded-2xl
- Image fills top 65% (aspect-[4/5])
- Title in Fraunces 600, price/category in Inter 500
- Hover: lift (-translate-y-1) + shadow grow + image zoom (scale-105)
- Badge stickers: "NEW", "TRENDING", "BRIDAL" — rotated -2° to +2°

#### Section Wrappers

- Alternate cream-50 and cream-100 backgrounds for rhythm
- Section label in Caveat above heading: *"this season's picks"*
- Big Fraunces heading
- Optional Inter sub-deck

#### WhatsApp Float Button (always visible on mobile)

```tsx
<a
  href="https://wa.me/918721873064?text=Hi%20Rahi's%20Collection!"
  className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
  aria-label="Chat on WhatsApp"
>
  <WhatsAppIcon className="w-6 h-6" />
</a>
```

### 6.6 Imagery & Iconography

- **Photography style:** Natural daylight, warm tones, shop interior + product close-ups, no harsh flash
- **Aspect ratios:** 4:5 portrait for products, 16:9 for hero, 1:1 for Instagram tiles
- **Placeholder:** Always use `next/image` with `placeholder="blur"` and `blurDataURL`
- **Icons:** Lucide outline-style, 20-24px default, ink-900 color
- **Stickers/badges:** Hand-drawn-feeling, slightly rotated, only 2-3 per page max

### 6.7 Motion

- **Transitions:** 200ms cubic-bezier(0.4, 0, 0.2, 1) default
- **Hover lifts:** translate-y -2 to -4px
- **Marquee:** infinite horizontal scroll for category names (CSS-only, no JS)
- **Scroll reveal:** Framer Motion `whileInView` with 0.6s fade + slide-up 24px
- **Reduce motion:** Respect `prefers-reduced-motion`

---

## 7. Information Architecture

### 7.1 Sitemap

```
/                           Home
├── /shop                   Shop overview (categories grid)
│   ├── /shop/ladies        Ladies wear collection
│   ├── /shop/gents         Gents wear collection
│   ├── /shop/kids          Kids wear collection
│   ├── /shop/jewellery     Jewellery collection
│   └── /shop/stationery    Stationery
├── /lookbook               Featured collections / festive lookbooks
│   └── /lookbook/[slug]    Individual lookbook (Durga Puja 2026, etc.)
├── /visit                  Address, hours, map, directions
├── /about                  Story, photos of shop, owner intro
└── /contact                Phone, WhatsApp, email, contact form
```

### 7.2 Navigation

**Desktop nav (sticky, transparent → solid on scroll):**
`Logo · Shop · Lookbook · Visit · About · [WhatsApp CTA]`

**Mobile nav (hamburger drawer):**
Slide-in from right, full screen, large tap targets, Caveat accent labels

---

## 8. Page-by-Page Specifications

### 8.1 Home Page (/)

#### Above the fold (hero)

```
┌──────────────────────────────────────────────────┐
│ ✨ silchar's favourite family boutique           │  ← Caveat label
│                                                  │
│      RAHI'S                                      │  ← Fraunces XL
│      COLLECTION ⟶                                 │
│                                                  │
│  Sarees, jewellery, stationery & everyday        │  ← Inter L
│  joy for every Bengali family.                   │
│                                                  │
│  [Visit our shop ⟶]  [WhatsApp us]              │  ← Pill buttons
│                                                  │
│         ↓ scroll for collections                 │
└──────────────────────────────────────────────────┘
   Cream background, big serif logo, hero photo on right (mobile: below)
```

#### Sections (in order)

1. **Hero** — as above
2. **Marquee strip** — infinite scroll: `· SAREES · KIDS · JEWELLERY · STATIONERY · BANGLES · KURTIS · BACK-TO-SCHOOL ·`
3. **Shop the categories** — 5-card grid (one per category) with hover lift
4. **Featured this week** — horizontal scroll of 6-8 product photos with prices
5. **From the shop** — 3-photo Instagram-style grid with shop interior + customer joy
6. **Festive lookbook teaser** — full-bleed image card linking to current lookbook
7. **Why visit us** — 3 columns: "Latest collections", "Family-trusted since [year]", "All under one roof"
8. **Bengali touch** — small bilingual section: *"নতুন কালেকশন এসেছে — visit us today"*
9. **Visit us strip** — address, hours, map embed, big "Get Directions" button
10. **Footer** — sitemap, socials, copyright, "made in Silchar 🤍"

#### Critical above-the-fold elements (LCP target)

- Hero image: AVIF, 1200px wide, priority loaded
- Hero text: zero CLS via `next/font` and explicit dimensions
- Pill CTAs visible without scroll on iPhone SE viewport

### 8.2 Shop Page (/shop)

- Big Fraunces title: "Shop"
- 5 large category cards in a 2-3 column grid (mobile: 1 col, tablet: 2 col, desktop: 3 col)
- Each card: photo, category name, item count, "Browse →" arrow link
- Sticky filter bar (later phases)

### 8.3 Category Pages (/shop/[category])

- Hero with category name + 1-line description
- Filter chips: Price, Type, Color (aesthetic only in v1 — not functional unless we add CMS)
- Masonry grid of products (12-24 items, paginated or infinite scroll)
- Each product: photo, name, price (or "Ask price"), WhatsApp CTA
- "Don't see what you want? WhatsApp us" callout at bottom

### 8.4 Visit Us (/visit)

- Address in big Fraunces
- Hours table (Mon–Sat highlighted, Sunday muted)
- Embedded Google Map (lazy-loaded after first interaction)
- Directions button → opens Google Maps app
- 3 phone numbers + WhatsApp button
- Photos of the shop exterior so customers recognize it
- Public transport / parking notes
- Schema: LocalBusiness JSON-LD

### 8.5 Lookbook (/lookbook)

- Magazine-style grid of seasonal lookbooks
- Each lookbook = full-bleed photo + title + season + button "View collection →"
- Individual lookbook page: long-scroll photo essay with captions

### 8.6 About (/about)

- Founding story (1-2 paragraphs, Fraunces accents)
- Owner photo + name
- Shop history timeline (optional)
- Big closing statement: "we're a family. come be part of it."

### 8.7 Contact (/contact)

- Phone numbers (huge, tappable)
- WhatsApp button (primary)
- Optional contact form (name, message → emails owner via Resend or SendGrid)
- Map embed
- Social icons (Instagram, Facebook)

---

## 9. Performance Requirements

### 9.1 Core Web Vitals Targets

| Metric | Mobile (4G) | Desktop |
|---|---|---|
| LCP | <1.5s | <0.8s |
| INP | <100ms | <50ms |
| CLS | <0.05 | <0.05 |
| FCP | <1.0s | <0.5s |
| TTFB | <500ms | <300ms |

### 9.2 Bundle Size Budget

- **First-load JS:** <90KB gzipped (Next.js + React + minimal client JS)
- **Per-page JS:** <30KB additional gzipped
- **Critical CSS:** Inlined, <14KB
- **Hero image:** <80KB (AVIF), priority loaded
- **Total transfer (home page on mobile):** <500KB

### 9.3 How We'll Hit These Numbers

1. **Server Components first** — every component is RSC unless interactivity demands client
2. **`next/image`** with `priority` on hero, `loading="lazy"` everywhere else
3. **AVIF + WebP** with JPEG fallback (auto via `next/image`)
4. **`next/font`** to avoid font CSS request and CLS
5. **Static export where possible** — `force-static` on every public page
6. **ISR (every 60s)** for shop/lookbook pages so updates propagate without rebuilds
7. **Edge runtime** for any API routes
8. **No Tailwind purge surprises** — CSS bundle <30KB
9. **Cloudinary or Vercel Image** for global CDN-cached transforms
10. **Preconnect** to Cloudinary, Google Fonts, Plausible
11. **Defer non-critical JS** — analytics, chat widgets all `strategy="lazyOnload"`
12. **No third-party JS** in critical path (no Hotjar/Intercom/etc. on first load)

### 9.4 Image Strategy

Every photo goes through this pipeline:
1. Owner uploads to `/public/images/` or Cloudinary
2. `next/image` generates 4 widths × 2 formats per image automatically
3. Browser downloads only the size + format it needs
4. Lazy-loaded below the fold
5. Blurred LQIP placeholder for instant render

```tsx
<Image
  src="/images/saree-collection-1.jpg"
  alt="Maroon Banarasi saree with gold zari work"
  width={800}
  height={1000}
  priority={isHero}
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="rounded-2xl object-cover"
/>
```

---

## 10. SEO Strategy

### 10.1 Foundation (Week 1)

- **Domain:** rahicollections.store (acquired)
- **Set up Search Console** + verify via Vercel DNS TXT record
- **Submit sitemap** generated by `next-sitemap` (auto-rebuild on deploy)
- **robots.txt** allowing all + sitemap reference
- **Canonical URLs** on every page via Next.js metadata API

### 10.2 On-Page SEO

#### Page Title Patterns

| Page | Title pattern (max 60 chars) |
|---|---|
| Home | `Rahi's Collection · Clothes, Jewellery & Stationery in Silchar` |
| Shop | `Shop All Categories · Rahi's Collection, Silchar` |
| Ladies | `Sarees, Salwar Suits, Kurtis · Ladies Wear Silchar` |
| Gents | `Gents Wear · Shirts, Kurtas & More · Silchar` |
| Kids | `Kids Wear · Frocks, Boys & Baby Clothes · Silchar` |
| Jewellery | `Imitation Jewellery & Bangles · Rahi's Collection Silchar` |
| Stationery | `School & Office Stationery · Rahi's Silchar` |
| Visit | `Visit Us · Rahi's Collection, Ghungoor, Silchar` |
| About | `About Rahi's Collection · A Family Boutique in Silchar` |

#### Meta Descriptions (140-155 chars each)

Pattern: `Browse [products] at Rahi's Collection in Ghungoor, Silchar. [Trust signal]. Open Mon–Sat, 10 AM–8:30 PM. Visit us today.`

#### Structured Data (JSON-LD)

Add LocalBusiness schema in root layout:

```json
{
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "Rahi's Collection",
  "image": "https://rahicollections.store/og-image.jpg",
  "telephone": "+918721873064",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ghungoor",
    "addressLocality": "Silchar",
    "addressRegion": "Assam",
    "postalCode": "788014",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "24.83", "longitude": "92.78" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "10:00",
    "closes": "20:30"
  }],
  "priceRange": "₹",
  "url": "https://rahicollections.store"
}
```

Add `BreadcrumbList` schema on category pages and `Product` schema on product detail pages (Phase 2).

### 10.3 Keyword Targets (Top 20)

Map keywords → pages in this priority order:

| Keyword | Monthly searches (est.) | Target page |
|---|---|---|
| clothes shop in Silchar | 200-300 | Home + /shop |
| saree shop Silchar | 150-200 | /shop/ladies |
| ladies dress shop Silchar | 100-150 | /shop/ladies |
| jewellery shop Silchar | 100-150 | /shop/jewellery |
| stationery shop Silchar | 80-120 | /shop/stationery |
| kids clothes Silchar | 80-100 | /shop/kids |
| Rahi's Collection Silchar | branded | Home |
| boutique in Silchar | 50-80 | About |
| salwar suit Silchar | 40-60 | /shop/ladies |
| imitation jewellery Silchar | 30-50 | /shop/jewellery |
| school stationery Silchar | 30-50 | /shop/stationery |

(Use Google Keyword Planner + Search Console to refine after 30 days of traffic.)

### 10.4 Content Calendar (12 months)

| Month | Content piece | Target keyword |
|---|---|---|
| Month 1 | "What to wear for Durga Puja in Silchar" guide | durga puja outfit Silchar |
| Month 2 | Bridal jewellery lookbook | bridal jewellery Silchar |
| Month 3 | Back-to-school stationery checklist | school supplies Silchar |
| Month 4 | "5 saree styles trending in Cachar" | saree trends Cachar |
| Month 5 | Eid collection lookbook | eid collection Silchar |
| Month 6 | Kids party wear guide | kids party wear Silchar |
| Month 7 | Diwali outfit ideas | diwali outfit Assam |
| Month 8 | Winter shawl & stole guide | winter wear Silchar |
| Month 9 | Bengali wedding shopping guide | bengali wedding shopping |
| Month 10 | New year outfit ideas | new year outfit Silchar |
| Month 11 | Republic Day kids wear | kids ethnic wear Silchar |
| Month 12 | Yearly best-sellers recap | best sellers Silchar boutique |

Each blog post = 1,200-1,800 words, 4-6 photos, internal links to /shop/[category].

### 10.5 Link-Building (low effort, high impact)

- **Submit to local directories:** JustDial, Sulekha, IndiaMART, Yellow Pages India
- **Bengali / Assamese local blogs:** outreach for festival shopping roundups
- **NRI Cachar Facebook groups:** share lookbooks (don't spam — be useful)
- **Cross-link from Google Business Profile** website field
- **Instagram bio link** → website
- **WhatsApp business profile** → website

### 10.6 Technical SEO Checklist

- [x] HTTPS via Vercel (automatic)
- [x] Mobile-friendly (default in v1 design)
- [x] Sitemap.xml generated and submitted
- [x] robots.txt
- [x] Schema markup (LocalBusiness on every page, Breadcrumb on inner pages)
- [x] Open Graph + Twitter Card images per page
- [x] Image alt tags (mandatory in code review)
- [x] Internal linking (Shop → Categories → Products → Related)
- [x] No orphan pages
- [x] 404 page with helpful links back to /shop and /visit
- [x] Redirect strategy: any `www.` redirects to apex
- [x] Hreflang tags (Phase 2 if Bengali full-site comes)

### 10.7 Local SEO (the highest-leverage area)

This is where 95% of customers come from for a Silchar shop.

1. **Match GBP and website NAP exactly** — name, address, phone — single comma matters
2. **Embed Google Map on /visit page** — lazy-loaded
3. **Embed `LocalBusiness` schema** with same NAP
4. **Earn 50+ Google reviews in first 6 months** (use review templates from GBP pack)
5. **Geo-targeted blog content** mentioning Silchar, Cachar, Ghungoor, Tarapur, Sonai Road by name
6. **Link from website to GBP profile** and vice versa

---

## 11. Accessibility (WCAG 2.1 AA)

- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text — verify in design tokens
- All images have descriptive alt text (the photo, not "image")
- All interactive elements keyboard-navigable, visible focus ring (rahi-red-500 outline 2px)
- Skip-to-content link
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`)
- Reduced-motion media query honored (replace transitions with instant)
- Form labels (no placeholder-only labels)
- Tap targets ≥ 44x44px on mobile
- ARIA labels on icon-only buttons (esp. WhatsApp float)

---

## 12. Implementation Phases

### Phase 1 — Launch (Week 1-4) ✅ MVP

| Week | Deliverable |
|---|---|
| 1 | Repo setup, Next.js 15, Tailwind, design tokens, font loading. Static home + visit pages. |
| 2 | Shop + 5 category pages with placeholder images. WhatsApp CTA. SEO metadata. |
| 3 | Lookbook + About + Contact. Real photos integration. Animation polish. |
| 4 | Lighthouse pass, schema markup, GBP integration, deploy to Vercel, custom domain hookup. |

### Phase 2 — Growth (Month 2-6)

- Blog (`/journal`) with MDX content for SEO
- Instagram feed embed
- Customer review section
- Bengali hero copy
- Lookbook expansion (4 seasonal collections/year)
- Sanity CMS migration if owner wants self-update

### Phase 3 — Commerce (Month 6+, only if demand justifies)

- Product catalog with WhatsApp deep-links per product (`wa.me/...?text=I want this saree...`)
- Razorpay or Cashfree for advance booking
- Inventory CMS
- Email newsletter (Buttondown or Resend)

---

## 13. Recommended File Structure

```
rahis-collection/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # Home
│   │   ├── visit/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── shop/
│   │       ├── page.tsx                 # Shop overview
│   │       ├── [category]/page.tsx     # Dynamic category
│   │       └── [category]/[slug]/page.tsx  # Product (Phase 2)
│   ├── lookbook/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── layout.tsx                       # Root layout w/ fonts, schema
│   ├── not-found.tsx                    # 404
│   ├── sitemap.ts                       # Dynamic sitemap
│   ├── robots.ts                        # Robots
│   └── api/contact/route.ts             # Contact form handler
├── components/
│   ├── ui/                              # shadcn primitives
│   ├── shop/CategoryCard.tsx
│   ├── shop/ProductCard.tsx
│   ├── home/Hero.tsx
│   ├── home/Marquee.tsx
│   ├── shared/WhatsAppFloat.tsx
│   ├── shared/Footer.tsx
│   └── shared/Header.tsx
├── lib/
│   ├── seo.ts                            # Metadata helpers
│   ├── schema.ts                         # JSON-LD generators
│   └── utils.ts                          # cn(), formatters
├── content/
│   ├── lookbooks/durga-puja-2026.mdx
│   └── products/                         # MDX product files (Phase 2)
├── public/
│   ├── images/                           # Optimized photos
│   ├── og-image.jpg                      # Open Graph default
│   └── favicon.ico
├── styles/globals.css
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 14. Key Metadata Constants (drop into `lib/seo.ts`)

```ts
export const SITE = {
  name: "Rahi's Collection",
  tagline: "Clothes, jewellery & stationery for the whole family",
  description: "Silchar's beloved family boutique in Ghungoor. Sarees, kurtis, kids wear, imitation jewellery, and stationery — all under one roof. Open Mon–Sat, 10 AM–8:30 PM.",
  url: "https://rahicollections.store",
  address: "Ghungoor, Silchar 788014, Assam, India",
  phones: ["+91 87218 73064", "+91 86381 88525"],
  whatsapp: "https://wa.me/918721873064?text=Hi%20Rahi's%20Collection!",
  hours: "Mon–Sat · 10 AM – 8:30 PM",
  email: "info@rahicollections.store",
  social: {
    instagram: "https://instagram.com/rahicollections",
    facebook: "https://facebook.com/rahicollections",
  },
  ogImage: "/og-image.jpg",
} as const;
```

---

## 15. Deployment & Hosting

- **Hosting:** Vercel (free Hobby tier covers initial traffic; Pro at $20/mo if needed later)
- **Domain:** rahicollections.store → Vercel (configure A/CNAME records via registrar)
- **Email:** Forward `info@rahicollections.store` → owner's Gmail (most registrars provide free forwarding)
- **DNS:** Use registrar DNS or migrate to Cloudflare (free, faster)
- **CI/CD:** GitHub → Vercel auto-deploy on `main` branch push
- **Preview deploys:** Auto on every PR (great for showing owner before going live)
- **Estimated monthly cost:** ₹0 (free tiers cover everything in Phase 1)

---

## 16. Post-Launch Monitoring (Day 1-30)

- [ ] Vercel Analytics dashboard daily review
- [ ] Search Console crawl status
- [ ] Lighthouse CI on every deploy (block PRs if score drops below 90)
- [ ] GBP insights: profile views, calls, direction requests
- [ ] WhatsApp message volume — tag where they came from
- [ ] Instagram traffic referral
- [ ] Sentry error rate (<0.1% sessions)

---

## 17. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Owner has no time to write content | Provide MDX templates; AI-assisted draft → owner approves |
| Photos look amateur | Hire local photographer for ₹3000-5000 one-time shoot OR provide AI-generated stylish placeholders until real shoot |
| Slow .store domain reputation | Add backup .in domain redirecting to .store (cheap insurance) |
| Bengali keyboard issues | Use Latin transliteration where Bengali script causes bugs |
| Image-heavy site = slow on 2G | Aggressive AVIF + lazy + blur placeholder; tested on Slow 4G in DevTools |
| GBP suspension | Match every NAP detail across web, GBP, social — never deviate |

---

## 18. Approval & Sign-Off

- [ ] Owner reviews and approves design direction (Section 6)
- [ ] Owner provides: shop opening year, owner name(s) for About page, real product photos
- [ ] Owner approves keyword targets (Section 10.3)
- [ ] Developer confirms tech stack (Section 5)
- [ ] Launch date confirmed: ___________

---

**End of PRD.** Questions, edits, or expansions on any section — just ask.
