import styled from 'styled-components'

export const Page = styled.div`
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const Header = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 1.875rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }
  p {
    color: #64748b;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  align-items: start;
`

export const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`

export const Title = styled.h3`
  font-size: 1.1rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  padding: 0.75rem;
  background: #f8fafc;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  color: #475569;
  font-weight: 500;
  border: 1px solid #e2e8f0;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  cursor: pointer;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
  &.primary {
    background: #3b0764;
    color: white;
    border: none;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
    color: #64748b;
    font-size: 0.875rem;
    padding: 1rem;
    border-bottom: 2px solid #f1f5f9;
  }
  td {
    padding: 1rem;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
  }
`

export const RoleBadge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background: #f3e8ff;
  color: #6b21a8;
  font-size: 0.75rem;
  font-weight: 600;
`