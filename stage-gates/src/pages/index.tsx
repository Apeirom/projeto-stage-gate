import React from 'react';
import styled from 'styled-components';
import { Infinity } from 'lucide-react';
import { useRouter } from 'next/router';

const SplitScreen = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftSide = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f3e8ff 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const FloatingCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 10;
  
  .icon {
    background: #3b0764;
    color: white;
    padding: 1rem;
    border-radius: 12px;
  }
  h2 { margin: 0; font-size: 1.5rem; color: #1e293b; }
  p { margin: 0; color: #64748b; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; }
`;

const RightSide = styled.div`
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;

  h1 { font-size: 2rem; color: #1e293b; margin-bottom: 0.5rem; }
  p { color: #64748b; margin-bottom: 2rem; }
`;

const RoleSelector = styled.div`
  display: flex;
  background: #f1f5f9;
  padding: 0.25rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  button {
    flex: 1;
    padding: 0.5rem;
    border: none;
    background: transparent;
    border-radius: 6px;
    font-weight: 500;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      background: white;
      color: #1e293b;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.25rem;
  label { display: block; font-size: 0.875rem; font-weight: 500; color: #334155; margin-bottom: 0.5rem; }
  input { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; outline: none; }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #3b0764;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  &:hover { background: #2e054e; }
`;

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard'); // Redireciona pro dashboard
  };

  return (
    <SplitScreen>
      <LeftSide>
        <FloatingCard>
          <div className="icon"><Infinity size={48} /></div>
          <h2>InnovaFlow</h2>
          <p>Enterprise Portfolio</p>
        </FloatingCard>
      </LeftSide>
      
      <RightSide>
        <FormContainer>
          <h1>Acesse a plataforma</h1>
          <p>Bem-vindo de volta! Por favor, insira seus dados.</p>
          
          <RoleSelector>
            <button>Membro</button>
            <button className="active">Gestor</button>
            <button>Diretor</button>
          </RoleSelector>

          <form onSubmit={handleLogin}>
            <InputGroup>
              <label>E-mail</label>
              <input type="email" placeholder="nome@innovaflow.com" required />
            </InputGroup>
            <InputGroup>
              <label>Senha</label>
              <input type="password" placeholder="••••••••" required />
            </InputGroup>
            
            <SubmitBtn type="submit">Acessar Plataforma →</SubmitBtn>
          </form>
        </FormContainer>
      </RightSide>
    </SplitScreen>
  );
}