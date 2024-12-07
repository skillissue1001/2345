import React, { useRef } from 'react';
import { Header } from './Header';
import { RiskMeter } from './RiskMeter/RiskMeter';
import { ProfileSection } from './ProfileSection';
import { QuoteSection } from './QuoteSection';
import { Footer } from './Footer';
import { DownloadButton } from './DownloadButton';

export function RiskCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-green-950 flex items-center justify-center p-4">
      <div ref={cardRef} className="w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-b from-green-400/30 to-green-800/30 shadow-2xl hover:shadow-green-900/30 transition-shadow duration-300">
        <div className="w-full h-full bg-gradient-to-b from-black via-green-950/90 to-black rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex justify-center mb-8">
            <img 
              src="/src/public/img/logo.svg" 
              alt="TradeStream Logo" 
              className="w-40 h-40 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
            />
          </div>
          
          <Header />
          
          <RiskMeter score={90} />
          
          <ProfileSection 
            imageUrl="/src/public/img/caroline ellison.jpg"
            name="Caroline Ellison"
          />
          
          <QuoteSection />
          <Footer />
        </div>
      </div>
      <DownloadButton cardRef={cardRef} />
    </div>
  );
}