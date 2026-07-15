import React from 'react';
import { Eye, Clock } from 'lucide-react';
import * as S from './styles';

export interface ProjectData {
  id: string;
  code: string;
  title: string;
  area: string;
  budget: string;
  currentNodeId: string;
  slaDaysLeft?: number;
}

interface ProjectCardProps {
  project: ProjectData;
  onViewDetails: (id: string) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const isSlaDanger = project.slaDaysLeft !== undefined && project.slaDaysLeft <= 2;

  return (
    <S.Card>
      <S.Header>
        <span className="code">{project.code}</span>
        <button onClick={() => onViewDetails(project.id)} title="Ver Detalhes">
          <Eye size={16} />
        </button>
      </S.Header>
      
      <S.Title>{project.title}</S.Title>
      
      <S.Meta>
        <span className="area">{project.area}</span>
        <span className="budget">{project.budget}</span>
      </S.Meta>

      {project.slaDaysLeft !== undefined && (
        <S.Footer $danger={isSlaDanger}>
          <Clock size={14} /> 
          SLA: {project.slaDaysLeft} dias restantes
        </S.Footer>
      )}
    </S.Card>
  );
}