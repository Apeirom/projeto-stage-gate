import React from 'react';
import { Eye, Clock, Snowflake } from 'lucide-react';
import * as S from './styles';
import { ProjectData } from '@/hook/ProjectContext';

interface ProjectCardProps {
  project: ProjectData;
  onViewDetails: (id: string) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const isHold = project.status === 'hold';

  return (
    <S.Card style={{ opacity: isHold ? 0.75 : 1 }}>
      <S.Header>
        <span className="code">{project.code}</span>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {isHold && <S.StatusBadge $hold><Snowflake size={12}/> Congelado</S.StatusBadge>}
          <button onClick={() => onViewDetails(project.id)} title="Ver Detalhes do Projeto">
            <Eye size={16} />
          </button>
        </div>
      </S.Header>
      
      <S.Title>{project.title}</S.Title>
      
      <S.Meta>
        <span className="area">{project.area}</span>
      </S.Meta>

      {project.slaDaysLeft !== undefined && (
        <S.Footer $danger={project.slaDaysLeft <= 2}>
          <Clock size={14} /> SLA: {project.slaDaysLeft} dias restantes
        </S.Footer>
      )}
    </S.Card>
  );
}