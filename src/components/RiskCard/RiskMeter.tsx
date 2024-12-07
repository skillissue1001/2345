import React from 'react';

interface RiskMeterProps {
  score: number;
}

export function RiskMeter({ score }: RiskMeterProps) {
  const position = `${100 - score}%`;

  return (
    <div className="relative w-4 h-48 bg-gradient-to-t from-green-500 to-red-500 rounded-full mx-auto my-8 shadow-lg shadow-green-500/20">
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-green-500/20 to-red-500/20 blur-sm" />
      <div 
        className="absolute w-6 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full -left-1 transform -translate-y-1/2 shadow-lg shadow-orange-500/50"
        style={{ top: position }}
      />
    </div>
  );
}