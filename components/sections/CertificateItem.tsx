"use client"

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Certification } from '@/lib/types/model'

interface CertProps {
  certifications: Certification[]
}

const CertificateItem: React.FC<CertProps> = ({ certifications }) => (
  <Accordion type="single" collapsible className="w-full">
    {certifications.map((cert, index) => (
      <AccordionItem key={index} value={`cert-${index}`}>
        <AccordionTrigger className="hover:no-underline">
          <div className="flex flex-col items-start">
            <span className="font-semibold text-base">{cert.title}</span>
            <span className="text-xs text-muted-foreground">{cert.organization} - {cert.issued}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl"></div>
              <p className="text-sm font-semibold text-gray-900">Certification Details</p>
            </div>

            {/* Certificate image */}
            {cert.image && (
              <div className="w-full flex justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full max-w-md h-auto rounded-md shadow-md transition-transform duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-100"
                />
              </div>
            )}

            {/* Key metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Organization</p>
                <p className="text-sm font-semibold text-gray-900">{cert.organization}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Issued</p>
                <p className="text-sm font-semibold text-gray-900">{cert.issued ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expires</p>
                <p className="text-sm font-semibold text-gray-900">{cert.expires ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Credential ID</p>
                <p className="text-sm font-mono text-gray-900">{cert.credentialId ?? '—'}</p>
              </div>
            </div>

            {/* Description & external link */}
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              This certification was issued by <strong>{cert.organization}</strong>.
            </p>

            {cert.url && (
              <div className="pt-2">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 font-semibold underline"
                >
                  View issuer / verification page
                </a>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)

export default CertificateItem
