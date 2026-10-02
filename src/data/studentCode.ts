/**
 * Códigos completos fornecidos aos estudantes para a atividade "Mundo 3D".
 * Estes códigos são exibidos na página orientadora para cópia e incluídos no download em ZIP.
 */

export const studentIndexHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mundo 3D - Galeria de Modelos</title>
  <link rel="stylesheet" href="style.css">
  <!-- Importação do Three.js e GLTFLoader via CDN HTTPS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>
</head>
<body>

  <!-- ========================================================
       CABEÇALHO E NAVEGAÇÃO DO SITE
       ======================================================== -->
  <header>
    <div class="container header-container">
      <div class="logo">
        <span class="logo-icon">🌐</span>
        <h1>Mundo 3D</h1>
      </div>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#galeria">Galeria</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  </header>

  <!-- ========================================================
       SEÇÃO PRINCIPAL: BOAS-VINDAS
       ======================================================== -->
  <section class="hero">
    <div class="container hero-content">
      <h2>Bem-vindo ao Mundo 3D!</h2>
      <p class="hero-subtitle">
        Explore nossos modelos tridimensionais criados no Tinkercad e renderizados diretamente na web.
      </p>
      <a href="#galeria" class="btn-primary">Ver Galeria 3D</a>
    </div>
  </section>

  <!-- ========================================================
       SEÇÃO: SOBRE A DUPLA
       [ATENÇÃO ALUNOS]: Personalizem os nomes e a descrição aqui!
       ======================================================== -->
  <section id="sobre" class="section">
    <div class="container">
      <div class="section-title">
        <h2>Sobre o Projeto</h2>
        <div class="title-underline"></div>
      </div>
      
      <div class="card about-card">
        <h3>Identificação da Dupla</h3>
        <p class="team-names">
          <strong>Integrantes:</strong> [Nome do Aluno 1] e [Nome do Aluno 2]
        </p>
        <p class="about-text">
          Este site foi desenvolvido para a 3ª Avaliação prática de desenvolvimento web. 
          Os modelos foram concebidos e modelados no Tinkercad, exportados no formato 
          GLTF (.glb) e integrados com Three.js para visualização interativa em 360°.
        </p>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SEÇÃO: GALERIA COM OS DOIS MODELOS 3D
       ======================================================== -->
  <section id="galeria" class="section section-dark">
    <div class="container">
      <div class="section-title">
        <h2>Galeria de Modelos 3D</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Passe o mouse ou toque para interagir com os modelos.</p>
      </div>

      <div class="gallery-grid">
        <!-- Card do Modelo 1 -->
        <div class="model-card">
          <div class="model-header">
            <h3>Modelo 1: [Nome do Primeiro Modelo]</h3>
            <span class="model-badge">modelo1.glb</span>
          </div>
          <!-- Contêiner onde o Three.js desenhará o modelo 1 -->
          <div id="visualizador-1" class="viewer-container">
            <div class="loading-indicator">Carregando modelo 1...</div>
          </div>
          <div class="model-description">
            <p>[Breve descrição do seu primeiro modelo criado no Tinkercad.]</p>
          </div>
        </div>

        <!-- Card do Modelo 2 -->
        <div class="model-card">
          <div class="model-header">
            <h3>Modelo 2: [Nome do Segundo Modelo]</h3>
            <span class="model-badge">modelo2.glb</span>
          </div>
          <!-- Contêiner onde o Three.js desenhará o modelo 2 -->
          <div id="visualizador-2" class="viewer-container">
            <div class="loading-indicator">Carregando modelo 2...</div>
          </div>
          <div class="model-description">
            <p>[Breve descrição do seu segundo modelo criado no Tinkercad.]</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SEÇÃO: CONTATO E CONSIDERAÇÕES FINAIS
       [ATENÇÃO ALUNOS]: Personalizem com sua turma e contatos!
       ======================================================== -->
  <section id="contato" class="section">
    <div class="container">
      <div class="section-title">
        <h2>Contato &amp; Considerações</h2>
        <div class="title-underline"></div>
      </div>

      <div class="card contact-card">
        <h3>Informações da Turma</h3>
        <p><strong>Instituição:</strong> IFPA Campus Breves</p>
        <p><strong>Disciplina:</strong> Programação Web</p>
        <p><strong>Orientação:</strong> Professor Ábner Lucas</p>
        <p class="feedback-text">
          Concluímos a modelagem e a programação com sucesso! Acompanhe nosso trabalho através do código no GitHub ou envie comentários sobre nossos modelos 3D.
        </p>
      </div>
    </div>
  </section>

  <!-- ========================================================
       RODAPÉ
       ======================================================== -->
  <footer>
    <div class="container footer-content">
      <p>&copy; 2026 Mundo 3D — Criado pela Dupla. Todos os direitos reservados.</p>
      <p class="footer-sub">3ª Avaliação · IFPA Campus Breves</p>
    </div>
  </footer>

  <!-- Script de animação e carregamento dos modelos -->
  <script src="script.js"></script>
