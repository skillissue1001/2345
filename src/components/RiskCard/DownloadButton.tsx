import React from 'react';
import { Download } from 'lucide-react';
import { toPng } from 'html-to-image';

interface DownloadButtonProps {
  cardRef: React.RefObject<HTMLDivElement>;
}

export function DownloadButton({ cardRef }: DownloadButtonProps) {
  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current, {
          quality: 1.0,
          pixelRatio: 2,
        });
        
        const link = document.createElement('a');
        link.download = 'tradestream-wrapped.png';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-colors duration-300"
    >
      <Download className="w-5 h-5" />
      <span>Download Card</span>
    </button>
  );
}