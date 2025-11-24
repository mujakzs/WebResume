'use client';

import React from 'react';
import { ExternalLink, Linkedin, Github, Instagram } from 'lucide-react';
import { SocialLink } from '@/lib/types/model';

const SocialLinkItem = ({ iconName, name, link }: SocialLink) => {
  const getColorClasses = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'linkedin':
        return 'hover:bg-blue-50 hover:border-blue-400 hover:shadow-blue-200 group text-blue-700'
      case 'github':
        return 'hover:bg-gray-50 hover:border-gray-800 hover:shadow-gray-300 group text-gray-900'
      case 'instagram':
        return 'hover:bg-pink-50 hover:border-pink-400 hover:shadow-pink-200 group text-pink-600'
      default:
        return 'hover:bg-gray-50 hover:border-gray-400 hover:shadow-gray-200 group text-gray-700'
    }
  }

  const Icon = (() => {
    switch (iconName.toLowerCase()) {
      case 'linkedin':
        return Linkedin;
      case 'github':
        return Github;
      case 'instagram':
        return Instagram;
      default:
        return ExternalLink;
    }
  })();
  
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-200 ${getColorClasses(iconName)}`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="font-semibold text-base">{name}</span>
      </div>
      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
};

export default SocialLinkItem;
