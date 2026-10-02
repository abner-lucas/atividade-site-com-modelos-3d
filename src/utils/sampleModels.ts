import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

/**
 * Cria a geometria do Modelo 1: Robô Explorador (Estilo Tinkercad)
 */
export function createSampleModel1(): THREE.Group {
  return createAirplane();
}

export function createSampleModel2(): THREE.Group {
  return createAirplane();
}

function createAirplane(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'Aviao_Estilo_Tinkercad';

  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.4, metalness: 0.1 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xdc143c, roughness: 0.4, metalness: 0.1 });
  const greyMat = new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.5, metalness: 0.5 });
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, metalness: 0.1 });

  // Fuselagem (Corpo central)
  const bodyGeo = new THREE.CylinderGeometry(0.4, 0.2, 2.5, 32);
  bodyGeo.rotateZ(Math.PI / 2); // Deita o cilindro
  const body = new THREE.Mesh(bodyGeo, yellowMat);
  body.position.y = 1;
  body.castShadow = true;
  group.add(body);

  // Nariz vermelho
  const noseGeo = new THREE.SphereGeometry(0.4, 32, 16);
  const nose = new THREE.Mesh(noseGeo, redMat);
  nose.position.set(-1.25, 1, 0);
  group.add(nose);

  // Hélices
  const propCenter = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16), greyMat);
  propCenter.rotation.z = Math.PI / 2;
  propCenter.position.set(-1.6, 1, 0);
  group.add(propCenter);

  const propGeo = new THREE.BoxGeometry(0.05, 1.4, 0.15);
  const propeller = new THREE.Mesh(propGeo, greyMat);
  propeller.position.set(-1.65, 1, 0);
  group.add(propeller);

  // Asas superiores
  const wingTopGeo = new THREE.BoxGeometry(1, 0.05, 2.8);
  const wingTop = new THREE.Mesh(wingTopGeo, redMat);
  wingTop.position.set(-0.3, 1.5, 0);
  group.add(wingTop);

  // Asas inferiores
  const wingBotGeo = new THREE.BoxGeometry(0.8, 0.05, 2.4);
  const wingBot = new THREE.Mesh(wingBotGeo, redMat);
  wingBot.position.set(-0.3, 0.5, 0);
  group.add(wingBot);

  // Hastes de suporte das asas (laterais)
  const strutGeo = new THREE.CylinderGeometry(0.02, 0.02, 1, 8);
  const strut1 = new THREE.Mesh(strutGeo, redMat);
  strut1.position.set(-0.3, 1, 1);
  const strut2 = strut1.clone();
  strut2.position.set(-0.3, 1, -1);
  group.add(strut1, strut2);

  // Cauda vertical
  const tailVertGeo = new THREE.BoxGeometry(0.4, 0.6, 0.05);
  const tailVert = new THREE.Mesh(tailVertGeo, redMat);
  tailVert.position.set(1, 1.4, 0);
  group.add(tailVert);

  // Cauda horizontal
  const tailHorzGeo = new THREE.BoxGeometry(0.4, 0.05, 1);
  const tailHorz = new THREE.Mesh(tailHorzGeo, redMat);
  tailHorz.position.set(1, 1.1, 0);
  group.add(tailHorz);

  // Eixo das rodas
  const axleGeo = new THREE.CylinderGeometry(0.03, 0.03, 1, 8);
  axleGeo.rotateX(Math.PI / 2);
  const axle = new THREE.Mesh(axleGeo, redMat);
  axle.position.set(-0.5, 0.2, 0);
  group.add(axle);

  // Hastes das rodas
  const strutWheel1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8), redMat);
  strutWheel1.position.set(-0.5, 0.4, 0.4);
  const strutWheel2 = strutWheel1.clone();
  strutWheel2.position.set(-0.5, 0.4, -0.4);
  group.add(strutWheel1, strutWheel2);

  // Rodas
  const wheelGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
  wheelGeo.rotateX(Math.PI / 2);
  const wheel1 = new THREE.Mesh(wheelGeo, blackMat);
  wheel1.position.set(-0.5, 0.2, 0.5);
  const wheelHub1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16), yellowMat);
  wheelHub1.rotateX(Math.PI / 2);
  wheelHub1.position.set(-0.5, 0.2, 0.5);
  
  const wheel2 = wheel1.clone();
  wheel2.position.set(-0.5, 0.2, -0.5);
  const wheelHub2 = wheelHub1.clone();
  wheelHub2.position.set(-0.5, 0.2, -0.5);

  group.add(wheel1, wheelHub1, wheel2, wheelHub2);

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
