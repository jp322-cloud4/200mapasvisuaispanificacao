import React from 'react';
import { Check } from 'lucide-react';
import { APP_CONFIG } from '../config.ts';

interface FeatureItem {
  icon?: string;
  text: string;
}

export const PricingSection: React.FC = () => {
  const basicFeatures: FeatureItem[] = [
    { text: '+200 Mapas Visuais de Panificação' },
    { text: 'Mapas e explicações visuais ilustradas' },
    { text: 'Conteúdo organizado por categorias' },
    { text: 'Acesso imediato' },
  ];

  const completeFeatures: FeatureItem[] = [
    { text: '+200 Mapas Visuais de Panificação' },
    { text: 'Mapas e explicações visuais ilustradas' },
    { text: 'Conteúdo organizado por categorias' },
    { text: 'Bônus #1: 20 Receitas de Pães para Vender' },
    { text: 'Bônus #2: Guia de Substituições na Panificação' },
    { text: 'Bônus #3: Checklist do Pão Perfeito' },
    { text: 'Acesso imediato' },
  ];

  return (
    <section id="oferta" className="w-full pt-4 pb-12 sm:pt-6 md:pt-7 md:pb-16 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[32px] font-black text-slate-900 tracking-tight leading-tight">
            Escolha o plano ideal pra você
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3.5" />
        </div>

        {/* Área para Cards de Oferta (2 Planos Estilizados Conforme Referência) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl lg:max-w-4xl mx-auto items-stretch pt-4">
          
          {/* PLANO BÁSICO */}
          <div
            id="plano-basico"
            className="bg-white rounded-[28px] sm:rounded-[32px] p-6 -mt-[47px] mx-0 border border-slate-200 shadow-lg flex flex-col justify-between transition-all duration-200 hover:shadow-xl text-center"
          >
            <div>
              {/* Título do Plano */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Plano Básico
              </h3>

              {/* Bloco de Preço */}
              <div className="mb-6">
                <span className="text-red-500 line-through text-sm sm:text-base font-semibold block mb-0.5">
                  R$27,90
                </span>
                <span className="text-4xl sm:text-5xl font-black text-[#00B060] tracking-tight block leading-none mb-1">
                  R$17,90
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block mb-1">
                  ou 4x de R$ 4,89 no cartão
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#00A859] block">
                  Você economiza R$10,00
                </span>
              </div>

              {/* Lista de Recursos com Checkmark Verde */}
              <ul className="space-y-3.5 mb-8 text-left max-w-xs mx-auto">
                {basicFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-800">
                    <Check className="w-5 h-5 text-[#00B060] stroke-[2.5] shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">
                      {item.icon && <span className="mr-1.5">{item.icon}</span>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão Plano Básico */}
            <div>
              <a
                id="btn-checkout-basico"
                href={APP_CONFIG.checkoutUrlBasic}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl btn-cta-vibrant font-extrabold text-lg sm:text-xl tracking-wide uppercase shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer active:scale-98"
              >
                QUERO COMPRAR!
              </a>
            </div>
          </div>

          {/* PLANO COMPLETO */}
          <div
            id="plano-completo"
            className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 pt-8 sm:pt-9 border-[2.5px] border-amber-500 shadow-xl flex flex-col justify-between relative transition-all duration-200 hover:shadow-2xl text-center"
          >
            {/* Etiqueta “MAIS POPULAR 🔥” */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-amber-500 border-2 border-amber-200 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wide px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                MAIS POPULAR 🔥
              </span>
            </div>

            <div>
              {/* Título do Plano */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Plano Completo
              </h3>

              {/* Bloco de Preço */}
              <div className="mb-6">
                <span className="text-red-500 line-through text-sm sm:text-base font-semibold block mb-0.5">
                  R$47,90
                </span>
                <span className="text-4xl sm:text-5xl font-black text-[#00B060] tracking-tight block leading-none mb-1">
                  R$24,90
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block mb-1">
                  ou 4x de R$ 6,81 no cartão
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#00A859] block">
                  Você economiza R$23,00
                </span>
              </div>

              {/* Lista de Recursos com Checkmark Verde */}
              <ul className="space-y-3.5 mb-8 text-left max-w-xs mx-auto">
                {completeFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-800">
                    <Check className="w-5 h-5 text-[#00B060] stroke-[2.5] shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">
                      {item.icon && <span className="mr-1.5">{item.icon}</span>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão Plano Completo */}
            <div>
              <a
                id="btn-checkout-completo"
                href={APP_CONFIG.checkoutUrlComplete}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl btn-cta-vibrant font-extrabold text-lg sm:text-xl tracking-wide uppercase shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer active:scale-98"
              >
                QUERO COMPRAR!
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

