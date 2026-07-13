import styled from 'styled-components'

export const Card = styled.div`
  min-width: 260px;
  background: #eff6ff;
  border: 2px solid #3b82f6;
  border-radius: 24px 4px 24px 4px; /* Formato de losango/decisão */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

export const Badge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  background: #dbeafe;
  color: #1d4ed8;
  margin-bottom: 1rem;
  display: inline-block;
`

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #334155;
  margin: 0 0 0.5rem 0;
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 1.5rem 0;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  width: 100%;
`

export const IconButton = styled.button<{ $danger?: boolean }>`
  background: white;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  color: ${({ $danger }) => ($danger ? '#ef4444' : '#64748b')};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  &:hover {
    background: ${({ $danger }) => ($danger ? '#fee2e2' : '#f8fafc')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
