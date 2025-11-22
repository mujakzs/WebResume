import React from 'react'
import Link from 'next/link'
import CertificateItem from '@/components/sections/CertificateItem'
import { profile } from '@/lib/data/profileData'

export default function CertificatesPage() {
  // Parse date string to Date object
  const parseDate = (dateStr: string | undefined): Date => {
    if (!dateStr) return new Date(0) // Earliest date if not provided
    const months: { [key: string]: number } = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    }
    const parts = dateStr.trim().split(' ')
    const monthStr = parts[0]
    const year = parseInt(parts[1])
    const month = months[monthStr] ?? 0
    return new Date(year, month, 1)
  }

  // Separate and sort certifications
  const programmingCerts = profile.certifications
    .filter(cert => cert.image?.includes('/Programming/'))
    .sort((a, b) => parseDate(b.issued).getTime() - parseDate(a.issued).getTime())

  const otherCerts = profile.certifications
    .filter(cert => !cert.image?.includes('/Programming/'))
    .sort((a, b) => parseDate(b.issued).getTime() - parseDate(a.issued).getTime())

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:decoration-blue-600 hover:drop-shadow-[0_1px_2px_rgba(59,130,246,0.6)]">
            ← Back to Home
          </Link>
          <h1 className="text-2xl font-semibold">All Certifications</h1>
        </div>
      </div>

      {/* Professional & Training Certificates Section */}
      {otherCerts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Professional & Training Certificates</h2>
          <div className="bg-white shadow-sm rounded-lg p-6 bg-card text-card-foreground hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
            <CertificateItem certifications={otherCerts} />
          </div>
        </div>
      )}

      {/* Programming Certificates Section */}
      {programmingCerts.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Programming Certificates</h2>
          <div className="bg-white shadow-sm rounded-lg p-6 bg-card text-card-foreground hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
            <CertificateItem certifications={programmingCerts} />
          </div>
        </div>
      )}
    </main>
  )
}
