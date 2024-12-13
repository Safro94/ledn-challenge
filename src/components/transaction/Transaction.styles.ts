import styled, { DefaultTheme } from 'styled-components'

export type TransactionStatusType = 'inProgress' | 'completed' | 'blocked'

export const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  justify-items: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.radius.medium};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.text};
  }
`

const variantStyles = (variant: TransactionStatusType) =>
  ({
    inProgress: `
        background-color: #fefba7;
        color: #f1d66e
    `,
    completed: `
        background-color: #e0f2ec;
        color: #89ccb2
    `,
    blocked: `
        background-color: #f0dde3;
        color: #d9a8b2
    `,
  }[variant])

export const TransactionStatus = styled.div<{ variant: TransactionStatusType }>(
  ({ theme, variant }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: ${theme.radius.large};
    text-transform: capitalize;

    ${variantStyles(variant)};
`
)

export const TransactionAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TransactionCurrency = styled.span`
  font-weight: bold;
`
