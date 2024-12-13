import styled from 'styled-components'

export const PlanetsContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`

export const PlanetsContainerTitle = styled.h1`
  margin-bottom: 1rem;
`

export const PlanetsContainerCardContent = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const PlanetsContainerPlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
`
