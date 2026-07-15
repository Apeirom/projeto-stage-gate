import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0 4rem 0;
`

export const Header = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2rem;
    color: #1e293b;
    margin: 0 0 0.5rem 0;
    font-weight: 700;
  }
  p {
    color: #64748b;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`

export const FormSection = styled.section`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`

export const SectionTitle = styled.h3`
  font-size: 1.15rem;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #3b0764;
  }
`

export const Grid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: ${({ $cols }) => `repeat(${$cols || 2}, 1fr)`};
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Responsivo para telas menores */
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #475569;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: #1e293b;
    background: #ffffff;
    transition: all 0.2s ease;

    &::placeholder {
      color: #94a3b8;
    }
    &:hover {
      border-color: #94a3b8;
    }
    &:focus {
      border-color: #3b0764;
      box-shadow: 0 0 0 3px rgba(59, 7, 100, 0.1);
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
    line-height: 1.5;
  }

  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2rem;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    color: #334155;
    cursor: pointer;
    font-size: 0.95rem;
    margin: 0;
  }

  input[type='radio'] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    margin: 0;
    position: relative;
    cursor: pointer;
    transition: all 0.2s;

    &:checked {
      border-color: #3b0764;
      background: white;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.6rem;
        height: 0.6rem;
        background: #3b0764;
        border-radius: 50%;
      }
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid ${({ $primary }) => ($primary ? 'transparent' : '#cbd5e1')};
  background: ${({ $primary }) => ($primary ? '#3b0764' : 'white')};
  color: ${({ $primary }) => ($primary ? 'white' : '#475569')};

  &:hover {
    background: ${({ $primary }) => ($primary ? '#2e054e' : '#f8fafc')};
    border-color: ${({ $primary }) => ($primary ? 'transparent' : '#94a3b8')};
    transform: translateY(-1px);
  }
`
