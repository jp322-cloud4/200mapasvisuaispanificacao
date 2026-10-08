import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="w-full pt-10 pb-12 md:pt-14 md:pb-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-amber-200/80 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left relative overflow-hidden">
          {/* Selo Ilustrado de Garantia */}
          <div className="relative shrink-0 flex items-center justify-center">
            <img
              src="https://iili.io/nqj43KB.webp"
              alt="Garantia Incondicional de 15 Dias"
              referrerPolicy="no-referrer"
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain drop-shadow-md select-none"
            />
          </div>

          {/* Conteúdo da Garantia */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Garantia de 15 dias
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Você pode acessar o material, conhecer por dentro e testar com calma. Se perceber que não é para você, solicita reembolso dentro do prazo de 15 dias, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

