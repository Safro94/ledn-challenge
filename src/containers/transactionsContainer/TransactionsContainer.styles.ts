import styled from 'styled-components'

export const TransactionsContainerCardContent = styled.div`
  max-height: 25rem;
  overflow-y: auto;
  display: grid;
  gap: 1rem;
`
export const TransactionsContainerSkeleton = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`

export const TransactionsContainerTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
