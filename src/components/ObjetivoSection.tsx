import React from 'react';
import { Target, Users, CheckCircle2 } from 'lucide-react';

export const ObjetivoSection: React.FC = () => {
  return (
    <section id="objetivo" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🎯</span>
        <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
          Objetivo da Atividade
        </h2>
      </div>

      {/* Caixa de destaque estilizada Notion Callout */}
      <div className="p-5 sm:p-6 rounded-xl bg-blue-50/70 border border-blue-200/80 text-slate-800">
        <div className="flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 shadow-sm mt-0.5">
            <Target className="w-5 h-5" />
          </div>
          <div className="space-y-3">
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-snug">
              “Criar, em dupla, um site interativo que exiba dois modelos 3D desenvolvidos no Tinkercad. 
              Para realizar a atividade, vocês utilizarão os códigos fornecidos nesta página e publicarão o site no Tiiny.host.”
            </p>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              Ao final do processo, cada dupla terá publicado um site funcional chamado <strong>“Mundo 3D”</strong> contendo:
            </p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold shrink-0">1.</span>
                <span>Dois modelos 3D autorais criados no Tinkercad e exportados no formato <strong>GLTF (.glb)</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold shrink-0">2.</span>
                <span>Uma pasta com os 5 arquivos obrigatórios: <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-xs text-blue-800">index.html</code>, <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-xs text-blue-800">style.css</code>, <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-xs text-blue-800">script.js</code>, <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-xs text-blue-800">modelo1.glb</code> e <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-xs text-blue-800">modelo2.glb</code>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold shrink-0">3.</span>
                <span>Personalização com a identificação dos integrantes da dupla e descrição dos modelos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold shrink-0">4.</span>
                <span>Publicação online e entrega do link definitivo na <strong>3ª Avaliação no Google Classroom</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
