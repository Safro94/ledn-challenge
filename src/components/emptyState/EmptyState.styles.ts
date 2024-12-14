import styled from 'styled-components'

export const EmptyStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.text};
  border-radius: ${({ theme }) => theme.radius.medium};
`
