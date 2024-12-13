import { Card } from 'components/card'
import {
  PlanetsContainerCardContent,
  PlanetsContainerPlanetInfo,
  PlanetsContainerTitle,
  PlanetsContainerWrapper,
} from './PlanetsContainer.styles'
import { usePlanets } from './usePlanets'

const PlanetInfo = ({ title, data }: { title: string; data: string }) => {
  return (
    <PlanetsContainerPlanetInfo>
      <h4>{title}</h4>
      <p>{data}</p>
    </PlanetsContainerPlanetInfo>
  )
}

export const PlanetsContainer = () => {
  const { data, isLoading } = usePlanets()

  //TODO: add skeleton
  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data?.planets)

  return (
    <div>
      <PlanetsContainerTitle>Planets</PlanetsContainerTitle>

      <PlanetsContainerWrapper>
        {data?.planets?.map((planet) => (
          <Card key={planet.id} title={planet.name}>
            <PlanetsContainerCardContent>
              <PlanetInfo title='Climate' data={planet.climate} />
              <PlanetInfo title='Terrain' data={planet.terrain} />
            </PlanetsContainerCardContent>
          </Card>
        ))}
      </PlanetsContainerWrapper>
    </div>
  )
}
