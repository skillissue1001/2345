import React from 'react';

interface ProfileSectionProps {
  imageUrl: string;
  name: string;
}

export function ProfileSection({ imageUrl, name }: ProfileSectionProps) {
  return (
    <div className="text-center my-8">
      <p className="text-gray-200 mb-3 text-lg font-medium">You take risks like:</p>
      <div className="w-24 h-24 mx-auto mb-3 relative group">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        <img
          src={imageUrl}
          alt={name}
          className="relative w-full h-full object-cover rounded-full border-2 border-green-500 shadow-lg shadow-green-500/30 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{name}</h3>
    </div>
  );
}