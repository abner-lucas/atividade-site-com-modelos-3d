import React from 'react';
import { activityConfig } from '../data/config';
import { CheckCircle2, Box, Layout, Send } from 'lucide-react';

export const CriteriosSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'completo':
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
      case 'funcionalidade':
        return <Box className="w-5 h-5 text-indigo-600" />;
      case 'design':
        return <Layout className="w-5 h-5 text-sky-600" />;
      case 'envio':
        return <Send className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="criterios" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">📋</span>
        <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
          Critérios de Avaliação
        </h2>
      </div>

      <p className="text-sm text-slate-700 mb-5 leading-relaxed">
        A avaliação da atividade será realizada com base nos quatro critérios estabelecidos na referência da atividade:
      </p>

      {/* Grid com os 4 critérios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activityConfig.evaluationCriteria.map((crit) => (
          <div
            key={crit.id}
            className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  {getIcon(crit.id)}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {crit.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {crit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
