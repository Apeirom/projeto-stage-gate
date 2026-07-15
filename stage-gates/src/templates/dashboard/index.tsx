import React from 'react';
import Layout from '@/components/Layout';
import * as S from './styles';
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  FolderKanban, 
  AlertCircle, 
  Activity 
} from 'lucide-react';

export default function DashboardTemplate() {
  return (
    <Layout>
      <S.Container>
        <S.Header>
          <h1>Saúde do Portfólio</h1>
          <p>Resumo Executivo • T3 2026</p>
        </S.Header>

        <S.MetricsGrid>
          <S.MetricCard>
            <div className="title-row">
              <span>Ativos Totais</span>
              <DollarSign size={20} />
            </div>
            <div className="value">R$ 245M</div>
            <S.Badge><TrendingUp size={14} /> +12.5%</S.Badge>
          </S.MetricCard>
          
          <S.MetricCard>
            <div className="title-row">
              <span>Economia Gerada</span>
              <Activity size={20} />
            </div>
            <div className="value">R$ 32M</div>
            <S.Badge><TrendingUp size={14} /> +8.2%</S.Badge>
          </S.MetricCard>
          
          <S.MetricCard>
            <div className="title-row">
              <span>Tempo Médio (Lançamento)</span>
              <Clock size={20} />
            </div>
            <div className="value">4.2 Meses</div>
            <S.Badge $negative><TrendingUp size={14} style={{ transform: 'rotate(180deg)' }}/> -2.1%</S.Badge>
          </S.MetricCard>
          
          <S.MetricCard>
            <div className="title-row">
              <span>Projetos Ativos</span>
              <FolderKanban size={20} />
            </div>
            <div className="value">128</div>
            <S.Badge $neutral>Este Trimestre</S.Badge>
          </S.MetricCard>
        </S.MetricsGrid>

        <S.SectionTitle>Aprovações Pendentes (Exceções)</S.SectionTitle>
        <S.PendingGrid>
          
          <S.ApprovalCard>
            <div className="header">
              <h3>Otimização de Cadeia com IA</h3>
              <S.Badge $negative><AlertCircle size={14}/> Alta Prioridade</S.Badge>
            </div>
            <p>Implementando modelos de aprendizado de máquina para prever gargalos logísticos em tempo real...</p>
            <div className="stats">
              <div className="stat-item"><span>Investimento</span><strong>R$ 4.5M</strong></div>
              <div className="stat-item"><span>ROI Proj.</span><strong>22% (18m)</strong></div>
            </div>
            <div className="actions">
              <button className="btn-approve">Aprovar Projeto</button>
              <button className="btn-review">Revisar</button>
            </div>
          </S.ApprovalCard>

          <S.ApprovalCard>
            <div className="header">
              <h3>Piloto Transição Energia Verde</h3>
              <S.Badge $neutral>Padrão</S.Badge>
            </div>
            <p>Programa piloto para transição de 3 instalações fabris para fontes de energia renovável focando em métricas ESG...</p>
            <div className="stats">
              <div className="stat-item"><span>Investimento</span><strong>R$ 8.0M</strong></div>
              <div className="stat-item"><span>ROI Proj.</span><strong>Métrica ESG</strong></div>
            </div>
            <div className="actions">
              <button className="btn-approve">Aprovar Projeto</button>
              <button className="btn-review">Revisar</button>
            </div>
          </S.ApprovalCard>

        </S.PendingGrid>
      </S.Container>
    </Layout>
  );
}