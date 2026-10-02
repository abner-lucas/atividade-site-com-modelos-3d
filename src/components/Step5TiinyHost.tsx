import React from 'react';
import { activityConfig } from '../data/config';
import {
  ExternalLink,
  Globe,
  AlertTriangle,
  FolderArchive,
  RefreshCw,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';

export const Step5TiinyHost: React.FC = () => {
  return (
    <section id="passo-5" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🌐</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 5 — Publicando o site no Tiiny.host
        </h3>
      </div>

      <div className="space-y-6">
        <p className="text-sm text-slate-700 leading-relaxed">
          O <strong>Tiiny.host</strong> é uma plataforma simples de hospedagem estática que permite colocar o site da dupla 
          no ar a partir de um único arquivo <strong>.zip</strong>. Siga rigorosamente os 10 passos para garantir que o link 
          fique publicado permanentemente e sem erros.
        </p>

        {/* Caixa de Destaque Crucial: O ZIP sem pasta intermediária */}
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 flex items-start gap-3.5">
          <FolderArchive className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm sm:text-base text-blue-900">
              Regra de Ouro: Os 5 arquivos devem estar na raiz do ZIP!
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Não compacte a pasta inteira contendo outra pasta dentro. Ao dar duplo clique em <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs border border-blue-200">mundo-3d.zip</code>, os arquivos <strong className="font-mono">index.html</strong>, <strong className="font-mono">style.css</strong>, <strong className="font-mono">script.js</strong>, <strong className="font-mono">modelo1.glb</strong> e <strong className="font-mono">modelo2.glb</strong> devem aparecer imediatamente, sem nenhuma subpasta no caminho.
            </p>
          </div>
        </div>

        {/* 10 Passos Numerados de Publicação */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-4 pb-2 border-b border-slate-100">
            Guia de Publicação em 10 Passos
          </h4>

          <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong>Selecionar os arquivos:</strong> Abra a pasta <code className="font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">mundo-3d</code> e selecione <strong>os cinco arquivos finais</strong> juntos (<kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-300 text-[10px]">Ctrl + A</kbd> ou selecionando os 5 itens com o mouse).
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong>Compactar em ZIP:</strong> Clique com o botão direito nos 5 arquivos selecionados e escolha a opção de compactar para <strong>ZIP</strong> (no Windows: <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-300 text-[10px]">Enviar para → Pasta compactada (ZIP)</kbd> ou <kbd className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-300 text-[10px]">Compactar para arquivo ZIP</kbd>). Nomeie o arquivo como <code className="font-mono text-slate-800 bg-slate-100 px-1 py-0.5 rounded">mundo-3d.zip</code>.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong>Conferir o interior do ZIP:</strong> Abra o arquivo <code className="font-mono text-slate-800 bg-slate-100 px-1 py-0.5 rounded">mundo-3d.zip</code> e confira se <strong className="font-mono">index.html</strong> está na raiz do arquivo compactado, junto com os outros 4 arquivos.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                4
              </span>
              <div>
                <strong>Acessar o Tiiny.host:</strong> Abra o site oficial (<a href={activityConfig.links.tiinyHost} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">tiiny.host</a>) e selecione a aba <strong>Code</strong> (ou Web Hosting).
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                5
              </span>
              <div>
                <strong>Definir o Subdomínio (Link):</strong> No campo <strong>Subdomain</strong>, digite um nome único para o site da sua dupla, sem espaços ou acentos, por exemplo: <code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">mundo3d-dupla01</code>. O endereço final ficará <strong className="font-mono text-slate-900">mundo3d-dupla01.tiiny.site</strong>.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                6
              </span>
              <div>
                <strong>Fazer upload do arquivo:</strong> Clique na área de <strong>Upload file</strong> e selecione o arquivo <code className="font-mono text-slate-800 bg-slate-100 px-1 py-0.5 rounded">mundo-3d.zip</code> do seu computador, ou arraste o pacote diretamente para a caixa tracejada.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                7
              </span>
              <div>
                <strong>Concluir a publicação:</strong> Clique no botão <strong>Publish</strong> (em algumas versões da interface pode aparecer como <strong>Launch</strong>). Se o serviço solicitar login ou criação de conta, conclua o cadastro gratuito com o fluxo do próprio Tiiny.host.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                8
              </span>
              <div>
                <strong>Copiar a URL pública definitiva:</strong> Após o processamento rápido, o Tiiny.host apresentará o link público oficial do site da sua dupla. Copie o endereço completo.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                9
              </span>
              <div>
                <strong>Testar a URL pública:</strong> Abra uma nova guia no navegador (preferencialmente em <strong>janela anônima</strong>) e cole o link para verificar se os dois modelos 3D carregam, se a rotação funciona e se o layout está intacto.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs shrink-0 mt-0.5">
                10
              </span>
              <div>
                <strong>Confirmar publicação definitiva:</strong> Certifique-se de que o projeto foi publicado de forma definitiva e não como prévia temporária que expira. O link permanente deve estar pronto para envio ao professor!
              </div>
            </li>
          </ol>
        </div>

        {/* Caixa de Limites Verificados do Plano Gratuito (Verificado em 02/10/2026) */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-3">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm sm:text-base">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Limites Oficiais do Tiiny.host (Verificados em {activityConfig.tiinyHostLimits.verifiedDate})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/80 p-3 rounded-lg border border-amber-200">
              <span className="font-semibold text-slate-700 block">Projetos Ativos:</span>
              <span className="text-amber-900 font-bold">{activityConfig.tiinyHostLimits.activeProjectsLimit}</span>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-amber-200">
              <span className="font-semibold text-slate-700 block">Tamanho Máximo:</span>
              <span className="text-amber-900 font-bold">{activityConfig.tiinyHostLimits.sizeLimit}</span>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-amber-200">
              <span className="font-semibold text-slate-700 block">Envios Diários:</span>
              <span className="text-amber-900 font-bold">{activityConfig.tiinyHostLimits.uploadsPerDay}</span>
            </div>
          </div>

          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Fique atento:</strong> Projetos enviados fora dos limites gratuitos podem ser marcados como prévias temporárias que <strong>expiram após 1 hora</strong>. Caso seus modelos do Tinkercad tenham ficado excessivamente pesados, simplifique as formas agrupadas no Tinkercad e reexporte para que o ZIP final fique leve (geralmente abaixo de 1 MB).
          </p>
        </div>

        {/* Como Atualizar o Site Publicado */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <RefreshCw className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Precisa corrigir algo após publicar? Veja como atualizar:</span>
          </div>
          <p className="leading-relaxed">
            Se vocês identificaram algum erro e precisam enviar uma versão corrigida, <strong>não criem um novo subdomínio</strong>. 
            Gere o <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200">mundo-3d.zip</code> atualizado, 
            acesse sua conta no Tiiny.host, localize o projeto existente e clique em <strong>Update</strong> escolhendo a opção de substituir os arquivos. 
            Dessa forma, o link público entregue no Classroom continuará funcionando perfeitamente sem mudar de endereço.
          </p>
        </div>

        {/* Botão de Acesso ao Tiiny.host */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={activityConfig.links.tiinyHost}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors"
          >
            <span>Abrir Tiiny.host</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
