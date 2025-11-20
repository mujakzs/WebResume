'use client';

import React from 'react';
import { ExternalLink, Linkedin, Github, Instagram } from 'lucide-react';
import { SocialLink } from '@/lib/types/model';
import { Button } from '../ui/button';

const SocialLinkItem = ({ iconName, name, link }: SocialLink) => {
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
    <Button
      variant="outline"
      size="sm"
      asChild
      className="w-full justify-between h-auto p-3"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span className="font-medium">{name}</span>
        </div>
        <ExternalLink className="w-4 h-4" />
      </a>
    </Button>
  );
};

export default SocialLinkItem;
