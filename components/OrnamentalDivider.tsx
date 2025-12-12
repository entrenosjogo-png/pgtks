import React from 'react';
import { Sparkles } from 'lucide-react';

const OrnamentalDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-8 w-full opacity-80">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-sacred-gold to-transparent flex-grow max-w-[150px]"></div>
      <div className="px-4 text-sacred-gold">
        <Sparkles size={20} strokeWidth={1.5} />
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-sacred-gold to-transparent flex-grow max-w-[150px]"></div>
    </div>
  );
};

export default OrnamentalDivider;