</body>
</html>`;

export const studentStyleCss = `/* ==========================================================
   RESET E ESTILOS GERAIS
   ========================================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f8fafc;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ==========================================================
   CABEÇALHO E NAVEGAÇÃO
   ========================================================== */
header {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 1.6rem;
}

.logo h1 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  text-decoration: none;
  color: #475569;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #2563eb;
}

/* ==========================================================
   SEÇÃO HERO (BOAS-VINDAS)
   ========================================================== */
.hero {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #ffffff;
  padding: 72px 0 80px;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #94a3b8;
  max-width: 650px;
  margin: 0 auto 32px;
}

.btn-primary {
  display: inline-block;
  background-color: #2563eb;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}

/* ==========================================================
   SEÇÕES GERAIS E CARTÕES
   ========================================================== */
.section {
  padding: 64px 0;
}

.section-dark {
  background-color: #0f172a;
  color: #f8fafc;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 1.85rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.section-dark .section-title h2 {
  color: #ffffff;
}

.title-underline {
  width: 56px;
  height: 4px;
  background-color: #2563eb;
  margin: 12px auto 16px;
  border-radius: 2px;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 32px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.about-card h3,
.contact-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #0f172a;
}

.team-names {
  font-size: 1.05rem;
  margin-bottom: 14px;
  color: #1e293b;
}

.about-text,
.feedback-text {
  color: #475569;
  line-height: 1.7;
}

.contact-card p {
  margin-bottom: 8px;
  color: #334155;
}

.contact-card .feedback-text {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

/* ==========================================================
   GRADE DA GALERIA E VISUALIZADORES 3D
   ========================================================== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.model-card {
  background-color: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #334155;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.model-header {
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
  background-color: #1a2234;
}

.model-header h3 {
  font-size: 1.05rem;
  color: #f1f5f9;
  font-weight: 600;
}

.model-badge {
  font-size: 0.75rem;
  background-color: #2563eb;
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 4px;
  font-family: monospace;
}

.viewer-container {
  width: 100%;
  height: 340px;
  position: relative;
  background-color: #0b1120;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}

.viewer-container:active {
  cursor: grabbing;
}

.viewer-container canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}

.loading-indicator {
  position: absolute;
  color: #94a3b8;
  font-size: 0.9rem;
  pointer-events: none;
}

.model-description {
  padding: 18px 20px;
  background-color: #1a2234;
  border-top: 1px solid #334155;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* ==========================================================
   RODAPÉ
   ========================================================== */
footer {
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0;
  padding: 32px 0;
  text-align: center;
}

.footer-content p {
  color: #64748b;
  font-size: 0.9rem;
}

.footer-sub {
  margin-top: 6px;
  font-size: 0.8rem;
  color: #94a3b8;
}

/* ==========================================================
   RESPONSIVIDADE (DISPOSITIVOS MÓVEIS)
   ========================================================== */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .header-container {
    flex-direction: column;
    gap: 12px;
  }

  nav {
    gap: 16px;
  }

  .hero h2 {
    font-size: 1.85rem;
  }

  .viewer-container {
    height: 280px;
  }
}
`;

export const studentScriptJs = `/**
 * script.js - Lógica de Visualização e Renderização 3D com Three.js
 * Atividade: Mundo 3D
 * Professor Ábner Lucas — IFPA Campus Breves
 * 
 * Este arquivo cria duas cenas Three.js independentes para renderizar
 * 'modelo1.glb' e 'modelo2.glb' nos elementos da página.
 */

// Executa o código após todo o conteúdo do HTML ter sido carregado
document.addEventListener('DOMContentLoaded', () => {

  /**
   * Função utilitária que inicializa um visualizador Three.js completo
   * para um arquivo GLB específico em um elemento HTML.
   * 
   * @param {string} containerId - O id do elemento <div> na página
   * @param {string} modelPath   - O caminho do arquivo (ex: './modelo1.glb')
   */
  function inicializarVisualizador3D(containerId, modelPath) {
    const container = document.getElementById(containerId);

    if (!container) {
      console.warn('Contêiner não encontrado: #' + containerId);
      return;
    }

    // 1. Criação da Cena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1120); // Fundo escuro azulado elegante

    // 2. Criação da Câmera (Campo de visão de 45 graus)
    const largura = container.clientWidth || 300;
    const altura = container.clientHeight || 300;
    const camera = new THREE.PerspectiveCamera(45, largura / altura, 0.1, 100);
    camera.position.set(0, 1.5, 3.5);

    // 3. Renderizador WebGL
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(largura, altura);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // Adiciona o elemento <canvas> dentro do contêiner da página
    container.appendChild(renderer.domElement);

    // 4. Sistema de Iluminação de 3 Pontos para destacar as formas 3D
    // Luz Ambiente suave
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Luz Direcional Principal (Key Light)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(5, 10, 7);
    scene.add(keyLight);

    // Luz Direcional de Preenchimento (Fill Light)
    const fillLight = new THREE.DirectionalLight(0x60a5fa, 0.5);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // 5. Base / Grade discreta no chão
    const gridHelper = new THREE.GridHelper(4, 10, 0x334155, 0x1e293b);
    gridHelper.position.y = -0.5;
    scene.add(gridHelper);

    // Variável para armazenar a malha do modelo e aplicar rotação
    let modeloCarregado = null;

    // 6. Carregador de arquivos GLTF / GLB
    const loader = new THREE.GLTFLoader();

    loader.load(
      modelPath,
      // Sucesso no carregamento:
      (gltf) => {
        modeloCarregado = gltf.scene;

        // Centraliza o modelo automaticamente calculando sua caixa delimitadora
        const box = new THREE.Box3().setFromObject(modeloCarregado);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        modeloCarregado.position.x -= center.x;
        modeloCarregado.position.y -= center.y;
        modeloCarregado.position.z -= center.z;

        // Ajusta a escala proporcional caso o modelo do Tinkercad seja muito grande
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const escalaAlvo = 1.8 / maxDim;
          modeloCarregado.scale.set(escalaAlvo, escalaAlvo, escalaAlvo);
        }

        scene.add(modeloCarregado);

        // Remove o texto "Carregando..." do contêiner
        const indicador = container.querySelector('.loading-indicator');
        if (indicador) {
          indicador.remove();
        }
      },
      // Progresso:
      undefined,
      // Caso ocorra erro (ex: arquivo ausente ou nome incorreto):
      (error) => {
        console.error('Erro ao carregar ' + modelPath + ':', error);
        const indicador = container.querySelector('.loading-indicator');
        if (indicador) {
          indicador.innerHTML = '⚠️ Não foi possível carregar <code>' + modelPath + '</code>.<br><small style="color: #cbd5e1;">Verifique se o arquivo está na mesma pasta do site.</small>';
          indicador.style.padding = '16px';
          indicador.style.textAlign = 'center';
        }
      }
    );

    // 7. Interação de rotação com o mouse / toque (opcional e suave)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (isDragging && modeloCarregado) {
        const deltaX = e.clientX - previousMousePosition.x;
        modeloCarregado.rotation.y += deltaX * 0.01;
      }
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // 8. Loop de Animação contínuo (Giro automático suave)
    function animar() {
      requestAnimationFrame(animar);

      if (modeloCarregado && !isDragging) {
        modeloCarregado.rotation.y += 0.008; // Rotação automática suave
      }

      renderer.render(scene, camera);
    }
    animar();

    // 9. Ajuste ao redimensionar a tela
    window.addEventListener('resize', () => {
      const novaLargura = container.clientWidth;
      const novaAltura = container.clientHeight;
      if (novaLargura && novaAltura) {
        camera.aspect = novaLargura / novaAltura;
        camera.updateProjectionMatrix();
        renderer.setSize(novaLargura, novaAltura);
      }
    });
  }

  // Inicializa o primeiro modelo (modelo1.glb)
  inicializarVisualizador3D('visualizador-1', './modelo1.glb');

  // Inicializa o segundo modelo (modelo2.glb)
  inicializarVisualizador3D('visualizador-2', './modelo2.glb');

});
`;
