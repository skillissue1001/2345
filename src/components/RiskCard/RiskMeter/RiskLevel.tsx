import React from 'react';
import { motion } from 'framer-motion';
import { getRiskInfo } from './utils';

interface RiskLevelProps {
  score: number;
}

export function RiskLevel({ score }: RiskLevelProps) {
  const { level, color, icon: Icon } = getRiskInfo(score);

  return (
    <motion.div 
      className="text-center mt-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/30 border border-green-900/30 backdrop-blur-sm">
        <Icon className={`w-6 h-6 ${color}`} />
        <p className={`text-2xl font-bold ${color} drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]`}>
          {level}
        </p>
      </div>
    </motion.div>
  );
}