import { Card } from 'components/card'
import styled from 'styled-components'

export const TransactionsContainerWrapper = styled.div`
  display: grid;
  gap: 1rem;
  order: 2;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`

export const TransactionsCardContent = styled.div`
  max-height: 25rem;
  overflow-y: auto;
  display: grid;
  gap: 1rem;
`
export const TransactionsCardSkeletonContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`

export const TransactionsCardTitleContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const TransactionsCardFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TotalTransactedAmountContainer = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  gap: 0.5rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const TotalTransactedAmountCurrency = styled.div`
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

export const TotalTransactedAmountCard = styled(Card)`
  gap: 0.5rem;
`
