import { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'
import { getAllCategories } from '@/lib/sanity-queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE.url

  // Static routes
  const staticRoutes = [
    '',
    '/collections',
    '/lookbook',
    '/visit',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic category routes
  let categoryRoutes: MetadataRoute.Sitemap = []
  try {
    const categories = await getAllCategories()
    categoryRoutes = categories.map((category: { slug: string }) => ({
      url: `${baseUrl}/collections/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Failed to fetch categories for sitemap:', error)
  }

  return [...staticRoutes, ...categoryRoutes]
}
