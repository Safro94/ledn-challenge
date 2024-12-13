import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: 1rem;
  color: ${({ theme }) => theme.palette.primary.main};
  transition: background-color 0.3s ease-in-out;
`

export const CardImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  align-self: center;
`

export const CardTitle = styled.h2`
  text-align: center;
`

export const CardSubtitle = styled.h4`
  text-align: center;
`
