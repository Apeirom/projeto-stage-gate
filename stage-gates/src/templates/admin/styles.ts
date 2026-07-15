import styled from 'styled-components'

export const Page = styled.div`
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const Header = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 1.875rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }
  p {
    color: #64748b;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  align-items: start;
`

export const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`

export const Title = styled.h3`
  font-size: 1.1rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  padding: 0.75rem;
  background: #f8fafc;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  color: #475569;
  font-weight: 500;
  border: 1px solid #e2e8f0;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  cursor: pointer;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
  &.primary {
    background: #3b0764;
    color: white;
    border: none;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
    color: #64748b;
    font-size: 0.875rem;
    padding: 1rem;
    border-bottom: 2px solid #f1f5f9;
  }
  td {
    padding: 1rem;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
  }
`

export const RoleBadge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background: #f3e8ff;
  color: #6b21a8;
  font-size: 0.75rem;
  font-weight: 600;
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Fica acima da sidebar */
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 450px;
  max-width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  h2 { margin-top: 0; color: #1e293b; margin-bottom: 1.5rem; }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600; /* Um pouco mais negrito para dar hierarquia */
    color: #694847;
  }
  
  input, select {
    width: 100%;
    padding: 0.75rem 1rem; /* Padding horizontal maior para conforto */
    border: 1.5px solid #e2e8f0; /* Borda um pouco mais grossa */
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.2s ease;
    background: #ffffff;
    color: #1e293b;
    
    /* Estado de Hover */
    &:hover {
      border-color: #cbd5e1;
    }

    /* Estado de Foco (quando o usuário clica) */
    &:focus {
      border-color: #3b0764;
      box-shadow: 0 0 0 3px rgba(59, 7, 100, 0.1); /* Efeito de brilho elegante */
    }

    /* Estado Desabilitado */
    &:disabled {
      background: #f8fafc;
      cursor: not-allowed;
      border-color: #f1de04;
    }

    /* Ajuste para o Select */
    &::placeholder {
      color: #b8949b;
    }
  }

  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.25rem;
    appearance: none;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;
