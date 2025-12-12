import React from 'react';
import { Shield, Feather, Heart, Flame, Check } from 'lucide-react';

const UpsellSection: React.FC = () => {
  // Lógica de recusa fornecida no script original, adaptada para React
  const handleDeny = () => {
    const currentUrl = new URL(window.location.href);
    const newUrl = new URL("https://lastlink.com/app/member/dashboardV2");

    currentUrl.searchParams.forEach((value, key) => {
      newUrl.searchParams.append(key, value);
    });

    window.location.href = newUrl.toString();
  };

  const products = [
    {
      name: "Blindagem do Lar",
      subtitle: "Com o Devocional do Manto do Salmo 91",
      price: "R$ 9,90",
      icon: <Shield className="w-6 h-6 text-sacred-gold" />,
    },
    {
      name: "Soluções Urgentes",
      subtitle: "Guia da Oração do Arcanjo Gabriel",
      price: "R$ 7,90",
      icon: <Feather className="w-6 h-6 text-sacred-gold" />,
    },
    {
      name: "Paz Imediata",
      subtitle: "Oração Sagrada de Elias",
      price: "R$ 6,90",
      icon: <Heart className="w-6 h-6 text-sacred-gold" />,
    }
  ];

  return (
    <div className="w-full my-6 animate-fade-in-up">
      <div className="relative bg-gradient-to-b from-amber-50 to-white border-2 border-sacred-gold/50 rounded-xl overflow-hidden shadow-2xl">
        
        {/* Faixa de Oferta Especial */}
        <div className="bg-sacred-gold text-white text-center py-2 px-4 font-serif font-bold tracking-wider text-sm md:text-base shadow-sm">
          ⚠ ESPERE! OFERTA ÚNICA E EXCLUSIVA
        </div>

        <div className="p-4 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 font-bold text-center mb-2 leading-tight">
            Complete sua Jornada Espiritual
          </h2>
          <p className="text-center text-gray-600 font-sans mb-6 text-sm md:text-base px-2">
            Leve o <strong>Combo da Proteção Divina</strong> para abençoar seu lar, trazer respostas e paz ao seu coração.
          </p>

          {/* Lista de Produtos */}
          <div className="space-y-3 mb-8">
            {products.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white border border-amber-100 p-3 rounded-lg shadow-sm hover:border-sacred-gold/40 transition-colors">
                <div className="bg-sacred-parchment p-2 rounded-full border border-sacred-gold/20 shrink-0 hidden md:block">
                  {item.icon}
                </div>
                <div className="text-left flex-grow">
                  <div className="flex justify-between items-start w-full">
                    <h3 className="font-serif font-bold text-gray-800 text-sm md:text-lg leading-tight">{item.name}</h3>
                    <span className="text-xs font-bold text-red-400 line-through ml-2 whitespace-nowrap bg-red-50 px-1.5 py-0.5 rounded">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">{item.subtitle}</p>
                </div>
                <div className="ml-1 text-green-600 bg-green-50 p-1 rounded-full border border-green-100 shrink-0">
                  <Check size={16} strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div className="text-center mb-8 bg-sacred-parchment/50 p-4 rounded-lg border border-dashed border-sacred-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
              60% OFF
            </div>
            
            <p className="text-gray-500 font-sans text-xs md:text-sm mb-1">
              Valor total dos 3 guias separados:
            </p>
            <p className="text-red-400 font-sans font-bold text-lg line-through decoration-red-400/50 mb-2">
              R$ 24,70
            </p>
            
            <div className="w-full h-px bg-gray-200 mb-3 mx-auto max-w-[200px]"></div>

            <p className="text-gray-800 font-bold text-sm uppercase tracking-wide mb-1">
              Somente nesta página:
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl font-extrabold text-green-600 font-sans tracking-tight drop-shadow-sm">
                R$ 9,90
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-2 font-sans">
              (Menos de um café por dia)
            </p>
          </div>

          {/* Botões de Ação (Adaptados do Lastlink) */}
          <div className="flex flex-col gap-4 items-center w-full">
            <div 
              id="llupsell-C64978F34-" 
              className="button-default button-accept w-full group relative flex items-center justify-center gap-2 px-6 py-4 bg-[#34E23C] text-black font-sans font-bold text-lg rounded-xl shadow-lg hover:bg-[#2fd137] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border-b-4 border-[#26ab2d]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.2s_infinite]"></div>
              <Flame className="w-5 h-5 animate-pulse" fill="currentColor" />
              <span className="text-center leading-tight">SIM! Quero adicionar todas as cópias agora</span>
            </div>

            <div 
              id="denyButtonedc093d" 
              onClick={handleDeny}
              className="text-gray-400 font-sans text-xs md:text-sm underline hover:text-gray-600 cursor-pointer transition-colors pt-2 text-center"
            >
              Não, obrigado. Prefiro pagar o preço normal depois e perder essa proteção agora.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellSection;