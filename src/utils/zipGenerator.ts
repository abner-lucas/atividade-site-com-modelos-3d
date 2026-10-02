import JSZip from 'jszip';
import { studentIndexHtml, studentStyleCss, studentScriptJs } from '../data/studentCode';
import { createSampleModel1, exportGroupToGLB } from './sampleModels';

/**
 * Cria e dispara o download do arquivo 'mundo-3d.zip' contendo exatamente os 4 arquivos
 * na raiz do arquivo compactado:
 * 1. index.html
 * 2. estilo.css
 * 3. codigo.js
 * 4. aviaozinho.glb (modelo 3D funcional de exemplo)
 */
export async function downloadStudentZip(
  onProgress?: (step: string) => void
): Promise<void> {
  const zip = new JSZip();

  if (onProgress) onProgress('Preparando códigos HTML, CSS e JavaScript...');
  zip.file('index.html', studentIndexHtml);
  zip.file('estilo.css', studentStyleCss);
  zip.file('codigo.js', studentScriptJs);

  if (onProgress) onProgress('Gerando aviaozinho.glb (Modelo de exemplo)...');
  const model1Buffer = await exportGroupToGLB(createSampleModel1());
  zip.file('aviaozinho.glb', model1Buffer);

  if (onProgress) onProgress('Compactando arquivo mundo-3d.zip...');
  const zipBlob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  // Disparo do download no navegador
  const url = URL.createObjectURL(zipBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mundo-3d.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Dispara o download de um arquivo individual (texto)
 */
export function downloadSingleFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
