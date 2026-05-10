# Architecture: Rahi's Collection

## Stack Table
| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server Components, Routing, SSR/SSG |
| **Language** | TypeScript | Type safety |
| **Styling** | Tailwind CSS v4 | Utility-first styling, design tokens |
| **Components** | shadcn/ui | UI primitives |
| **Animation** | Framer Motion | Micro-interactions |
| **Icons** | Lucide React | Visual cues |
| **Content** | MDX / Local Files | Catalog and Lookbook data |
| **Hosting** | Vercel | Deployment and Edge Network |

## System Boundaries
- `app/`: Contains all routes and layouts.
- `components/ui/`: shadcn/ui base components (do not modify directly).
- `components/shared/`: Reusable site-wide components (Header, Footer, WhatsAppFloat).
- `components/shop/`: Components specific to the catalog.
- `lib/`: Utility functions and shared logic (SEO, constants).
- `content/`: MDX files for lookbooks and products.
- `public/`: Static assets (images, fonts).

## Storage Model
- **Static Assets**: Stored in `/public/images`. Optimized via `next/image`.
- **Product Data**: Defined in `lib/constants.ts` or MDX files in `/content`.
- **Lookbooks**: MDX files in `/content/lookbooks`.

## Auth & Access Model
- No user authentication in Phase 1.
- All routes are public.

## Invariants
1. **Performance First**: No third-party scripts in the critical rendering path.
2. **Mobile First**: All designs must be verified on a 390px width (iPhone) first.
3. **Semantic HTML**: Proper heading hierarchy (H1-H6) on every page.
4. **Type Safety**: No use of `any`; all props must be typed.
5. **Image Opt**: Every image must use `next/image` with proper `alt` text and dimensions.
