import React from 'react';
import { Experience } from '@/lib/types/model';
import { Briefcase } from 'lucide-react';

const ExperienceItem: React.FC<Experience> = ({ title, company, years, current }) => (
  <div className="relative py-3 border-l-2 border-gray-200 pl-6 group">
    {/* Dot on the timeline - highlight if current */}
    <div className={`absolute -left-2.5 top-5 w-5 h-5 rounded-full transition-all duration-300 ${
      current 
        ? 'bg-blue-500 border-2 border-blue-600 shadow-lg shadow-blue-300 animate-pulse' 
        : 'bg-white border-2 border-gray-400 group-hover:border-blue-400'
    }`}></div>
    
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h3 className={`text-base font-semibold ${current ? 'text-blue-700' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className={`text-sm ${current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
          {company}
        </p>
      </div>
      <span className="text-xs font-medium text-gray-400 shrink-0 mt-1">{years}</span>
    </div>
  </div>
);

export default ExperienceItem;