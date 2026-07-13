import React, { useState } from 'react';
import * as S from '@/templates/admin/styles';

interface AreaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

export default function AreaModal({ isOpen, onClose, onSave }: AreaModalProps) {
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name);
      setName('');
      onClose();
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <h2>Nova Área</h2>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>Nome da Área</label>
            <input 
              type="text" 
              placeholder="Ex: Recursos Humanos" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </S.FormGroup>
          <S.ModalActions>
            <S.Button type="button" onClick={onClose}>Cancelar</S.Button>
            <S.Button type="submit" className="primary">Salvar Área</S.Button>
          </S.ModalActions>
        </form>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}