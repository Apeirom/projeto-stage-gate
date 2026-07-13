import React from 'react';
import { Lock, Settings2, Trash2 } from 'lucide-react';
import * as S from './styles';
import { PipelineNode } from '@/templates/builder/mock';

interface GateCardProps {
  node: PipelineNode;
  isLast: boolean;
  onRemove: () => void;
}

export default function GateCard({ node, isLast, onRemove }: GateCardProps) {
  return (
    <S.Card>
      <S.Badge>Ponto de Decisão</S.Badge>
      <S.Title>{node.title}</S.Title>
      <S.Description>{node.description}</S.Description>
      
      <S.Actions>
        {/* Botão de configuração SEMPRE visível */}
        <S.IconButton title="Configurar Critérios do Gate">
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
  );
}