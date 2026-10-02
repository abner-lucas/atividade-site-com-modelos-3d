import React from 'react';
import { activityConfig } from '../data/config';
import { ExternalLink, BookOpen, Layers, Sparkles } from 'lucide-react';

export const HeaderCover: React.FC = () => {
  return (
    <header className="relative w-full border-b border-slate-200 bg-white">
      {/* Conteúdo do Documento no estilo Notion */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 sm:pt-10 pb-8">
        {/* Ícone do documento (Estilo Notion) */}
        <div className="mb-4 flex items-center justify-between">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-sm border border-slate-200/90 flex items-center justify-center text-3xl sm:text-4xl select-none transition-transform hover:scale-105">
            🧊
          </div>
          
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Roteiro Prático Oficial</span>
          </div>
        </div>

        {/* Título Principal em destaque */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Atividade: {activityConfig.activityTitle}
        </h1>

        {/* Identificação do Professor e Metadados do Documento */}
        <div className="mt-3 flex flex-wrap items-center gap-y-2 text-sm text-slate-600">
          <span className="font-semibold text-blue-700">
            {activityConfig.teacherName} — {activityConfig.institution}
          </span>
          <span className="mx-2 text-slate-300 hidden sm:inline">·</span>
          <span>{activityConfig.discipline}</span>
          <span className="mx-2 text-slate-300 hidden sm:inline">·</span>
          <span className="text-slate-500">{activityConfig.activityEvaluation}</span>
        </div>

        {/* Subtítulo informativo */}
        <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-3xl">
          Guia passo a passo para desenvolvimento em duplas do site interativo{' '}
          <strong className="text-slate-900 font-semibold">{activityConfig.projectName}</strong>, com
          integração de modelos 3D desenvolvidos no Tinkercad, biblioteca Three.js e publicação no Tiiny.host.
        </p>

        {/* Caixa de Índice / Links Internos Rápidos */}
        <nav aria-label="Índice da Atividade" className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm">
          <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2.5">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Índice Rápido do Roteiro</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5 text-slate-600">
            <a href="#objetivo" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>🎯</span> <span>Objetivo da Atividade</span>
            </a>
            <a href="#previa" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>🖥️</span> <span>Seu projeto ficará assim!</span>
            </a>
            <a href="#passo-1" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>🚀</span> <span>Passo 1: Modelos no Tinkercad</span>
            </a>
            <a href="#passo-2" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>📁</span> <span>Passo 2: Arquivos da pasta</span>
            </a>
            <a href="#passo-3" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>🔗</span> <span>Passo 3: Códigos fornecidos</span>
            </a>
            <a href="#passo-4" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>✅</span> <span>Passo 4: Testando o site &amp; GLB</span>
            </a>
            <a href="#passo-5" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>🌐</span> <span>Passo 5: Publicação no Tiiny.host</span>
            </a>
            <a href="#passo-6" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>📤</span> <span>Passo 6: Entrega no Classroom</span>
            </a>
            <a href="#criterios" className="hover:text-blue-600 hover:underline flex items-center gap-1.5 py-0.5">
              <span>📋</span> <span>Critérios de Avaliação</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
