import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahi's Collection",
    short_name: "Rahi's",
    description: "Silchar's favourite family boutique - Sarees, Jewellery & more.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fffcf5', // Cream-50
    theme_color: '#c41e3a', // rahi-red-500
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
