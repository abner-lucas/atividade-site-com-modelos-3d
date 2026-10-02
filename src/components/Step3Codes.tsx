import React, { useState } from 'react';
import { studentIndexHtml, studentStyleCss, studentScriptJs } from '../data/studentCode';
import { downloadStudentZip, downloadSingleFile } from '../utils/zipGenerator';
import {
  Copy,
  Check,
  Download,
  FolderArchive,
  ChevronDown,
  ChevronRight,
  Code2,
  FileText,
  FileCode,
  Info,
  Sparkles,
  Loader2,
} from 'lucide-react';

interface CodeBlockProps {
  id: string;
  filename: string;
  language: string;
  content: string;
  badgeType: string;
  icon: React.ReactNode;
  summaryTitle: string;
  description: string;
  customizationTips: string[];
}

const CodeBlockItem: React.FC<CodeBlockProps> = ({
  filename,
  content,
  badgeType,
  icon,
  summaryTitle,
  description,
  customizationTips,
}) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    downloadSingleFile(filename, content);
  };

  return (
    <details
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
      className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
    >
      <summary className="px-5 py-4 cursor-pointer select-none flex items-center justify-between hover:bg-slate-50 transition-colors list-none">
        <div className="flex items-center gap-3">
          <div className="text-slate-400 group-open:rotate-90 transition-transform duration-200">
            <ChevronRight className="w-5 h-5" />
          </div>
          <div className="p-1.5 rounded-md bg-slate-100 text-slate-700">{icon}</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-slate-900 text-sm sm:text-base">{filename}</span>
              <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                {badgeType}
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">{summaryTitle}</span>
          </div>
        </div>

        {/* Ações rápidas no cabeçalho do acordeão */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              copied
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title={`Copiar código de ${filename}`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado! ✓' : 'Copiar código'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            title={`Baixar ${filename}`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar</span>
          </button>
        </div>
      </summary>

      <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-4">
        {/* Explicação breve */}
        <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
          <p className="font-semibold text-slate-800 mb-1">Papel deste arquivo:</p>
          <p>{description}</p>
        </div>

        {/* Dicas de personalização para os estudantes */}
        <div className="p-3.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950">
          <div className="flex items-center gap-2 font-bold text-blue-900 mb-1.5">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Trechos que sua dupla deve personalizar:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs sm:text-[13px]">
            {customizationTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Caixa de visualização do código com rolagem horizontal e botão fixo */}
        <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-[#0d1117] shadow-inner">
          <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400">
            <span className="font-mono">{filename} — código completo</span>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-500">UTF-8</span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-slate-300 hover:text-white flex items-center gap-1 text-xs"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>
          
          <pre className="p-4 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto max-h-[460px] leading-relaxed selection:bg-blue-600 selection:text-white">
            <code>{content}</code>
          </pre>
        </div>
      </div>
    </details>
  );
};

export const Step3Codes: React.FC = () => {
  const [isZipping, setIsZipping] = useState(false);
  const [zipStep, setZipStep] = useState('');
  const [zipSuccess, setZipSuccess] = useState(false);

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      setZipSuccess(false);
      await downloadStudentZip((step) => setZipStep(step));
      setIsZipping(false);
      setZipSuccess(true);
      setTimeout(() => setZipSuccess(false), 4000);
    } catch (error) {
      console.error('Erro ao gerar ZIP:', error);
      setIsZipping(false);
      alert('Ocorreu um erro ao gerar o pacote ZIP. Você também pode copiar ou baixar os arquivos individualmente.');
    }
  };

  return (
    <section id="passo-3" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🔗</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 3 — Utilizando os códigos fornecidos
        </h3>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-slate-700 leading-relaxed">
          Abaixo estão disponíveis os <strong>três arquivos de código completos e comentados</strong>. 
          Você pode copiar o conteúdo diretamente para os arquivos na sua pasta ou clicar no botão{' '}
          <strong className="text-slate-900">Baixar códigos (.zip)</strong> para obter todo o projeto já organizado 
          com os modelos demonstrativos.
        </p>

        {/* Destaque para o Pacote ZIP Completo */}
        <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <FolderArchive className="w-5 h-5 text-blue-300" />
              <h4 className="text-base sm:text-lg font-bold">Pacote Inicial Completo: mundo-3d.zip</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Baixe o ZIP pronto contendo <code className="text-blue-200">index.html</code>, <code className="text-blue-200">estilo.css</code>, <code className="text-blue-200">codigo.js</code> e dois modelos demonstrativos para testes imediatos.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start sm:items-end gap-1.5">
            <button
              onClick={handleDownloadZip}
              disabled={isZipping}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 font-semibold text-sm shadow-sm transition-transform active:scale-95 text-white"
            >
              {isZipping ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{zipStep || 'Gerando ZIP...'}</span>
                </>
              ) : zipSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Download Concluído! ✓</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Baixar códigos (.zip)</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-blue-200">
              Cont�m os 4 arquivos na raiz do ZIP
            </span>
          </div>
        </div>

        {/* Caixa de orientação sobre substituição dos modelos */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Importante sobre os modelos do pacote ZIP:</strong> O arquivo <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-blue-800">aviaozinho.glb</code> inclu�do no download � umcê testar a página imediatamente. 
            A sua dupla deve <strong>substitu�-lo pelos modelos que vocês criaram e exportaram do Tinkercad</strong>.
          </p>
        </div>

        {/* 3 Blocos Expansíveis de Código */}
        <div className="space-y-3 pt-2">
          {/* 1. index.html */}
          <CodeBlockItem
            id="code-html"
            filename="index.html"
            badgeType="HTML5"
            icon={<FileText className="w-4 h-4 text-orange-600" />}
            summaryTitle="Estrutura semântica, seções e contêineres 3D"
            description="Define a estrutura semântica da página do site: cabeçalho com menu, seção de boas-vindas (Hero), seção Sobre (com nomes da dupla), seção Galeria (com os dois contêineres que receberão as cenas 3D), seção Contato e Rodapé."
            customizationTips={[
              'Localize a seção <section id="sobre"> e substitua [Nome do Aluno 1] e [Nome do Aluno 2] pelos nomes reais dos integrantes da sua dupla.',
              'Altere os títulos e as descrições dos modelos na seção <section id="galeria"> para refletir o que vocês criaram no Tinkercad.',
              'Personalize as considerações e contatos na seção <section id="contato">.',
            ]}
            content={studentIndexHtml}
            language="html"
          />

          {/* 2. estilo.css */}
          <CodeBlockItem
            id="code-css"
            filename="estilo.css"
            badgeType="CSS3"
            icon={<FileCode className="w-4 h-4 text-sky-600" />}
            summaryTitle="Estilos visuais, cards e responsividade"
            description="Controla toda a aparência estética do site Mundo 3D: paleta de cores moderna (azul e ardósia escura), espaçamento generoso, bordas arredondadas nos cartões, iluminação visual nos visualizadores e regras de mídia (@media) para que a galeria fique perfeitamente empilhada em celulares."
            customizationTips={[
              'Você pode ajustar as cores de destaque (ex: alterar #2563eb para a cor preferida da dupla).',
              'Ajuste o tamanho da fonte ou os gradientes do Hero para dar uma identidade visual única ao projeto de vocês.',
              'Mantenha as classes dos visualizadores (.viewer-container) e as regras responsivas para garantir a exibição em dispositivos móveis.',
            ]}
            content={studentStyleCss}
            language="css"
          />

          {/* 3. codigo.js */}
          <CodeBlockItem
            id="code-js"
            filename="codigo.js"
            badgeType="JavaScript (Three.js)"
            icon={<Code2 className="w-4 h-4 text-yellow-600" />}
            summaryTitle="Inicialização WebGL, iluminação e animação 3D"
            description="Executa após o carregamento do DOM. Inicializa duas cenas Three.js independentes para renderizar os arquivos .glb'. Cria câmera perspectiva, luz ambiente, duas luzes direcionais (estúdio 3 pontos), grade no piso, centraliza automaticamente os modelos pelo cálculo do Box3 e adiciona animação de rotação contínua e controle por toque/mouse."
            customizationTips={[
              'Lembre-se de alterar o nome de "./aviaozinho.glb" para o nome do seu arquivo real na hora de testar!',
              'Você pode ajustar a velocidade de rotação alterando o valor em "modeloCarregado.rotation.y += 0.008".',
              'Caso queira mudar a cor de fundo do visualizador 3D, altere "scene.background = new THREE.Color(0x0b1120)".',
            ]}
            content={studentScriptJs}
            language="javascript"
          />
        </div>
      </div>
    </section>
  );
};
