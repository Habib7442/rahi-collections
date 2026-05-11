'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

// This page renders the Sanity Studio on the client side

export default function AdminPage() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <NextStudio config={config} />
    </div>
  )
}
