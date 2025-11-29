'use client';

import React from 'react';
import { Briefcase, Award, Mic, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { Profile } from '@/lib/types/model';
import Card from '../ui/CustomCard';
import ExperienceItem from '../sections/ExperienceItem';

interface SidebarColumnProps {
    profile: Profile;
}

const SidebarColumn: React.FC<SidebarColumnProps> = ({ profile }) => (
  <div className="lg:col-span-4 space-y-8">

    {/* 6. Experience Section */}
    <Card title="Experience" icon={Briefcase} className="hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
      <div className="space-y-2">
        {profile.experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <ExperienceItem title="Hello World! ✌️" company="Wrote my first line of code" years="2019" />
      </div>
    </Card>

    {/* 7. Skills Section */}
    <Card title="Skills" icon={Award} className="hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
      <div className="space-y-4">
        {/* Level badge */}
        {profile.skills?.level && (
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
            {profile.skills.level}
          </div>
        )}

        {/* Technical skills */}
        <div>
          <p className="text-sm text-muted-foreground mb-2 font-medium">Technical</p>
          <div className="flex flex-wrap gap-2">
            {profile.skills?.technical?.map((skill, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-blue-50 hover:text-blue-700 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div>
          <p className="text-sm text-muted-foreground mb-2 font-medium">Soft Skills</p>
          <div className="flex flex-wrap gap-2">
            {profile.skills?.soft?.map((skill, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-white border border-gray-200 text-gray-700 rounded-md font-medium hover:bg-blue-50 hover:border-blue-200 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
    
    {/* 8. References Section */}
    <Card title="References" icon={ExternalLink} className="mb-0 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          {profile.references?.map((ref, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-2 p-3 bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition">
              <div>
                <p className="font-semibold text-gray-900">{ref.name}</p>
                <p className="text-sm text-gray-600">{ref.role}{ref.organization ? ` - ${ref.organization}` : ''}</p>
              </div>
              <div className="text-sm text-gray-700 flex flex-col items-start sm:items-end">
                {ref.phone && <a href={`tel:${ref.phone}`} className="font-medium text-blue-600 hover:underline">{ref.phone}</a>}
                {ref.email && <a href={`mailto:${ref.email}`} className="text-xs text-gray-600 hover:underline mt-1">{ref.email}</a>}
                {ref.link && <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-1">{ref.link.replace('https://', '')}</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export default SidebarColumn;
