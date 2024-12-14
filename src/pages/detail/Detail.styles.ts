import { Button } from 'components/button'
import styled from 'styled-components'

export const DetailBackButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  &:hover {
    fill: ${({ theme }) => theme.palette.primary.text};
  }
`

export const DetailContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr;
  }
`
