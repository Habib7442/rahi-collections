# Code Standards: Rahi's Collection

## TypeScript Conventions
- **Strict Mode**: Always enabled.
- **Interfaces**: Use `interface` for component props and data models.
- **Enums**: Avoid; use union types or const objects.
- **Naming**: PascalCase for components, camelCase for variables/functions.

## Next.js Patterns
- **Server Components (RSC)**: Default for all components. Use `"use client"` only when necessary for interactivity (hooks, event listeners).
- **Image Optimization**: Always use `next/image`. Mandatory `alt` text.
- **Routing**: App Router convention. Groups used for organization if needed.
- **Metadata**: Use the Metadata API for SEO on every page.

## Tailwind CSS Rules
- **Utility First**: Avoid writing custom CSS in `globals.css` unless for theme tokens or complex animations.
- **V4 Syntax**: Use `@theme` for variables.
- **Class Ordering**: Standard Tailwind order (layout -> box-model -> typography -> visual -> misc).
- **Responsive**: Always start with mobile styles, then use `sm:`, `md:`, `lg:` etc.

## Component Structure
```tsx
// Example Component
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function MyComponent({ className, children }: Props) {
  return (
    <div className={cn("base-classes", className)}>
      {children}
    </div>
  );
}
```

## State Management
- **URL First**: Use search params for filters/sorting where possible.
- **Local State**: `useState` for simple UI toggles.
- **Global State**: Avoid unless absolutely necessary (no current need).

## API & Data
- **Static First**: All initial content should be static or generated at build time.
- **Fetch**: Use native `fetch` with Next.js revalidation settings.
