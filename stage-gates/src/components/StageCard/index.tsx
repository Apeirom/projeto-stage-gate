import React from 'react';
import { Lock, Settings2, Trash2 } from 'lucide-react';
import * as S from './styles';
import { PipelineNode } from '@/templates/builder/mock';

interface StageCardProps {
  node: PipelineNode;
  isLast: boolean;
  onRemove: () => void;
}

export default function StageCard({ node, isLast, onRemove }: StageCardProps) {
  return (
    <S.Card>
      <S.Badge>Trabalho Ativo</S.Badge>
      <S.Title>{node.title}</S.Title>
      <S.Description>{node.description}</S.Description>
      
      <S.Actions>
        {/* Botão de configuração SEMPRE visível */}
        <S.IconButton title="Configurar Stage">
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
  );
}