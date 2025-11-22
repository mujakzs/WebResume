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
      <div className="flex flex-col space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
          <p className="font-semibold text-gray-900 text-sm">Email</p>
          <a href={`mailto:${profile.social.email}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-1 inline-block">{profile.social.email}</a>
        </div>
        <button className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 group">
          Let's Talk <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="flex items-center justify-between px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all duration-200 group">
          Join Discussion <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </Card>
  </div>
);

export default FooterRow;
