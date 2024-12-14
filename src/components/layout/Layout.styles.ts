import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 5rem 1fr;
  }
`

export const LayoutContentContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr;
`

export const LayoutMainContainer = styled.main`
  padding: 1rem;
  overflow-y: auto;
  border-top-left-radius: ${({ theme }) => theme.radius.large};
  max-height: calc(100vh - 3rem);
`
