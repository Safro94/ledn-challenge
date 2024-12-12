import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
`

export const LayoutContentContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr;
`

export const LayoutMainContainer = styled.main`
  padding: 1rem;
  overflow-y: auto;
  border-top-left-radius: ${({ theme }) => theme.radius.large};
`
