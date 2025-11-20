'use client';

import React from 'react';
import { Briefcase, Award, Mic, ExternalLink } from 'lucide-react';
import { Profile } from '@/lib/types/model';
import Card from '../ui/CustomCard';
import ExperienceItem from '../sections/ExperienceItem';

interface SidebarColumnProps {
    profile: Profile;
}

const SidebarColumn: React.FC<SidebarColumnProps> = ({ profile }) => (
  <div className="lg:col-span-4 space-y-8">

    {/* Badge Placeholder (I'M PART OF PH 100) */}
    <div className="p-4 bg-purple-600 border border-purple-800 rounded-xl text-center shadow-lg text-white">
      <h3 className="text-xl font-bold">I'M PART OF PH 100</h3>
      <p className="text-xs mt-1">The PH100 highlights the brightest minds under 30 in the Philippines.</p>
    </div>

    {/* 6. Experience Section */}
    <Card title="Experience" icon={Briefcase}>
      <div className="space-y-1">
        {profile.experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
      <ExperienceItem title="Hello World! ✌️" company="Wrote my first line of code" years="2015" />
    </Card>

    {/* 7. Recommendations Section */}
    <Card title="Recommendations" icon={Award}>
      <p className="italic text-base text-gray-700">"{profile.recommendation.quote}"</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-800">{profile.recommendation.author}</p>
        <p className="text-sm text-gray-500">{profile.recommendation.role}</p>
      </div>
      {/* Dots for navigation placeholder */}
      <div className="flex justify-center space-x-1 mt-4">
        <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-200 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-200 rounded-full"></span>
      </div>
    </Card>
    
    {/* 8. Speaking Section */}
    <Card title="Speaking" icon={Mic} className="mb-0!">
      <p className="text-gray-700 text-sm">Available for speaking at events about software development and emerging technologies.</p>
      <div className="pt-4 border-t border-gray-100 mt-4">
        <button className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition">
          Get in touch <ExternalLink className="w-4 h-4 ml-1" />
        </button>
      </div>
    </Card>
  </div>
);

export default SidebarColumn;
