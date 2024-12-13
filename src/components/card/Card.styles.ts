import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: 1rem;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.text};
  }
`

export const CardImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
