import React, { useState } from 'react';
import Layout from '@/components/Layout';
import * as S from './styles';
import { usePipeline } from '@/hook/PipelineContext';
import ProjectCard, { ProjectData } from '@/components/ProjectCard';

// 🚀 MOCK DE PROJETOS (Apenas para visualizar o Kanban funcionando)
const mockProjects: ProjectData[] = [
  { id: '1', code: '#INC-1042', title: 'Protótipo de Drone de Entrega Next-Gen', area: 'Logística', budget: '$50k - $100k', currentNodeId: 'stage-0', slaDaysLeft: 2 },
  { id: '2', code: '#INC-0988', title: 'Roteamento Automatizado de Armazém', area: 'Logística', budget: '$20k', currentNodeId: 'gate-1' },
  { id: '3', code: '#INC-0920', title: 'IA de Manutenção Preditiva', area: 'TI/Sistemas', budget: '$150k', currentNodeId: 'stage-0', slaDaysLeft: 14 },
];

export default function KanbanTemplate() {
  const { pipeline } = usePipeline();
  const [projects] = useState<ProjectData[]>(mockProjects);

  const handleViewDetails = (projectId: string) => {
    alert(`Abrir modal de detalhes do projeto: ${projectId}`);
  };

  return (
    <Layout>
      <S.Page>
        <S.Header>
          <div>
            <h1>Pipeline de Projetos</h1>
            <p>Gerencie o fluxo de iniciativas através das etapas de inovação.</p>
          </div>
        </S.Header>

        <S.Board>
          {pipeline.map(node => {
            // Filtra os projetos que estão exatamente neste nó (Stage ou Gate)
            const columnProjects = projects.filter(p => p.currentNodeId === node.id);

            return (
              <S.Column key={node.id} $type={node.type}>
                <S.ColumnHeader $type={node.type}>
                  <span className="badge">
                    {node.type === 'stage' ? 'Estágio de Trabalho' : 'Ponto de Decisão'}
                  </span>
                  <h3>{node.title}</h3>
                  <div className="meta">
                    {node.type === 'stage' ? (
                      <>
                        <span>⏳ {node.estimatedDays} dias est.</span>
                        <span>📋 {node.deliverables.length} entregas</span>
                      </>
                    ) : (
                      <>
                        <span>👥 {node.gatekeepers.length} aprovadores</span>
                        <span>⚖️ {node.criteria.length} critérios</span>
                      </>
                    )}
                  </div>
                </S.ColumnHeader>
                
                <S.ColumnBody>
                  {columnProjects.map(project => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onViewDetails={handleViewDetails} 
                    />
                  ))}
                  {columnProjects.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginTop: '2rem' }}>
                      Nenhum projeto nesta etapa
                    </div>
                  )}
                </S.ColumnBody>
              </S.Column>
            );
          })}
        </S.Board>
      </S.Page>
    </Layout>
  );
}