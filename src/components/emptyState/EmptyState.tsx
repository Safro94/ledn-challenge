import { FC } from 'react'
import { EmptyStateContainer } from './EmptyState.styles'

interface Props {
  message: string
  className?: string
}

export const EmptyState: FC<Props> = ({ message, className }) => {
  return (
    <EmptyStateContainer className={className}>
      <h3>{message}</h3>
    </EmptyStateContainer>
  )
}
