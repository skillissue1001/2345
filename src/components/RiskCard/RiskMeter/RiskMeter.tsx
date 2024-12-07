import React from 'react';
import { motion } from 'framer-motion';
import { ScoreDisplay } from './ScoreDisplay';
import { ProgressBar } from './ProgressBar';
import { RiskLevel } from './RiskLevel';

interface RiskMeterProps {
  score: number;
}

export function RiskMeter({ score }: RiskMeterProps) {
  const segments = [
    { color: 'bg-green-400', label: 'Conservative' },
    { color: 'bg-yellow-400', label: 'Moderate' },
    { color: 'bg-orange-400', label: 'Aggressive' },
    { color: 'bg-red-400', label: 'High Risk' },
  ];

  return (
    <motion.div 
      className="w-full px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScoreDisplay score={score} />
      
      <div className="relative mx-auto max-w-md">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-red-500/10 rounded-full blur-xl" />
        
        {/* Progress bar */}
        <ProgressBar progress={score} segments={segments} />
      </div>

      <RiskLevel score={score} />
    </motion.div>
  );
}