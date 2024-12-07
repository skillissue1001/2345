import React from 'react';

interface RiskIndicatorProps {
  position: number;
}

export function RiskIndicator({ position }: RiskIndicatorProps) {
  return (
    <div 
      className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
      style={{ left: `${position}%`, top: '50%' }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-orange-500 blur-lg opacity-50" />
      
      {/* Inner circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-orange-500/50" />
      
      {/* Center dot */}
      <div className="absolute inset-[3px] rounded-full bg-white" />
    </div>
  );
}