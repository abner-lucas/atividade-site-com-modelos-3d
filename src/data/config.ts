/**
 * Configurações da Atividade Didática
 * 
 * Todos os links específicos da turma, professor e lista de trabalhos
 * podem ser configurados neste arquivo.
 */

export interface DuplaProject {
  id: string;
  pairName: string;
  members: string[];
  projectTitle: string;
  siteUrl: string; // URL pública no Tiiny.host (ex: https://mundo3d-dupla01.tiiny.site)
  model1Name?: string;
  model2Name?: string;
  model1Url?: string; // Caminho opcional para prévia direta do modelo 1
  model2Url?: string; // Caminho opcional para prévia direta do modelo 2
}

export const activityConfig = {
  // Identificação Institucional
  teacherName: "Professor Ábner Lucas",
  institution: "IFPA Campus Breves",
  discipline: "Programação Web",
  activityTitle: "Criação de Site com Modelos 3D",
  activityEvaluation: "3ª Avaliação Prática",
  projectName: "Mundo 3D",

  // Links Externos Configuráveis
  links: {
    tinkercadBase: "https://www.tinkercad.com/",
    tinkercadClassroom: "https://www.tinkercad.com/joinclass", // Link configurável da sala
    googleClassroom: "https://classroom.google.com/", // Link configurável da turma/tarefa
    tiinyHost: "https://tiiny.host/",
    tiinyHostZipTutorial: "https://tiiny.host/zip-site-web-hosting/",
    tiinyHostLimitsGuide: "https://helpdesk.tiiny.host/en/article/plan-limits-explained-projects-uploads-visits-and-bandwidth-1ihflbr/",
  },

  // Verificação dos limites do Tiiny.host (data exata estipulada)
  tiinyHostLimits: {
    verifiedDate: "02/10/2026",
    activeProjectsLimit: "1 projeto ativo por conta gratuita",
    sizeLimit: "Até 3 MB por projeto (ZIP descompactado)",
    uploadsPerDay: "Até 3 envios por dia (incluindo atualizações)",
    note: "Projetos enviados fora dos limites podem se tornar prévias que expiram em 1 hora.",
  },

  // Critérios de Avaliação (exatamente os 4 definidos na referência)
  evaluationCriteria: [
    {
      id: "completo",
      title: "1. Completo",
      description: "Presença de todos os elementos solicitados no roteiro: cabeçalho, seções Sobre, Galeria, Contato, rodapé e os 5 arquivos organizados.",
      icon: "CheckCircle2",
    },
    {
      id: "funcionalidade",
      title: "2. Funcionalidade",
      description: "Exibição correta dos dois modelos 3D criados no Tinkercad (modelo1.glb e modelo2.glb), com rotação contínua e iluminação adequada.",
      icon: "Box",
    },
    {
      id: "design",
      title: "3. Design",
      description: "Fidelidade à organização visual proposta no modelo de exemplo, mantendo harmonia de cores, tipografia limpa e responsividade para celular.",
      icon: "Layout",
    },
    {
      id: "envio",
      title: "4. Envio",
      description: "Entrega correta do link público do Tiiny.host na tarefa correspondente da 3ª Avaliação no Google Classroom dentro do prazo estipulado.",
      icon: "Send",
    },
  ],

  // Mensagem Final
  finalMessage: "Que seus sites sejam um sucesso e que vocês se divirtam no processo de criação. Boa atividade!",

  // Lista de Trabalhos das Duplas
  // Inicialmente vazia conforme orientação ("Os trabalhos das duplas serão disponibilizados aqui após a entrega.")
  // O professor pode preencher novos registros diretamente aqui.
  duplasProjects: [] as DuplaProject[],
};
