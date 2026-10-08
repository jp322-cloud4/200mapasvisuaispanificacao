import React from 'react';
import { TopBanner } from './components/TopBanner.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { BonusSection } from './components/BonusSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { GuaranteeSection } from './components/GuaranteeSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Faixa Vermelha de Oferta com Data Dinâmica */}
      <TopBanner />

      {/* Conteúdo Principal com as Seções Estruturadas */}
      <main className="flex-1 w-full">
        {/* SECTION 1 — HERO */}
        <HeroSection onCtaClick={handleScrollToOffer} />

        {/* SECTION 2 — O QUE VOCÊ VAI RECEBER (Carrossel Contínuo 1055x1491) */}
        <FeaturesSection />

        {/* SECTION 3 — COMO FUNCIONA E O QUE ESTÁ INCLUSO */}
        <BenefitsSection />

        {/* SECTION 4 — BÔNUS EXCLUSIVOS */}
        <BonusSection />

        {/* SECTION 5 — O QUE DIZEM QUEM JÁ USA (DEPOIMENTOS) */}
        <TestimonialsSection />

        {/* SECTION 6 — ESCOLHA O PLANO IDEAL (OFERTA) */}
        <PricingSection />

        {/* SECTION 7 — GARANTIA DE 15 DIAS */}
        <GuaranteeSection />

        {/* SECTION 8 — PERGUNTAS FREQUENTES */}
        <FaqSection />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
