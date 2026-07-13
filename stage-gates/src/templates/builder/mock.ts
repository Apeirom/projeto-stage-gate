// src/pages/builder/mock.ts

export type NodeType = 'stage' | 'gate'

export interface PipelineNode {
  id: string
  type: NodeType
  title: string
  description: string
  locked: boolean
}

export const initialPipeline: PipelineNode[] = [
  {
    id: 'stage-0',
    type: 'stage',
    title: 'Stage 0',
    description: 'Preenchimento do Formulário',
    locked: true
  },
  {
    id: 'gate-1',
    type: 'gate',
    title: 'Gate 1',
    description: 'Aprovação do Gestor da Área',
    locked: true
  }
]
