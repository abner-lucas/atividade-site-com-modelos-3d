import React from 'react';
import { activityConfig } from '../data/config';
import { Send, ExternalLink, CheckCircle, Clock, Award } from 'lucide-react';

export const Step6Classroom: React.FC = () => {
  return (
    <section id="passo-6" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">📤</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 6 — Compartilhando com o professor
        </h3>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
        <p className="text-sm text-slate-700 leading-relaxed">
          Com o site publicado e testado no Tiiny.host, a última etapa consiste no envio formal da atividade para avaliação 
          pelo <strong>{activityConfig.teacherName}</strong>.
        </p>

        {/* Passos de Envio */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200/80">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong>Copie o link público do site:</strong> O link deve ter o formato <code className="font-mono text-blue-800 font-semibold">https://seunome.tiiny.site</code>. Certifique-se de que a página abre normalmente em outro dispositivo ou navegador anônimo.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200/80">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong>Acesse a tarefa no Google Classroom:</strong> Localize a atividade <strong>“3ª Avaliação: Criação de Site com Modelos 3D”</strong> na turma de {activityConfig.discipline}.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200/80">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong>Adicione o link e entregue:</strong> Na seção de entrega da tarefa, clique em <strong>Adicionar ou criar → Link</strong>, cole o endereço público do Tiiny.host e clique no botão final <strong>Entregar</strong>.
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200/80">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong>Conferência do prazo:</strong> Certifique-se de realizar o envio dentro do prazo informado pelo professor em sala para garantir a pontuação integral da entrega.
            </div>
          </div>
        </div>

        {/* Botão de Ação para o Classroom */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={activityConfig.links.googleClassroom}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Abrir Google Classroom</span>
            <ExternalLink className="w-4 h-4 text-blue-200" />
          </a>
          <span className="text-xs text-slate-500">
            Entrega individual por dupla conforme orientado na turma
          </span>
        </div>
      </div>
    </section>
  );
};
