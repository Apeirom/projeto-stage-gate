import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { StageNode } from '@/templates/builder/mock';
import * as M from '@/components/Modals/ModalsStyles';

interface StageConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: StageNode;
  onSave: (id: string, updates: Partial<StageNode>) => void;
}

export default function StageConfigModal({ isOpen, onClose, node, onSave }: StageConfigModalProps) {
  const [title, setTitle] = useState(node.title);
  const [description, setDescription] = useState(node.description);
  const [estimatedDays, setEstimatedDays] = useState(node.estimatedDays);
  const [deliverables, setDeliverables] = useState<string[]>(node.deliverables || []);
  const [newDeliverable, setNewDeliverable] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTitle(node.title);
      setDescription(node.description);
      setEstimatedDays(node.estimatedDays);
      setDeliverables(node.deliverables || []);
    }
  }, [isOpen, node]);

  if (!isOpen) return null;

  const handleAddDeliverable = () => {
    if (newDeliverable.trim()) {
      setDeliverables([...deliverables, newDeliverable.trim()]);
      setNewDeliverable('');
    }
  };

  const handleRemoveDeliverable = (index: number) => {
    setDeliverables(deliverables.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(node.id, {
      title,
      description,
      estimatedDays: Number(estimatedDays),
      deliverables
    });
    onClose();
  };

  return (
    <M.Overlay>
      <M.Content>
        <h2>Configurar {node.title}</h2>
        <form onSubmit={handleSubmit}>
          <M.FormGroup>
            <label>Título da Fase</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          </M.FormGroup>

          <M.FormGroup>
            <label>Descrição e Orientações</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} required />
          </M.FormGroup>

          <M.FormGroup>
            <label>Prazo Estimado (Dias corridos)</label>
            <input type="number" value={estimatedDays} onChange={e => setEstimatedDays(Number(e.target.value))} min={1} required />
          </M.FormGroup>

          <M.FormGroup>
            <label>Entregáveis Obrigatórios (Deliverables)</label>
            <M.TagInputContainer>
              <input 
                type="text" 
                placeholder="Ex: Business Case estruturado" 
                value={newDeliverable} 
                onChange={e => setNewDeliverable(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddDeliverable())}
              />
              <M.Button type="button" $primary onClick={handleAddDeliverable} style={{ padding: '0.75rem' }}>
                <Plus size={18} />
              </M.Button>
            </M.TagInputContainer>

            <M.ListContainer>
              {deliverables.map((item, index) => (
                <M.ListItem key={index}>
                  <span>{item}</span>
                  <button type="button" onClick={() => handleRemoveDeliverable(index)}>
                    <Trash2 size={14} />
                  </button>
                </M.ListItem>
              ))}
              {deliverables.length === 0 && (
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>
                  Nenhum entregável obrigatório cadastrado ainda.
                </span>
              )}
            </M.ListContainer>
          </M.FormGroup>

          <M.Actions>
            <M.Button type="button" onClick={onClose}>Cancelar</M.Button>
            <M.Button type="submit" $primary>Salvar Configurações</M.Button>
          </M.Actions>
        </form>
      </M.Content>
    </M.Overlay>
  );
}