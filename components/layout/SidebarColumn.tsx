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

    {/* 7. Recommendations Section */}
    <Card title="Recommendations" icon={Award} className="hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
      <div className="space-y-4">
        <p className="italic text-base text-gray-700 leading-relaxed font-medium">"{profile.recommendation.quote}"</p>
        <div className="pt-4 border-t border-gray-200">
          <p className="font-bold text-gray-900 text-base">{profile.recommendation.author}</p>
          <p className="text-sm text-blue-600 font-semibold">{profile.recommendation.role}</p>
        </div>
      </div>
      {/* Dots for navigation placeholder */}
      <div className="flex justify-center space-x-2 mt-5">
        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full transition-all"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full hover:bg-blue-400 transition-all cursor-pointer"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full hover:bg-blue-400 transition-all cursor-pointer"></span>
      </div>
    </Card>
    
    {/* 8. Speaking Section */}
    <Card title="Speaking" icon={Mic} className="mb-0 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
      <p className="text-gray-800 text-base font-medium leading-relaxed">Available for speaking at events about software development and emerging technologies.</p>
      <div className="pt-4 border-t border-gray-200 mt-4">
        <button className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-md hover:shadow-blue-200 transition-all duration-200 group">
          Get in touch <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </Card>
  </div>
);

export default SidebarColumn;
