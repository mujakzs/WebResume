import React from 'react'
import { Badge } from '../ui/badge'

interface TechStackSectionProps {
  title: string
  technologies: string[]
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ title, technologies }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{technologies.length} items</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="w-full justify-center px-3 py-1 text-sm hover:scale-105 transform-gpu transition duration-150"
            title={tech}
            aria-label={`Technology: ${tech}`}
          >
            <span className="truncate">{tech}</span>
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default TechStackSection
