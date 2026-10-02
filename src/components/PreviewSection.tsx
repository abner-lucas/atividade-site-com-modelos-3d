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

      const width = container.clientWidth || 300;
      const height = container.clientHeight || 260;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0.2, 4.2);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
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
        Abaixo há uma simulação de como o site ficará estruturado. Você pode interagir com os objetos nela.
        Mas para ter a experiência completa em tela cheia, acesse o exemplo final abaixo:
      </p>

      <div className="mb-6 flex">
        <a 
          href="https://abner-lucas.github.io/webpage-modelo-3d/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
        >
          <span>Ver Demonstração Interativa Completa</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Frame de Simulação do Site do Aluno */}
      <div className="w-full mx-auto border border-slate-300 rounded-xl overflow-hidden shadow-md bg-[#f0f2f5]">
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
        <div className="p-8 sm:p-12 flex flex-col items-center min-h-[600px]">
          <h1 className="text-center text-[#2c3e50] text-2xl sm:text-3xl font-semibold mb-10">
            3ª Avaliação - Computação Gráfica
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 w-full max-w-3xl">
            {/* Cartão Aluno 1 */}
            <div className="flex flex-col items-center flex-1 w-full max-w-[320px]">
              <h2 className="text-[#4a5568] text-base sm:text-lg font-bold mb-4 text-center">Insira o nome do Aluno 1 aqui</h2>
              <div
                ref={canvas1Ref}
                className="w-full aspect-square rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ background: 'linear-gradient(135deg, #87CEEB, #e0f6ff)' }}
              />
              <p className="w-full text-center text-[#555] text-xs sm:text-sm mt-4 leading-relaxed">
                Descreva seu objeto aqui (ex: Avião de papel modelado no Blender...)
              </p>
            </div>

            {/* Cartão Aluno 2 */}
            <div className="flex flex-col items-center flex-1 w-full max-w-[320px]">
              <h2 className="text-[#4a5568] text-base sm:text-lg font-bold mb-4 text-center">Insira o nome do Aluno 2 aqui</h2>
              <div
                ref={canvas2Ref}
                className="w-full aspect-square rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ background: 'linear-gradient(135deg, #87CEEB, #e0f6ff)' }}
              />
              <p className="w-full text-center text-[#555] text-xs sm:text-sm mt-4 leading-relaxed">
                Descreva seu objeto aqui (ex: Avião de papel modelado no Blender...)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
