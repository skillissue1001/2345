import React from 'react';
import { motion } from 'framer-motion';

interface ScoreDisplayProps {
  score: number;
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p className="text-gray-400 text-lg mb-2">Your Risk Score</p>
      <div className="inline-flex items-baseline">
        <motion.span 
          className="text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          {score}
        </motion.span>
        <span className="text-3xl text-gray-400 ml-2">/100</span>
      </div>
    </motion.div>
  );
}