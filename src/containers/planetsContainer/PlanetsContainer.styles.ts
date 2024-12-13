import styled from 'styled-components'

export const PlanetsContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`

export const PlanetsContainerTitle = styled.h1`
  margin-bottom: 1rem;
  text-align: center;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`

export const PlanetsContainerCardContent = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const PlanetsContainerPlanetInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PlanetsContainerSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`

export const PlanetsContainerSearchInput = styled.input`
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`
