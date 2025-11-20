import React from 'react';
import ProfileHeader from '@/components/layout/ProfileHeader';
import MainContentColumn from '@/components/layout/MainContentColumn';
import SidebarColumn from '@/components/layout/SidebarColumn';
import FooterRow from '@/components/layout/FooterRow';
import { profile, socialLinksData } from '@/lib/data/profileData';

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Header */}
          <ProfileHeader profile={profile} />

          {/* Main Content Column */}
          <MainContentColumn profile={profile} />

          {/* Sidebar Column */}
          <SidebarColumn profile={profile} />

          {/* Footer Row */}
          <FooterRow profile={profile} socialLinks={socialLinksData} />
        </div>
      </div>
    </main>
  );
}
