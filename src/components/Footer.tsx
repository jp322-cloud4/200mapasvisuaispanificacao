import React from 'react';
import { ShieldCheck, Download, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Selos de Confiança */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Compra 100% Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-blue-400" />
            <span>Acesso Digital Imediato (PDF)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garantia de 15 Dias</span>
          </div>
        </div>

        {/* Linha Divisória Suave */}
        <div className="w-24 h-px bg-slate-800" />

        {/* Informações Finais e Copyright Exatamente como na Copy Solicitada */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-400 max-w-2xl">
          <p className="font-bold text-white text-base sm:text-lg">
            Panificação Visual 2026
          </p>
          <p className="text-slate-400 leading-relaxed">
            Material digital de apoio ao aprendizado e consulta. Não substitui formação profissional, cursos técnicos ou certificações exigidas para determinadas atividades comerciais ou profissionais.
          </p>

          {/* Links Legais */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de uso</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de privacidade</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Suporte</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Garantia</span>
          </div>

          <p className="text-slate-500 pt-3 text-xs">
            © 2026 Panificação Visual 2026. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

