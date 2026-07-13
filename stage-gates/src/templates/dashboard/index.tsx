import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/Layout';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; color: #1e293b; margin: 0 0 0.5rem 0; }
  p { color: #64748b; margin: 0; }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  
  .title { color: #64748b; font-size: 0.875rem; margin-bottom: 0.5rem; font-weight: 500; }
  .value { font-size: 2rem; color: #1e293b; font-weight: 700; margin-bottom: 0.5rem; }
  .badge { display: inline-block; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; background: #dcfce7; color: #166534; }
  .badge.negative { background: #fee2e2; color: #991b1b; }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #1e293b;
  margin: 2rem 0 1rem 0;
`;

const PendingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const ApprovalCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  .tag { background: #fee2e2; color: #991b1b; font-size: 0.75rem; font-weight: bold; padding: 0.25rem 0.5rem; border-radius: 4px; display: inline-block; margin-bottom: 1rem; }
  h3 { margin: 0 0 0.5rem 0; color: #1e293b; font-size: 1.1rem; }
  p { color: #64748b; font-size: 0.875rem; margin-bottom: 1.5rem; line-height: 1.4; }
  
  .stats { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; }
  .stat-item span { display: block; font-size: 0.75rem; color: #64748b; margin-bottom: 0.25rem; }
  .stat-item strong { color: #1e293b; }

  .actions { display: flex; gap: 0.5rem; }
  button { flex: 1; padding: 0.5rem; border-radius: 6px; font-weight: 600; cursor: pointer; border: 1px solid transparent; }
  .btn-approve { background: #3b0764; color: white; }
  .btn-review { background: white; border-color: #cbd5e1; color: #475569; }
`;

export default function Dashboard() {
  return (
    <Layout>
      <Container>
        <Header>
          <h1>Saúde do Portfólio</h1>
          <p>Resumo Executivo T3 2026</p>
        </Header>

        <MetricsGrid>
          <MetricCard>
            <div className="title">Ativos Totais</div>
            <div className="value">R$ 245M</div>
            <div className="badge">+12.5%</div>
          </MetricCard>
          <MetricCard>
            <div className="title">Economia Gerada</div>
            <div className="value">R$ 32M</div>
            <div className="badge">+8.2%</div>
          </MetricCard>
          <MetricCard>
            <div className="title">Tempo de Lançamento (Méd)</div>
            <div className="value">4.2 Meses</div>
            <div className="badge negative">-2.1%</div>
          </MetricCard>
          <MetricCard>
            <div className="title">Projetos Ativos</div>
            <div className="value">128</div>
            <div className="badge">Este Trimestre</div>
          </MetricCard>
        </MetricsGrid>

        <SectionTitle>Aprovações Pendentes (Exceções)</SectionTitle>
        <PendingGrid>
          <ApprovalCard>
            <div className="tag">! Alta Prioridade</div>
            <h3>Otimização de Cadeia com IA</h3>
            <p>Implementando modelos de aprendizado de máquina para prever gargalos logísticos...</p>
            <div className="stats">
              <div className="stat-item"><span>Investimento</span><strong>R$ 4.5M</strong></div>
              <div className="stat-item"><span>ROI Proj.</span><strong>22% (18m)</strong></div>
            </div>
            <div className="actions">
              <button className="btn-approve">Aprovar</button>
              <button className="btn-review">Revisar</button>
            </div>
          </ApprovalCard>

          <ApprovalCard>
            <div className="tag" style={{background: '#f1f5f9', color: '#475569'}}>Padrão</div>
            <h3>Piloto Transição Energia Verde</h3>
            <p>Programa piloto para transição de 3 instalações fabris para fontes de energia renovável...</p>
            <div className="stats">
              <div className="stat-item"><span>Investimento</span><strong>R$ 8.0M</strong></div>
              <div className="stat-item"><span>ROI Proj.</span><strong>Métrica ESG</strong></div>
            </div>
            <div className="actions">
              <button className="btn-approve">Aprovar</button>
              <button className="btn-review">Revisar</button>
            </div>
          </ApprovalCard>
        </PendingGrid>
      </Container>
    </Layout>
  );
}