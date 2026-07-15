import styled from 'styled-components'

export const Card = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: grab;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
    transform: translateY(-2px);
  }

  &:active {
    cursor: grabbing;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .code {
    font-size: 0.75rem;
    font-weight: 700;
    color: #64748b;
  }
  button {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
    &:hover {
      color: #3b0764;
      background: #f3e8ff;
    }
  }
`

export const Title = styled.h4`
  margin: 0;
  font-size: 0.95rem;
  color: #1e293b;
  line-height: 1.4;
`

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;

  .area {
    background: #f1f5f9;
    color: #475569;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
  .budget {
    color: #16a34a;
  }
`

export const Footer = styled.div<{ $danger?: boolean }>`
  border-top: 1px solid #f1f5f9;
  padding-top: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ $danger }) => ($danger ? '#ef4444' : '#64748b')};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
export const StatusBadge = styled.span<{ $hold?: boolean }>`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: ${({ $hold }) => ($hold ? '#fef08a' : '#e0e7ff')};
  color: ${({ $hold }) => ($hold ? '#854d0e' : '#3730a3')};
  text-transform: uppercase;
`
