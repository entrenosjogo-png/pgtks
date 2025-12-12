import React, { useEffect, useState } from 'react';
import { Scroll, Sun, CheckCircle2, Star } from 'lucide-react';
import OrnamentalDivider from './components/OrnamentalDivider';
import WhatsAppButton from './components/WhatsAppButton';
import UpsellSection from './components/UpsellSection';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-sacred-parchment flex items-center justify-center p-4 selection:bg-sacred-gold selection:text-white">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Divine Light from Top */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-to-b from-white/80 via-sacred-sky/30 to-transparent blur-3xl opacity-60"></div>
        
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Main Content Card */}
      <main className={`relative z-10 w-full max-w-2xl transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Inner Border Container for "Frame" effect */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-lg p-1.5 md:p-3 border border-sacred-gold/30">
          <div className="border-[1.5px] border-sacred-gold/40 border-dashed rounded-lg p-6 md:p-12 text-center flex flex-col items-center relative overflow-hidden">
            
            {/* Corner Ornaments */}
            <div className="absolute top-2 left-2 text-sacred-gold/40">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm2 2h20v20H2V2z"/></svg>
            </div>
            <div className="absolute top-2 right-2 text-sacred-gold/40 rotate-90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm2 2h20v20H2V2z"/></svg>
            </div>
            <div className="absolute bottom-2 left-2 text-sacred-gold/40 -rotate-90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm2 2h20v20H2V2z"/></svg>
            </div>
            <div className="absolute bottom-2 right-2 text-sacred-gold/40 rotate-180">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm2 2h20v20H2V2z"/></svg>
            </div>

            {/* Icon Header */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-sacred-gold blur-2xl opacity-20 rounded-full animate-pulse"></div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-full border border-sacred-gold shadow-sm relative z-10">
                <Sun className="text-sacred-gold w-12 h-12 md:w-16 md:h-16" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl md:text-5xl text-gray-800 font-bold mb-4 leading-tight tracking-tight">
              Obrigado
            </h1>
            <p className="font-serif text-lg md:text-xl text-sacred-gold font-medium mb-6 uppercase tracking-widest text-sm">
              Por seu interesse em
              <br />
              <span className="font-bold text-amber-700 mt-2 block normal-case text-xl md:text-2xl">
                “O Elemento Sagrado de Moisés”
              </span>
            </p>

            <OrnamentalDivider />

            {/* Upsell Section Integration - Positioned ABOVE Delivery Content */}
            <UpsellSection />

            {/* Delivery & WhatsApp Group */}
            <div className="w-full mt-8 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              
              {/* Explanatory Text */}
              <div className="prose prose-slate max-w-md mx-auto w-full">
                <div className="flex items-start justify-center gap-3 text-left bg-blue-50/50 p-4 rounded-md border border-blue-100">
                   <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                   <p className="text-gray-600 font-sans text-base leading-relaxed m-0">
                     O conteúdo já foi enviado automaticamente para seu e-mail. Se desejar, você também pode recebê-lo pelo WhatsApp.
                   </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="w-full flex flex-col items-center gap-4">
                <WhatsAppButton />
                
                <div className="flex items-center gap-2 text-amber-800/80 text-sm font-sans mt-2">
                  <Scroll size={16} />
                  <span className="font-medium italic">
                    “Receba seu conteúdo e descubra o poder sagrado de Moisés imediatamente.”
                  </span>
                </div>
              </div>

            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sacred-dark/40 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} O Elemento Sagrado de Moisés. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-2 mt-2">
            <Star size={10} className="text-sacred-gold" />
            <Star size={10} className="text-sacred-gold" />
            <Star size={10} className="text-sacred-gold" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;