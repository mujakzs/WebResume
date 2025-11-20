import React from 'react';
import { Experience } from '@/lib/types/model';

const ExperienceItem: React.FC<Experience> = ({ title, company, years }) => (
  <div className="relative py-2 border-l-2 border-gray-200 pl-6 group">
    {/* Dot on the timeline */}
    <div className="absolute -left-2 top-4 w-4 h-4 bg-white border-2 border-gray-400 rounded-full group-hover:border-indigo-500 transition duration-150"></div>
    
    <div className="flex justify-between items-start">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <span className="text-xs font-medium text-gray-400 shrink-0 mt-1">{years}</span>
    </div>
    <p className="text-sm text-gray-500">{company}</p>
  </div>
);

export default ExperienceItem;