import React, { useState } from 'react';
import * as S from '@/components/Modals/ModalsStyles';
import { Role, Area } from '@/hook/TeamContext';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: { name: string; email: string; areaId: string | null; role: Role }) => void;
  areas: Area[];
}

export default function MemberModal({ isOpen, onClose, onSave, areas }: MemberModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [areaId, setAreaId] = useState<string>('');
  const [role, setRole] = useState<Role>('Membro');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      email,
      areaId: areaId === '' ? null : areaId,
      role
    });
    // Limpar form
    setName(''); setEmail(''); setAreaId(''); setRole('Membro');
    onClose();
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <h2>Adicionar Membro</h2>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>Nome Completo</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </S.FormGroup>

          <S.FormGroup>
            <label>E-mail Corporativo</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </S.FormGroup>

          <S.FormGroup>
            <label>Área de Atuação</label>
            <select value={areaId} onChange={e => setAreaId(e.target.value)}>
              <option value="">Nenhuma / Diretoria Geral</option>
              {areas.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
          </S.FormGroup>

          <S.FormGroup>
            <label>Nível de Acesso (Tag)</label>
            <select value={role} onChange={e => setRole(e.target.value as Role)}>
              <option value="Membro">Membro</option>
              <option value="Líder de Área">Líder de Área</option>
              <option value="Coordenador de Portfólio">Coordenador de Portfólio</option>
              <option value="Diretoria">Diretoria</option>
            </select>
          </S.FormGroup>

          <S.ModalActions>
            <S.Button type="button" onClick={onClose}>Cancelar</S.Button>
            <S.Button type="submit" className="primary">Adicionar Usuário</S.Button>
          </S.ModalActions>
        </form>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}