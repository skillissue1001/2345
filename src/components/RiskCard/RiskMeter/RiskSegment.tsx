import React from 'react';

interface RiskSegmentProps {
  color: string;
  label: string;
  active: boolean;
}

export function RiskSegment({ color, label, active }: RiskSegmentProps) {
  return (
    <div className="relative flex-1">
      <div 
        className={`h-3 ${color} ${active ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}
      />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium">
        {label}
      </span>
    </div>
  );
}