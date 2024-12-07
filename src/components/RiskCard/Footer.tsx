import React from 'react';
import { BarChart2 } from 'lucide-react';

export function Footer() {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 opacity-75 hover:opacity-100 transition-opacity duration-300">
      <BarChart2 className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
      <span className="text-gray-300 font-semibold">TradeStream</span>
    </div>
  );
}