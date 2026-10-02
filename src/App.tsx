import React from 'react';
import { HeaderCover } from './components/HeaderCover';
import { ObjetivoSection } from './components/ObjetivoSection';
import { PreviewSection } from './components/PreviewSection';
import { Step1Tinkercad } from './components/Step1Tinkercad';
import { Step2FilesPrep } from './components/Step2FilesPrep';
import { Step3Codes } from './components/Step3Codes';
import { Step4Testing } from './components/Step4Testing';
import { Step5TiinyHost } from './components/Step5TiinyHost';
import { Step6Classroom } from './components/Step6Classroom';
import { CriteriosSection } from './components/CriteriosSection';
import { FinalMessageSection } from './components/FinalMessageSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Capa discreta, título da atividade e identificação do professor */}
      <HeaderCover />

      {/* Coluna Central de Leitura Estilo Documento / Notion */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-12">
        {/* 2. Objetivo da Atividade */}
        <ObjetivoSection />

        {/* 3. “Seu projeto ficará assim!” com exemplo visual e 3D real */}
        <PreviewSection />

        {/* 4. Etapas a serem seguidas (Passos 1 a 6) */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Etapas a serem seguidas</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Siga cada passo em ordem sequencial para concluir a atividade com tranquilidade.
            </p>
          </div>

          <Step1Tinkercad />
          <Step2FilesPrep />
          <Step3Codes />
          <Step4Testing />
          <Step5TiinyHost />
          <Step6Classroom />
        </div>

        {/* 5. Critérios de Avaliação */}
        <CriteriosSection />

        {/* 6. Mensagem final de incentivo */}
        <FinalMessageSection />
      </main>
    </div>
  );
}
