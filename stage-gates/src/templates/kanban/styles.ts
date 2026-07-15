import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2rem); /* Ocupa a tela inteira menos um respiro */
  padding: 1.5rem 2rem;
  overflow: hidden; /* O scroll será apenas nas colunas e no quadro horizontal */
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.875rem;
    color: #1e293b;
    margin: 0;
    font-weight: 700;
  }
  p {
    color: #64748b;
    margin: 0.25rem 0 0 0;
  }
`

export const Board = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-grow: 1;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 1rem;

  /* Estilizando a barra de rolagem horizontal para ficar elegante */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
`

export const Column = styled.div<{ $type: 'stage' | 'gate' }>`
  min-width: 320px;
  width: 320px;
  background: ${({ $type }) => ($type === 'stage' ? '#f8fafc' : '#f0fdfa')};
  border: 1px solid
    ${({ $type }) => ($type === 'stage' ? '#e2e8f0' : '#ccfbf1')};
  border-top: 4px solid
    ${({ $type }) => ($type === 'stage' ? '#64748b' : '#0d9488')};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`

export const ColumnHeader = styled.div<{ $type: 'stage' | 'gate' }>`
  padding: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .badge {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    background: ${({ $type }) => ($type === 'stage' ? '#e2e8f0' : '#ccfbf1')};
    color: ${({ $type }) => ($type === 'stage' ? '#475569' : '#0f766e')};
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #1e293b;
  }

  .meta {
    font-size: 0.75rem;
    color: #64748b;
    display: flex;
    gap: 0.75rem;
  }
`

export const ColumnBody = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
