import { Card } from 'components/card'
import {
  PlanetsContainerCardContent,
  PlanetsContainerPlanetInfo,
  PlanetsContainerSearchContainer,
  PlanetsContainerSearchInput,
  PlanetsContainerTitle,
  PlanetsContainerWrapper,
} from './PlanetsContainer.styles'
import { usePlanets } from './usePlanets'
import { useMemo, useState } from 'react'
import { useDebouncedValue } from '@mantine/hooks'

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
  const [searchValue, setSearchValue] = useState('')
  const [debouncedValue] = useDebouncedValue(searchValue, 200)

  const filteredPlanetsByName = useMemo(
    () =>
      data?.planets?.filter((planet) => {
        return planet.name.toLowerCase().includes(debouncedValue.toLowerCase())
      }),
    [debouncedValue, data?.planets]
  )

  //TODO: add skeleton
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <PlanetsContainerTitle>Planets</PlanetsContainerTitle>

      <PlanetsContainerSearchContainer>
        <label htmlFor='search'>Enter a planet name to search</label>

        <PlanetsContainerSearchInput
          id='search'
          type='text'
          placeholder='Search by name'
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
      </PlanetsContainerSearchContainer>

      <PlanetsContainerWrapper>
        {filteredPlanetsByName?.map((planet) => (
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
