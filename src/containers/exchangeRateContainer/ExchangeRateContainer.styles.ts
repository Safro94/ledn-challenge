import { CardContainer } from 'components/card/Card.styles'
import styled from 'styled-components'

export const ExchangeRateCard = styled(CardContainer)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.text};
  align-self: baseline;
  order: 1;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`
