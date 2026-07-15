import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import * as S from './styles'
import { 
  FolderKanban, 
  AlertCircle, 
  Activity,
  PauseCircle,
  ArrowRight
} from 'lucide-react';
import { useProject } from '@/hook/ProjectContext';
import { usePipeline } from '@/hook/PipelineContext';

export default function DashboardTemplate() {
  const router = useRouter();
  const { projects } = useProject();
  const { pipeline } = usePipeline();

  // --- CÁLCULOS DINÂMICOS DO DASHBOARD ---
  
  // 1. Contagem de Projetos por Status
  const activeProjects = projects.filter(p => p.status === 'active');
  const holdProjects = projects.filter(p => p.status === 'hold');
  
  // 2. Contagem de Áreas Únicas envolvidas em projetos ativos
  const uniqueAreas = new Set(activeProjects.map(p => p.area)).size;

  // 3. Descobrir projetos que estão aguardando aprovação (Parados em um Gate)
  const gates = pipeline.filter(node => node.type === 'gate');
  const gateIds = gates.map(g => g.id);
  
  const pendingApprovals = activeProjects.filter(p => gateIds.includes(p.currentNodeId));

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <h1>Saúde do Portfólio</h1>
          <p>Visão Geral de Iniciativas • Tempo Real</p>
        </S.Header>

        <S.MetricsGrid>
          <S.MetricCard>
            <div className="title-row">
              <span>Projetos Ativos</span>
              <FolderKanban size={20} />
            </div>
            <div className="value">{activeProjects.length}</div>
            <S.Badge>Em andamento</S.Badge>
          </S.MetricCard>
          
          <S.MetricCard>
            <div className="title-row">
              <span>Aprovações Pendentes</span>
              <AlertCircle size={20} />
            </div>
            <div className="value">{pendingApprovals.length}</div>
            <S.Badge $negative={pendingApprovals.length > 3}>Em Comitês</S.Badge>
          </S.MetricCard>
          
          <S.MetricCard>
            <div className="title-row">
              <span>Projetos Congelados</span>
              <PauseCircle size={20} />
            </div>
            <div className="value">{holdProjects.length}</div>
            <S.Badge $neutral>Status: Hold</S.Badge>
          </S.MetricCard>
          
          <S.MetricCard>
            <div className="title-row">
              <span>Áreas Envolvidas</span>
              <Activity size={20} />
            </div>
            <div className="value">{uniqueAreas}</div>
            <S.Badge $neutral>Times multidisciplinares</S.Badge>
          </S.MetricCard>
        </S.MetricsGrid>

        <S.SectionTitle>Aprovações Pendentes em Comitês (Gates)</S.SectionTitle>
        <S.PendingGrid>
          
          {pendingApprovals.length === 0 ? (
            <div style={{ color: '#64748b', padding: '2rem 0' }}>
              Nenhum projeto aguardando aprovação no momento.
            </div>
          ) : (
            pendingApprovals.map(project => {
              // Descobre o nome do Gate onde este projeto está parado
              const currentGate = gates.find(g => g.id === project.currentNodeId);
              const isUrgent = project.slaDaysLeft !== undefined && project.slaDaysLeft <= 2;

              return (
                <S.ApprovalCard key={project.id}>
                  <div className="header">
                    <h3>{project.code} - {project.title}</h3>
                    {isUrgent ? (
                      <S.Badge $negative>SLA Crítico</S.Badge>
                    ) : (
                      <S.Badge $neutral>{currentGate?.title || 'Gate'}</S.Badge>
                    )}
                  </div>
                  
                  {/* Trunca a oportunidade para não quebrar o layout */}
                  <p>{project.opportunity.length > 100 ? `${project.opportunity.substring(0, 100)}...` : project.opportunity}</p>
                  
                  <div className="stats">
                    <div className="stat-item">
                      <span>Autor Responsável</span>
                      <strong>{project.authorName}</strong>
                    </div>
                    <div className="stat-item">
                      <span>Área de Origem</span>
                      <strong>{project.area}</strong>
                    </div>
                  </div>
                  
                  <div className="actions">
                    <button 
                      className="btn-approve" 
                      onClick={() => router.push('/kanban')}
                    >
                      Avaliar no Kanban <ArrowRight size={16} />
                    </button>
                  </div>
                </S.ApprovalCard>
              );
            })
          )}

        </S.PendingGrid>
      </S.Container>
    </Layout>
  );
}