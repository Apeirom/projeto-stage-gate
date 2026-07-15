import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ProjectStatus = 'active' | 'hold' | 'archived';

export interface ProjectData {
  id: string;
  code: string;
  title: string;
  area: string;
  authorName: string;
  team: string[];
  opportunity: string;
  solution: string;
  currentNodeId: string;
  status: ProjectStatus;
  slaDaysLeft?: number;
}

// Mock inicial para popular o Kanban
const initialProjects: ProjectData[] = [
  // Projeto aguardando aprovação inicial no Gate 1
  {
    id: '1', code: '#INC-1042', title: 'Otimização de Perdas Industriais B2B', area: 'Operações B2B',
    authorName: 'Carlos Silva', team: ['Carlos (Gestão)'],
    opportunity: 'Alto índice de desperdício e "sangramento financeiro" na cadeia de manufatura pesada.',
    solution: 'Sistema de IoT e painel de análise para identificar ineficiências operacionais em tempo real.',
    currentNodeId: 'gate-1', status: 'active', slaDaysLeft: 2
  },
  
  // Projeto na fase de escopo preliminar
  {
    id: '2', code: '#INC-1105', title: 'Marketplace de Talentos (IA Conversacional)', area: 'Recursos Humanos',
    authorName: 'Mariana Costa', team: ['Mariana (Produto)', 'Felipe (Engenharia)'],
    opportunity: 'Dificuldade e lentidão em alinhar a experiência de freelancers com as demandas técnicas de clientes.',
    solution: 'Marketplace utilizando agentes de IA e interface de chat para filtrar e conectar freelancers aos clientes rapidamente.',
    currentNodeId: 'stage-1', status: 'active', slaDaysLeft: 12
  },

  // Projeto congelado no Gate 2
  {
    id: '3', code: '#INC-0922', title: 'Prova de Conceito: Criptografia Quântica', area: 'P&D',
    authorName: 'Dr. Roberto Lemos', team: ['Roberto (Física Aplicada)', 'Ana (Segurança)'],
    opportunity: 'Vulnerabilidades de segurança em transmissões de dados corporativos sensíveis.',
    solution: 'Aplicação prática de entrelaçamento quântico para estabelecer um canal de comunicação em tempo real inviolável.',
    currentNodeId: 'gate-2', status: 'hold'
  },

  // Projeto em pleno desenvolvimento (Mão na massa)
  {
    id: '4', code: '#INC-0850', title: 'App de Moda: Swipe & Virtual Try-On', area: 'E-commerce',
    authorName: 'Julia Mendes', team: ['Julia (UX/UI)', 'Lucas (Visão Computacional)', 'Sofia (Marketing)'],
    opportunity: 'Alta taxa de devolução no e-commerce de roupas e dificuldade do usuário visualizar o caimento das peças.',
    solution: 'Aplicativo com interface fluida (estilo swipe) integrado a uma IA que permite ao usuário testar as roupas virtualmente em suas próprias fotos.',
    currentNodeId: 'stage-3', status: 'active', slaDaysLeft: 45
  },

  // Projeto aguardando aprovação técnica no Gate 4
  {
    id: '5', code: '#INC-0799', title: 'Modernização de Análise de Potência', area: 'Engenharia Elétrica',
    authorName: 'Pedro Alves', team: ['Pedro (Eng. Elétrica)', 'Rafael (Software)'],
    opportunity: 'Lentidão no diagnóstico de instabilidades e balanceamento de tensão na rede trifásica industrial.',
    solution: 'Implementação de sensores modulares para cálculos p.u. dinâmicos automáticos em configurações estrela/triângulo.',
    currentNodeId: 'gate-4', status: 'active', slaDaysLeft: 1
  },

  // Projeto já validado e em fase de Lançamento
  {
    id: '6', code: '#INC-0612', title: 'Transição SaaS: Modelo de Assinatura', area: 'Financeiro',
    authorName: 'Camila Santos', team: ['Camila (Estratégia)', 'João (Vendas)'],
    opportunity: 'Receita recorrente instável no atual modelo de negócio baseado exclusivamente em comissionamento.',
    solution: 'Transição escalonada do modelo de negócio para assinaturas mensais fixas com tiers de acesso (Freemium ao Pro).',
    currentNodeId: 'stage-5', status: 'active'
  }
];

interface ProjectContextType {
  projects: ProjectData[];
  addProject: (p: Omit<ProjectData, 'id' | 'code' | 'status'>) => void;
  updateProject: (id: string, updates: Partial<ProjectData>) => void;
  deleteProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectData[]>(initialProjects);

  const addProject = (data: Omit<ProjectData, 'id' | 'code' | 'status'>) => {
    const newProject: ProjectData = {
      ...data,
      id: Date.now().toString(),
      code: `#INC-${Math.floor(Math.random() * 9000) + 1000}`,
      status: 'active'
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: string, updates: Partial<ProjectData>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error('useProject deve ser usado dentro de um ProjectProvider');
  return ctx;
};