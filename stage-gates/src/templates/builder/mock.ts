// src/pages/builder/mock.ts

export type NodeType = 'stage' | 'gate'

// 1. Propriedades que TODOS os nós devem ter
export interface BaseNode {
  id: string
  title: string
  description: string
  locked: boolean
}

// 2. Propriedades exclusivas de um STAGE
export interface StageNode extends BaseNode {
  type: 'stage'
  deliverables: string[] // Usei array de strings para listar várias entregas
  estimatedDays: number
}

// 3. Propriedades exclusivas de um GATE
export interface GateNode extends BaseNode {
  type: 'gate'
  gatekeepers: string[] // IDs ou Nomes de quem vai aprovar
  criteria: string[] // Lista de critérios para avaliação
}

// 4. O PipelineNode agora é a união inteligente das duas interfaces
export type PipelineNode = StageNode | GateNode

export const initialPipeline: PipelineNode[] = [
  {
    id: 'stage-0',
    type: 'stage',
    title: 'Stage 0',
    description: 'Preenchimento do Formulário',
    locked: true,
    deliverables: ['Escopo inicial preenchido', 'Descrição do projeto'],
    estimatedDays: 5
  },
  {
    id: 'gate-1',
    type: 'gate',
    title: 'Gate 1',
    description: 'Aprovação do Gestor da Área',
    locked: true,
    gatekeepers: ['Gestor da área', 'Coordenador de Portfólio'],
    criteria: ['Alinhamento Estratégico', 'Viabilidade Inicial']
  }
]
