'use client';

import React from 'react';
import { Users, ExternalLink, Link as LinkIcon, Mail } from 'lucide-react';
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
    <Card title="A Member of" icon={Users} className="mb-0!">
      <div className="space-y-3">
        {profile.membership.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
            <span className="font-medium text-gray-700">{item.name}</span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </a>
        ))}
      </div>
    </Card>

    {/* 10. Social Links (Col 2) */}
    <Card title="Social Links" icon={LinkIcon} className="mb-0!">
      <div className="space-y-3">
        {socialLinks.map(item => (
          <SocialLinkItem key={item.name} name={item.name} link={item.link} iconName={item.iconName} />
        ))}
      </div>
    </Card>

    {/* 11. Contact Quick Links (Col 3) */}
    <Card title="Contact" icon={Mail} className="mb-0!">
      <div className="flex flex-col space-y-3">
        <div className="border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
          <p className="font-medium">Email</p>
          <a href={`mailto:${profile.social.email}`} className="text-indigo-600 hover:underline">{profile.social.email}</a>
        </div>
        <button className="flex items-center justify-between px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200">
          Let's Talk <ExternalLink className="w-4 h-4 text-gray-400" />
        </button>
        <button className="flex items-center justify-between px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition duration-200">
          Join Discussion <ExternalLink className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </Card>
  </div>
);

export default FooterRow;
