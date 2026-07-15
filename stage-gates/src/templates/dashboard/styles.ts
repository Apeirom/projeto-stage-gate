import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 3rem;
`

export const Header = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2rem;
    color: #1e293b;
    margin: 0 0 0.25rem 0;
    font-weight: 700;
  }
  p {
    color: #64748b;
    margin: 0;
    font-size: 1rem;
  }
`

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`

export const MetricCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    span {
      color: #64748b;
      font-size: 0.875rem;
      font-weight: 600;
    }
    svg {
      color: #94a3b8;
    }
  }

  .value {
    font-size: 2.25rem;
    color: #1e293b;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1;
  }
`

export const Badge = styled.div<{ $negative?: boolean; $neutral?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  width: max-content;

  background: ${({ $negative, $neutral }) =>
    $negative ? '#fee2e2' : $neutral ? '#f1f5f9' : '#dcfce7'};

  color: ${({ $negative, $neutral }) =>
    $negative ? '#991b1b' : $neutral ? '#475569' : '#166534'};
`

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
  font-weight: 700;
`

export const PendingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
`

export const ApprovalCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0;
    color: #1e293b;
    font-size: 1.15rem;
    font-weight: 700;
  }

  p {
    color: #64748b;
    font-size: 0.9rem;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f1f5f9;
  }

  .stat-item span {
    display: block;
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
  .stat-item strong {
    color: #1e293b;
    font-size: 1.1rem;
  }

  .actions {
    display: flex;
    gap: 0.75rem;
  }

  button {
    flex: 1;
    padding: 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s;
    font-size: 0.9rem;
  }

  .btn-approve {
    background: #3b0764;
    color: white;
    &:hover {
      background: #2e054e;
      transform: translateY(-1px);
    }
  }

  .btn-review {
    background: white;
    border-color: #cbd5e1;
    color: #475569;
    &:hover {
      background: #f8fafc;
      border-color: #94a3b8;
      color: #1e293b;
    }
  }
`
