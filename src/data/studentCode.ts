export const studentIndexHtml = `<!DOCTYPE html>
<html lang="pt-BR"> <!-- Define o tipo de documento e o idioma (Português do Brasil) -->
<head>
    <meta charset="UTF-8"> <!-- Configura a codificação de caracteres para aceitar acentos e cedilha -->
    <title>3ª Avaliação - Computação Gráfica</title> <!-- O texto que aparece na aba do navegador -->
    
    <!-- Link para importar as regras de estilo visuais criadas no arquivo CSS -->
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <!-- ===================================================================== -->
    <!-- 1. IMPORTAÇÃO DE BIBLIOTECAS (Scripts externos)                       -->
    <!-- ===================================================================== -->
    
    <!-- Carrega a biblioteca principal do Three.js (responsável pelos gráficos 3D) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    
    <!-- Carrega o carregador específico de modelos GLTF/GLB (formato dos objetos 3D) -->
    <script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/js/loaders/GLTFLoader.js"></script>
    
    <!-- Carrega o OrbitControls, que permite interagir e girar o modelo com o mouse -->
    <script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/js/controls/OrbitControls.js"></script>
    
    <!-- Carrega o nosso próprio código JavaScript, onde configuramos a cena -->
    <script src="codigo.js"></script>


    <!-- ===================================================================== -->
    <!-- 2. ESTRUTURA VISUAL DA PÁGINA (Elementos HTML)                        -->
    <!-- ===================================================================== -->
    
    <h1>3ª Avaliação - Computação Gráfica</h1> <!-- Título principal da página -->

    <!-- Container principal que agrupa e organiza os dois cartões lado a lado usando CSS -->
    <div class="container-modelos">
        
        <!-- Cartão do Primeiro Aluno -->
        <div class="cartao-modelo">
            <!-- Título que receberá o nome via JavaScript -->
            <h2 id="nome-aluno-1">Aluno 1</h2>
            
            <!-- Div vazia que funcionará como a 'tela' onde o modelo 3D será desenhado pelo Three.js -->
            <div id="modelo1" class="canvas-container"></div>
            
            <!-- Parágrafo que receberá a descrição do modelo via JavaScript -->
            <p id="desc-aluno-1" class="descricao-modelo"></p>
        </div>

        <!-- Cartão do Segundo Aluno -->
        <div class="cartao-modelo">
            <h2 id="nome-aluno-2">Aluno 2</h2>
            <div id="modelo2" class="canvas-container"></div>
            <p id="desc-aluno-2" class="descricao-modelo"></p>
        </div>
        
    </div>
</body>
</html>`;

export const studentStyleCss = `/* ========================================================================= */
/* ARQUIVO DE ESTILOS (CSS) - Define as cores, tamanhos e posições dos elementos */
/* ========================================================================= */

/* Configurações gerais da página inteira */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Define o estilo da fonte */
    background-color: #f0f2f5; /* Cor de fundo cinza bem clarinho */
    color: #333; /* Cor do texto em tom de cinza escuro */
    margin: 0; /* Remove a margem padrão do navegador */
    padding: 0;
    
    /* Configurações do Flexbox (para centralizar tudo no meio da tela) */
    display: flex; 
    flex-direction: column; /* Coloca os elementos um embaixo do outro (título em cima, cartões em baixo) */
    align-items: center; /* Centraliza os elementos horizontalmente */
    justify-content: center; /* Centraliza verticalmente */
    min-height: 100vh; /* Garante que a página ocupe pelo menos 100% da altura da tela */
}

/* Estilo do título principal */
h1 {
    text-align: center; /* Texto centralizado */
    color: #2c3e50; /* Azul escuro */
    margin-bottom: 30px; /* Dá um espaço entre o título e os cartões abaixo dele */
    font-weight: 600; /* Deixa o texto mais gordinho (negrito) */
}

/* Container que envolve os dois cartões */
.container-modelos {
    display: flex; /* Permite colocar os cartões lado a lado */
    gap: 40px; /* Cria um espaço de 40 pixels entre os dois cartões */
    flex-wrap: wrap; /* Se a tela for pequena (celular), joga o segundo cartão para a linha de baixo */
    justify-content: center; /* Mantém tudo centralizado */
}

/* Estilo de cada cartão (bloco individual de cada aluno) */
.cartao-modelo {
    display: flex;
    flex-direction: column; /* Organiza nome -> modelo -> descrição um abaixo do outro */
    align-items: center; /* Centraliza o conteúdo dentro do cartão */
}

/* Estilo apenas para os nomes dos alunos (os <h2> dentro dos cartões) */
.cartao-modelo h2 {
    color: #4a5568;
    font-size: 1.2rem; /* Tamanho da fonte */
    margin-bottom: 15px; /* Espaço entre o nome e a tela 3D */
}

/* Estilo da 'tela' onde o modelo 3D é renderizado */
.canvas-container {
    width: 400px; /* Largura da tela 3D */
    height: 400px; /* Altura da tela 3D */
    
    /* Cria aquele fundo bonito parecendo um céu azul */
    background: linear-gradient(135deg, #87CEEB, #e0f6ff); 
    
    border-radius: 20px; /* Deixa as bordas arredondadas (mais suave) */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Adiciona a sombra embaixo da caixa */
    overflow: hidden; /* Corta as pontas do canvas interno para respeitar as bordas arredondadas */
}

/* Estilo da descrição do objeto (os parágrafos logo abaixo do modelo 3D) */
.descricao-modelo {
    max-width: 400px; /* Impede que o texto fique mais largo que a própria caixa 3D */
    text-align: center;
    color: #555;
    font-size: 0.95rem; /* Letra um pouco menor */
    margin-top: 15px; /* Espaço entre a caixa 3D e o texto */
    line-height: 1.4; /* Espaço confortável entre as linhas do texto */
}`;

