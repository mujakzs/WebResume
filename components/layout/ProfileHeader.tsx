'use client';

import React, { useEffect } from 'react';
import { MapPin, Calendar, FileUser, BadgeCheck, Users, PhoneCall } from 'lucide-react';
import { Profile } from '@/lib/types/model';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

/* =======================
   Calendly Type Support
======================= */
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface ProfileHeaderProps {
  profile: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {

  /* =======================
     Load Calendly Script
  ======================= */
  useEffect(() => {
    // Load Calendly CSS once
    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Load Calendly Script once
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  /* =======================
     Open Calendly Popup
  ======================= */
  const openCalendly = () => {
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/andriangultiano14/30min',
    });
  };

  return (
    <div className="lg:col-span-12 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 pb-4">

      {/* =======================
          Profile Image & Info
      ======================= */}
      <div className="flex items-start space-x-4">
        <Avatar
          className="w-30 h-30 shadow-md hover:shadow-xl hover:shadow-blue-200 transition-all duration-200 rounded-lg"
        >
          <AvatarImage src="/images/1x1.png" alt={profile.name} />
          <AvatarFallback>
            {profile.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            {profile.name}
            <BadgeCheck className="w-5 h-5 text-blue-600 shrink-0" />
          </h1>

          <p className="text-lg font-semibold text-gray-700">
            {profile.title}
          </p>

          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="w-4 h-4 mr-1 stroke-1" />
            <span>{profile.location}</span>
          </div>

          <div className="flex items-center text-sm text-gray-500 mt-1">
            <PhoneCall className="w-4 h-4 mr-1 stroke-1" />
            <span>{profile.number}</span>
          </div>
        </div>
      </div>

      {/* =======================
          Action Buttons
      ======================= */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 ml-auto">

        <Button
          variant="destructive"
          size="lg"
          onClick={openCalendly}
          className="gap-2 bg-gray-950 hover:bg-gray-900 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 rounded-lg"
        >
          <Calendar className="w-4 h-4" />
          Schedule a Call
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="gap-2 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 rounded-lg"
        >
          <FileUser className="w-4 h-4" />
          View Resume
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="gap-2 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 rounded-lg"
        >
          <Users className="w-4 h-4" />
          Join community and Connect
        </Button>

      </div>
    </div>
  );
};

export default ProfileHeader;
