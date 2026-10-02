import { SITE } from "@/lib/seo";
import { getAllCategories } from "@/lib/sanity-queries";
import { Category } from "@/lib/types";

// llms.txt (https://llmstxt.org): a plain-text summary that helps AI assistants
// understand and cite the shop accurately.
export const revalidate = 3600;

export async function GET() {
  let categories: Pick<Category, "title" | "slug">[] = [];
  try {
    categories = (await getAllCategories()) || [];
  } catch (error) {
    console.error("Failed to fetch categories for llms.txt:", error);
  }

  const categoryLines = categories.length
    ? categories.map((c) => `- [${c.title}](${SITE.url}/collections/${c.slug})`).join("\n")
    : `- [All Collections](${SITE.url}/collections)`;

  const body = `# ${SITE.name}

> ${SITE.name} is a family-run boutique in Ghungoor, Silchar (Cachar district, Assam, India) selling ladies wear (sarees, kurtis, mekhela), gents wear, kids wear, imitation jewellery, bags and stationery. Customers browse online and enquire or reserve items on WhatsApp, then visit the shop.

## Shop details

- Address: ${SITE.address}
- Hours: ${SITE.hours} (closed on Sundays)
- Phone: ${SITE.phones.join(" / ")}
- WhatsApp: https://wa.me/${SITE.whatsappNumber}
- Email: ${SITE.email}
- Instagram: ${SITE.social.instagram}
- Map: ${SITE.mapsUrl}
- Online ordering: not available; enquiries and reservations are handled on WhatsApp, purchases happen in-store.

## Collections

${categoryLines}

## Key pages

- [Home](${SITE.url}): latest arrivals and collections by category
- [All Collections](${SITE.url}/collections): full catalogue with category filters
- [Durga Puja 2026 Saree Lookbook](${SITE.url}/lookbook): festive saree edit — Banarasi, Maheshwari silk, zari, jamdani and Warli-print sarees
- [Visit Our Shop](${SITE.url}/visit): address, opening hours, directions and storefront photos
- [Our Story](${SITE.url}/about): founded in 2018 by Susmita Chakraborty Deb; family values and philosophy
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
