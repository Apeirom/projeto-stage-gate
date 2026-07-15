import React from 'react';
import { useRouter } from 'next/router';
import { User, Lightbulb, TrendingUp, Save, Send } from 'lucide-react';
import Layout from '@/components/Layout';
import * as S from './styles';
import { useTeam } from '@/hook/TeamContext';

export default function NovaIniciativaTemplate() {
  const router = useRouter();
  const { areas } = useTeam();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Iniciativa submetida com sucesso! O comitê será notificado.');
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
                <input type="text" placeholder="Escreva seu nome" required />
              </S.FormGroup>
              <S.FormGroup>
                <label>E-mail Corporativo</label>
                <input type="email" placeholder="nome@empresa.com" required />
              </S.FormGroup>
            </S.Grid>
            <S.FormGroup style={{ marginBottom: 0 }}>
              <label>Área de Atuação</label>
              <select required>
                <option value="">Selecione a sua área de atuação</option>
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
              <input type="text" placeholder="Um título conciso e descritivo" required />
            </S.FormGroup>
            
            <S.FormGroup>
              <label>Oportunidade / Problema Identificado</label>
              <textarea placeholder="Descreva a situação atual, pontos de dor ou oportunidade inexplorada..." required />
            </S.FormGroup>

            <S.FormGroup>
              <label>Solução Sugerida</label>
              <textarea placeholder="Como você propõe resolver isso? Seja o mais específico possível..." required />
            </S.FormGroup>

            <S.FormGroup style={{ marginBottom: 0 }}>
              <label>Observações Anteriores</label>
              <textarea placeholder="Você já viu isso ser implementado em outro lugar? (Interno ou externo)" />
            </S.FormGroup>
          </S.FormSection>

          {/* SEÇÃO 3: AVALIAÇÃO DE IMPACTO */}
          <S.FormSection>
            <S.SectionTitle><TrendingUp size={20}/> Avaliação de Impacto</S.SectionTitle>
            
            <S.Grid $cols={2}>
              <S.FormGroup>
                <label>Esforço de Implementação</label>
                <select required>
                  <option value="">Estime o tempo de implementação</option>
                  <option value="curto">Curto Prazo (Até 3 meses)</option>
                  <option value="medio">Médio Prazo (3 a 6 meses)</option>
                  <option value="longo">Longo Prazo (+ de 6 meses)</option>
                </select>
              </S.FormGroup>

              <S.FormGroup>
                <label>Área Mais Impactada</label>
                <select required>
                  <option value="">Selecione a área principal</option>
                  {areas.map(area => (
                    <option key={area.id} value={area.id}>{area.name}</option>
                  ))}
                  <option value="todas">Todas as Áreas (Impacto Global)</option>
                </select>
              </S.FormGroup>
            </S.Grid>

            <S.FormGroup>
              <label>Impacto Esperado (Quantitativo / Qualitativo)</label>
              <input type="text" placeholder="Ex: Redução de 20% no tempo de processamento, melhora na satisfação..." required />
            </S.FormGroup>

            <S.FormGroup style={{ marginBottom: 0, marginTop: '1.5rem' }}>
              <label>Observações Adicionais (Opcional)</label>
              <textarea placeholder="Qualquer outro contexto relevante..." />
            </S.FormGroup>
          </S.FormSection>

          {/* BOTÕES DE AÇÃO */}
          <S.Actions>
            <S.Button type="button"><Save size={18} /> Salvar Rascunho</S.Button>
            <S.Button type="submit" $primary><Send size={18} /> Submeter Iniciativa</S.Button>
          </S.Actions>
          
        </form>
      </S.Container>
    </Layout>
  );
}