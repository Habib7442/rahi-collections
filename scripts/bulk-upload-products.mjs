/**
 * Bulk-upload products (with images) to Sanity from a JSON manifest.
 *
 * Usage:
 *   node --env-file=.env.local scripts/bulk-upload-products.mjs <manifest.json>           # dry run
 *   node --env-file=.env.local scripts/bulk-upload-products.mjs <manifest.json> --commit  # write to Sanity
 *
 * Requires SANITY_API_WRITE_TOKEN (an Editor token from sanity.io/manage → API → Tokens)
 * in .env.local for --commit. Products whose slug already exists are skipped, so re-running is safe.
 *
 * Manifest shape:
 * {
 *   "imageDir": "C:/path/to/photos",
 *   "category": "ladies-wear",          // category slug (must exist)
 *   "subCategory": "sarees",            // optional sub-category slug (must exist)
 *   "isNewArrival": true,               // default for every product
 *   "products": [
 *     { "name": "...", "description": "...", "images": ["a.jpeg", "b.jpeg"], "isFeatured": false }
 *   ]
 * }
 */
import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const [manifestPath] = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const commit = process.argv.includes("--commit");

if (!manifestPath) {
  console.error("Usage: node --env-file=.env.local scripts/bulk-upload-products.mjs <manifest.json> [--commit]");
  process.exit(1);
}

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset, SANITY_API_WRITE_TOKEN: token } =
  process.env;

if (!projectId || !dataset) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET. Run with --env-file=.env.local");
  process.exit(1);
}
if (commit && !token) {
  console.error("Missing SANITY_API_WRITE_TOKEN in .env.local (needed for --commit).");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .slice(0, 96);

const key = () => crypto.randomBytes(6).toString("hex");

const manifest = JSON.parse(await readFile(manifestPath, "utf-8"));
const { imageDir, products } = manifest;

// Resolve category / sub-category references up front
const refs = await client.fetch(
  `{
    "category": *[_type == "category" && slug.current == $category][0]._id,
    "subCategory": *[_type == "subCategory" && slug.current == $subCategory][0]{ _id, "parent": parentCategory._ref }
  }`,
  { category: manifest.category, subCategory: manifest.subCategory || "" }
);

if (!refs.category) {
  console.error(`Category "${manifest.category}" not found in Sanity.`);
  process.exit(1);
}
if (manifest.subCategory && !refs.subCategory) {
  console.error(`Sub-category "${manifest.subCategory}" not found in Sanity.`);
  process.exit(1);
}
if (refs.subCategory && refs.subCategory.parent !== refs.category) {
  console.error(`Sub-category "${manifest.subCategory}" does not belong to category "${manifest.category}".`);
  process.exit(1);
}

// Validate every product before touching Sanity
const problems = [];
const slugsInManifest = new Set();
for (const product of products) {
  product.slug = product.slug || slugify(product.name);
  if (slugsInManifest.has(product.slug)) problems.push(`Duplicate slug in manifest: ${product.slug}`);
  slugsInManifest.add(product.slug);
  if (!product.images?.length) problems.push(`"${product.name}" has no images`);
  if (product.images?.length > 5) problems.push(`"${product.name}" has more than 5 images (schema max)`);
  for (const file of product.images || []) {
    if (!existsSync(path.join(imageDir, file))) problems.push(`Missing file for "${product.name}": ${file}`);
  }
}
if (problems.length) {
  console.error("Manifest problems:\n  - " + problems.join("\n  - "));
  process.exit(1);
}

const existingSlugs = new Set(
  await client.fetch(`*[_type == "product" && slug.current in $slugs].slug.current`, { slugs: [...slugsInManifest] })
);

console.log(`${commit ? "COMMIT" : "DRY RUN"} — ${products.length} products → ${manifest.category}${manifest.subCategory ? ` / ${manifest.subCategory}` : ""}\n`);

let created = 0;
let skipped = 0;
for (const product of products) {
  if (existingSlugs.has(product.slug)) {
    console.log(`  skip    ${product.slug} (already exists)`);
    skipped++;
    continue;
  }

  if (!commit) {
    console.log(`  create  ${product.slug} (${product.images.length} image${product.images.length > 1 ? "s" : ""})`);
    continue;
  }

  const images = [];
  for (const file of product.images) {
    const asset = await client.assets.upload("image", await readFile(path.join(imageDir, file)), {
      filename: `${product.slug}-${images.length + 1}${path.extname(file)}`,
    });
    images.push({ _type: "image", _key: key(), asset: { _type: "reference", _ref: asset._id } });
  }

  await client.create({
    _type: "product",
    name: product.name,
    slug: { _type: "slug", current: product.slug },
    category: { _type: "reference", _ref: refs.category },
    ...(refs.subCategory && { subCategory: { _type: "reference", _ref: refs.subCategory._id } }),
    ...(product.description && { description: product.description }),
    images,
    isNewArrival: product.isNewArrival ?? manifest.isNewArrival ?? false,
    isFeatured: product.isFeatured ?? false,
  });

  console.log(`  created ${product.slug} (${images.length} image${images.length > 1 ? "s" : ""})`);
  created++;
}

console.log(`\nDone. ${commit ? `Created ${created}` : "Would create " + (products.length - skipped)}, skipped ${skipped}.`);
if (!commit) console.log("Re-run with --commit to upload.");
