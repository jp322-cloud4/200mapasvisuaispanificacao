import React from 'react';

interface BonusItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const BonusSection: React.FC = () => {
  const bonuses: BonusItem[] = [
    {
      id: 'bonus-1',
      badge: 'BÔNUS #1',
      title: '20 Receitas de Pães para Vender',
      description: 'Receitas práticas de pães para você preparar, vender e fazer uma renda extra.',
      imageUrl:
        'https://even-brisket-76b.notion.site/image/attachment%3A9631eb70-115a-4cd5-a10a-bd0638966855%3Aimage.png?table=block&id=3f1f6529-9384-805e-bc2f-f90ca138f613&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    },
    {
      id: 'bonus-2',
      badge: 'BÔNUS #2',
      title: 'Guia de Substituições na Panificação',
      description: 'Descubra como substituir ingredientes sem ficar perdida na hora de preparar suas receitas.',
      imageUrl:
        'https://even-brisket-76b.notion.site/image/attachment%3A65daac36-08ed-43b5-982d-87c967d54de0%3Aimage.png?table=block&id=3f1f6529-9384-8005-9990-e0ca1e8cb039&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    },
    {
      id: 'bonus-3',
      badge: 'BÔNUS #3',
      title: 'Checklist do Pão Perfeito',
      description: 'Um passo a passo rápido para conferir cada etapa, do preparo da massa até a hora de assar.',
      imageUrl:
        'https://even-brisket-76b.notion.site/image/attachment%3A7ba79e9f-ebb2-473d-b16c-9175525d716b%3Aimage.png?table=block&id=3f1f6529-9384-80e5-b66b-dbcbf2752499&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    },
  ];

  return (
    <section id="bonus" className="w-full pt-5 pb-10 sm:pt-6 sm:pb-12 md:pt-7 md:pb-14 px-4 sm:px-6 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-semibold mb-2">
            Bônus Exclusivos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprando hoje, você ainda recebe:
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3" />
        </div>

        {/* 3 Cards de Bônus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              id={bonus.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Imagem do Bônus */}
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-900 flex items-center justify-center border border-slate-100">
                <img
                  src={bonus.imageUrl}
                  alt={bonus.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Título do Card */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-snug">
                {bonus.title}
              </h3>

              {/* Etiqueta / Pill */}
              <div className="mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-50 text-amber-700 border border-amber-200/70">
                  {bonus.badge}
                </span>
              </div>

              {/* Descrição */}
              <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


