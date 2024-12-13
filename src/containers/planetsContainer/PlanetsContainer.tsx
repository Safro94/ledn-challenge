import {
  PlanetsContainerTitle,
  PlanetsContainerWrapper,
} from './PlanetsContainer.styles'
import { usePlanets } from './usePlanets'

export const PlanetsContainer = () => {
  const { data, isLoading } = usePlanets()

  //TODO: add skeleton
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <PlanetsContainerTitle>Planets</PlanetsContainerTitle>

      <PlanetsContainerWrapper>
        {/* TODO: create cards */}
        {data?.planets?.map((planet) => (
          <div key={planet.id}>
            <h2>{planet.name}</h2>
            <p>{planet.diameter}</p>
          </div>
        ))}
      </PlanetsContainerWrapper>
    </div>
  )
}
