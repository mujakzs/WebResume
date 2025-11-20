import React from 'react'
import Link from 'next/link'
import TechStackSection from '@/components/sections/TechStackSection'
import { profile } from '@/lib/data/profileData'

export default function TechStackPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:decoration-blue-600 hover:drop-shadow-[0_1px_2px_rgba(59,130,246,0.6)]">
            ← Back to Home
          </Link>
          <h1 className="text-2xl font-semibold">Tech Stack</h1>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 bg-card text-card-foreground hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
        <section className="space-y-6">
          <TechStackSection title="Frontend" technologies={profile.techStack.frontend} />
          <TechStackSection title="Backend" technologies={profile.techStack.backend} />
          <TechStackSection title="Architecture" technologies={profile.techStack.architecture || []} />
          <TechStackSection title="DevOps & Cloud" technologies={profile.techStack.devops} />
          <TechStackSection title="Developer Tools" technologies={profile.techStack.DevTools || []} />
        </section>
      </div>
    </main>
  )
}
