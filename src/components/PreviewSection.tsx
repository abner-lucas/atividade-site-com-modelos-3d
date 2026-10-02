import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createSampleModel1, createSampleModel2 } from '../utils/sampleModels';

export const PreviewSection: React.FC = () => {
  const canvas1Ref = useRef<HTMLDivElement>(null);
  const canvas2Ref = useRef<HTMLDivElement>(null);

  // Inicialização das cenas Three.js nos dois visualizadores
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const setupViewer = (
      container: HTMLDivElement | null,
      createModelFn: () => THREE.Group
    ) => {
      if (!container) return;

      // Limpa instâncias anteriores se houver
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0b1120);

      const width = container.clientWidth || 300;
      const height = container.clientHeight || 260;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 1.4, 3.8);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Luzes
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
      keyLight.position.set(4, 8, 6);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
      fillLight.position.set(-4, 4, -4);
      scene.add(fillLight);

      // Chão / Grade sutil
      const grid = new THREE.GridHelper(4, 10, 0x334155, 0x1e293b);
      grid.position.y = -0.4;
      scene.add(grid);

      // Modelo
      const model = createModelFn();

      // Centralização do modelo
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      model.position.x -= center.x;
      model.position.y -= center.y;
      model.position.z -= center.z;

      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const scale = 1.9 / maxDim;
        model.scale.set(scale, scale, scale);
      }
      scene.add(model);

      // Interação de arrastar com mouse/touch
      let isDragging = false;
      let prevX = 0;

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        prevX = e.clientX;
      };
      const onMouseMove = (e: MouseEvent) => {
        if (isDragging && model) {
          const delta = e.clientX - prevX;
          model.rotation.y += delta * 0.015;
          prevX = e.clientX;
        }
      };
      const onMouseUp = () => {
        isDragging = false;
      };

      const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          isDragging = true;
          prevX = e.touches[0].clientX;
        }
      };
      const onTouchMove = (e: TouchEvent) => {
        if (isDragging && model && e.touches.length > 0) {
          const delta = e.touches[0].clientX - prevX;
          model.rotation.y += delta * 0.015;
          prevX = e.touches[0].clientX;
        }
      };
      const onTouchEnd = () => {
        isDragging = false;
      };

      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      container.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);

      let animId: number;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        if (model && !isDragging) {
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

      cleanups.push(() => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        renderer.dispose();
      });
    };

    const timer = setTimeout(() => {
      setupViewer(canvas1Ref.current, createSampleModel1);
      setupViewer(canvas2Ref.current, createSampleModel2);
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <section id="previa" className="scroll-mt-6 mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🖥️</span>
        <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
          Seu projeto ficará assim!
        </h2>
      </div>

      <p className="text-sm text-slate-600 mb-4">
        Esta é uma <strong>demonstração interativa real</strong> do site <em>“Mundo 3D”</em> construído com a estrutura
        HTML, CSS e JavaScript que vocês usarão. Você pode clicar e arrastar os modelos com o mouse ou toque para inspecioná-los em 360°.
      </p>

      {/* Frame de Simulação do Site do Aluno */}
      <div className="w-full mx-auto border border-slate-300 rounded-xl overflow-hidden shadow-md bg-white">
        {/* Barra superior do navegador simulado */}
        <div className="bg-slate-200 px-4 py-2.5 flex items-center justify-between border-b border-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="bg-white px-3 py-1 rounded text-xs text-slate-600 font-mono flex items-center gap-1.5 shadow-2xs truncate max-w-xs">
            <span className="text-emerald-600 font-bold">https://</span>
            <span>mundo3d-exemplo.tiiny.site</span>
          </div>
          <div className="text-xs text-slate-400">Prévia 3D</div>
        </div>

        {/* ========================================================
             CONTEÚDO SIMULADO DO SITE MUNDO 3D
             ======================================================== */}
        <div className="divide-y divide-slate-100">
          {/* Header do Mundo 3D */}
          <header className="bg-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌐</span>
              <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">Mundo 3D</span>
            </div>
            <nav className="flex items-center gap-4 text-xs sm:text-sm font-medium text-slate-600">
              <span className="hover:text-blue-600 cursor-pointer">Sobre</span>
              <span className="hover:text-blue-600 cursor-pointer">Galeria</span>
              <span className="hover:text-blue-600 cursor-pointer">Contato</span>
            </nav>
          </header>

          {/* Hero do Mundo 3D */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white text-center py-8 px-4">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Bem-vindo ao Mundo 3D!</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-2">
              Explore nossos modelos tridimensionais criados no Tinkercad e renderizados na web.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-sm">
                Ver Galeria 3D ↓
              </span>
            </div>
          </div>

          {/* Seção Sobre */}
          <div className="p-4 sm:p-6 bg-slate-50">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <h4 className="text-sm font-bold text-slate-900 mb-1">Identificação da Dupla</h4>
              <p className="text-xs text-blue-700 font-semibold mb-2">
                Integrantes: [Nome Aluno 1] e [Nome Aluno 2]
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Este site foi desenvolvido para a 3ª Avaliação prática de desenvolvimento web. 
                Os modelos foram criados no Tinkercad, exportados em GLTF (.glb) e integrados com Three.js.
              </p>
            </div>
          </div>

          {/* Seção Galeria 3D (Dois visualizadores lado a lado ou empilhados) */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white">
            <div className="text-center mb-4">
              <h4 className="text-base font-bold text-white tracking-tight">Galeria de Modelos 3D</h4>
              <p className="text-xs text-slate-400 mt-0.5">Arraste para girar em qualquer direção</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card Modelo 1 */}
              <div className="bg-slate-800/90 rounded-xl overflow-hidden border border-slate-700 flex flex-col shadow-sm">
                <div className="px-3.5 py-2.5 bg-slate-800 flex items-center justify-between border-b border-slate-700">
                  <span className="text-xs font-bold text-slate-100">Modelo 1: Robô Explorador</span>
                  <span className="text-[10px] font-mono bg-blue-600 px-2 py-0.5 rounded text-white font-medium">modelo1.glb</span>
                </div>
                <div
                  ref={canvas1Ref}
                  className="w-full h-52 sm:h-64 bg-slate-950 relative cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
                  title="Clique e arraste para girar o modelo 1"
                />
                <div className="px-3.5 py-2 bg-slate-800 text-[11px] text-slate-400 border-t border-slate-700 flex items-center justify-between">
                  <span>Modelo de exemplo estilo Tinkercad</span>
                  <span className="text-slate-500">Auto-rotação ativa</span>
                </div>
              </div>

              {/* Card Modelo 2 */}
              <div className="bg-slate-800/90 rounded-xl overflow-hidden border border-slate-700 flex flex-col shadow-sm">
                <div className="px-3.5 py-2.5 bg-slate-800 flex items-center justify-between border-b border-slate-700">
                  <span className="text-xs font-bold text-slate-100">Modelo 2: Foguete Orbital</span>
                  <span className="text-[10px] font-mono bg-blue-600 px-2 py-0.5 rounded text-white font-medium">modelo2.glb</span>
                </div>
                <div
                  ref={canvas2Ref}
                  className="w-full h-52 sm:h-64 bg-slate-950 relative cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
                  title="Clique e arraste para girar o modelo 2"
                />
                <div className="px-3.5 py-2 bg-slate-800 text-[11px] text-slate-400 border-t border-slate-700 flex items-center justify-between">
                  <span>Modelo de exemplo estilo Tinkercad</span>
                  <span className="text-slate-500">Auto-rotação ativa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seção Contato / Considerações */}
          <div className="p-4 sm:p-5 bg-white text-xs text-slate-600">
            <h5 className="font-bold text-slate-900 mb-1">Contato &amp; Considerações</h5>
            <p><strong>Instituição:</strong> IFPA Campus Breves · Programação Web</p>
            <p><strong>Orientação:</strong> Professor Ábner Lucas</p>
          </div>

          {/* Rodapé Simulado */}
          <footer className="bg-slate-100 px-4 py-3 text-center text-[11px] text-slate-500">
            © 2026 Mundo 3D — Criado pela Dupla · IFPA Campus Breves
          </footer>
        </div>
      </div>
    </section>
  );
};
