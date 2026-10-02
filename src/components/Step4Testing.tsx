import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  CheckSquare,
  Square,
  Upload,
  RotateCw,
  Box,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Info,
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

  // ========================================================
  // FERRAMENTA LOCAL DE TESTE DE ARQUIVO GLB
  // ========================================================
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const [loadedFileName, setLoadedFileName] = useState<string | null>(null);
  const [fileSizeText, setFileSizeText] = useState<string | null>(null);
  const [meshCount, setMeshCount] = useState<number>(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoadingFile, setIsLoadingFile] = useState<boolean>(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const currentModelRef = useRef<THREE.Group | null>(null);

  // Inicializa o visualizador WebGL da ferramenta de teste
  useEffect(() => {
    const container = viewerContainerRef.current;
    if (!container) return;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Iluminação
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
    fillLight.position.set(-5, 4, -4);
    scene.add(fillLight);

    const grid = new THREE.GridHelper(5, 12, 0x475569, 0x1e293b);
    grid.position.y = -0.5;
    scene.add(grid);

    // Rotação com mouse
    let isDragging = false;
    let prevX = 0;
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging && currentModelRef.current) {
        const delta = e.clientX - prevX;
        currentModelRef.current.rotation.y += delta * 0.015;
        prevX = e.clientX;
      }
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (currentModelRef.current && !isDragging) {
        currentModelRef.current.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w && h) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
    };
  }, []);

  // Manipulador de upload local do arquivo .glb
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoadError(null);
    setIsLoadingFile(true);
    setLoadedFileName(file.name);
    setFileSizeText((file.size / 1024).toFixed(1) + ' KB');

    if (!file.name.toLowerCase().endsWith('.glb') && !file.name.toLowerCase().endsWith('.gltf')) {
      setLoadError('Por favor selecione um arquivo com extensão .glb (GLTF binário do Tinkercad).');
      setIsLoadingFile(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const buffer = event.target?.result;
      if (!buffer || !(buffer instanceof ArrayBuffer)) {
        setLoadError('Não foi possível ler o arquivo.');
        setIsLoadingFile(false);
        return;
      }

      const loader = new GLTFLoader();
      loader.parse(
        buffer,
        '',
        (gltf) => {
          if (!sceneRef.current) return;

          // Remove modelo anterior se existir
          if (currentModelRef.current) {
            sceneRef.current.remove(currentModelRef.current);
          }

          const model = gltf.scene;

          // Conta número de malhas
          let count = 0;
          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) count++;
          });
          setMeshCount(count);

          // Centraliza e ajusta escala
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          model.position.x -= center.x;
          model.position.y -= center.y;
          model.position.z -= center.z;

          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const scale = 2.0 / maxDim;
            model.scale.set(scale, scale, scale);
          }

          sceneRef.current.add(model);
          currentModelRef.current = model;
          setIsLoadingFile(false);
        },
        (error) => {
          console.error(error);
          setLoadError('Falha ao processar o modelo 3D. Certifique-se de que o arquivo foi exportado como GLTF (.glb) válido.');
          setIsLoadingFile(false);
        }
      );
    };

    reader.onerror = () => {
      setLoadError('Erro ao abrir o arquivo no navegador.');
      setIsLoadingFile(false);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <section id="passo-4" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">✅</span>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
          Passo 4 — Testando o site &amp; Ferramenta Testar GLB
        </h3>
      </div>

      <div className="space-y-6">
        <p className="text-sm text-slate-700 leading-relaxed">
          Antes de compactar e publicar no Tiiny.host, execute os testes locais com o Live Server no VS Code 
          e confira cada item do checklist abaixo. Você também pode usar a ferramenta <strong>Testar GLB</strong> para 
          validar seus modelos diretamente nesta página.
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

        {/* ========================================================
             FERRAMENTA LOCAL: TESTAR ARQUIVO GLB
             ======================================================== */}
        <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-800 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Box className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-base sm:text-lg">Ferramenta Local: Testar GLB</h4>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded">
              Executa 100% no seu navegador
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300">
            Dúvidas se o seu arquivo do Tinkercad foi exportado corretamente? 
            Selecione o seu <code className="text-blue-300">modelo1.glb</code> ou <code className="text-blue-300">modelo2.glb</code> abaixo 
            para testar a renderização 3D, conferir a escala e verificar se ele gira normalmente:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            {/* Controles de Seleção de Arquivo */}
            <div className="space-y-3 bg-slate-800/80 p-4 rounded-lg border border-slate-700">
              <label className="block text-xs font-semibold text-slate-200">
                Selecione o arquivo exportado:
              </label>

              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-600 hover:border-blue-400 rounded-lg cursor-pointer bg-slate-900/50 transition-colors">
                <Upload className="w-6 h-6 text-blue-400 mb-1" />
                <span className="text-xs font-semibold text-slate-200">Clique para escolher .glb</span>
                <span className="text-[11px] text-slate-400">ou arraste para cá</span>
                <input
                  type="file"
                  accept=".glb,.gltf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {/* Informações do arquivo carregado */}
              {loadedFileName && (
                <div className="space-y-1.5 pt-2 text-xs border-t border-slate-700 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Arquivo:</span>
                    <span className="font-mono text-white truncate max-w-[140px]">{loadedFileName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tamanho:</span>
                    <span className="font-mono text-emerald-400">{fileSizeText}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Malhas 3D:</span>
                    <span className="font-mono text-blue-300">{meshCount} parte(s)</span>
                  </div>
                </div>
              )}

              {loadError && (
                <div className="p-3 bg-rose-950/80 border border-rose-700 text-rose-200 rounded text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{loadError}</span>
                </div>
              )}
            </div>

            {/* Visualizador 3D Interativo */}
            <div className="lg:col-span-2 relative bg-slate-950 rounded-lg overflow-hidden border border-slate-700 flex flex-col">
              <div className="px-3 py-2 bg-slate-900 flex items-center justify-between text-xs text-slate-400 border-b border-slate-800">
                <span>Visualização WebGL 3D</span>
                <span className="text-[11px] text-slate-500">Clique e arraste com o mouse para girar</span>
              </div>

              <div
                ref={viewerContainerRef}
                className="w-full h-64 sm:h-72 relative cursor-grab active:cursor-grabbing select-none"
              />

              {!loadedFileName && !isLoadingFile && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <Box className="w-10 h-10 text-slate-600 mb-2" />
                  <p className="text-xs text-slate-400 max-w-xs">
                    Nenhum arquivo GLB selecionado ainda. Escolha seu modelo no botão ao lado para testar a renderização.
                  </p>
                </div>
              )}

              {isLoadingFile && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80">
                  <div className="flex items-center gap-2 text-xs text-blue-400">
                    <RotateCw className="w-4 h-4 animate-spin" />
                    <span>Processando malha 3D...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
