import React, { useState } from 'react';
import { ArrowRight, Plus, ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import Layout from '@/components/Layout';
import * as S from './styles';
import { NodeType } from './mock';
import { usePipeline } from '@/hook/PipelineContext';

import StageCard from '@/components/StageCard';
import GateCard from '@/components/GateCard';

export default function Builder() {
  const [zoom, setZoom] = useState(1); 

  const { pipeline, addNode, removeLastNode } = usePipeline();
  const lastNode = pipeline[pipeline.length - 1];
  const nextRequiredType: NodeType = lastNode.type === 'stage' ? 'gate' : 'stage';

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  const handleZoomReset = () => setZoom(1);

  return (
    <Layout>
      <S.Canvas>
        <S.Header>
          <h1>InnovaFlow: Construtor de Pipeline</h1>
        </S.Header>

        <S.ZoomToolbar>
          <S.ZoomButton onClick={handleZoomOut}><ZoomOut size={20} /></S.ZoomButton>
          <S.ZoomLevel>{Math.round(zoom * 100)}%</S.ZoomLevel>
          <S.ZoomButton onClick={handleZoomIn}><ZoomIn size={20} /></S.ZoomButton>
          <S.ZoomButton onClick={handleZoomReset}><Maximize size={18} /></S.ZoomButton>
        </S.ZoomToolbar>

        <S.TransformWrapper $scale={zoom}>
          <S.FlowBoard>
            
            {pipeline.map((node, index) => {
              const isLastItem = index === pipeline.length - 1;
              return (
                <S.NodeContainer key={node.id}>
                  
                  {/* Renderização limpa usando os componentes separados */}
                  {node.type === 'stage' ? (
                    <StageCard node={node} isLast={isLastItem} onRemove={removeLastNode} />
                  ) : (
                    <GateCard node={node} isLast={isLastItem} onRemove={removeLastNode} />
                  )}

                  <ArrowRight color="#94a3b8" size={32} strokeWidth={1.5} />
                </S.NodeContainer>
              );
            })}

            <S.AddButton $type={nextRequiredType} onClick={() => addNode(nextRequiredType)}>
              <Plus size={20} /> Adicionar {nextRequiredType === 'stage' ? 'Stage' : 'Gate'}
            </S.AddButton>

          </S.FlowBoard>
        </S.TransformWrapper>
      </S.Canvas>
    </Layout>
  );
}