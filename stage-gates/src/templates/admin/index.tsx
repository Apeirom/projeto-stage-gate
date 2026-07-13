import React, { useState } from 'react';
import * as S from './styles';
import { useTeam } from '@/hook/TeamContext';
import Layout from '@/components/Layout';
import { Plus, UserPlus } from 'lucide-react';
import AreaModal from '@/components/Modals/AreaModal';
import MemberModal from '@/components/Modals/MemberModal';

export default function Admin() {
  const { members, areas, addArea, addMember } = useTeam();
  
  // Controles de visibilidade dos modais
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  return (
    <Layout>
      <S.Page>
        <S.Header>
          <h1>Configurações de Equipe</h1>
          <p>Gerencie as áreas da empresa e os níveis de acesso dos colaboradores.</p>
        </S.Header>

        <S.Grid>
          {/* COLUNA DE ÁREAS */}
          <S.Card>
            <S.Title>Áreas da Empresa</S.Title>
            <S.List>
              {areas.map(a => <S.ListItem key={a.id}>{a.name}</S.ListItem>)}
            </S.List>
            <S.Button 
              style={{ width: '100%', marginTop: '1rem' }}
              onClick={() => setIsAreaModalOpen(true)}
            >
              <Plus size={16}/> Nova Área
            </S.Button>
          </S.Card>
          
          {/* COLUNA DE MEMBROS */}
          <S.Card>
            <S.Title>
              Membros e Tags
              <S.Button className="primary" onClick={() => setIsMemberModalOpen(true)}>
                <UserPlus size={16}/> Adicionar Membro
              </S.Button>
            </S.Title>
            
            <S.StyledTable>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Área</th>
                  <th>Tag/Permissão</th>
                </tr>
              </thead>
              <tbody>
                {members.map(m => (
                  <tr key={m.id}>
                    <td>
                      <strong>{m.name}</strong>
                      <br/>
                      <span style={{fontSize: '0.8rem', color: '#64748b'}}>{m.email}</span>
                    </td>
                    <td>{areas.find(a => a.id === m.areaId)?.name || 'Geral'}</td>
                    <td><S.RoleBadge>{m.role}</S.RoleBadge></td>
                  </tr>
                ))}
              </tbody>
            </S.StyledTable>
          </S.Card>
        </S.Grid>
      </S.Page>

      {/* RENDERIZAÇÃO DOS MODAIS */}
      <AreaModal 
        isOpen={isAreaModalOpen} 
        onClose={() => setIsAreaModalOpen(false)} 
        onSave={addArea} 
      />
      
      <MemberModal 
        isOpen={isMemberModalOpen} 
        onClose={() => setIsMemberModalOpen(false)} 
        onSave={addMember}
        areas={areas}
      />
    </Layout>
  );
}