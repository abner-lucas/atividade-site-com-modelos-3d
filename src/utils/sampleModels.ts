import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

/**
 * Cria a geometria do Modelo 1: Robô Explorador (Estilo Tinkercad)
 */
export function createSampleModel1(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'Robo_Explorador_Tinkercad';

  // Materiais estilo Tinkercad (cores sólidas e foscas vibrantes)
  const tealMat = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    roughness: 0.3,
    metalness: 0.2,
  });
  const yellowMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    roughness: 0.4,
    metalness: 0.1,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.6,
    metalness: 0.3,
  });
  const whiteMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.2,
    metalness: 0.1,
  });

  // Torso / Corpo principal (Cubo chanfrado)
  const bodyGeo = new THREE.BoxGeometry(1.2, 1.3, 0.9);
  const body = new THREE.Mesh(bodyGeo, tealMat);
  body.position.y = 1.1;
  body.castShadow = true;
  group.add(body);

  // Painel frontal no peito
  const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.7, 0.05), yellowMat);
  chestPlate.position.set(0, 1.1, 0.46);
  group.add(chestPlate);

  // Botões no peito
  const btn1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16), darkMat);
  btn1.rotation.x = Math.PI / 2;
  btn1.position.set(-0.2, 1.1, 0.5);
  const btn2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16), darkMat);
  btn2.rotation.x = Math.PI / 2;
  btn2.position.set(0.2, 1.1, 0.5);
  group.add(btn1, btn2);

  // Cabeça
  const headGeo = new THREE.BoxGeometry(0.9, 0.75, 0.75);
  const head = new THREE.Mesh(headGeo, tealMat);
  head.position.y = 2.05;
  head.castShadow = true;
  group.add(head);

  // Olhos
  const eye1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16), whiteMat);
  eye1.rotation.x = Math.PI / 2;
  eye1.position.set(-0.22, 2.1, 0.4);

  const eye2 = eye1.clone();
  eye2.position.x = 0.22;

  const pupil1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.09, 16), darkMat);
  pupil1.rotation.x = Math.PI / 2;
  pupil1.position.set(-0.22, 2.1, 0.41);

  const pupil2 = pupil1.clone();
  pupil2.position.x = 0.22;

  group.add(eye1, eye2, pupil1, pupil2);

  // Antena com esfera
  const antStick = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8), darkMat);
  antStick.position.set(0, 2.55, 0);
  const antSphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), yellowMat);
  antSphere.position.set(0, 2.78, 0);
  group.add(antStick, antSphere);

  // Braços
  const armGeo = new THREE.BoxGeometry(0.25, 0.8, 0.25);
  const armL = new THREE.Mesh(armGeo, yellowMat);
  armL.position.set(-0.78, 1.1, 0);
  const armR = new THREE.Mesh(armGeo, yellowMat);
  armR.position.set(0.78, 1.1, 0);
  group.add(armL, armR);

  // Pernas / Base de esteira
  const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.6, 16), darkMat);
  leg1.position.set(-0.35, 0.3, 0);
  const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.6, 16), darkMat);
  leg2.position.set(0.35, 0.3, 0);
  group.add(leg1, leg2);

  const foot1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.15, 0.6), darkMat);
  foot1.position.set(-0.35, 0.05, 0.1);
  const foot2 = foot1.clone();
  foot2.position.set(0.35, 0.05, 0.1);
  group.add(foot1, foot2);

  return group;
}

/**
 * Cria a geometria do Modelo 2: Foguete Espacial (Estilo Tinkercad)
 */
export function createSampleModel2(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'Foguete_Orbital_Tinkercad';

  const redMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    roughness: 0.3,
    metalness: 0.1,
  });
  const whiteMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.2,
    metalness: 0.1,
  });
  const cyanMat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    roughness: 0.1,
    metalness: 0.4,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.5,
    metalness: 0.3,
  });

  // Corpo do Foguete (Cilindro esguio)
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 1.8, 24), whiteMat);
  body.position.y = 1.35;
  body.castShadow = true;
  group.add(body);

  // Bico / Nariz cônico
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.9, 24), redMat);
  nose.position.y = 2.7;
  group.add(nose);

  // Janela redonda (Escotilha)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.04, 16, 32), redMat);
  ring.position.set(0, 1.65, 0.54);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.05, 24), cyanMat);
  glass.rotation.x = Math.PI / 2;
  glass.position.set(0, 1.65, 0.52);
  group.add(ring, glass);

  // Aletas estabilizadoras (4 asas de sustentação)
  const finGeo = new THREE.BoxGeometry(0.1, 0.7, 0.6);
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(finGeo, redMat);
    const angle = (i * Math.PI) / 2;
    fin.position.set(Math.cos(angle) * 0.72, 0.7, Math.sin(angle) * 0.72);
    fin.rotation.y = -angle;
    group.add(fin);
  }

  // Motor / Bocal de exaustão
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.4, 20), darkMat);
  nozzle.position.y = 0.25;
  group.add(nozzle);

  // Faixa decorativa no corpo
  const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.57, 0.15, 24), redMat);
  stripe.position.y = 0.9;
  group.add(stripe);

  return group;
}

/**
 * Converte um grupo Three.js em ArrayBuffer binário GLB
 */
export function exportGroupToGLB(group: THREE.Group): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const exporter = new GLTFExporter();
    exporter.parse(
      group,
      (gltf) => {
        if (gltf instanceof ArrayBuffer) {
          resolve(gltf);
        } else {
          // Converte para JSON string para ArrayBuffer se retornado como objeto
          const jsonStr = JSON.stringify(gltf);
          const encoder = new TextEncoder();
          resolve(encoder.encode(jsonStr).buffer);
        }
      },
      (error) => {
        reject(error);
      },
      { binary: true }
    );
  });
}
