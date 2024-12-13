import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr;
  }
`
