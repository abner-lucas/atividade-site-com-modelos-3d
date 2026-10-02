import React from 'react';
import { activityConfig } from '../data/config';
import { Sparkles, ArrowUp, Heart } from 'lucide-react';

export const FinalMessageSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-14 mb-16 space-y-8">
      {/* Bloco de Mensagem Final de Incentivo */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200/80 text-center shadow-xs">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
          <Sparkles className="w-6 h-6" />
        </div>

        <p className="text-lg sm:text-xl font-bold text-slate-900 max-w-xl mx-auto leading-snug">
          “{activityConfig.finalMessage}”
        </p>

        <p className="mt-2 text-xs sm:text-sm text-slate-600">
          {activityConfig.teacherName} · {activityConfig.institution}
        </p>
      </div>

      {/* Rodapé da Página Orientadora com botão Voltar ao Topo */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1.5 text-center sm:text-left">
          <span>{activityConfig.institution} — Material Didático de Programação Web</span>
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Voltar ao topo</span>
        </button>
      </div>
    </div>
  );
};