export const studentScriptJs = `// =======================================================
// ALUNO: Edite apenas as variáveis abaixo
// =======================================================
const nomeAluno1 = "Insira o nome do Aluno 1 aqui";
const arquivoGLB_Aluno1 = "./aviaozinho.glb"; // Caminho do seu modelo 3D
const descricao_Aluno1 = "Descreva seu objeto aqui (ex: Avião de papel modelado no Blender...)";

const nomeAluno2 = "Insira o nome do Aluno 2 aqui";
const arquivoGLB_Aluno2 = "./aviaozinho.glb"; // Caminho do modelo do seu colega
const descricao_Aluno2 = "Descreva seu objeto aqui (ex: Avião de papel modelado no Blender...)";
// =======================================================

/**
 * Função responsável por criar e renderizar um modelo 3D em um container específico da página.
 * @param {string} containerId - O ID da div (HTML) onde o modelo será exibido.
 * @param {string} arquivoGLB - O caminho para o arquivo do modelo 3D (.glb).
 */
function criarCena(containerId, arquivoGLB) {
    // 1. Cria a Cena (O ambiente virtual onde os objetos existem)
    const cena = new THREE.Scene();
    
    // 2. Configura a Câmera (O "olho" que vê a cena)
    // Parâmetros: Campo de visão (75 graus), Proporção da tela (1:1 pois a div é 400x400), Distância mínima de visão (0.1), Distância máxima (1000)
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 80; // Afasta a câmera para conseguirmos ver o objeto inteiro
    camera.position.y = 10; // Levanta a câmera um pouco

    // 3. Configura o Renderizador (O motor que desenha a cena na tela)
    // antialias: suaviza as bordas serrilhadas do modelo
    // alpha: permite que o fundo seja transparente para vermos a cor definida no CSS
    const renderizador = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderizador.setSize(400, 400); // Define o tamanho do "quadro" (canvas) em pixels
    renderizador.setClearColor(0x000000, 0); // Fundo transparente

    // Adiciona o canvas (tela de desenho gerada pelo renderizador) dentro da div correspondente no HTML
    const painel = document.getElementById(containerId);
    painel.appendChild(renderizador.domElement);

    // 4. Controles de Órbita (Permite girar o modelo com o mouse)
    const controles = new THREE.OrbitControls(camera, renderizador.domElement);
    controles.enableDamping = true; // Habilita o efeito de "inércia" ou deslizamento suave ao girar
    controles.dampingFactor = 0.05; // Define a suavidade desse deslizamento

    // 5. Iluminação (Essencial para vermos as formas, texturas e volume do objeto 3D)
    // Luz Ambiente: Ilumina o objeto por igual de todas as direções (evita que algumas partes fiquem 100% pretas)
    const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.7);
    cena.add(luzAmbiente);

    // Luz Direcional: Funciona como a luz do Sol apontando em uma direção (ajuda a criar sombras e destacar o formato 3D)
    const luzDirecional = new THREE.DirectionalLight(0xffffff, 0.8);
    luzDirecional.position.set(5, 10, 5); // Define onde a luz está posicionada no espaço (x, y, z)
    cena.add(luzDirecional);

    // 6. Carregamento do Modelo 3D
    const loader = new THREE.GLTFLoader(); // Cria um carregador específico para arquivos GLTF/GLB
    
    // Inicia o processo de leitura do arquivo
    loader.load(arquivoGLB, function (gltf) {
        // Função chamada assim que o carregamento for concluído
        
        const modelo = gltf.scene; // Extrai o modelo principal de dentro do arquivo
        cena.add(modelo); // Coloca o modelo dentro do nosso ambiente virtual (cena)

        // Ajusta a posição e o tamanho inicial do modelo
        modelo.position.set(0, 0, 0); // Posiciona o objeto bem no centro (x:0, y:0, z:0)
        modelo.scale.set(0.5, 0.5, 0.5); // Reduz o tamanho do objeto pela metade

        // 7. Loop de Animação (Necessário para atualizar os gráficos a cada frame da tela, como em um videogame)
        function animarModelo() {
            requestAnimationFrame(animarModelo); // Pede ao navegador para chamar esta função repetidamente
            
            // Atualiza os controles para o efeito de inércia funcionar corretamente a cada frame
            controles.update();
            
            // Tira uma "foto" da cena usando a câmera e desenha na tela
            renderizador.render(cena, camera);
        }
        
        // Dá o pontapé inicial na animação
        animarModelo();
    });
}

// 8. Inicialização quando a página carrega
// O bloco abaixo só é executado quando o HTML termina de ser lido pelo navegador
window.onload = function() {
    // Insere os nomes e descrições dos alunos nos elementos de texto do HTML
    document.getElementById("nome-aluno-1").innerText = nomeAluno1;
    document.getElementById("desc-aluno-1").innerText = descricao_Aluno1;
    
    document.getElementById("nome-aluno-2").innerText = nomeAluno2;
    document.getElementById("desc-aluno-2").innerText = descricao_Aluno2;
    
    // Dispara a função criarCena para carregar os dois modelos nos seus respectivos painéis
    criarCena("modelo1", arquivoGLB_Aluno1);
    criarCena("modelo2", arquivoGLB_Aluno2);
};`;
