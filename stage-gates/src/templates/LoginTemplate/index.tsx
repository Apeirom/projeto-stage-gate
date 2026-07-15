import React, { useState } from 'react';
import { Infinity, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import * as S from './styles';

type RoleType = 'Membro' | 'Gestor' | 'Diretor';

export default function LoginTemplate() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<RoleType>('Gestor');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // No futuro, aqui você chamaria a API de autenticação.
    // Por enquanto, redirecionamos direto:
    router.push('/builder'); 
  };

  return (
    <S.SplitScreen>
      <S.LeftSide>
        <S.FloatingCard>
          <div className="icon"><Infinity size={56} strokeWidth={2.5} /></div>
          <h2>InnovaFlow</h2>
          <p>Enterprise Portfolio</p>
        </S.FloatingCard>
      </S.LeftSide>
      
      <S.RightSide>
        <S.FormContainer>
          <h1>Acesse a plataforma</h1>
          <p>Bem-vindo de volta! Por favor, insira seus dados.</p>
          
          <S.RoleSelector>
            <S.RoleButton 
              type="button" // Evita que o botão submeta o formulário sem querer
              $active={selectedRole === 'Membro'} 
              onClick={() => setSelectedRole('Membro')}
            >
              Membro
            </S.RoleButton>
            <S.RoleButton 
              type="button"
              $active={selectedRole === 'Gestor'} 
              onClick={() => setSelectedRole('Gestor')}
            >
              Gestor
            </S.RoleButton>
            <S.RoleButton 
              type="button"
              $active={selectedRole === 'Diretor'} 
              onClick={() => setSelectedRole('Diretor')}
            >
              Diretor
            </S.RoleButton>
          </S.RoleSelector>

          <form onSubmit={handleLogin}>
            <S.InputGroup>
              <label>E-mail Corporativo</label>
              <input type="email" placeholder="nome@innovaflow.com" required />
            </S.InputGroup>
            
            <S.InputGroup>
              <label>Senha</label>
              <input type="password" placeholder="••••••••" required />
            </S.InputGroup>
            
            <S.SubmitBtn type="submit">
              Acessar Plataforma <ArrowRight size={18} />
            </S.SubmitBtn>
          </form>

          <S.AuxiliaryLinks>
            <span>Não tem uma conta? <a href="#">Solicite acesso</a></span>
            <a href="#">Esqueceu a senha?</a>
          </S.AuxiliaryLinks>

        </S.FormContainer>
      </S.RightSide>
    </S.SplitScreen>
  );
}