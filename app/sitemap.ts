import { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url

  const routes = [
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

  return routes
}
