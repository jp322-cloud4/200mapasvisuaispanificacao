import React from 'react';
import { Check } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const checkmarkIconUrl = 'https://iili.io/nCJpeCg.webp';
  const inclusoBundleUrl =
    'https://even-brisket-76b.notion.site/image/attachment%3A3d592425-66e1-458a-9a6d-aaca601504eb%3Aimage.png?table=block&id=3f1f6529-9384-80f0-a93d-cd9847ac40b0&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl';

  const howItWorks = [
    {
      id: 'step-1',
      highlight: 'Material organizado e visual',
      text: ' para qualquer um entender de forma fácil',
    },
    {
      id: 'step-2',
      highlight: 'Entenda visualmente,',
      text: ' sem depender de textos enormes',
    },
    {
      id: 'step-3',
      highlight: 'Tudo separado por categorias:',
      text: ' encontre o assunto que precisa',
    },
  ];

  const checklistItems = [
    '+200 Mapas Visuais de Panificação',
    'Mapas Visuais de Farinhas e Ingredientes',
    'Mapas Visuais de Massas e Hidratação',
    'Mapas de Sova e Ponto da Massa',
    'Mapas Visuais de Fermentação',
    'Mapas de Modelagem de Pães',
    'Mapas de Cocção e Forno',
    'Mapas de Erros Comuns e Correções',
    'Material organizado e pronto pra uso',
  ];

  return (
    <section id="como-funciona" className="w-full pt-4 pb-4 sm:pt-6 sm:pb-5 md:pt-7 md:pb-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-7 sm:space-y-10">
        
        {/* BLOCO 1: Como Funciona */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <h2 className="text-[28px] font-extrabold text-slate-900 tracking-tight">
              Como Funciona
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-2.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <img
                    src={checkmarkIconUrl}
                    alt="Confirmação"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-sm select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  <strong className="font-bold text-slate-900">{item.highlight}</strong>{item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 2: O que está incluso */}
        <div id="o-que-esta-incluso">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              O que está incluso
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3" />
          </div>

          {/* Card em estilo Checklist com Banner e Itens */}
          <div className="max-w-md sm:max-w-lg mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Topo / Mockup visual do material */}
            <div className="w-full bg-slate-950 flex items-center justify-center p-3 sm:p-4">
              <img
                src={inclusoBundleUrl}
                alt="+200 Mapas Visuais de Panificação"
                className="w-full h-auto rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Título do Card */}
            <div className="px-6 sm:px-8 pt-5 pb-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                +200 Mapas Visuais de Panificação
              </h3>
            </div>

            {/* Lista Checklist com ícones circulares verdes */}
            <div className="p-6 sm:p-8 pt-4">
              <ul className="space-y-4">
                {checklistItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3.5 text-slate-900 font-semibold text-sm sm:text-base leading-snug"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Linha Divisória */}
              <div className="w-full h-px bg-slate-200 my-6" />

              {/* Mensagem de Recebimento Imediato */}
              <div className="text-center text-xs sm:text-sm text-slate-600 leading-relaxed">
                Você recebe tudo na hora, direto no seu{' '}
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                  <svg
                    className="w-4 h-4 fill-emerald-500 inline-block"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.97.53 1.77.814 2.793.814 3.179 0 5.765-2.587 5.766-5.766 0-3.18-2.586-5.77-5.766-5.77zm3.385 8.163c-.145.411-.74.757-1.026.804-.275.045-.632.062-1.023-.063-.25-.08-.57-.186-.983-.365-1.748-.756-2.882-2.531-2.969-2.648-.087-.116-.71-1.028-.71-1.961 0-.934.489-1.393.663-1.583.174-.19.38-.238.507-.238.127 0 .253.002.364.007.119.005.277-.045.435.333.158.38.538 1.314.586 1.409.047.095.079.206.016.333-.063.127-.095.206-.19.317-.095.111-.2.248-.285.333-.095.095-.195.198-.084.388.111.19.493.813 1.058 1.316.726.647 1.339.848 1.529.943.19.095.301.079.412-.047.111-.127.475-.555.602-.745.127-.19.254-.158.428-.095.174.063 1.109.523 1.3.618.19.095.317.143.364.222.048.079.048.459-.097.87z" />
                  </svg>
                  WhatsApp
                </span>{' '}
                e no seu{' '}
                <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                  <span className="font-extrabold text-[#EA4335] text-sm">M</span>
                  E-mail.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

