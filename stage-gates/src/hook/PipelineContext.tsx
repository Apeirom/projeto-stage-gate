// src/context/PipelineContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PipelineNode, initialPipeline } from '@/templates/builder/mock';

interface PipelineContextType {
  pipeline: PipelineNode[];
  addNode: (type: 'stage' | 'gate') => void;
  removeLastNode: () => void;
  updateNode: (id: string, updates: Partial<PipelineNode>) => void;
}

const PipelineContext = createContext<PipelineContextType | undefined>(undefined);

export const PipelineProvider = ({ children }: { children: ReactNode }) => {
  const [pipeline, setPipeline] = useState<PipelineNode[]>(initialPipeline);

  const addNode = (type: 'stage' | 'gate') => {
    const count = pipeline.filter(n => n.type === type).length;
    const isStage = type === 'stage';
    
    let newNode: PipelineNode;

    if (isStage) {
      newNode = {
        id: `stage-${Date.now()}`,
        type: 'stage',
        title: `Stage ${count}`,
        description: 'Nova etapa de trabalho do fluxo',
        locked: false,
        deliverables: [],
        estimatedDays: 10, // valor padrão inicial
      };
    } else {
      newNode = {
        id: `gate-${Date.now()}`,
        type: 'gate',
        title: `Gate ${count + 1}`,
        description: 'Ponto de decisão e aprovação',
        locked: false,
        gatekeepers: [],
        criteria: [],
      };
    }

    setPipeline([...pipeline, newNode]);
  };

  const removeLastNode = () => {
    if (pipeline.length > 2) setPipeline(pipeline.slice(0, -1));
  };

  const updateNode = (id: string, updates: Partial<PipelineNode>) => {
    setPipeline(prev => 
      prev.map(node => {
        if (node.id === id) {
          // União discriminada precisa de cast explícito no retorno
          return { ...node, ...updates } as PipelineNode;
        }
        return node;
      })
    );
  };

  return (
    <PipelineContext.Provider value={{ pipeline, addNode, removeLastNode, updateNode }}>
      {children}
    </PipelineContext.Provider>
  );
};

export const usePipeline = () => {
  const context = useContext(PipelineContext);
  if (!context) throw new Error('usePipeline deve ser usado dentro de um PipelineProvider');
  return context;
};