import React from 'react'
import Link from 'next/link'
import ProjectItem from '@/components/sections/ProjectItem'
import { profile } from '@/lib/data/profileData'

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 min-h-screen animate-page">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:decoration-blue-600 hover:drop-shadow-[0_1px_2px_rgba(59,130,246,0.6)]">
            ← Back to Home
          </Link>
          <h1 className="text-2xl font-semibold">All Projects</h1>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 bg-card text-card-foreground hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200 animate-fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
