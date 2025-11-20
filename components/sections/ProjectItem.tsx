'use client';

import React from 'react';
import { Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/types/model';
import { Card, CardContent } from '../ui/card';

const ProjectItem: React.FC<Project> = ({ title, description, link }) => (
  <Card className="p-0 overflow-hidden hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 border-gray-200">
    <a href={`https://${link}`} target="_blank" rel="noopener noreferrer" className="block p-4 group h-full">
      <div className="space-y-3 h-full flex flex-col">
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">{title}</h3>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed font-medium">{description}</p>
        </div>
        <div className="text-xs text-blue-600 mt-auto flex items-center gap-2 pt-2 border-t border-gray-200">
          <LinkIcon className="w-3 h-3" />
          <span className="truncate font-semibold">{link}</span>
            <ExternalLink className="w-3 h-3 ml-auto shrink-0" />
        </div>
      </div>
    </a>
  </Card>
);

export default ProjectItem;
