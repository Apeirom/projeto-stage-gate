import React from 'react';
import Sidebar from '../Sidebar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
`;

const MainContent = styled.main`
  flex-grow: 1;
  height: 100vh;      /* Trava a altura exatamente no tamanho da janela */
  overflow-y: auto;   
  overflow-x: hidden;
  position: relative;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </AppContainer>
  );
}