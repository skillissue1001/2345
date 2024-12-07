import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <h1 className="text-3xl font-bold text-gray-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        TradeStream
      </h1>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">
        Wrapped
      </h1>
    </div>
  );
}