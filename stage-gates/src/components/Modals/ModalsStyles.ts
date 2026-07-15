import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(4px);
`

export const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 500px;
  max-width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e2e8f0;

  h2 {
    margin-top: 0;
    color: #1e293b;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const TagInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  input {
    color: #1e293b;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  max-height: 150px;
  overflow-y: auto;
  padding-right: 4px;
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;
  color: #334155;

  span {
    flex-grow: 1;
    margin-right: 0.5rem;
    word-break: break-all;
  }

  button {
    background: transparent;
    border: none;
    color: #ef4444;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #fee2e2;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.25rem;
`

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid ${({ $primary }) => ($primary ? 'transparent' : '#cbd5e1')};
  background: ${({ $primary }) => ($primary ? '#3b0764' : 'white')};
  color: ${({ $primary }) => ($primary ? 'white' : '#475569')};

  &:hover {
    background: ${({ $primary }) => ($primary ? '#2e054e' : '#f8fafc')};
    border-color: ${({ $primary }) => ($primary ? 'transparent' : '#94a3b8')};
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Fica acima da sidebar */
  backdrop-filter: blur(4px);
`

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 450px;
  max-width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600; /* Um pouco mais negrito para dar hierarquia */
    color: #694847;
  }

  input,
  select,
  textarea {
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

  textarea {
    resize: vertical;
    min-height: 120px; 
    line-height: 1.5;
  }

  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.25rem;
    appearance: none;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`
