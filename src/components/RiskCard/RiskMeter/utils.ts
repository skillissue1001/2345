import { Leaf, Flame, Zap, Skull } from 'lucide-react';

export function getRiskInfo(score: number) {
  if (score < 25) {
    return {
      level: 'Conservative',
      color: 'text-green-400',
      icon: Leaf
    };
  }
  if (score < 50) {
    return {
      level: 'Moderate',
      color: 'text-yellow-400',
      icon: Zap
    };
  }
  if (score < 75) {
    return {
      level: 'Aggressive',
      color: 'text-orange-400',
      icon: Flame
    };
  }
  return {
    level: 'High Risk',
    color: 'text-red-400',
    icon: Skull
  };
}