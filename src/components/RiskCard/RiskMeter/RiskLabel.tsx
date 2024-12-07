import React from 'react';

interface RiskLabelProps {
  score: number;
}

export function RiskLabel({ score }: RiskLabelProps) {
  const getRiskLevel = (score: number) => {
    if (score < 25) return 'Conservative';
    if (score < 50) return 'Moderate';
    if (score < 75) return 'Aggressive';
    return 'High Risk';
  };

  const getRiskColor = (score: number) => {
    if (score < 25) return 'text-green-400';
    if (score < 50) return 'text-yellow-400';
    if (score < 75) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="text-center mt-12">
      <p className="text-gray-300 text-sm font-medium mb-1">Risk Level</p>
      <p className={`text-xl font-bold ${getRiskColor(score)} drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]`}>
        {getRiskLevel(score)}
      </p>
    </div>
  );
}