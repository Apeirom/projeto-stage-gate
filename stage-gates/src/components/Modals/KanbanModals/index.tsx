import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Play, Pause, Trash2, RotateCcw, UploadCloud, CheckCircle2, X, AlertOctagon, HelpCircle } from 'lucide-react';
import * as M from '@/components/Modals/ModalsStyles'; // ou ModalsStyles se você salvou assim
import { ProjectData } from '@/hook/ProjectContext';
import { StageNode, GateNode } from '@/templates/builder/mock';

// === MODAL DE JUSTIFICATIVA (Kill / Recycle) ===
// (Mantenha o seu código exatamente como estava)
export const JustificationModal = ({ isOpen, type, onClose, onConfirm }: { isOpen: boolean, type: 'kill' | 'recycle', onClose: () => void, onConfirm: (reason: string) => void }) => {
  const [reason, setReason] = useState('');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <M.Overlay style={{ zIndex: 1000 }}>
      <M.Content style={{ width: '400px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
          <X size={20} />
        </button>
        <h3 style={{ color: type === 'kill' ? '#ef4444' : '#f97316', marginTop: 0 }}>
          {type === 'kill' ? 'Arquivar Projeto (Kill)' : 'Reciclar Projeto'}
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
          {type === 'kill' 
            ? 'Esta ação cancelará o projeto. A equipe será notificada.' 
            : 'O projeto retornará para a etapa anterior para refatoração. A equipe será notificada.'}
        </p>
        <M.FormGroup>
          <label>Justificativa Obrigatória</label>
          <textarea value={reason} onChange={e => setReason(e.target.value)} required />
        </M.FormGroup>
        <M.Actions>
          <M.Button onClick={onClose}>Cancelar</M.Button>
          <M.Button $primary style={{ background: type === 'kill' ? '#ef4444' : '#f97316' }} onClick={() => onConfirm(reason)}>
            Confirmar Ação
          </M.Button>
        </M.Actions>
      </M.Content>
    </M.Overlay>,
    document.body
  );
};

// === PAINEL DE INFORMAÇÕES COMPARTILHADO ===
// (Mantenha o seu código exatamente como estava)
const ProjectInfoPanel = ({ project }: { project: ProjectData }) => (
  <div style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '1.25rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.95rem', color: '#334155' }}>
    <p style={{ margin: '0 0 0.5rem 0' }}><strong style={{ color: '#0f172a' }}>Autor:</strong> {project.authorName} &nbsp;|&nbsp; <strong style={{ color: '#0f172a' }}>Área:</strong> {project.area}</p>
    <p style={{ margin: '0 0 0.75rem 0' }}><strong style={{ color: '#0f172a' }}>Equipe:</strong> {project.team.join(', ')}</p>
    <hr style={{ border: 'none', borderTop: '1px solid #cbd5e1', margin: '0.75rem 0' }}/>
    <p style={{ margin: '0.75rem 0 0.5rem 0' }}><strong style={{ color: '#0f172a' }}>Problema/Oportunidade:</strong> {project.opportunity}</p>
    <p style={{ margin: 0 }}><strong style={{ color: '#0f172a' }}>Solução Proposta:</strong> {project.solution}</p>
  </div>
);

