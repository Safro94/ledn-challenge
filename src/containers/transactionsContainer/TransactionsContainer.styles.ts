import { CardContainer } from 'components/card/Card.styles'
import styled from 'styled-components'

export const TransactionsContainerWrapper = styled.div`
  display: grid;
  gap: 1rem;
  order: 2;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`

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

export const TransactionsContainerFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TransactionsContainerTotalAmount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  gap: 0.5rem;
`

export const TransactionsContainerTotalAmountCurrency = styled.div`
  font-size: 1.25rem;
  font-weight: unset;
  opacity: 0.65;
  align-self: flex-end;
`

export const TransactionsContainerTotaContainer = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TotalTransactedAmountCard = styled(CardContainer)`
  gap: 0.5rem;
`

export const TransactionsContainerNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`
