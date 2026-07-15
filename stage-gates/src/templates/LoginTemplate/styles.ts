import styled from 'styled-components'

export const SplitScreen = styled.div`
  display: flex;
  min-height: 100vh;
`

export const LeftSide = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f3e8ff 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Opcional: Esconder a imagem em telas muito pequenas (mobile) */
  @media (max-width: 768px) {
    display: none;
  }
`

export const FloatingCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 10;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    background: #3b0764;
    color: white;
    padding: 1.25rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    color: #1e293b;
    font-weight: 700;
  }
  p {
    margin: 0;
    color: #64748b;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }
`

export const RightSide = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centraliza o form no container */
  padding: 2rem;
`

export const FormContainer = styled.div`
  max-width: 420px;
  width: 100%;

  h1 {
    font-size: 2.25rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  p {
    color: #64748b;
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
  }
`

export const RoleSelector = styled.div`
  display: flex;
  background: #f1f5f9;
  padding: 0.35rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
`

// Transformamos o botão em um componente com propriedades ($active)
export const RoleButton = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 0.75rem;
  border: none;
  background: ${({ $active }) => ($active ? 'white' : 'transparent')};
  border-radius: 8px;
  font-weight: 600;
  color: ${({ $active }) => ($active ? '#3b0764' : '#64748b')};
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${({ $active }) =>
    $active ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'};

  &:hover {
    color: ${({ $active }) => ($active ? '#3b0764' : '#1e293b')};
    background: ${({ $active }) => ($active ? 'white' : '#e2e8f0')};
  }
`

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 8px;
    outline: none;
    font-size: 1rem;
    color: #1e293b;
    background-color: #ffffff;
    transition: all 0.2s ease;

    &::placeholder {
      color: #94a3b8;
    }

    &:hover {
      border-color: #94a3b8;
    }

    &:focus {
      border-color: #3b0764;
      box-shadow: 0 0 0 3px rgba(59, 7, 100, 0.1);
    }
  }
`

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  background: #3b0764;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #2e054e;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(59, 7, 100, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`

export const AuxiliaryLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 0.9rem;

  a {
    color: #3b0764;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #64748b;
  }
`
