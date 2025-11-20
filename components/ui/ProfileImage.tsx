'use client';

import React from 'react';

interface ProfileImageProps {
  name: string;
  src: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ name, src }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "https://placehold.co/96x96/2f3a57/ffffff?text=PFP";
  };

  return (
    <img 
      src={src}
      alt={name} 
      className="w-full h-full object-cover" 
      onError={handleImageError}
    />
  );
};

export default ProfileImage;