// === MODAL DE STAGE ===
// 👇 Adicionada a propriedade `onSubmit`
export const KanbanStageModal = ({ isOpen, onClose, project, stage, onSubmit }: { isOpen: boolean, onClose: () => void, project: ProjectData, stage: StageNode, onSubmit: () => void }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <M.Overlay>
      <M.Content style={{ width: '700px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
          <X size={24} />
        </button>

        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingRight: '2rem' }}>
          {project.code} - {project.title}
          <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'normal', whiteSpace: 'nowrap' }}>Prazo: {stage.estimatedDays} dias</span>
        </h2>
        
        <ProjectInfoPanel project={project} />

        <h4 style={{ margin: '1.5rem 0 0.5rem 0', color: '#1e293b' }}>Entregas Necessárias nesta Fase:</h4>
        <ul style={{ paddingLeft: '1.5rem', color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          {stage.deliverables.map((d, i) => <li key={i}>{d}</li>)}
        </ul>

        <M.FormGroup>
          <label>Submissão de Resultados (Relatório)</label>
          <textarea placeholder="Descreva os resultados alcançados nesta fase..." />
        </M.FormGroup>

        <M.FormGroup>
          <label>Anexar Documentos</label>
          <div style={{ border: '2px dashed #cbd5e1', padding: '2rem', textAlign: 'center', borderRadius: '8px', color: '#64748b', cursor: 'pointer', background: '#f8fafc' }}>
            <UploadCloud style={{ margin: '0 auto 0.5rem auto' }} />
            Clique para fazer upload dos arquivos requeridos
          </div>
        </M.FormGroup>

        <M.Actions>
          <M.Button onClick={onClose}>Fechar</M.Button>
          {/* 👇 Botão agora aciona o onSubmit que avança a fase */}
          <M.Button $primary onClick={onSubmit}>Submeter Trabalho para Aprovação</M.Button>
        </M.Actions>
      </M.Content>
    </M.Overlay>,
    document.body
  );
};

// === MODAL DE GATE ===
// 👇 Adicionado `isFirstGate` e os novos tipos de ação
export const KanbanGateModal = ({ isOpen, onClose, project, gate, onAction, isFirstGate }: { isOpen: boolean, onClose: () => void, project: ProjectData, gate: GateNode, onAction: (action: 'go' | 'hold' | 'recycle' | 'kill' | 'wrong_area' | 'radical') => void, isFirstGate: boolean }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <M.Overlay>
      <M.Content style={{ width: '700px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
          <X size={24} />
        </button>

        <h2 style={{ margin: 0 }}>Comitê: {gate.title}</h2>
        <h3 style={{ color: '#3b0764', marginBottom: '1.5rem', marginTop: '0.25rem' }}>{project.code} - {project.title}</h3>
        
        <ProjectInfoPanel project={project} />

        {!isFirstGate && (
          <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <h4 style={{ color: '#065f46', margin: '0 0 0.5rem 0' }}>Entregas Concluídas pela Equipe:</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#047857' }}>
              <CheckCircle2 size={16} /> Relatório de Viabilidade anexado.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#047857', marginTop: '0.25rem' }}>
              <CheckCircle2 size={16} /> Business Case aprovado.
            </div>
          </div>
        )}

        <h4 style={{ color: '#1e293b', marginBottom: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>Decisão do Comitê:</h4>
        
        {/* 👇 Renderização Condicional dos Botões baseada em ser ou não o Primeiro Gate */}
        {isFirstGate ? (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <M.Button onClick={() => onAction('go')} style={{ flex: 1, background: '#22c55e', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={18} /> GO (Aprovar)
            </M.Button>
            <M.Button onClick={() => onAction('wrong_area')} style={{ flex: 1, background: '#64748b', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <HelpCircle size={18} /> Outra Área
            </M.Button>
            <M.Button onClick={() => onAction('radical')} style={{ flex: 1, background: '#8b5cf6', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <AlertOctagon size={18} /> Inovação Radical
            </M.Button>
            <M.Button onClick={() => onAction('kill')} style={{ flex: 1, background: '#ef4444', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Trash2 size={18} /> Rejeitar
            </M.Button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <M.Button onClick={() => onAction('go')} style={{ flex: 1, background: '#22c55e', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={18} /> GO (Aprovar)
            </M.Button>
            <M.Button onClick={() => onAction('hold')} style={{ flex: 1, background: '#eab308', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Pause size={18} /> HOLD (Congelar)
            </M.Button>
            <M.Button onClick={() => onAction('recycle')} style={{ flex: 1, background: '#f97316', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw size={18} /> RECICLAR
            </M.Button>
            <M.Button onClick={() => onAction('kill')} style={{ flex: 1, background: '#ef4444', color: 'white', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Trash2 size={18} /> KILL (Cancelar)
            </M.Button>
          </div>
        )}
      </M.Content>
    </M.Overlay>,
    document.body
  );
};