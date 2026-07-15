import React, { useState } from 'react';
import { Lock, Settings2, Trash2 } from 'lucide-react';
import * as S from './styles';
import { GateNode } from '@/templates/builder/mock';
import { usePipeline } from '@/hook/PipelineContext';
import GateConfigModal from '@/components/Modals/NodeModels/GateConfigModal';

interface GateCardProps {
  node: GateNode;
  isLast: boolean;
  onRemove: () => void;
}

export default function GateCard({ node, isLast, onRemove }: GateCardProps) {
  const { updateNode } = usePipeline();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <S.Card>
        <S.Badge>Ponto de Decisão</S.Badge>
        <S.Title>{node.title}</S.Title>
        <S.Description>{node.description}</S.Description>
        
        {/* Metadados rápidos do Gate na interface */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', marginBottom: '1rem', fontSize: '0.8rem', color: '#2563eb', borderTop: '1px solid #dbeafe', paddingTop: '0.75rem', width: '100%', justifyContent: 'center' }}>
          <span>👥 {node.gatekeepers?.length || 0} aprovadores</span>
          <span>⚖️ {node.criteria?.length || 0} critérios</span>
        </div>

        <S.Actions style={{ marginTop: 0 }}>
          <S.IconButton title="Configurar Critérios do Gate" onClick={() => setIsModalOpen(true)}>
            <Settings2 size={18} />
          </S.IconButton>

          {node.locked ? (
            <S.IconButton disabled title="Gate Obrigatório do Sistema">
              <Lock size={18} />
            </S.IconButton>
          ) : (
            isLast && (
              <S.IconButton $danger onClick={onRemove} title="Excluir Gate">
                <Trash2 size={18} />
              </S.IconButton>
            )
          )}
        </S.Actions>
      </S.Card>

      <GateConfigModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        node={node} 
        onSave={updateNode} 
      />
    </>
  );
}