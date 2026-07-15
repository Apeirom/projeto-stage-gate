import React, { useState } from 'react';
import { Lock, Settings2, Trash2 } from 'lucide-react';
import * as S from './styles';
import { StageNode } from '@/templates/builder/mock';
import { usePipeline } from '@/hook/PipelineContext'
import StageConfigModal from '@/components/Modals/NodeModels/StageConfigModal';

interface StageCardProps {
  node: StageNode;
  isLast: boolean;
  onRemove: () => void;
}

export default function StageCard({ node, isLast, onRemove }: StageCardProps) {
  const { updateNode } = usePipeline();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <S.Card>
        <S.Badge>Trabalho Ativo</S.Badge>
        <S.Title>{node.title}</S.Title>
        <S.Description>{node.description}</S.Description>
        
        {/* Metadados rápidos do Stage na interface */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', marginBottom: '1rem', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
          <span>⏳ {node.estimatedDays || 0} dias</span>
          <span>📋 {node.deliverables?.length || 0} entregas</span>
        </div>

      <S.Actions style={{ marginTop: 0 }}>
        <S.IconButton title="Configurar Stage" onClick={() => setIsModalOpen(true)}>
          <Settings2 size={18} />
        </S.IconButton>

          {node.locked ? (
            <S.IconButton disabled title="Etapa Obrigatória do Sistema">
              <Lock size={18} />
            </S.IconButton>
          ) : (
            isLast && (
              <S.IconButton $danger onClick={onRemove} title="Excluir Stage">
                <Trash2 size={18} />
              </S.IconButton>
            )
          )}
        </S.Actions>
      </S.Card>

      <StageConfigModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        node={node} 
        onSave={updateNode} 
      />
    </>
  );
}