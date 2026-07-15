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
  {
    id: '1', code: '#INC-1042', title: 'Protótipo de Drone de Entrega Next-Gen', area: 'Logística',
    authorName: 'Carlos Silva', team: ['Mariana (Design)', 'João (Engenharia)'],
    opportunity: 'Atrasos em entregas de última milha em áreas urbanas densas.',
    solution: 'Drones autônomos integrados aos caminhões de entrega.',
    currentNodeId: 'stage-0', status: 'active', slaDaysLeft: 2
  },
  {
    id: '2', code: '#INC-0988', title: 'Roteamento Automatizado de Armazém', area: 'Logística',
    authorName: 'Ana Paula', team: ['Felipe (TI)', 'Carla (Operações)'],
    opportunity: 'Tempo excessivo de separação de mercadorias no armazém.',
    solution: 'Software de roteamento por IA para os separadores.',
    currentNodeId: 'gate-1', status: 'active'
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