import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // 👈 1. Importar o Portal
import { Plus, Trash2 } from 'lucide-react';
import { GateNode } from '@/templates/builder/mock';
import * as M from '@/components/Modals/ModalsStyles';

interface GateConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: GateNode;
  onSave: (id: string, updates: Partial<GateNode>) => void;
}

export default function GateConfigModal({ isOpen, onClose, node, onSave }: GateConfigModalProps) {
  // 👇 2. Estado para o Portal
  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState(node.title);
  const [description, setDescription] = useState(node.description);
  const [gatekeepers, setGatekeepers] = useState<string[]>(node.gatekeepers || []);
  const [criteria, setCriteria] = useState<string[]>(node.criteria || []);
  
  const [newGatekeeper, setNewGatekeeper] = useState('');
  const [newCriteria, setNewCriteria] = useState('');

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      setTitle(node.title);
      setDescription(node.description);
      setGatekeepers(node.gatekeepers || []);
      setCriteria(node.criteria || []);
    }
  }, [isOpen, node]);

  if (!isOpen || !mounted) return null;

  const handleAddGatekeeper = () => {
    if (newGatekeeper.trim()) { setGatekeepers([...gatekeepers, newGatekeeper.trim()]); setNewGatekeeper(''); }
  };
  const handleRemoveGatekeeper = (index: number) => {
    setGatekeepers(gatekeepers.filter((_, i) => i !== index));
  };
  const handleAddCriteria = () => {
    if (newCriteria.trim()) { setCriteria([...criteria, newCriteria.trim()]); setNewCriteria(''); }
  };
  const handleRemoveCriteria = (index: number) => {
    setCriteria(criteria.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(node.id, { title, description, gatekeepers, criteria });
    onClose();
  };

  // 👇 3. Envolver o retorno com createPortal
  return createPortal(
    <M.Overlay>
      <M.Content>
        <h2>Configurar {node.title}</h2>
        <form onSubmit={handleSubmit}>
          <M.FormGroup>
            <label>Título do Comitê/Gate</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          </M.FormGroup>

          <M.FormGroup>
            <label>Diretriz de Decisão</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} required />
          </M.FormGroup>

          <M.FormGroup>
            <label>Gatekeepers (Funções Aprovadoras)</label>
            <M.TagInputContainer>
              <input 
                type="text" 
                placeholder="Ex: Diretoria, Líder de Logística" 
                value={newGatekeeper} 
                onChange={e => setNewGatekeeper(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddGatekeeper())}
              />
              <M.Button type="button" $primary onClick={handleAddGatekeeper} style={{ padding: '0.75rem' }}>
                <Plus size={18} />
              </M.Button>
            </M.TagInputContainer>

            <M.ListContainer>
              {gatekeepers.map((gk, index) => (
                <M.ListItem key={index}>
                  <span>{gk}</span>
                  <button type="button" onClick={() => handleRemoveGatekeeper(index)}><Trash2 size={14} /></button>
                </M.ListItem>
              ))}
            </M.ListContainer>
          </M.FormGroup>

          <M.FormGroup>
            <label>Critérios de Aprovação (Go / No-Go)</label>
            <M.TagInputContainer>
              <input 
                type="text" 
                placeholder="Ex: Alinhamento Estratégico > 70%" 
                value={newCriteria} 
                onChange={e => setNewCriteria(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddCriteria())}
              />
              <M.Button type="button" $primary onClick={handleAddCriteria} style={{ padding: '0.75rem' }}>
                <Plus size={18} />
              </M.Button>
            </M.TagInputContainer>

            <M.ListContainer>
              {criteria.map((item, index) => (
                <M.ListItem key={index}>
                  <span>{item}</span>
                  <button type="button" onClick={() => handleRemoveCriteria(index)}><Trash2 size={14} /></button>
                </M.ListItem>
              ))}
            </M.ListContainer>
          </M.FormGroup>

          <M.Actions>
            <M.Button type="button" onClick={onClose}>Cancelar</M.Button>
            <M.Button type="submit" $primary>Salvar Configurações</M.Button>
          </M.Actions>
        </form>
      </M.Content>
    </M.Overlay>,
    document.body // 👈 Destino do portal
  );
}