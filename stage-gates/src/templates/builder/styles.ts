// src/pages/builder/styles.ts
import styled from 'styled-components'

export const Canvas = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-color: #f8fafc;
  background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  overflow-x: scroll;
  position: relative;
`

export const Header = styled.div`
  position: fixed;
  top: 70px;
  left: 20rem;
  z-index: 10;
  h1 {
    font-size: 1.875rem;
    color: #1e293b;
    margin: 0 0 0.2rem 0;
  }
  p {
    color: #64748b;
    margin: 0;
    font-weight: 500;
  }
`

export const ZoomToolbar = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  gap: 0.5rem;
  z-index: 10;
  border: 1px solid #e2e8f0;
`

export const ZoomButton = styled.button`
  background: #f1f5f9;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #475569;
  &:hover {
    background: #e2e8f0;
  }
`

export const ZoomLevel = styled.span`
  font-weight: 600;
  color: #334155;
  min-width: 3rem;
  text-align: center;
`

export const TransformWrapper = styled.div<{ $scale: number }>`
  transform: scale(${({ $scale }) => $scale});
  transform-origin: 0 50%;
  transition: transform 0.2s ease-out;
  display: flex;
  align-items: center;
  padding: 12rem 2rem 2rem 2rem;
  min-width: max-content;
  min-height: 100vh;
`

export const FlowBoard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const NodeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const AddButton = styled.button<{ $type: 'stage' | 'gate' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 2px dashed
    ${({ $type }) => ($type === 'stage' ? '#94a3b8' : '#60a5fa')};
  background: rgba(255, 255, 255, 0.8);
  color: ${({ $type }) => ($type === 'stage' ? '#475569' : '#2563eb')};
  white-space: nowrap;
`
