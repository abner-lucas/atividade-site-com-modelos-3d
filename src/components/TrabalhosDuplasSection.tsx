import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { activityConfig, DuplaProject } from '../data/config';
import { createSampleModel1, createSampleModel2 } from '../utils/sampleModels';
import {
  Users,
  ExternalLink,
  Eye,
  Box,
  X,
  RotateCw,
  FolderOpen,
  Sparkles,
  Info,
} from 'lucide-react';

export const TrabalhosDuplasSection: React.FC = () => {
  // O professor pode preencher os projetos em activityConfig.duplasProjects
  // Fornecemos também um botão/toggle para simulação de demonstração do layout preenchido
  const [showDemoList, setShowDemoList] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<DuplaProject | null>(null);

  // Lista demonstrativa exibida se o professor ativar a prévia de demonstração
  const demoProjects: DuplaProject[] = [
    {
      id: 'demo-1',
      pairName: 'Dupla 01',
      members: ['Ana Silva', 'Lucas Santos'],
      projectTitle: 'Exploradores do Espaço 3D',
      siteUrl: 'https://mundo3d-dupla01.tiiny.site',
      model1Name: 'Robô Espacial',
      model2Name: 'Foguete Orbital',
      model1Url: 'sample-1',
      model2Url: 'sample-2',
    },
    {
      id: 'demo-2',
      pairName: 'Dupla 02',
      members: ['Carlos Souza', 'Mariana Oliveira'],
      projectTitle: 'Cidade Futurista',
      siteUrl: 'https://mundo3d-dupla02.tiiny.site',
      model1Name: 'Veículo Autônomo',
      model2Name: 'Edifício Modular',
    },
  ];

  const projectsToDisplay =
    activityConfig.duplasProjects.length > 0
      ? activityConfig.duplasProjects
      : showDemoList
      ? demoProjects
      : [];

  return (
    <section id="trabalhos" className="scroll-mt-6 mb-12">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">👥</span>
          <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
            Trabalhos das Duplas
          </h2>
        </div>

        {/* Alternador didático para visualizar modelo de cartões caso ainda não haja entregas reais */}
        {activityConfig.duplasProjects.length === 0 && (
          <button
            type="button"
            onClick={() => setShowDemoList((prev) => !prev)}
            className="text-xs text-slate-500 hover:text-blue-700 underline font-medium"
          >
            {showDemoList ? 'Voltar para estado inicial' : 'Simular visualização com trabalhos entregues'}
          </button>
        )}
      </div>

      <p className="text-sm text-slate-700 mb-5 leading-relaxed">
        Galeria comemorativa onde os sites publicados e os modelos 3D desenvolvidos pelas duplas da turma serão reunidos 
        para consulta e compartilhamento.
      </p>

      {/* Caso vazio: exatamente conforme exigido */}
      {projectsToDisplay.length === 0 ? (
        <div className="p-8 sm:p-10 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-slate-200/80 text-slate-500 mx-auto flex items-center justify-center">
            <FolderOpen className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-800 text-base">
            Mural de Trabalhos da Turma
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Os trabalhos das duplas serão disponibilizados aqui após a entrega.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-700">{project.pairName}</span>
                  <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    Tiiny.host
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {project.projectTitle}
                </h3>

                <p className="text-xs text-slate-600">
                  <strong className="text-slate-700">Integrantes:</strong> {project.members.join(' e ')}
                </p>

                {(project.model1Name || project.model2Name) && (
                  <div className="pt-1 text-xs text-slate-500 flex flex-wrap gap-1.5">
                    {project.model1Name && (
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 border border-slate-200">
                        {project.model1Name}
                      </span>
                    )}
                    {project.model2Name && (
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 border border-slate-200">
                        {project.model2Name}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Botões de Ação do Card */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
                >
                  <span>Abrir site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-medium transition-colors"
                  title="Visualizar modelos 3D desta dupla"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Ver modelos</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal / Visualizador de Modelos da Dupla */}
      {activeModalProject && (
        <ModelsPreviewModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

// ========================================================
// MODAL DE VISUALIZAÇÃO DOS MODELOS 3D DO TRABALHO
// ========================================================
interface ModelsPreviewModalProps {
  project: DuplaProject;
  onClose: () => void;
}

const ModelsPreviewModal: React.FC<ModelsPreviewModalProps> = ({ project, onClose }) => {
  const [activeModelTab, setActiveModelTab] = useState<'1' | '2'>('1');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.4, 3.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-5, 4, -4);
    scene.add(fillLight);

    const grid = new THREE.GridHelper(4, 10, 0x334155, 0x1e293b);
    grid.position.y = -0.4;
    scene.add(grid);

    // Carrega o modelo selecionado (amostra funcional demonstrativa)
    const model = activeModelTab === '1' ? createSampleModel1() : createSampleModel2();

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
    scene.add(model);

    let isDragging = false;
    let prevX = 0;
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const delta = e.clientX - prevX;
        model.rotation.y += delta * 0.015;
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
      if (!isDragging) {
        model.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
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
  }, [activeModelTab]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200">
        {/* Cabeçalho do Modal */}
        <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-700">{project.pairName}</span>
            <h3 className="text-base font-bold text-slate-900">{project.projectTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Seletor de Modelo (1 ou 2) */}
        <div className="px-5 pt-3 pb-2 flex items-center justify-between bg-white border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveModelTab('1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeModelTab === '1'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {project.model1Name || 'Modelo 1 (modelo1.glb)'}
            </button>
            <button
              onClick={() => setActiveModelTab('2')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeModelTab === '2'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {project.model2Name || 'Modelo 2 (modelo2.glb)'}
            </button>
          </div>

          <span className="text-[11px] text-slate-400 font-mono">Visualizador WebGL</span>
        </div>

        {/* Janela de Renderização 3D */}
        <div
          ref={containerRef}
          className="w-full h-72 bg-slate-950 relative cursor-grab active:cursor-grabbing select-none"
        />

        {/* Rodapé do Modal */}
        <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Arraste com o mouse para girar o modelo
          </span>
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Ver site no ar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
