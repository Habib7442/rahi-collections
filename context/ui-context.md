# UI Context: Rahi's Collection

## Visual Language
**"Boutique Gen-Z"**: Warm, expressive, slightly retro, mobile-native.
Light theme with a cream base, bold red accents, and playful sticker-like UI elements.

## Color Tokens
| Token | Hex | Usage |
| :--- | :--- | :--- |
| **cream-50** | `#FFFAF2` | Page background |
| **cream-100** | `#FFF4E6` | Cards, section alternates |
| **cream-200** | `#F5E9D7` | Borders, dividers |
| **rahi-red-500** | `#C92340` | Primary brand color, CTAs |
| **rahi-red-600** | `#A11C33` | Active states, hover |
| **rahi-red-100** | `#FBE3E8` | Soft tints, badges |
| **ink-900** | `#1A1410` | Primary text |
| **ink-600** | `#5C4F44` | Secondary text |
| **butter-300** | `#FFD89B` | "Sticker" accents, highlights |
| **sage-400** | `#A8C4A2` | "New Arrival" tags |
| **blush-300** | `#FFC8DD` | Soft accents, warm badges |

## Typography
| Scale | Font | Weight | Note |
| :--- | :--- | :--- | :--- |
| **Display** | Fraunces | 700/800 | Large headlines, logo |
| **Headings** | Fraunces | 600 | Section headers |
| **Body** | Inter | 400/500 | General text, UI |
| **Accent** | Caveat | 500/700 | Handwritten touches (sparingly) |

## Layout Patterns
- **Container**: Max-width 1280px, centered.
- **Section Spacing**: Fluid padding using `clamp()`.
- **Card Radius**: `1.5rem` (24px) for main cards, `0.75rem` (12px) for small elements.
- **Buttons**: Pill-shaped (`rounded-full`) for main CTAs.

## Component Conventions
- **Product Cards**: Aspect ratio 4:5 for images. Hover lift effect (`-translate-y-1`).
- **Stickers**: Badges rotated -2° to +2° to feel "stuck on".
- **WhatsApp Float**: Fixed `bottom-6 right-6`, circular, brand green (`#25D366`).

## Iconography
- **Library**: Lucide React.
- **Style**: Outline, 20-24px, stroke width 2.
- **Color**: `ink-900` or `rahi-red-500`.
