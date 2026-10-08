import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'O material é físico ou digital?',
      answer: 'O material é 100% digital em alta resolução (PDF). Você recebe o acesso imediatamente após o pagamento para visualizar em qualquer dispositivo ou imprimir quando quiser.',
    },
    {
      id: 'faq-2',
      question: 'O material substitui um curso de panificação?',
      answer: 'Não. O material foi desenvolvido para servir como apoio prático e visual para facilitar o aprendizado e a consulta durante o preparo dos seus pães.',
    },
    {
      id: 'faq-3',
      question: 'Serve para quem já faz pão em casa?',
      answer: 'Sim. O material é ideal tanto para quem está começando quanto para quem já faz pães, mas ainda tem dúvidas sobre pontos, técnicas e etapas do preparo.',
    },
    {
      id: 'faq-4',
      question: 'Cobre as principais etapas da panificação?',
      answer: 'Sim. O material aborda assuntos como ingredientes, farinhas, massas, sova, fermentação, modelagem, forno, erros comuns e muito mais.',
    },
    {
      id: 'faq-5',
      question: 'Tem conteúdo sobre erros comuns?',
      answer: 'Sim. Você encontrará mapas que ajudam a entender problemas comuns na panificação e o que observar para corrigi-los.',
    },
    {
      id: 'faq-6',
      question: 'Funciona no celular?',
      answer: 'Sim. Você pode visualizar os mapas diretamente pelo celular, tablet ou computador.',
    },
    {
      id: 'faq-7',
      question: 'Recebo o acesso na hora?',
      answer: 'Sim. Após a confirmação do pagamento, você recebe as informações de acesso ao material.',
    },
    {
      id: 'faq-8',
      question: 'Posso imprimir?',
      answer: 'Sim. Por ser um material digital em PDF, você pode imprimir os mapas que quiser para consultar enquanto prepara seus pães.',
    },
    {
      id: 'faq-9',
      question: 'Qual a diferença entre o Plano Básico e o Completo?',
      answer: 'O Plano Básico inclui os +200 Mapas Visuais de Panificação. Já o Plano Completo inclui os mapas e também os 3 bônus exclusivos.',
    },
    {
      id: 'faq-10',
      question: 'Tem garantia?',
      answer: 'Sim. Sua compra conta com 15 dias de garantia. Dentro desse período, você pode conhecer o material e, caso perceba que não é para você, solicitar o reembolso.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full pt-10 pb-14 md:pt-14 md:pb-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Título da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-semibold mb-2">
            Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas frequentes
          </h2>
          <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Lista de Perguntas (Acordeão Elegante) */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

