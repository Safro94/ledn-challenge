import { Card } from 'components/card'
import styled from 'styled-components'

export const ExchangeRateCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.text};
  align-self: baseline;
  order: 1;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`
