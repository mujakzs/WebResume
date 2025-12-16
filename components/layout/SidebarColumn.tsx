'use client';

import React from 'react';
import { Briefcase, Award, Mic, ExternalLink, Sparkles, ArrowRight, Link as LinkIcon } from 'lucide-react';
import { Profile, SocialLink } from '@/lib/types/model';
import Card from '../ui/CustomCard';
import ExperienceItem from '../sections/ExperienceItem';
import SocialLinkItem from '../sections/SocialLinkItem';

interface SidebarColumnProps {
    profile: Profile;
    socialLinks: SocialLink[];
}

const SidebarColumn: React.FC<SidebarColumnProps> = ({ profile, socialLinks }) => (
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

    {/*Social Links (Col 2) */}
    <Card title="Social Links" icon={LinkIcon} className="hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200!">
      <div className="space-y-2">
        {socialLinks.map(item => (
          <SocialLinkItem key={item.name} name={item.name} link={item.link} iconName={item.iconName} />
        ))}
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
          <p className="text-sm text-muted-foreground mb-2 font-medium">Programming Languages</p>
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
  </div>
);

export default SidebarColumn;
