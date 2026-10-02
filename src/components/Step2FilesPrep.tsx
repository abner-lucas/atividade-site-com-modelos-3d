import React from 'react';
import { Folder, FileText, FileCode, Box, AlertCircle, Laptop, Server } from 'lucide-react';

export const Step2FilesPrep: React.FC = () => {
  return (
    <section id="passo-2" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">📁</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 2 — Preparando os arquivos do site
        </h3>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
        <p className="text-sm text-slate-700 leading-relaxed">
          Crie uma nova pasta no seu computador com o nome <strong className="text-slate-900 font-mono text-xs sm:text-sm bg-slate-100 px-2 py-0.5 rounded border border-slate-200">mundo-3d</strong>.
          Todos os cinco arquivos necessários para o funcionamento do site deverão ficar juntos <strong>diretamente dentro dessa pasta</strong>.
        </p>

        {/* Tabela de Arquivos do Projeto */}
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs text-slate-600 uppercase border-b border-slate-200">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Arquivo Obrigatório</th>
                <th scope="col" className="px-4 py-3 font-semibold">Finalidade e Função</th>
                <th scope="col" className="px-4 py-3 font-semibold">Tipo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-mono font-bold text-blue-700 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-orange-500" />
                  <span>index.html</span>
                </td>
                <td className="px-4 py-3">Estrutura da página, textos, cabeçalho e contêineres dos modelos 3D.</td>
                <td className="px-4 py-3 text-slate-500">Documento HTML5</td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-mono font-bold text-blue-700 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-sky-500" />
                  <span>style.css</span>
                </td>
                <td className="px-4 py-3">Estilos visuais, esquema de cores, tipografia e responsividade para celular.</td>
                <td className="px-4 py-3 text-slate-500">Folha de Estilos CSS3</td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-mono font-bold text-blue-700 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-yellow-500" />
                  <span>script.js</span>
                </td>
                <td className="px-4 py-3">Interatividade, inicialização do Three.js, iluminação e rotação automática.</td>
                <td className="px-4 py-3 text-slate-500">Script JavaScript (ES6)</td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-mono font-bold text-emerald-700 flex items-center gap-2">
                  <Box className="w-4 h-4 text-emerald-600" />
                  <span>modelo1.glb</span>
                </td>
                <td className="px-4 py-3">Primeiro modelo 3D exportado do Tinkercad pela dupla.</td>
                <td className="px-4 py-3 text-slate-500">Arquivo Binário GLTF 3D</td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="px-4 py-3 font-mono font-bold text-emerald-700 flex items-center gap-2">
                  <Box className="w-4 h-4 text-emerald-600" />
                  <span>modelo2.glb</span>
                </td>
                <td className="px-4 py-3">Segundo modelo 3D exportado do Tinkercad pela dupla.</td>
                <td className="px-4 py-3 text-slate-500">Arquivo Binário GLTF 3D</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recomendações de Editores de Código (VS Code / Replit) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Laptop className="w-4 h-4 text-blue-600" />
              <span>Edição local no VS Code</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Abra a pasta <code className="text-slate-800 font-mono">mundo-3d</code> no Visual Studio Code (<kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[11px]">Arquivo → Abrir Pasta</kbd>). 
              Crie os arquivos com as extensões exatas e cole os códigos fornecidos no Passo 3.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Server className="w-4 h-4 text-indigo-600" />
              <span>Alternativa Online: Replit</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Caso sua dupla utilize o Replit em sala, crie um novo Repl no template <strong>HTML/CSS/JS</strong>. 
              Faça o upload dos arquivos <code className="text-slate-800 font-mono">modelo1.glb</code> e <code className="text-slate-800 font-mono">modelo2.glb</code> diretamente para a raiz do projeto.
            </p>
          </div>
        </div>

        {/* Caixa de Cuidado: Extensões Ocultas no Windows e Live Server */}
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-rose-900">Cuidado com extensões duplicadas no Windows:</span>
              <p>
                Certifique-se de que o Windows não renomeou seus arquivos como <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-rose-800">index.html.txt</code> ou <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-rose-800">style.css.txt</code>. 
                No Explorador de Arquivos do Windows, ative a opção <strong>Exibir → Extensões de nomes de arquivos</strong> para conferir se o nome termina rigorosamente em <strong className="font-mono">.html</strong>, <strong className="font-mono">.css</strong>, <strong className="font-mono">.js</strong> e <strong className="font-mono">.glb</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm flex items-start gap-3">
            <Server className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-emerald-900">Como testar no computador usando Live Server:</span>
              <p>
                Os navegadores modernos bloqueiam o carregamento de modelos 3D locais via protocolo <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-emerald-800">file:///</code> por restrições de segurança (CORS). 
                Para testar no VS Code, instale a extensão <strong>Live Server</strong> e clique em <em>“Go Live”</em> ou clique com o botão direito em <code className="font-mono">index.html</code> e selecione <strong>Open with Live Server</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
