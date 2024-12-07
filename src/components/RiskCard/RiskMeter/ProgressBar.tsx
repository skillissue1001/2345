import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

interface ProgressBarProps {
  progress: number;
  segments: Array<{ color: string; label: string }>;
}

export function ProgressBar({ progress, segments }: ProgressBarProps) {
  return (
    <div className="relative h-8 bg-black/50 rounded-full overflow-hidden backdrop-blur-sm border border-green-900/30 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-yellow-500/5 to-red-500/5 blur-md" />
      
      {/* Segments */}
      <div className="absolute inset-0 flex">
        {segments.map((segment, index) => (
          <div key={index} className="flex-1 relative">
            <div className={cn(
              segment.color,
              'h-full opacity-30 transition-opacity duration-300',
              progress >= (index * 25) && 'opacity-100'
            )}>
              {/* Segment shine effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
            </div>
            {/* Segment label */}
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400 whitespace-nowrap">
              {segment.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Progress gradient */}
      <motion.div 
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Progress shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
        
        {/* Progress indicator */}
        <div className="absolute right-0 inset-y-0 w-1 bg-white/50 blur-sm" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 -mr-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
      </motion.div>
    </div>
  );
}