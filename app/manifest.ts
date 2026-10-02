import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahi's Collection",
    short_name: "Rahi's",
    description: "Silchar's favourite family boutique - Sarees, Jewellery & more.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFAF2', // cream-50
    theme_color: '#C92340', // rahi-red-500
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
