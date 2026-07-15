// src/templates/builder/mock.ts

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
  deliverables: string[]
  estimatedDays: number
}

// 3. Propriedades exclusivas de um GATE
export interface GateNode extends BaseNode {
  type: 'gate'
  gatekeepers: string[]
  criteria: string[]
}

// 4. O PipelineNode agora é a união inteligente das duas interfaces
export type PipelineNode = StageNode | GateNode

export const initialPipeline: PipelineNode[] = [
  // --- NASCIMENTO DA IDEIA ---
  {
    id: 'stage-0',
    type: 'stage',
    title: 'Stage 0',
    description: 'Preenchimento do Formulário',
    locked: true,
    deliverables: ['Escopo inicial preenchido', 'Descrição do projeto'],
    estimatedDays: 1
  },
  {
    id: 'gate-1',
    type: 'gate',
    title: 'Gate 1: Idea Screen',
    description: 'Aprovação inicial do Gestor da Área',
    locked: true,
    gatekeepers: ['Gestor da área', 'Coordenador de Portfólio'],
    criteria: ['Alinhamento Estratégico', 'Viabilidade Inicial']
  },

  // --- INVESTIGAÇÃO RÁPIDA ---
  {
    id: 'stage-1',
    type: 'stage',
    title: 'Stage 1: Escopo Preliminar',
    description: 'Investigação rápida de viabilidade técnica e de mercado.',
    locked: false,
    deliverables: [
      'Análise de Mercado Preliminar',
      'Avaliação Técnica Básica',
      'Mapeamento de Riscos Iniciais'
    ],
    estimatedDays: 15
  },
  {
    id: 'gate-2',
    type: 'gate',
    title: 'Gate 2: Filtro de Escopo',
    description:
      'Decisão se a ideia justifica o esforço de criar um Business Case detalhado.',
    locked: false,
    gatekeepers: ['Diretor de Inovação', 'Líder Técnico'],
    criteria: [
      'Mercado potencial atrativo',
      'Viabilidade técnica confirmada (sem bloqueios óbvios)'
    ]
  },

  // --- PLANEJAMENTO DETALHADO ---
  {
    id: 'stage-2',
    type: 'stage',
    title: 'Stage 2: Business Case',
    description:
      'Construção do plano de negócios, modelagem financeira e cronograma.',
    locked: false,
    deliverables: [
      'Plano de Negócios Detalhado',
      'Projeção Financeira (ROI/TIR)',
      'Cronograma Oficial do Projeto'
    ],
    estimatedDays: 10
  },
  {
    id: 'gate-3',
    type: 'gate',
    title: 'Gate 3: Decisão de Desenvolvimento',
    description:
      'Comitê executivo para liberação de verba pesada e recursos (Go to Dev).',
    locked: false,
    gatekeepers: ['CFO', 'Diretoria Executiva', 'Sponsor do Projeto'],
    criteria: [
      'ROI Projetado > 15%',
      'Orçamento CAPEX aprovado',
      'Recursos humanos garantidos'
    ]
  },

  // --- EXECUÇÃO ---
  {
    id: 'stage-3',
    type: 'stage',
    title: 'Stage 3: Desenvolvimento',
    description:
      'Execução do projeto, desenvolvimento da solução ou criação do protótipo físico.',
    locked: false,
    deliverables: [
      'Protótipo Funcional (MVP)',
      'Arquitetura Finalizada',
      'Testes Unitários Concluídos'
    ],
    estimatedDays: 60
  },
  {
    id: 'gate-4',
    type: 'gate',
    title: 'Gate 4: Decisão de Teste',
    description:
      'Verificação de qualidade antes de expor a solução para o cliente ou operação.',
    locked: false,
    gatekeepers: ['Líder de QA', 'Product Manager'],
    criteria: [
      'Zero Bugs Críticos ou Bloqueantes',
      'Escopo original 100% atendido'
    ]
  },

  // --- VALIDAÇÃO ---
  {
    id: 'stage-4',
    type: 'stage',
    title: 'Stage 4: Teste e Validação',
    description: 'Testes em ambiente real (Piloto) com usuários finais.',
    locked: false,
    deliverables: [
      'Relatório do Projeto Piloto',
      'Feedback Consolidado de Usuários',
      'Plano de Mitigação Final'
    ],
    estimatedDays: 45
  },
  {
    id: 'gate-5',
    type: 'gate',
    title: 'Gate 5: Decisão de Lançamento',
    description:
      'Última aprovação antes do roll-out comercial ou implementação global.',
    locked: false,
    gatekeepers: ['CEO', 'Diretor de Marketing (CMO) / Operações'],
    criteria: [
      'Aceitação do Piloto > 80%',
      'Plano de Go-to-Market finalizado',
      'Compliance e Jurídico aprovados'
    ]
  },

  // --- FINALIZAÇÃO ---
  {
    id: 'stage-5',
    type: 'stage',
    title: 'Stage 5: Lançamento',
    description:
      'Roll-out da solução e monitoramento dos primeiros resultados.',
    locked: false,
    deliverables: [
      'Campanha Ativa / Solução Implantada',
      'Treinamento de Equipes Realizado',
      'Relatório de Performance (Mês 1)'
    ],
    estimatedDays: 60
  }
]
