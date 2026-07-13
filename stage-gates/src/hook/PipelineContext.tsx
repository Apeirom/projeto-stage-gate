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
    
    const newNode: PipelineNode = {
      id: `${type}-${Date.now()}`,
      type,
      title: `${isStage ? 'Stage' : 'Gate'} ${isStage ? count : count + 1}`,
      description: 'Nova etapa do fluxo',
      locked: false,
    };
    setPipeline([...pipeline, newNode]);
  };

  const removeLastNode = () => {
    if (pipeline.length > 2) setPipeline(pipeline.slice(0, -1));
  };

  const updateNode = (id: string, updates: Partial<PipelineNode>) => {
    setPipeline(prev => prev.map(node => node.id === id ? { ...node, ...updates } : node));
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