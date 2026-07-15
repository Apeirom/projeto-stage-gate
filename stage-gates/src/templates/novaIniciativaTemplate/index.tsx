import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { User, Lightbulb, TrendingUp, Save, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import Layout from '@/components/Layout';
import * as S from './styles'
import { useTeam } from '@/hook/TeamContext';
import { useProject } from '@/hook/ProjectContext';
import { usePipeline } from '@/hook/PipelineContext';

export default function NovaIniciativaTemplate() {
  const router = useRouter();
  const { areas } = useTeam();
  const { addProject } = useProject();
  const { pipeline } = usePipeline();

  // === ESTADOS DO FORMULÁRIO ===
  const [authorName, setAuthorName] = useState('');
  const [areaId, setAreaId] = useState('');
  const [title, setTitle] = useState('');
  const [opportunity, setOpportunity] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Encontra o nome real da Área baseada no ID selecionado
    const selectedArea = areas.find(a => a.id === areaId);
    const areaName = selectedArea ? selectedArea.name : 'Geral';

    // 2. Encontra o ID do primeiro Gate do Pipeline (onde o funil começa de verdade)
    const firstGate = pipeline.find(node => node.type === 'gate');
    const firstNodeId = firstGate ? firstGate.id : 'gate-1'; // Fallback de segurança

    // 3. Salva no contexto central de projetos!
    addProject({
      title,
      area: areaName,
      authorName,
      team: [authorName], // Por enquanto a equipe inicial é só o próprio autor da ideia
      opportunity,
      solution,
      currentNodeId: firstNodeId,
    });

    // 4. Notifica o usuário e redireciona
    toast.success('Iniciativa submetida com sucesso! O comitê será notificado.');
    router.push('/kanban');
  };

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <h1>Submissão de Ideia</h1>
          <p>Detalhe sua inovação ou melhoria proposta. Submissões claras e estruturadas ajudam nosso comitê de avaliação a mensurar o impacto e a viabilidade com precisão.</p>
        </S.Header>

        <form onSubmit={handleSubmit}>
          
          {/* SEÇÃO 1: INFORMAÇÕES DO AUTOR */}
          <S.FormSection>
            <S.SectionTitle><User size={20}/> Informações do Autor</S.SectionTitle>
            <S.Grid $cols={2}>
              <S.FormGroup>
                <label>Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Escreva seu nome" 
                  value={authorName}
                  onChange={e => setAuthorName(e.target.value)}
                  required 
                />
              </S.FormGroup>
              <S.FormGroup>
                <label>E-mail Corporativo</label>
                <input type="email" placeholder="nome@empresa.com" required />
              </S.FormGroup>
            </S.Grid>
            <S.FormGroup style={{ marginBottom: 0 }}>
              <label>Área de Atuação</label>
              <select 
                value={areaId} 
                onChange={e => setAreaId(e.target.value)} 
                required
              >
                <option value="" disabled>Selecione a sua área de atuação</option>
                {areas.map(area => (
                  <option key={area.id} value={area.id}>{area.name}</option>
                ))}
              </select>
            </S.FormGroup>
          </S.FormSection>

          {/* SEÇÃO 2: DETALHES DA INICIATIVA */}
          <S.FormSection>
            <S.SectionTitle><Lightbulb size={20}/> Detalhes da Iniciativa</S.SectionTitle>
            <S.FormGroup>
              <label>Título da Ideia</label>
              <input 
                type="text" 
                placeholder="Um título conciso e descritivo" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                required 
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <label>Oportunidade / Problema Identificado</label>
              <textarea 
                placeholder="Descreva a situação atual, pontos de dor ou oportunidade inexplorada..." 
                value={opportunity}
                onChange={e => setOpportunity(e.target.value)}
                required 
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Solução Sugerida</label>
              <textarea 
                placeholder="Como você propõe resolver isso? Seja o mais específico possível..." 
                value={solution}
                onChange={e => setSolution(e.target.value)}
                required 
              />
            </S.FormGroup>

            <S.FormGroup style={{ marginBottom: 0 }}>
              <label>Observações Anteriores</label>
              <textarea placeholder="Você já viu isso ser implementado em outro lugar? (Interno ou externo)" />
            </S.FormGroup>
          </S.FormSection>

          {/* SEÇÃO 3: AVALIAÇÃO DE IMPACTO (mantida para a UI) */}
          <S.FormSection>
            <S.SectionTitle><TrendingUp size={20}/> Avaliação de Impacto</S.SectionTitle>
            
            <S.Grid $cols={2}>
              <S.FormGroup>
                <label>Esforço de Implementação</label>
                <select required defaultValue="">
                  <option value="" disabled>Estime o tempo de implementação</option>
                  <option value="curto">Curto Prazo (Até 3 meses)</option>
                  <option value="medio">Médio Prazo (3 a 6 meses)</option>
                  <option value="longo">Longo Prazo (+ de 6 meses)</option>
                </select>
              </S.FormGroup>

              <S.FormGroup>
                <label>Área Mais Impactada</label>
                <select required defaultValue="">
                  <option value="" disabled>Selecione a área principal</option>
                  {areas.map(area => (
                    <option key={area.id} value={area.id}>{area.name}</option>
                  ))}
                  <option value="todas">Todas as Áreas (Impacto Global)</option>
                </select>
              </S.FormGroup>
            </S.Grid>

            <S.FormGroup>
              <label>Impacto Esperado (Quantitativo / Qualitativo)</label>
              <input type="text" placeholder="Ex: Redução de 20% no tempo de processamento..." required />
            </S.FormGroup>

            <S.FormGroup style={{ marginBottom: 0, marginTop: '1.5rem' }}>
              <label>Observações Adicionais (Opcional)</label>
              <textarea placeholder="Qualquer outro contexto relevante..." />
            </S.FormGroup>
          </S.FormSection>

          {/* BOTÕES DE AÇÃO */}
          <S.Actions>
            <S.Button type="button" onClick={() => toast('Rascunho salvo localmente.')}><Save size={18} /> Salvar Rascunho</S.Button>
            <S.Button type="submit" $primary><Send size={18} /> Submeter Iniciativa</S.Button>
          </S.Actions>
          
        </form>
      </S.Container>
    </Layout>
  );
}