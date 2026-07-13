import styled from 'styled-components'
import Link from 'next/link'

export const SidebarContainer = styled.aside`
  width: 260px;
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  z-index: 100;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 2rem;

  .icon {
    background: #3b0764; /* Roxo escuro do protótipo */
    color: white;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
  }
`

export const PrimaryButton = styled(Link)`
  background-color: #3b0764;
  color: white;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: background 0.2s;

  &:hover {
    background-color: #2e054e;
  }
`

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`

export const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ $active }) => ($active ? '#3b0764' : '#64748b')};
  background-color: ${({ $active }) => ($active ? '#f3e8ff' : 'transparent')};
  transition: all 0.2s;

  &:hover {
    background-color: #f8fafc;
    color: #1e293b;
  }
`

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
  margin-top: auto;
`
