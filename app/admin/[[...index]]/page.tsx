'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// Force the page to only render on the client to avoid "window is not defined" errors during SSR
export const dynamic = 'force-dynamic'

export default function AdminPage() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <NextStudio config={config} />
    </div>
  )
}
