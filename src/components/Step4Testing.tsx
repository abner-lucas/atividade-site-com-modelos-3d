import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'c1', text: 'Os dois modelos 3D carregam sem exibir tela de erro.' },
  { id: 'c2', text: 'Os modelos estão visíveis, centralizados e girando continuamente.' },
  { id: 'c3', text: 'Os dois integrantes da dupla estão corretamente identificados na seção Sobre.' },
  { id: 'c4', text: 'Os títulos e descrições dos modelos foram personalizados pela dupla.' },
  { id: 'c5', text: 'Os links do menu de navegação (Sobre, Galeria, Contato) deslizam para as seções.' },
  { id: 'c6', text: 'O layout do site funciona no celular (os dois visualizadores ficam empilhados).' },
];

export const Step4Testing: React.FC = () => {
  // Estado do checklist com persistência no LocalStorage
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('mundo3d_checklist_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('mundo3d_checklist_state', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const isAllChecked = totalChecked === CHECKLIST_ITEMS.length;

  return (
    <section id="passo-4" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🔍</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 4 — Testando o site
        </h3>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-6">
        <p className="text-sm text-slate-700 leading-relaxed">
          Antes de compactar e publicar no Tiiny.host, execute os testes locais com o Live Server no VS Code 
          e confira cada item do checklist abaixo.
        </p>

        {/* ========================================================
             CHECKLIST INTERATIVO
             ======================================================== */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Checklist de Verificação da Dupla</span>
            </h4>
            <div className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              {totalChecked} de {CHECKLIST_ITEMS.length} verificados
            </div>
          </div>

          <div className="space-y-2.5">
            {CHECKLIST_ITEMS.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm ${isChecked ? 'line-through text-slate-500' : ''}`}>
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>

          {isAllChecked && (
            <div className="p-3 bg-emerald-100 text-emerald-900 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Parabéns! Todos os itens foram validados. O site está pronto para a publicação no Tiiny.host!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
