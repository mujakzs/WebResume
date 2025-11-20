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
            <span className="text-xs text-muted-foreground">{cert.organization}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4">
            <p className="text-sm text-gray-700">
              Issued by <strong>{cert.organization}</strong>
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)

export default CertificateItem
