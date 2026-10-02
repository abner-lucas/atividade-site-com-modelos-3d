import React from 'react';
import { activityConfig } from '../data/config';
import { ExternalLink, AlertTriangle, CheckCircle, FileCode } from 'lucide-react';

export const Step1Tinkercad: React.FC = () => {
  return (
    <section id="passo-1" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🚀</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 1 — Criando os modelos 3D no Tinkercad
        </h3>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
        <p className="text-sm text-slate-700 leading-relaxed">
          Nesta etapa inicial, cada dupla irá planejar e modelar dois objetos tridimensionais no <strong>Autodesk Tinkercad</strong>, 
          seguindo as orientações práticas apresentadas em sala de aula.
        </p>

        {/* Lista ordenada de passos */}
        <ol className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong>Acessar o Tinkercad:</strong> Entre na plataforma com sua conta ou utilize o link da sala de aula 
              da 3ª Avaliação fornecido pelo professor.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong>Criar os dois modelos 3D:</strong> Desenvolva dois modelos simples, criativos e bem estruturados. 
              Verifique se os sólidos estão devidamente agrupados no Tinkercad.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong>Exportar no formato GLTF (.glb):</strong> No canto superior direito do editor do Tinkercad, clique em{' '}
              <strong className="text-slate-900">Exportar</strong> e selecione a opção <strong className="text-blue-700">GLTF (.glb)</strong>.
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong>Nomear exatamente os arquivos:</strong> Renomeie os dois arquivos baixados com os seguintes nomes padronizados:
              <div className="flex flex-wrap gap-2 mt-2">
                <code className="bg-slate-100 text-blue-800 px-2.5 py-1 rounded text-xs font-mono font-semibold border border-slate-200">
                  modelo1.glb
                </code>
                <code className="bg-slate-100 text-blue-800 px-2.5 py-1 rounded text-xs font-mono font-semibold border border-slate-200">
                  modelo2.glb
                </code>
              </div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
              5
            </span>
            <div>
              <strong>Conferir a integridade:</strong> Certifique-se de que os dois arquivos estão salvos no seu computador e que não foram salvos como arquivos vazios ou em formato incorreto.
            </div>
          </li>
        </ol>

        {/* Caixa de aviso importante sobre formato .glb */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200/90 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-amber-950">Atenção ao formato de exportação:</span>
            <p>
              Escolha sempre a opção <strong>GLTF (.glb)</strong>. Não utilize <em>.STL</em> ou <em>.OBJ</em>, pois o 
              código JavaScript com a biblioteca Three.js e o componente <em>GLTFLoader</em> foi configurado para renderizar arquivos 
              no padrão <strong>.glb</strong>, que preserva as cores e materiais embutidos em um único arquivo binário.
            </p>
          </div>
        </div>

        {/* Botões de Ação para o Tinkercad */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={activityConfig.links.tinkercadBase}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors"
          >
            <span>Acessar Tinkercad</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {activityConfig.links.tinkercadClassroom && (
            <a
              href={activityConfig.links.tinkercadClassroom}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium rounded-lg border border-slate-200 transition-colors"
            >
              <span>Acessar Sala de Aula do Tinkercad</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
