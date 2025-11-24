'use client';

import React from 'react';
import { Users, ExternalLink, Link as LinkIcon, Mail, ArrowRight } from 'lucide-react';
import { Profile, SocialLink } from '@/lib/types/model';
import Card from '../ui/CustomCard';
import SocialLinkItem from '../sections/SocialLinkItem';

interface FooterRowProps {
    profile: Profile;
    socialLinks: SocialLink[];
}

const FooterRow: React.FC<FooterRowProps> = ({ profile, socialLinks }) => (
  <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
    {/* 9. A Member of (Col 1) */}
    <Card title="A Member of" icon={Users} className="mb-0 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200!">
      <div className="space-y-3">
        {profile.membership.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
          >
            <span className="font-semibold text-gray-800 group-hover:text-blue-700">{item.name}</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </a>
        ))}
      </div>
    </Card>

    {/* 10. Social Links (Col 2) */}
    <Card title="Social Links" icon={LinkIcon} className="mb-0 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200!">
      <div className="space-y-3">
        {socialLinks.map(item => (
          <SocialLinkItem key={item.name} name={item.name} link={item.link} iconName={item.iconName} />
        ))}
      </div>
    </Card>

    {/* 11. Contact Quick Links (Col 3) */}
    <Card title="Contact" icon={Mail} className="mb-0 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200!">
      <div className="flex flex-col space-y-3">
        {/* Email Section (smaller) */}
        <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all duration-150 group">
          <p className="font-semibold text-gray-900 text-[11px] uppercase tracking-wide">Email</p>
          <a 
            href={`mailto:${profile.social.email}`} 
            className="text-blue-600 hover:text-blue-800 font-medium text-xs mt-1 inline-block group-hover:underline transition-all"
          >
            {profile.social.email}
          </a>
        </div>
        
        {/* Phone Section (smaller) */}
        <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all duration-150 group">
          <p className="font-semibold text-gray-900 text-[11px] uppercase tracking-wide">Phone</p>
          <a 
            href={`tel:${profile.number}`} 
            className="text-blue-600 hover:text-blue-800 font-medium text-xs mt-1 inline-block group-hover:underline transition-all"
          >
            {profile.number}
          </a>
        </div>

        {/* CTA Buttons (smaller) */}
        <div className="pt-1 space-y-2">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-150 group">
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Let's Connect
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white text-blue-600 font-semibold rounded-md border border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all duration-150 group">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Send
          </button>
        </div>
      </div>
    </Card>
  </div>
);

export default FooterRow;
