import React from 'react';
import { useRouter } from 'next/router';
import { LayoutDashboard, BarChart2, User, HelpCircle, LogOut, Plus, Infinity, Users, LayersPlusIcon } from 'lucide-react';
import * as S from './styles';

export default function Sidebar() {
  const router = useRouter();

  return (
    <S.SidebarContainer>
      <S.Logo>
        <div className="icon"><Infinity size={24} /></div>
        InnovaFlow
      </S.Logo>

      <S.PrimaryButton href="/nova-iniciativa">
        <Plus size={20} /> Nova Iniciativa
      </S.PrimaryButton>

      <S.NavList>
        <S.NavItem href="/kanban" $active={router.pathname === '/kanban'}>
          <LayoutDashboard size={20} /> Pipeline
        </S.NavItem>
        <S.NavItem href="/dashboard" $active={router.pathname === '/dashboard'}>
          <BarChart2 size={20} /> Visão Executiva
        </S.NavItem>
        <S.NavItem href="/builder" $active={router.pathname === '/builder'}>
          <LayersPlusIcon size={20} /> Construtor (Admin)
        </S.NavItem>
        <S.NavItem href="/admin" $active={router.pathname === '/admin'}>
          <Users size={20} /> Equipes & Acessos
        </S.NavItem>
      </S.NavList>

      <S.FooterNav>
        <S.NavItem href="#">
          <HelpCircle size={20} /> Central de Ajuda
        </S.NavItem>
        <S.NavItem href="/">
          <LogOut size={20} /> Sair
        </S.NavItem>
      </S.FooterNav>
    </S.SidebarContainer>
  );
}