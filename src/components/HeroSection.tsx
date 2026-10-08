import React from 'react';
import { APP_CONFIG } from '../config.ts';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="w-full pt-8 pb-3 sm:pb-4 md:pb-5 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.18] max-w-3xl mb-4">
          +200 MAPAS VISUAIS DE PANIFICAÇÃO
        </h1>

        {/* Subheadline */}
        <h4 className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-8">
          Massas, fermentação, sova, modelagem e forno: Panificação fácil de entender
        </h4>

        {/* Mockup Principal no Formato Quadrado (1:1) com a imagem especificada pelo usuário */}
        <div className="w-full max-w-[380px] sm:max-w-[440px] md:max-w-[480px] mx-auto mb-8">
          <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
            <img
              id="hero-mockup-image"
              src={APP_CONFIG.heroImageUrl}
              alt="+200 Mapas Visuais de Panificação"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Botão de Destaque Abaixo da Mockup */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <button
            id="hero-cta-button"
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 rounded-2xl btn-cta-vibrant font-extrabold text-xl sm:text-2xl tracking-wide uppercase shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer active:scale-98"
          >
            QUERO AGORA!
          </button>
        </div>

      </div>
    </section>
  );
};

