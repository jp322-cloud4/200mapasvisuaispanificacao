import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  url: string;
  alt: string;
}

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 'depoimento-1',
      url: 'https://even-brisket-76b.notion.site/image/attachment%3A3f56c786-e97d-4824-87a4-78ed6da9df72%3Aimage.png?table=block&id=3f1f6529-9384-80a6-b4e3-d9a55b64f4ac&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      alt: 'Depoimento real 1 sobre os +200 Mapas Visuais de Panificação',
    },
    {
      id: 'depoimento-2',
      url: 'https://even-brisket-76b.notion.site/image/attachment%3A1840208d-b3bf-4cf9-991c-eefb7777a4e4%3Aimage.png?table=block&id=3f1f6529-9384-80ab-a21c-c927d6219fd3&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      alt: 'Depoimento real 2 sobre os +200 Mapas Visuais de Panificação',
    },
    {
      id: 'depoimento-3',
      url: 'https://even-brisket-76b.notion.site/image/attachment%3A36fde8e7-d2cc-40c5-8996-935bea0c6337%3Aimage.png?table=block&id=3f1f6529-9384-8026-b92c-d8ea79e70141&spaceId=bbcf6529-9384-8141-b4ee-0003d8abbcbd&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
      alt: 'Depoimento real 3 sobre os +200 Mapas Visuais de Panificação',
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="w-full pt-8 pb-4 sm:pt-10 sm:pb-5 md:pt-12 md:pb-6 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Veja o que dizem sobre o material
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Carrossel de Imagens Reais de Depoimentos com Setas Laterais */}
        <div className="relative max-w-lg sm:max-w-xl md:max-w-2xl mx-auto px-6 sm:px-14">
          
          {/* Seta da Esquerda */}
          <button
            id="btn-carrossel-anterior"
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-md text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 z-20"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Seta da Direita */}
          <button
            id="btn-carrossel-proximo"
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-md text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 z-20"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Card com a Imagem do Depoimento */}
          <div
            id="slide-depoimento-container"
            className="w-full bg-slate-50 rounded-[28px] overflow-hidden border border-slate-200 shadow-xl p-3 sm:p-4 select-none transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-center overflow-hidden rounded-[20px] bg-white">
              <img
                src={testimonials[currentSlide].url}
                alt={testimonials[currentSlide].alt}
                className="w-full h-auto max-h-[650px] object-contain rounded-[20px] transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bolinhas Indicadoras (Dots de Navegação) */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-7 h-2.5 bg-amber-500'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


