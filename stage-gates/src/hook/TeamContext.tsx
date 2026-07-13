import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Role = 'Líder de Área' | 'Diretoria' | 'Coordenador de Portfólio' | 'Membro';

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  areaId: string | null; // null se não estiver vinculado a área
  role: Role;
}

export interface Area {
  id: string;
  name: string;
}

interface TeamContextType {
  members: TeamMember[];
  areas: Area[];
  addArea: (name: string) => void;
  addMember: (member: Omit<TeamMember, 'id'>) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [areas, setAreas] = useState<Area[]>([
    { id: '1', name: 'Logística' },
    { id: '2', name: 'Engenharia & R&D' }
  ]);

  const [members, setMembers] = useState<TeamMember[]>([
    { id: '1', name: 'Lucas Aguiar', email: 'lucas@empresa.com', areaId: '1', role: 'Líder de Área' }
  ]);

  const addArea = (name: string) => setAreas([...areas, { id: Date.now().toString(), name }]);
  const addMember = (m: Omit<TeamMember, 'id'>) => setMembers([...members, { ...m, id: Date.now().toString() }]);

  return (
    <TeamContext.Provider value={{ members, areas, addArea, addMember }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext)!;