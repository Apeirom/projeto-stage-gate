import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Layout from '@/components/Layout';
import * as S from './styles';
import { usePipeline } from '@/hook/PipelineContext';
import { useProject, ProjectData } from '@/hook/ProjectContext';
import ProjectCard from '@/components/ProjectCard';
import { KanbanStageModal, KanbanGateModal, JustificationModal } from '@/components/Modals/KanbanModals';
import { StageNode, GateNode } from '@/templates/builder/mock';

export default function KanbanTemplate() {
  const { pipeline } = usePipeline();
  const { projects, updateProject } = useProject();

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeModal, setActiveModal] = useState<'stage' | 'gate' | null>(null);
  const [justificationAction, setJustificationAction] = useState<'kill' | 'recycle' | null>(null);

  const handleViewDetails = (projectId: string) => {
    const proj = projects.find(p => p.id === projectId);
    if (!proj) return;
    
    setSelectedProject(proj);
    const node = pipeline.find(n => n.id === proj.currentNodeId);
    
    if (node?.type === 'stage') setActiveModal('stage');
    else if (node?.type === 'gate') setActiveModal('gate');
  };

  const handleStageSubmit = () => {
    if (!selectedProject) return;

    const currentIndex = pipeline.findIndex(n => n.id === selectedProject.currentNodeId);
    const nextNode = pipeline[currentIndex + 1];

    if (nextNode) {
      updateProject(selectedProject.id, { currentNodeId: nextNode.id, status: 'active' });
      toast.success(`Trabalho submetido! Avançou para: ${nextNode.title}`);
    } else {
      toast.success('Trabalho submetido com sucesso!');
    }
    setActiveModal(null);
  };

  const handleGateAction = (action: 'go' | 'hold' | 'recycle' | 'kill' | 'wrong_area' | 'radical') => {
    if (!selectedProject) return;

    const currentIndex = pipeline.findIndex(n => n.id === selectedProject.currentNodeId);

    if (action === 'go') {
      const nextNode = pipeline[currentIndex + 1];
      if (nextNode) {
        updateProject(selectedProject.id, { currentNodeId: nextNode.id, status: 'active' });
        toast.success(`Projeto aprovado! Avançou para: ${nextNode.title}`);
      } else {
        toast.success('O projeto concluiu todas as etapas com sucesso! 🎉', { duration: 5000 });
      }
      setActiveModal(null);
    } 
    else if (action === 'hold') {
      updateProject(selectedProject.id, { status: 'hold' });
      toast('Projeto congelado (Hold).', { icon: '❄️' });
      setActiveModal(null);
    } 
    else if (action === 'wrong_area') {
      updateProject(selectedProject.id, { status: 'archived' });
      toast('Iniciativa encaminhada para gestor de portifólio.');
      setActiveModal(null);
    }
    else if (action === 'radical') {
      updateProject(selectedProject.id, { status: 'archived' });
      toast('Iniciativa encaminhada para gestor de portifólio.', { icon: '🚀' });
      setActiveModal(null);
    }
    else {
      setJustificationAction(action as 'kill' | 'recycle');
    }
  };

  const handleConfirmJustification = (reason: string) => {
    if (!selectedProject || !justificationAction) return;

    if (justificationAction === 'kill') {
      updateProject(selectedProject.id, { status: 'archived' });
      toast.error('Projeto arquivado com sucesso. Equipe notificada.');
    } 
    else if (justificationAction === 'recycle') {
      const currentIndex = pipeline.findIndex(n => n.id === selectedProject.currentNodeId);
      const prevNode = pipeline[currentIndex - 1];
      if (prevNode) {
        updateProject(selectedProject.id, { currentNodeId: prevNode.id, status: 'active' });
        toast.success('Projeto retornado para refatoração. Equipe notificada.');
      }
    }

    setJustificationAction(null);
    setActiveModal(null);
  };

  const selectedNode = selectedProject ? pipeline.find(n => n.id === selectedProject.currentNodeId) : null;
  const visibleProjects = projects.filter(p => p.status !== 'archived');
  
  // Encontra o ID do primeiro Gate para a lógica dos botões
  const firstGateId = pipeline.find(n => n.type === 'gate')?.id;

  // 👇 NOVA LÓGICA: Filtra o pipeline para NÃO EXIBIR o Stage 0 no Kanban
  const visiblePipeline = pipeline.filter(node => node.id !== 'stage-0');

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
          {visiblePipeline.map(node => {
            const columnProjects = visibleProjects.filter(p => p.currentNodeId === node.id);

            return (
              <S.Column key={node.id} $type={node.type}>
                <S.ColumnHeader $type={node.type}>
                  <span className="badge">
                    {node.type === 'stage' ? 'Estágio de Trabalho' : 'Ponto de Decisão'}
                  </span>
                  <h3>{node.title}</h3>
                </S.ColumnHeader>
                
                <S.ColumnBody>
                  {columnProjects.map(project => (
                    <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
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

      {selectedProject && selectedNode?.type === 'stage' && (
        <KanbanStageModal 
          isOpen={activeModal === 'stage'} 
          onClose={() => setActiveModal(null)} 
          project={selectedProject} 
          stage={selectedNode as StageNode} 
          onSubmit={handleStageSubmit}
        />
      )}

      {selectedProject && selectedNode?.type === 'gate' && (
        <KanbanGateModal 
          isOpen={activeModal === 'gate' && justificationAction === null} 
          onClose={() => setActiveModal(null)} 
          project={selectedProject} 
          gate={selectedNode as GateNode} 
          onAction={handleGateAction}
          isFirstGate={selectedNode.id === firstGateId}
        />
      )}

      <JustificationModal 
        isOpen={justificationAction !== null} 
        type={justificationAction!} 
        onClose={() => setJustificationAction(null)} 
        onConfirm={handleConfirmJustification} 
      />
    </Layout>
  );
}