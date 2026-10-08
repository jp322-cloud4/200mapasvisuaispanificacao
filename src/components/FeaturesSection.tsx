import React from 'react';

export const FeaturesSection: React.FC = () => {
  const mapImages = [
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3A477f4222-fb9d-4f13-bf59-6cbdf06cdd66%3Aimage.png?table=block&id=3f1f6529-9384-80e9-b555-d4093c8963d8&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 1',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3A3558c9c2-57de-4d54-9d01-dbc37ad3df22%3Aimage.png?table=block&id=3f1f6529-9384-8037-aa78-f9ed9d3b3a93&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 2',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3Afba259dd-67e7-415d-b547-3e5855cc2403%3Aimage.png?table=block&id=3f1f6529-9384-8094-a207-d3841d07f7d6&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 3',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3Ac61dba7e-8b6a-4a76-9b22-75bb52830024%3Aimage.png?table=block&id=3f1f6529-9384-80c9-a9f5-eb9ebf102140&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 4',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3Ac05074d8-2186-42a7-83f6-fb119ce54427%3Aimage.png?table=block&id=3f1f6529-9384-8042-a481-d0f0a8838566&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 5',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3A23c88d7f-43f5-4e59-a754-d75025c5a504%3Aimage.png?table=block&id=3f1f6529-9384-807a-a7bd-f623a107fc04&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 6',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3Ae33a941c-88aa-401b-b5e0-0bb5526bc671%3Aimage.png?table=block&id=3f1f6529-9384-8072-8813-fa6006a6cb40&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 7',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3A15b2d6c4-41ab-44dd-b969-f6b6e83f6c83%3Aimage.png?table=block&id=3f1f6529-9384-80a9-bf80-f4a432844a4f&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 8',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3A8edbf801-b646-4b94-87ff-b863883a3908%3Aimage.png?table=block&id=3f1f6529-9384-8036-8074-eb4ae3464f18&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 9',
    },
    {
      src: 'https://even-brisket-76b.notion.site/image/attachment%3A244fd1de-0497-4e67-b108-eca66f8027de%3Aimage.png?table=block&id=3f1f6529-9384-809d-86bc-dd14b703d556&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      title: 'Mapa Visual de Panificação 10',
    },
  ];

  // Duplicamos as imagens para criar o loop contínuo e infinito sem quebras
  const displayImages = [...mapImages, ...mapImages];

  return (
    <section id="o-que-voce-vai-receber" className="w-full pt-7 pb-4 sm:pt-9 sm:pb-5 md:pt-10 md:pb-6 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden">
      <div className="w-full">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-5 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            O QUE VOCÊ VAI RECEBER:
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Container do Carrossel Contínuo — Apenas as Imagens Passando */}
        <div
          id="features-carousel-container"
          className="relative w-full overflow-hidden select-none py-2 sm:py-3 pointer-events-none"
        >
          {/* Sombras suaves nas extremidades para transição fluida */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-16 md:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 sm:w-16 md:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          {/* Faixa que desliza continuamente sem interrupção */}
          <div className="animate-marquee-infinite flex gap-5 sm:gap-7 px-4">
            {displayImages.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[240px] sm:w-[290px] md:w-[340px] lg:w-[380px] rounded-2xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Proporção nativa 2:3 (1024x1536) dos mapas visuais */}
                <div
                  className="w-full overflow-hidden bg-slate-900 aspect-[2/3]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

