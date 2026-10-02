# Architecture: Rahi's Collection

## Stack Table
| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server Components, Routing, SSR/ISR |
| **Language** | TypeScript (strict) | Type safety |
| **Styling** | Tailwind CSS v4 | Utility-first styling, design tokens in `@theme` |
| **Components** | shadcn/ui (Radix) | UI primitives |
| **Animation** | Framer Motion, Embla Carousel | Micro-interactions, product image carousels |
| **Icons** | Lucide React | Visual cues (shadcn primitives use Hugeicons internally) |
| **Content** | Sanity CMS (`next-sanity`) | Categories, sub-categories, products |
| **Hosting** | Vercel | Deployment and Edge Network |

## System Boundaries
- `app/`: All routes and layouts.
  - `app/admin/[[...index]]/`: Embedded Sanity Studio (client-only). The site Header hides itself on `/admin`.
  - `app/not-found.tsx`: Branded 404 for `notFound()` calls and unmatched routes.
  - `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/llms.txt/route.ts`: SEO/GEO metadata routes. All absolute URLs come from `SITE.url` in `lib/seo.ts`, which must match the Vercel primary domain (`www.`).
- `components/ui/`: shadcn/ui base components (do not modify directly).
- `components/shared/`: Site-wide components (Header, Footer, ProductCard, WhatsAppFloat).
- `components/home/`: Home page sections (Hero, CategoryTabs, TeaserMarquee).
- `lib/`: `sanity-queries.ts` (all GROQ queries), `seo.ts` (SITE constants), `types.ts`, `utils.ts`.
- `sanity/`: Studio env validation, client, image URL builder, and schema types.
- `scripts/`: Node maintenance scripts. `bulk-upload-products.mjs` uploads products + images to Sanity from a JSON manifest in `scripts/manifests/` (needs `SANITY_API_WRITE_TOKEN` in `.env.local`; dry run unless `--commit`).
- `public/`: Static assets (hero, storefront photos, logo, social icons, business card).

## Storage Model
- **Catalog data** lives in Sanity:
  - `category` — title, unique slug, description, image.
  - `subCategory` — title, unique slug, required `parentCategory` reference.
  - `product` — name, slug, required `category` ref, optional `subCategory` ref (filtered by parent), description, up to 5 `images`, optional `rawImage`, `isNewArrival`, `isFeatured`.
- **Product images** are served from `cdn.sanity.io` (allowed in `next.config.ts` `remotePatterns`) via `urlFor()` + `next/image`.
- **Static assets** are in `/public`, optimized via `next/image`.
- **Data fetching**: all queries go through `lib/sanity-queries.ts` with parameterized GROQ. Home page queries use `revalidate: 0` (always live); catalog/category/sitemap/footer queries use `revalidate: 3600`.

## Routing
- `/collections` — all products, paginated (`?page=`), category links to `/collections/[slug]`.
- `/collections/[slug]` — category products, optional `?subcategory=<slug>` filter and `?page=`.
- Home tabs sync the active category to `?category=` via `history.replaceState` (no server round-trip).

## Auth & Access Model
- No end-user authentication. All public routes are open.
- `/admin` access is governed by Sanity project membership (Sanity login).

## Invariants
1. **Performance First**: No third-party scripts in the critical rendering path.
2. **Mobile First**: All designs must be verified on a 390px width (iPhone) first.
3. **Semantic HTML**: Proper heading hierarchy (H1-H6) on every page.
4. **Type Safety**: No use of `any`; all props must be typed.
5. **Image Opt**: Every image must use `next/image` with proper `alt` text and dimensions.
6. **Brand Tokens Only**: Use the color tokens defined in `app/globals.css` — no default Tailwind palettes (sky, emerald, etc.).
